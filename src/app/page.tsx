"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import ServicesMarquee from "@/components/ServicesMarquee";
import HeroSlider from "@/components/HeroSlider";
import ClientLogos from "@/components/ClientLogos";
import { BlinkingEye, TargetHit } from "@/components/AnimatedIcons";
import { services } from "@/data/services";

export default function Home() {
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        {/* Hero Section */}
        {/* Hero Section */}
        {/* Hero Section */}
        <HeroSlider />

        {/* Services Strip */}
        {/* <ServicesMarquee /> */}

        {/* Our Services */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR SERVICES</h2>
              <p className="text-gray-600">
                Experience a comprehensive range of solutions tailored for modern businesses and discerning individuals:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {services.slice(0, 4).map((service) => (
                <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg mb-3 line-clamp-2 min-h-[3.5rem]">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                      {service.description}
                    </p>
                    <Link href={`/services/${service.slug}`} className="text-brand font-semibold hover:text-brand-dark transition-colors mt-auto inline-block">
                      KNOW MORE ➔
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-lg mb-4">
                <span className="text-sm">⭐ Trusted by 100+ businesses</span>
              </div>
              <Link
                href="/services"
                className="inline-block bg-brand text-white px-8 py-3 rounded font-semibold hover:bg-brand-dark transition-colors"
              >
                EXPLORE YOUR OPTIONS ➔
              </Link>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">VALUE PROPOSITION</h2>
                <p className="text-lg font-semibold text-gray-900 mb-6">Your Strategic Partner</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 flex items-start">
                      <div className="mr-2 text-brand mt-0.5">
                        <BlinkingEye className="w-5 h-5" />
                      </div>
                      VISION
                    </h3>
                    <p className="text-gray-600 ml-6">
                      To become the most trusted and forward-thinking Chartered Accountancy firm, offering strategic solutions that fuel growth and success for every business we work with.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 flex items-start">
                      <div className="mr-2 text-brand mt-0.5">
                        <TargetHit className="w-5 h-5" />
                      </div>
                      MISSION
                    </h3>
                    <p className="text-gray-600 ml-6">
                      We empower clients with financial clarity through expert, comprehensive services in auditing, taxation, and advisory. We support businesses of all sizes on a true partner in your financial journey.
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
                  className="rounded-lg shadow-lg h-[500px] w-full object-cover"
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

        {/* Meet the Team */}
        {/* <motion.section
          ref={teamRef}
          initial={{ opacity: 0, y: 60 }}
          animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">LEADERSHIP WITH VISION</h2>
              <p className="text-gray-600">
                Think North is helmed by visionary Chartered Accountants and finance experts with over 12 years’ global advisory experience. Our founders combine deep technical knowledge with hands-on industry insight, setting high standards of integrity, client focus, and strategic innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop"
                  alt="Vardhan Shah"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-1">Vardhan Shah</h3>
                  <p className="text-gray-600 text-sm mb-2">CEO</p>
                  <p className="text-gray-500 text-xs">
                    International tax expert, IFRS specialist, and recognized for pioneering digital finance solutions.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop"
                  alt="Co-Founder"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-1">Co-Founder</h3>
                  <p className="text-gray-600 text-sm mb-2">Strategic Head</p>
                  <p className="text-gray-500 text-xs">
                    Renowned for cross-border investment structuring and compliance leadership.
                  </p>
                </div>
              </Card>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <p className="text-gray-700 text-center leading-relaxed">
                At Think North, our team brings a strategic edge to every engagement, combining technical knowledge with first-hand business expertise. From accounting to business building and operations, we approach every project with both precision and purpose, ensuring that our clients receive more than just service—they earn a trusted financial partner.
              </p>
            </div>
          </div>
        </motion.section> */}

        {/* Client Logos */}
        <ClientLogos />

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">NATIONAL AND INTERNATIONAL RESULTS</h2>
              <p className="text-gray-600">
                Our commitment to excellence reflects in the feedback we receive.<br />
                Here's what some of our clients have to say.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6">
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed italic">
                      "Think North streamlined our international expansion, ensuring seamless compliance and measurable savings."
                    </p>
                    <div className="mt-4">
                      <div className="font-bold">CFO</div>
                      <div className="text-sm text-gray-600">Indian Tech Exporter</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed italic">
                      "Their team’s expertise in audit and capital raising enabled our SME-IPO journey with confidence."
                    </p>
                    <div className="mt-4">
                      <div className="font-bold">Promoter</div>
                      <div className="text-sm text-gray-600">Manufacturing Group</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed italic">
                      "Professional, insightful, and always accessible, the Think North difference is unmatched."
                    </p>
                    <div className="mt-4">
                      <div className="font-bold">NRI Client</div>
                      <div className="text-sm text-gray-600">UK</div>
                    </div>
                  </div>
                </div>
              </Card>
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
            <h2 className="text-4xl font-bold mb-6">Thinking of Numbers?<br />Think North</h2>
            <Link
              href="/contact"
              className="inline-block bg-brand text-white px-8 py-3 rounded font-semibold hover:bg-brand-dark transition-colors"
            >
              START TODAY ➔
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}