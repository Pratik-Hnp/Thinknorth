"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ClientLogosProps {
    title?: string;
    description?: string;
}

export default function ClientLogos({
    title = "OUR CLIENTS",
    description = "Trusted by industry leaders, visionary founders, and global decision-makers"
}: ClientLogosProps) {
    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-12"
                >
                    {[
                        { src: "/logos/Blossom-logo.png", alt: "Blossom" },
                        { src: "/logos/STRAGEMS_logo.webp", alt: "Stragems" },
                        { src: "/logos/datago_technology_limited_logo.jpg", alt: "DataGo" },
                        { src: "/logos/mtc_co_logo.jpg", alt: "MTC" },
                        { src: "/logos/newmarkable_logo-Photoroom.png", alt: "Newmarkable" },
                        { src: "/logos/7425b29e79ecffb5654f526bede7bf12.w400.h400-Photoroom.png", alt: "Client 6" },
                        { src: "/logos/E5AE8FE899B9Logo-E7AB96E78988-835-scaled-Photoroom.png", alt: "Client 7" },
                        { src: "/logos/WhatsApp Image 2025-11-24 at 11.44.06 PM-Photoroom.png", alt: "Client 8" },
                        { src: "/logos/images (2).png", alt: "Client 9" },
                        { src: "/logos/images (3).png", alt: "Client 10" },
                    ].map((logo, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                            className="flex items-center justify-center p-4"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={150}
                                height={80}
                                className="object-contain h-20 w-auto drop-shadow-md"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
