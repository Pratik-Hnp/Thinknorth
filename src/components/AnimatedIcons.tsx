"use client";

import { motion } from "framer-motion";
import { Eye, Target, ArrowUpRight } from "lucide-react";

export const BlinkingEye = ({ className = "w-6 h-6" }: { className?: string }) => {
    return (
        <div className="relative flex items-center justify-center">
            <motion.div
                animate={{ scaleY: [1, 0.1, 1, 1, 1] }} // Blink: standard -> squint -> open -> hold -> hold
                transition={{
                    duration: 3,
                    times: [0, 0.05, 0.1, 0.8, 1], // Fast blink, long pause
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Eye className={className} />
            </motion.div>
        </div>
    );
};

export const TargetHit = ({ className = "w-6 h-6" }: { className?: string }) => {
    return (
        <div className="relative flex items-center justify-center">
            <Target className={className} />
            <motion.div
                className="absolute text-brand"
                initial={{ x: 10, y: -10, opacity: 0, scale: 0.5 }}
                animate={{
                    x: [10, 0, 0, 10],
                    y: [-10, 0, 0, -10],
                    opacity: [0, 1, 1, 0],
                    scale: [0.5, 0.8, 0.8, 0.5]
                }}
                transition={{
                    duration: 2,
                    times: [0, 0.2, 0.8, 1], // Fly in fast, stick, fade out
                    repeat: Infinity,
                    ease: "easeOut",
                }}
            >
                {/* Using a small arrow to simulate the "hit" */}
                <ArrowUpRight className="w-4 h-4 rotate-[225deg]" strokeWidth={3} />
            </motion.div>
        </div>
    );
};
