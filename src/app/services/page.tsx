"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

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
                  COMPREHENSIVE CA<br />SERVICES FOR<br />SUSTAINABLE GROWTH
                </h1>
                <p className="text-brand-lighter mb-8 leading-relaxed">
                  We offer expert financial and advisory services that drive business efficiency. From Accounting to strategic advisory, tax filing to business setup, we provide end-to-end solutions tailored to your unique needs.
                </p>
                <button className="bg-white text-brand px-6 py-3 rounded font-semibold hover:bg-[#f7efff] transition-colors">
                  CONNECT NOW ➔
                </button>
                {/* <div className="mt-6 flex items-center gap-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <span className="text-sm">5/5 rated by businesses</span>
                </div> */}
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
        <div className="bg-white border-y border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-700">
              <div>🎯 EXCELLENCE BOOKKEEPING & COMPLIANCE SERVICE</div>
              <div>💼 PROVIDING FINANCIAL CLARITY THRU OUR EXPERTISE</div>
              <div>📊 EXPERT TAX FILING & ADVISORY</div>
              <div>💰 AUDIT & STRATEGIC CONSULTANCY SERVICES</div>
            </div>
          </div>
        </div>

        {/* Our Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR SERVICES</h2>
              <p className="text-gray-600">
                We offer comprehensive strategic expertise tailored to help you<br />
                grow, comply, and lead in your industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
                  alt="Financial Operations"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">Financial Operations</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    We provide end-to-end financial operations support...
                  </p>
                  <button className="bg-brand text-white px-6 py-2 rounded font-semibold hover:bg-brand-dark transition-colors w-full">
                    KNOW MORE ➔
                  </button>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
                  alt="Strategic Advisory"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">Strategic Advisory</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Expert guidance for complex business challenges...
                  </p>
                  <button className="bg-brand text-white px-6 py-2 rounded font-semibold hover:bg-brand-dark transition-colors w-full">
                    KNOW MORE ➔
                  </button>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                  alt="Governance & Optimization"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">Governance & Optimization</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Ensure robust governance and optimization...
                  </p>
                  <button className="bg-brand text-white px-6 py-2 rounded font-semibold hover:bg-brand-dark transition-colors w-full">
                    KNOW MORE ➔
                  </button>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
                  alt="Audit & Compliance"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">Audit & Compliance</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Comprehensive audit and compliance services...
                  </p>
                  <button className="bg-brand text-white px-6 py-2 rounded font-semibold hover:bg-brand-dark transition-colors w-full">
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
            {/* Financial Operations */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">FINANCIAL OPERATIONS</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We provide end-to-end financial operations support that helps you stay focused on your business. Our team brings expertise in bookkeeping, accounting, MIS preparation, and more.
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
                      <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                        <li>• Outsourced Accounting & Bookkeeping: Meticulous book financial record management</li>
                        <li>• Budgeting & Forecasting: Strategic financial planning and projections</li>
                        <li>• Financial Planning & Analysis (FP&A): Insightful reports and actionable data</li>
                        <li>• Cash Flow Management: Optimized liquidity and working capital</li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
                  alt="Financial Operations"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Strategic Advisory */}
            <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-50 p-8 rounded-lg">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Strategic Advisory"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">STRATEGIC ADVISORY</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Insight, fidelity, Expert Intervention ➜</strong>
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  In an increasingly complex business environment, our strategic advisory services help you navigate growth, mergers, restructuring, and fundraising opportunities with confidence.
                </p>
                <div className="space-y-4">
                  <div
                    className="border-l-4 border-brand pl-4 cursor-pointer"
                    onClick={() => setExpandedService(expandedService === 2 ? null : 2)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-gray-900">Specialized Services:</h3>
                      {expandedService === 2 ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    {expandedService === 2 && (
                      <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                        <li>• Strategic Consulting & Business Analysis: Detailed assessments for strategy</li>
                        <li>• Financial modeling & Scenario Analysis: Projections for informed decisions</li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Governance & Optimization */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">GOVERNANCE & OPTIMIZATION</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Structure, Control & Efficiency ➜</strong>
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We help you ensure that your organization operates at its peak efficiency with water-tight internal controls. We help you weave robust governance into your operations ensuring long-term stability.
                </p>
                <div className="space-y-4">
                  <div
                    className="border-l-4 border-brand pl-4 cursor-pointer"
                    onClick={() => setExpandedService(expandedService === 3 ? null : 3)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-gray-900">Key Services:</h3>
                      {expandedService === 3 ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    {expandedService === 3 && (
                      <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                        <li>• Management Audits: In-depth review of internal functions</li>
                        <li>• System & Process Assessment: Analysis and restructure of workflows</li>
                        <li>• Internal Controls Review: Evaluate and design robust internal systems</li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Governance"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Audit & Compliance */}
            <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-50 p-8 rounded-lg">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
                  alt="Audit & Compliance"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">AUDIT & COMPLIANCE</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our regulatory services facilitate a "reliability signature" compliance with all local and national regulations, combined with a proactive approach to audit and tax consultancy.
                </p>
                <div className="space-y-4">
                  <div
                    className="border-l-4 border-brand pl-4 cursor-pointer"
                    onClick={() => setExpandedService(expandedService === 4 ? null : 4)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-gray-900">Our offerings include:</h3>
                      {expandedService === 4 ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    {expandedService === 4 && (
                      <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                        <li>• Statutory Audits: External and independent audits</li>
                        <li>• Tax Audits: Income tax audit with comprehensive analysis</li>
                        <li>• Certification & Assurance: Filing, reconciliation and expert opinion</li>
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR ESTEEMED CLIENTS</h2>
              <p className="text-gray-600">Trusted by Businesses That Trust Numbers</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center mb-8">
              {[
                "Fountainhead",
                "Nouveau",
                "Maxilk",
                "Eminent Care",
                "Venus+",
                "Terra.do",
                "HYOU",
                "Shah",
                "24/7",
                "Wealth New Realty",
                "---",
                "Lambretta"
              ].map((client, idx) => (
                <div key={idx} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                  <div className="text-center font-bold text-gray-700">{client}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/collaborations"
                className="inline-block bg-brand-dark text-white px-8 py-3 rounded font-semibold hover:bg-brand transition-colors"
              >
                EXPLORE WHAT WE DELIVERED ➔
              </Link>
            </div>
          </div>
        </section>

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
              className="inline-block bg-white text-brand-dark px-8 py-3 rounded font-semibold hover:bg-[#f7efff] transition-colors"
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
