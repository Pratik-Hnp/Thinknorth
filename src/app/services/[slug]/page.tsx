import { notFound } from "next/navigation";
import { services } from "@/data/services";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface ServicePageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default function ServicePage({ params }: ServicePageProps) {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            <Navigation />
            <main className="bg-white min-h-screen">
                {/* Hero Banner */}
                <section className="bg-brand text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 z-0"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-20"
                        style={{ backgroundImage: `url(${service.image})` }}
                    ></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-3xl">
                            <div className="mb-4">
                                <Link href="/services" className="inline-flex items-center text-brand-lighter hover:text-white transition-colors text-sm font-medium">
                                    <ChevronLeft size={16} className="mr-1" /> Back to Services
                                </Link>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                {service.title}
                            </h1>
                            <p className="text-xl text-brand-lighter max-w-2xl leading-relaxed">
                                Integrated solutions for your financial growth
                            </p>
                        </div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Content Side */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                                Overview
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-lg text-gray-900 mb-6 flex items-center">
                                    {service.offeringsTitle} <span className="ml-2">→</span>
                                </h3>
                                <div className="space-y-6">
                                    {service.offerings.map((offering, index) => (
                                        <div key={index}>
                                            {offering.title && (
                                                <strong className="block mb-2 text-gray-900 font-semibold">{offering.title}</strong>
                                            )}
                                            <ul className="space-y-3 pl-4 text-gray-600">
                                                {offering.items.map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-brand rounded-full shrink-0"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-10">
                                <Link
                                    href="/contact"
                                    className="inline-block bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    Get Expert Advice ➔
                                </Link>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="sticky top-24 space-y-8">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-brand/10 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0"></div>
                            </div>

                            <div className="bg-brand text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                                <div className="relative z-10">
                                    <p className="text-xl font-medium italic mb-4">
                                        "Our team helps you navigate complex challenges with solution-oriented expertise."
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                            <span className="font-bold">TN</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold">Think North Team</p>
                                            <p className="text-xs text-brand-lighter">Your Strategic Partners</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Decorative circle */}
                                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
