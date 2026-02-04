"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

// Helper to generate image paths
const getPath = (name: string) => `/office-photos/${encodeURIComponent(name)}`;

// New Office Photos - Sorted by number prefix (1-11)
const ALL_IMAGES = [
    { src: "2. Staff Area - 8.jpg", alt: "Staff Work Area" },
    { src: "5. Staff Area - 6.jpg", alt: "Staff Collaboration" },
    { src: "7. Cabin 2 - 1.jpg", alt: "Partner Cabin" },
    { src: "10 .Conference - 1.jpg", alt: "Conference Room Main" },
].map((item, index) => ({
    id: index + 1,
    src: getPath(item.src),
    alt: item.alt,
}));

export default function OfficeGallery() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [visibleCount, setVisibleCount] = useState(12); // Show all 11 images
    const [zoom, setZoom] = useState(1);

    const selectedImage = ALL_IMAGES.find((item) => item.id === selectedId);
    const selectedIndex = ALL_IMAGES.findIndex((item) => item.id === selectedId);

    // Prevent scrolling when lightbox is open
    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            setZoom(1); // Reset zoom
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [selectedId]);

    const handleNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setZoom(1);
        const nextIndex = (selectedIndex + 1) % ALL_IMAGES.length;
        setSelectedId(ALL_IMAGES[nextIndex].id);
    }, [selectedIndex]);

    const handlePrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setZoom(1);
        const prevIndex = (selectedIndex - 1 + ALL_IMAGES.length) % ALL_IMAGES.length;
        setSelectedId(ALL_IMAGES[prevIndex].id);
    }, [selectedIndex]);

    const handleZoomToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        setZoom(zoom === 1 ? 2 : 1);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedId) return;
            if (e.key === "Escape") setSelectedId(null);
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedId, handleNext, handlePrev]);

    return (
        <div className="w-full">
            {/* Symmetrical Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {ALL_IMAGES.slice(0, visibleCount).map((item) => (
                    <motion.div
                        key={item.id}
                        layoutId={`card-${item.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group bg-gray-200"
                        onClick={() => setSelectedId(item.id)}
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                                <ZoomIn size={24} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* View More / View Less Button */}
            {ALL_IMAGES.length > 12 && (
                <div className="text-center mt-12">
                    <button
                        onClick={() => setVisibleCount(visibleCount >= ALL_IMAGES.length ? 12 : ALL_IMAGES.length)}
                        className="bg-white border border-brand text-brand px-8 py-3 rounded font-semibold hover:bg-brand hover:text-white transition-colors"
                    >
                        {visibleCount >= ALL_IMAGES.length ? "SHOW LESS" : `VIEW ALL (${ALL_IMAGES.length} PHOTOS)`}
                    </button>
                </div>
            )}

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedId && selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
                    >
                        {/* Controls */}
                        <button
                            onClick={() => setSelectedId(null)}
                            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 rounded-full hover:bg-white/20 transition-all z-20"
                        >
                            <X size={32} />
                        </button>

                        <button
                            onClick={handlePrev}
                            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-3 text-white/70 hover:text-white bg-white/10 rounded-full hover:bg-white/20 transition-all z-20"
                        >
                            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-3 text-white/70 hover:text-white bg-white/10 rounded-full hover:bg-white/20 transition-all z-20"
                        >
                            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
                        </button>

                        {/* Image Container with Zoom */}
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="relative max-w-7xl max-h-[90vh] overflow-hidden rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div
                                animate={{ scale: zoom }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="cursor-zoom-in"
                                onClick={handleZoomToggle}
                            >
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="max-w-full max-h-[85vh] object-contain"
                                />
                            </motion.div>

                            {/* Caption & Counter */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-sm flex items-center gap-4 pointer-events-none whitespace-nowrap">
                                <span>{selectedIndex + 1} / {ALL_IMAGES.length}</span>
                                <span className="w-px h-4 bg-white/30" />
                                <span>{selectedImage.alt}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
