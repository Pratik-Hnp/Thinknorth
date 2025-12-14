import { Suspense } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CareersForm from "@/components/CareersForm";
import ClientLogos from "@/components/ClientLogos";

export default function Careers() {
    return (
        <>
            <Navigation />
            <main className="bg-gray-50 min-h-screen">
                {/* Hero Section */}
                <section className="bg-brand text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/logos/final%201/Staff%20Area%20-%2011.jpg')] bg-cover bg-center opacity-10"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Build Your Future With Us</h1>
                        <p className="text-xl text-brand-lighter max-w-2xl mx-auto leading-relaxed">
                            We are always on the lookout for talented individuals who are passionate about finance and innovation. Join a team where your expertise is valued.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* Left Side: Info & Values */}
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Think North?</h2>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl shrink-0">
                                                🚀
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-lg">Growth Opportunities</h3>
                                                <p className="text-gray-600">Continuous learning and rapid career advancement for high performers.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl shrink-0">
                                                💡
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-lg">Innovation First</h3>
                                                <p className="text-gray-600">Work with modern tools and methodologies in the finance sector.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl shrink-0">
                                                🤝
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-lg">Collaborative Culture</h3>
                                                <p className="text-gray-600">A supportive environment where every voice matters.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-gray-900 mb-4">Current Openings</h3>
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            Chartered Accountants (2-4 Years Exp)
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            Article Assistants
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            Senior Audit Manager
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right Side: Application Form */}
                            <div>
                                <CareersForm />
                            </div>
                        </div>
                    </div>
                </section>

                <ClientLogos title="JOIN OUR SUCCESS STORY" description="Work with top-tier clients and industry leaders" />
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
