"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import ClientLogos from "@/components/ClientLogos";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import ServicesMarquee from "@/components/ServicesMarquee";

export default function ServicesClient() {
    const [expandedService, setExpandedService] = useState<number | null>(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        const id = searchParams.get("id");
        if (id) {
            const serviceId = parseInt(id);
            if (!isNaN(serviceId)) {
                setExpandedService(serviceId);
                // Add a small delay to ensure DOM is ready
                setTimeout(() => {
                    const element = document.getElementById(`service-${serviceId}`);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                }, 100);
            }
        }
    }, [searchParams]);

    return (
        <>
            <Navigation />
            <main>
                {/* Hero Section */}
                <section className="gradient-blue text-white py-20 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="text-sm mb-4">Think North Services LLP.</div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                    Strategic CA Solutions Designed for Long-Term Financial Confidence
                                </h1>
                                <p className="text-brand-lighter mb-8 leading-relaxed">
                                    We blend precision, insight, and proactive financial intelligence to deliver bookkeeping, advisory, audit, and compliance solutions tailored for the fast-evolving needs of startups, SMEs, corporates, and high-growth enterprises.
                                </p>
                                <button className="bg-white text-brand px-6 py-3 rounded font-semibold hover:bg-[#f7efff] transition-colors">
                                    CONNECT NOW ➔
                                </button>
                            </div>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                                    alt="Business meeting"
                                    className="rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Strip */}
                <ServicesMarquee />

                {/* Our Services Grid */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR EXPERTISE</h2>
                            <div className="text-gray-600 space-y-4">
                                <p>
                                    At Think North Services LLP, we provide integrated financial, strategic, and compliance solutions that help businesses scale smarter, stay compliant, and make confident decisions.
                                </p>
                                <p>
                                    Designed for modern enterprises, our offerings prioritize accuracy, agility, governance, and long-term business value
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                                <img
                                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
                                    alt="Global Financial Services"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="font-bold text-lg mb-3">Global Financial & Compliance Services</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        High-level tax planning and compliance for corporates & HNIs...
                                    </p>
                                    <button onClick={() => {
                                        setExpandedService(1);
                                        document.getElementById('service-1')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }} className="bg-brand text-white px-6 py-2 rounded font-semibold hover:bg-brand-dark transition-colors w-full">
                                        KNOW MORE ➔
                                    </button>
                                </div>
                            </Card>

                            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                                <img
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop"
                                    alt="Finance & Accounting"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="font-bold text-lg mb-3">Finance & Accounting Solutions</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Achieve financial clarity with streamlined accounting systems...
                                    </p>
                                    <button onClick={() => {
                                        setExpandedService(2);
                                        document.getElementById('service-2')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }} className="bg-brand text-white px-6 py-2 rounded font-semibold hover:bg-brand-dark transition-colors w-full">
                                        KNOW MORE ➔
                                    </button>
                                </div>
                            </Card>

                            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                                    alt="Fundraising & Capital"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="font-bold text-lg mb-3">Fundraising & Capital Advisory</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Strengthen your capital strategy with structured financial storytelling...
                                    </p>
                                    <button onClick={() => {
                                        setExpandedService(3);
                                        document.getElementById('service-3')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }} className="bg-brand text-white px-6 py-2 rounded font-semibold hover:bg-brand-dark transition-colors w-full">
                                        KNOW MORE ➔
                                    </button>
                                </div>
                            </Card>

                            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                                <img
                                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
                                    alt="Audit & Due Diligence"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="font-bold text-lg mb-3">Internal Audit & Due Diligence</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Protect your business with robust risk controls and assessments...
                                    </p>
                                    <button onClick={() => {
                                        setExpandedService(4);
                                        document.getElementById('service-4')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }} className="bg-brand text-white px-6 py-2 rounded font-semibold hover:bg-brand-dark transition-colors w-full">
                                        KNOW MORE ➔
                                    </button>
                                </div>
                            </Card>
                        </div>

                        <div className="text-center mt-12">
                            <div className="inline-flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-lg">
                                <span className="text-sm">⭐ Trusted by 100+ businesses</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Services */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                        {/* Service 1: Global Financial & Compliance Services */}
                        <div id="service-1" className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">GLOBAL FINANCIAL & COMPLIANCE SERVICES</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    We deliver high-level tax planning, wealth structuring, and multinational compliance support for corporate groups, international businesses, and high-net-worth individuals.
                                </p>
                                <div className="space-y-4">
                                    <div
                                        className="border-l-4 border-brand pl-4 cursor-pointer"
                                        onClick={() => setExpandedService(expandedService === 1 ? null : 1)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-bold text-gray-900">Our offerings include ➜</h3>
                                            {expandedService === 1 ? <ChevronUp /> : <ChevronDown />}
                                        </div>
                                        {expandedService === 1 && (
                                            <div className="mt-4 space-y-4 text-gray-600 text-sm">
                                                <div>
                                                    <strong className="block mb-2 text-gray-900">Solutions for High-Net-Worth Individuals (HNIs)</strong>
                                                    <ul className="space-y-1 pl-4 list-disc">
                                                        <li>Holistic tax optimization and wealth planning</li>
                                                        <li>Cross-border investment compliance</li>
                                                        <li>Succession structuring and asset protection strategies</li>
                                                        <li>Multi-jurisdiction advisory for global operations</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <strong className="block mb-2 text-gray-900">Solutions for Corporates</strong>
                                                    <ul className="space-y-1 pl-4 list-disc">
                                                        <li>International tax structuring</li>
                                                        <li>Entity setup, restructuring & global expansion support</li>
                                                        <li>Cross-border transaction advisory</li>
                                                        <li>Corporate governance & regulatory compliance</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <img
                                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
                                    alt="Global Financial Services"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Service 2: Finance & Accounting Solutions */}
                        <div id="service-2" className="grid md:grid-cols-2 gap-12 items-center bg-gray-50 p-8 rounded-lg">
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
                                    alt="Finance & Accounting"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">FINANCE & ACCOUNTING SOLUTIONS</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Achieve financial clarity, improved controls, and real-time insights with streamlined accounting systems and expert financial management.
                                </p>
                                <div className="space-y-4">
                                    <div
                                        className="border-l-4 border-brand pl-4 cursor-pointer"
                                        onClick={() => setExpandedService(expandedService === 2 ? null : 2)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-bold text-gray-900">Our offerings include ➜</h3>
                                            {expandedService === 2 ? <ChevronUp /> : <ChevronDown />}
                                        </div>
                                        {expandedService === 2 && (
                                            <ul className="mt-4 space-y-2 text-gray-600 text-sm list-disc pl-4">
                                                <li>Accounting system setup & monthly bookkeeping</li>
                                                <li>MIS reporting, dashboards & decision-ready insights</li>
                                                <li>Working capital tracking, fund-flow analysis & ratio assessment</li>
                                                <li>ERP transition support & modernization of legacy systems</li>
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service 3: Fundraising, Capital Advisory & Investor Documentation */}
                        <div id="service-3" className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">FUNDRAISING, CAPITAL ADVISORY & INVESTOR DOCUMENTATION</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Strengthen your capital strategy with structured financial storytelling and investor-ready documentation. From early-stage ventures to established businesses, we support every stage of the funding journey.
                                </p>
                                <div className="space-y-4">
                                    <div
                                        className="border-l-4 border-brand pl-4 cursor-pointer"
                                        onClick={() => setExpandedService(expandedService === 3 ? null : 3)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-bold text-gray-900">Our expertise covers ➜</h3>
                                            {expandedService === 3 ? <ChevronUp /> : <ChevronDown />}
                                        </div>
                                        {expandedService === 3 && (
                                            <ul className="mt-4 space-y-2 text-gray-600 text-sm list-disc pl-4">
                                                <li>Fundraising strategy & capital structuring</li>
                                                <li>Investor pitch decks & board-level financial narratives</li>
                                                <li>Financial models, projections & valuation reports</li>
                                                <li>CMA data, projections & lender-ready submissions</li>
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                                    alt="Fundraising & Capital"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Service 4: Internal Audit, Due Diligence & Litigation Support */}
                        <div id="service-4" className="grid md:grid-cols-2 gap-12 items-center bg-gray-50 p-8 rounded-lg">
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
                                    alt="Audit & Due Diligence"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">INTERNAL AUDIT, DUE DILIGENCE & LITIGATION SUPPORT</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Protect your business with robust risk controls, deep-dive assessments, and regulatory compliance frameworks.
                                </p>
                                <div className="space-y-4">
                                    <div
                                        className="border-l-4 border-brand pl-4 cursor-pointer"
                                        onClick={() => setExpandedService(expandedService === 4 ? null : 4)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-bold text-gray-900">Our solutions include ➜</h3>
                                            {expandedService === 4 ? <ChevronUp /> : <ChevronDown />}
                                        </div>
                                        {expandedService === 4 && (
                                            <ul className="mt-4 space-y-2 text-gray-600 text-sm list-disc pl-4">
                                                <li>Internal audits for governance & operational efficiency</li>
                                                <li>Financial & legal due diligence for mergers, acquisitions & investments</li>
                                                <li>Litigation support, compliance management & regulatory representation</li>
                                                <li>Fraud detection, control reviews & process improvements</li>
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Value Proposition */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">VALUE PROPOSITION</h2>
                                <p className="text-lg font-semibold text-gray-900 mb-6">Your Strategic Partner</p>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2 flex items-start">
                                            <span className="text-brand mr-2">➜</span>
                                            VISION
                                        </h3>
                                        <p className="text-gray-600 ml-6">
                                            To become the most trusted and forward-thinking Chartered Accountancy firm, offering strategic solutions that fuel growth and success for every business we work with.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2 flex items-start">
                                            <span className="text-brand mr-2">➜</span>
                                            MISSION
                                        </h3>
                                        <p className="text-gray-600 ml-6">
                                            We empower clients with financial clarity through expert, comprehensive services in auditing, taxation, and advisory.
                                        </p>
                                    </div>
                                </div>

                                <button className="mt-8 bg-brand text-white px-6 py-3 rounded font-semibold hover:bg-brand-dark transition-colors">
                                    KNOW MORE ➔
                                </button>
                            </div>

                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
                                    alt="Business presentation"
                                    className="rounded-lg shadow-lg"
                                />
                                <div className="absolute bottom-6 right-6 bg-brand-dark text-white p-6 rounded-lg shadow-xl">
                                    <div className="text-4xl font-bold mb-2">20+</div>
                                    <div className="text-sm">Happy Accountants</div>
                                    <div className="mt-4 text-4xl font-bold mb-2">15</div>
                                    <div className="text-sm">Years of experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Client Logos */}
                <ClientLogos title="OUR ESTEEMED CLIENTS" description="Trusted by Businesses That Trust Numbers" />

                {/* CTA Section */}
                <section className="relative py-20">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=600&fit=crop')",
                        }}
                    >
                        <div className="absolute inset-0 bg-[rgba(75,39,100,0.8)]"></div>
                    </div>
                    <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
                        <h2 className="text-4xl font-bold mb-6">BIG OR SMALL,<br />FINANCIAL GOALS DESERVE THE RIGHT PARTNER</h2>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-brand px-6 py-3 rounded font-semibold hover:bg-[#f7efff] transition-colors"
                        >
                            START TODAY ➔
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
