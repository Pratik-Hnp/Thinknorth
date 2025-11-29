"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
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
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    <svg
                        width="120"
                        height="120"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-32 h-32 md:w-40 md:h-40"
                    >
                        {/* Left Vertical and Diagonal (Black) */}
                        <motion.path
                            d="M25 75 L25 25 L75 75"
                            stroke="#1f1d29"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0, opacity: 1 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                pathLength: { duration: 1.5, ease: "easeInOut" },
                            }}
                        />

                        {/* Right Vertical (Purple) with Arrow Head */}
                        <motion.g
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ y: -100, opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }} // Fly North on exit
                        >
                            {/* The Vertical Line */}
                            <motion.path
                                d="M75 75 L75 25"
                                stroke="#931ee2"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{
                                    pathLength: { delay: 1.5, duration: 0.5, ease: "easeInOut" } // Draw after black part
                                }}
                            />

                            {/* The Arrow Head */}
                            <motion.path
                                d="M60 40 L75 25 L90 40"
                                stroke="#931ee2"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{
                                    delay: 2.0, // Appear after vertical line
                                    duration: 0.3
                                }}
                            />
                        </motion.g>
                    </svg>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
