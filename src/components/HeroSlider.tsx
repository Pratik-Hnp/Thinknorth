"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const slides = [
    {
        id: 0,
        title: "NAVIGATING FINANCE WITH NORTHERN PRECISION",
        subtitle: "Your compass to financial clarity and sustainable growth.",
        image: "/images/banner/homebanner 1. Financial Navigation.png",
        link: "/services/finance-accounting-solutions",
        boxTitle: "Financial Navigation",
    },
    {
        id: 1,
        title: "GLOBAL EXPANSION & COMPLIANCE",
        subtitle: "Seamless cross-border solutions for ambitious enterprises.",
        image: "/images/banner/homebanner 2. Global Expansion.png",
        link: "/services/global-financial-compliance",
        boxTitle: "Global Expansion",
    },
    {
        id: 2,
        title: "AUDIT & DUE DILIGENCE",
        subtitle: "Robust governance and deep-dive insights to protect value.",
        image: "/images/banner/homebanner 3. Audit and Inte...png",
        link: "/services/audit-due-diligence",
        boxTitle: "Audit & Diligence",
    },
    {
        id: 3,
        title: "STRATEGIC CAPITAL ADVISORY",
        subtitle: "Fundraising support and capital strategy for every stage.",
        image: "/images/banner/homebanner 4. Cap. Adv.png",
        link: "/services/fundraising-capital-advisory",
        boxTitle: "Capital Advisory",
    },
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, SLIDE_DURATION);

        return () => clearInterval(timer);
    }, [currentIndex]); // Restart timer on index change (manual or auto)

    const currentSlide = slides[currentIndex];

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-gray-900 text-white">
            {/* Background Images */}
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide.id}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/50 z-10" />
                        <img
                            src={currentSlide.image}
                            alt={currentSlide.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Main Content */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-48 sm:pb-32 pt-24 sm:pt-0">
                <motion.div
                    key={`content-${currentIndex}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                        {currentSlide.title}
                    </h1>
                    <p className="text-base sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 font-light">
                        {currentSlide.subtitle}
                    </p>
                    <Link
                        href={currentSlide.link}
                        className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-white hover:text-brand transition-all duration-300"
                    >
                        DISCOVER MORE <ChevronRight size={20} />
                    </Link>
                </motion.div>
            </div>

            {/* Bottom Navigation Boxes */}
            <div className="absolute bottom-0 left-0 w-full z-30 border-t border-white/10 bg-black/20 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4">
                        {slides.map((slide, index) => {
                            const isActive = index === currentIndex;
                            return (
                                <button
                                    key={slide.id}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`relative h-16 sm:h-24 md:h-32 text-left px-3 sm:px-6 py-2 sm:py-4 transition-colors duration-300 group ${isActive ? "bg-white/10" : "hover:bg-white/5"
                                        }`}
                                >
                                    {/* Progress Bar for Active Slide */}
                                    {isActive && (
                                        <motion.div
                                            className="absolute top-0 left-0 h-[2px] bg-white w-full"
                                            initial={{ scaleX: 0, transformOrigin: "0%" }}
                                            animate={{ scaleX: 1, transformOrigin: "0%" }}
                                            transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                                        />
                                    )}

                                    {/* Static Top Border for inactive slides */}
                                    {!isActive && (
                                        <div className="absolute top-0 left-0 h-[1px] bg-white/30 w-full group-hover:bg-white/60 transition-colors" />
                                    )}

                                    <div className="flex flex-col justify-between h-full">
                                        <span className={`text-xs sm:text-sm font-medium tracking-wider mb-1 sm:mb-2 ${isActive ? "text-brand-lighter" : "text-gray-400"}`}>
                                            0{index + 1}
                                        </span>
                                        <span className={`text-xs sm:text-lg md:text-xl font-bold leading-tight ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                                            {slide.boxTitle}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
