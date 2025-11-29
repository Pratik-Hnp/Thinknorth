"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";

export default function About() {
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
                  YOUR GROWTH, OUR<br />EXPERTISE
                </h1>
                <p className="text-lg font-semibold mb-4">INTEGRITY · INSIGHT · IMPACT</p>
                <p className="text-brand-lighter mb-8 leading-relaxed">
                  At Think North Services LLP., we go beyond numbers to provide clients with data-driven insights and forward-thinking solutions that help them grow.
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
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop"
                  alt="Team meeting"
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
              <div>🎯 EXCELLENCE ENCOMPASSING COMPLIANCE SUPPORT</div>
              <div>💼 MEET OUR TEAM & EXPERTISE</div>
              <div>📊 ENGAGING AUDIT & ASSURANCE SERVICES</div>
              <div>💰 OTHERS</div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">ABOUT US</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Established in 2009 to provide complete Financial Intelligence, <strong>Think North Services LLP.</strong> is a Full-service Chartered Accountancy firm offering specialized advisory and accounting services. With a team of highly qualified professionals bringing years, diligence, and dedication, we help clients navigate the more, financial, complex, and financial decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-brand mr-3">➜</span>
                  VISION
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the most trusted and forward-thinking Chartered Accountancy firm, offering strategic solutions that fuel growth and success for every business we work with.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-brand mr-3">➜</span>
                  MISSION
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We empower clients with financial clarity through expert, comprehensive services in auditing, taxation, and advisory. We support businesses of all sizes on a true partner in your financial journey.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">MEET THE TEAM</h2>
              <p className="text-gray-600">Meet the people behind your financial clarity.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop"
                  alt="CA. Krunal Bhagat"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-1">CA. KRUNAL BHAGAT</h3>
                  <p className="text-gray-600 text-sm">Principal</p>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop"
                  alt="Bhavesh Shah"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-1">BHAVESH SHAH</h3>
                  <p className="text-gray-600 text-sm">Partner</p>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
                  alt="CA. Shivani Mehta"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-1">CA. SHIVANI MEHTA</h3>
                  <p className="text-gray-600 text-sm">Chartered Accountant / Audit & Advisory</p>
                </div>
              </Card>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 text-center leading-relaxed">
                At Think North Services LLP., our team brings a strategic edge to every engagement, combining technical knowledge with first-hand business expertise. From accounting to business building and operations, we approach every project with both precision and purpose, ensuring that our clients receive more than just service—they earn a trusted financial partner.
              </p>
            </div>
          </div>
        </section>

        {/* Office Gallery */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">OFFICE SNAPSHOT GALLERY</h2>
              <p className="text-gray-600">
                Take a look around our workspace—<br />
                Where Numbers Meet Precision. Our Thriving Environment.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=400&fit=crop"
                alt="Office 1"
                className="rounded-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=400&fit=crop"
                alt="Office 2"
                className="rounded-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=400&h=400&fit=crop"
                alt="Office 3"
                className="rounded-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop"
                alt="Office 4"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>

            <div className="text-center mt-8">
              <button className="bg-brand text-white px-8 py-3 rounded font-semibold hover:bg-brand-dark transition-colors">
                VISIT OUR OFFICE ➔
              </button>
            </div>
          </div>
        </section>

        {/* Our Services Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR SERVICES</h2>
              <p className="text-gray-600">
                We offer comprehensive strategic expertise tailored to help you<br />
                grow, comply, and lead in your industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Services"
                className="rounded-lg shadow-lg"
              />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 px-4 py-2 rounded font-semibold whitespace-nowrap">
                    ⭐ Trusted by 100+ businesses
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">Financial Operations</h3>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">Strategic Advisory</h3>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">Governance & Optimization</h3>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">Audit & Compliance</h3>
                  </div>
                </div>
                <Link
                  href="/services"
                  className="inline-block bg-brand text-white px-8 py-3 rounded font-semibold hover:bg-brand transition-colors"
                >
                  EXPLORE YOUR OPTIONS ➔
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR ESTEEMED CLIENTS</h2>
              <p className="text-gray-600">
                We are proud to have partnered with diverse<br />
                businesses that rely on ThinkNorth Services LLP<br />
                as their trusted financial partner.
              </p>
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
                className="inline-block bg-brand text-white px-8 py-3 rounded font-semibold hover:bg-brand-dark transition-colors"
              >
                EXPLORE WHAT WE DELIVERED ➔
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">VOICES OF TRUST & RESULTS</h2>
              <p className="text-gray-600">
                Our commitment to excellence reflects in the feedback we receive.<br />
                Here's what some of our clients have to say.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <div className="flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=200&fit=crop"
                    alt="Client building"
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      ThinkNorth Services LLP has been our trusted accounting & tax advisory company for the last 2 years. We've been highly impressed by their financial management.
                    </p>
                    <div className="font-bold">Mr. James John</div>
                    <div className="text-sm text-gray-600">CEO, Short Amusement Ltd</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop"
                    alt="Client building"
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      ThinkNorth Services LLP has been our go-to partner for CA services specializing in accounting, tax filing and compliance.
                    </p>
                    <div className="font-bold">CA Adesh Mehta</div>
                    <div className="text-sm text-gray-600">Group CFO, K. Ghelawala Group</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">WORDS THAT COUNT MORE THAN NUMBERS</h3>
              <p className="text-gray-600">These are just a few of the voices behind the numbers.</p>
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
