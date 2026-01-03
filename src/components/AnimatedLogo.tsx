"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AnimatedLogo() {
    return (
        <Link href="/" className="flex items-center" aria-label="ThinkNorth">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="relative"
            >
                <Image
                    src="/logos/thinknorth final logo.png"
                    alt="ThinkNorth"
                    width={185}
                    height={45}
                    priority
                    className="h-10 w-auto"
                />
            </motion.div>
        </Link>
    );
}
