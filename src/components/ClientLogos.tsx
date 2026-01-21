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
    const clientLogos = [
        { src: "/images/clients/1.png", alt: "Client 1" },
        { src: "/images/clients/2.png", alt: "Client 2" },
        { src: "/images/clients/3.png", alt: "Client 3" },
        { src: "/images/clients/4.png", alt: "Client 4" },
        { src: "/images/clients/5.png", alt: "Client 5" },
        { src: "/images/clients/6.png", alt: "Client 6" },
        { src: "/images/clients/7.png", alt: "Client 7" },
        { src: "/images/clients/8.png", alt: "Client 8" },
        { src: "/images/clients/9.png", alt: "Client 9" },
        { src: "/images/clients/10.png", alt: "Client 10" },
        { src: "/images/clients/11.png", alt: "Client 11" },
        { src: "/images/clients/12.png", alt: "Client 12" },
    ];

    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                </div>

                <div className="flex flex-col gap-8 mb-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        className="flex flex-wrap justify-center gap-8 items-center"
                    >
                        {clientLogos.slice(0, 6).map((logo, idx) => (
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

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                            }
                        }}
                        className="flex flex-wrap justify-center gap-8 items-center"
                    >
                        {clientLogos.slice(6, 12).map((logo, idx) => (
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
            </div>
        </section>
    );
}

