"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import ClientLogos from "@/components/ClientLogos";
import ServicesMarquee from "@/components/ServicesMarquee";
import OfficeGallery from "@/components/OfficeGallery";
import Testimonials from "@/components/Testimonials";
import { BlinkingEye, TargetHit } from "@/components/AnimatedIcons";

export default function About() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="gradient-blue text-white pt-32 pb-12 sm:pb-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="text-sm mb-4">Think North</div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  YOUR GROWTH, OUR<br />EXPERTISE
                </h1>
                <p className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">INTEGRITY · INSIGHT · IMPACT</p>
                <p className="text-brand-lighter mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  At Think North, we go beyond numbers to provide clients with data-driven insights and forward-thinking solutions that help them grow.
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
              <div className="relative mt-8 md:mt-0">
                <img
                  src="/images/services/services 2. About us.png"
                  alt="About Us"
                  className="rounded-lg shadow-2xl h-[250px] sm:h-[350px] md:h-[400px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Strip */}
        <ServicesMarquee />

        {/* About Us Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="rounded-lg shadow-lg h-[300px] sm:h-[400px] md:h-[500px] w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">ABOUT US</h2>
                <div className="text-gray-600 leading-relaxed mb-6 space-y-4">
                  <p>
                    Think North Services LLP is a forward-thinking financial consultancy firm delivering end-to-end solutions in finance, accounting, taxation, and strategic advisory. With a focus on precision, innovation, and global-quality standards, we help businesses navigate evolving financial landscapes with clarity and confidence.
                  </p>
                  <p>
                    Built on deep industry expertise, modern analytical tools, and a commitment to proactive problem-solving, we partner with startups, SMEs, corporates, and high-net-worth individuals to drive scalable growth. Our approach goes beyond traditional consulting—every engagement is structured to strengthen financial discipline, enhance compliance, and unlock long-term value.
                  </p>
                  <p>
                    From optimizing financial operations to crafting board-ready insights, Think North Services LLP is dedicated to being your trusted strategic finance partner. We ensure that every decision is backed by data, foresight, and a strong understanding of your unique business ecosystem.
                  </p>
                </div>
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
                  <div className="mr-3 text-brand">
                    <BlinkingEye className="w-6 h-6" />
                  </div>
                  VISION
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the trusted global partner for corporates, high-net-worth individuals, and professionals, empowering them with innovative financial strategies and precision-driven advisory for sustainable growth and long-term success.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="mr-3 text-brand">
                    <TargetHit className="w-6 h-6" />
                  </div>
                  MISSION
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  At Think North Services, our mission is to provide expert financial consultancy, strategic insights, and compliance solutions to businesses and individuals worldwide. We aim to simplify complex financial landscapes, ensuring value-driven outcomes through precision, integrity, and a client-focused approach.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        {/* <section className="py-20 bg-white">
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
                At Think North, our team brings a strategic edge to every engagement, combining technical knowledge with first-hand business expertise. From accounting to business building and operations, we approach every project with both precision and purpose, ensuring that our clients receive more than just service—they earn a trusted financial partner.
              </p>
            </div>
          </div>
        </section> */}

        {/* Office Gallery */}
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">INSIDE THINK NORTH SERVICES LLP</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  Step into a workspace where structure meets strategy and every corner reflects our commitment to excellence. Our office environment is designed to inspire focus, collaboration, and meaningful conversations. The curated wall art, warm aesthetics, and organized layouts showcase the thinking culture that drives our financial advisory expertise.
                </p>
                <p>
                  These snapshots offer a glimpse into our everyday setting—where ideas evolve, insights are crafted, and decisions that shape businesses are made. It’s more than an office; it’s the space where numbers turn into narratives and plans turn into performance.
                </p>
              </div>
            </div>

            <OfficeGallery />
            {/* <div className="text-center mt-8">
              <button className="bg-brand text-white px-8 py-3 rounded font-semibold hover:bg-brand-dark transition-colors">
                VISIT OUR OFFICE ➔
              </button>
            </div> */}
          </div>
        </section>

        {/* Our Services Preview */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">OUR SERVICES</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                At Think North , we deliver comprehensive financial and strategic solutions designed to help you grow, comply, and lead with confidence. Our services are crafted for modern businesses that demand accuracy, agility, and accountability in every financial move.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center mb-8 sm:mb-12">
              <img
                src="/images/services/Our services last link image.png"
                alt="Services"
                className="rounded-lg shadow-lg h-[250px] sm:h-[350px] md:h-[400px] w-full object-cover"
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
        <ClientLogos
          title="OUR ESTEEMED CLIENTS"
          description="We are proud to have partnered with diverse businesses that rely on ThinkNorth as their trusted financial partner."
        />

        {/* Testimonials */}
        <Testimonials
          title="VOICES OF TRUST & RESULTS"
          subtitle="Our commitment to excellence reflects in the feedback we receive. Here's what our clients have to say."
        />

        {/* CTA Section */}
        <section className="relative py-12 sm:py-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=600&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-[rgba(75,39,100,0.8)]"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">BIG OR SMALL,<br />FINANCIAL GOALS DESERVE THE RIGHT PARTNER</h2>
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
