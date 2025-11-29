"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CompassPreloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3500); // Duration to allow full animation

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, delay: 0.2 } }}
                >
                    <div className="relative w-40 h-40 flex items-center justify-center">
                        {/* Compass Ring */}
                        <motion.div
                            className="absolute inset-0 border-4 border-gray-200 rounded-full"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.5 } }}
                        />

                        {/* Cardinal Directions - Static */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center font-bold text-gray-400 text-xs"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            exit={{ opacity: 0 }}
                        >
                            <span className="absolute top-2">N</span>
                            <span className="absolute bottom-2">S</span>
                            <span className="absolute right-3">E</span>
                            <span className="absolute left-3">W</span>
                        </motion.div>

                        {/* The Needle Container - Spins */}
                        <motion.div
                            className="w-full h-full flex items-center justify-center"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: [0, 360, 720, 1080, 1440, 1440] }} // Spin multiple times then stop
                            transition={{
                                duration: 3,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.4, 0.6, 0.8, 1], // Control pacing
                            }}
                        >
                            <motion.div
                                className="relative w-full h-full flex items-center justify-center"
                                exit={{
                                    y: -1000, // Fly North!
                                    transition: { duration: 0.8, ease: "easeIn" },
                                }}
                            >
                                {/* The Split Arrow (Rocket Shape) */}
                                <svg
                                    width="80"
                                    height="80"
                                    viewBox="0 0 100 100"
                                    className="transform -translate-y-1" // Slight adjustment to center visually
                                >
                                    {/* Left Half - Gray */}
                                    <path d="M50 10 L20 90 L50 75 Z" fill="#4b5563" />

                                    {/* Right Half - Purple */}
                                    <path d="M50 10 L80 90 L50 75 Z" fill="#931ee2" />
                                </svg>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
