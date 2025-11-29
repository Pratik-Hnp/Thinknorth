"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const services = [
    "Global Tax Structuring & Compliance Advisory",
    "Seamless Fundraising & Capital Solutions",
    "Advanced Internal Audits for Risk-Free Growth",
    "Institutional-Grade Financial Reporting",
    "Dedicated NRI & International Investment Support",
];

export default function ServicesMarquee() {
    return (
        <div className="bg-white border-y border-gray-200 py-4 overflow-hidden flex">
            <motion.div
                className="flex whitespace-nowrap gap-8 text-sm font-semibold text-gray-700"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 40, // Adjust speed here
                }}
            >
                {/* Duplicate list for seamless looping */}
                {[...services, ...services, ...services].map((service, index) => (
                    <div key={index} className="flex items-center gap-8">
                        <span>{service}</span>
                        <Sparkles size={16} className="text-brand" />
                    </div>
                ))}
            </motion.div>
            <motion.div
                className="flex whitespace-nowrap gap-8 text-sm font-semibold text-gray-700 ml-8"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 40, // Adjust speed here
                }}
            >
                {[...services, ...services, ...services].map((service, index) => (
                    <div key={`dup-${index}`} className="flex items-center gap-8">
                        <span>{service}</span>
                        <Sparkles size={16} className="text-brand" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
