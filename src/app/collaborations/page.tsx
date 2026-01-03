"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import ClientLogos from "@/components/ClientLogos";
import ServicesMarquee from "@/components/ServicesMarquee";

export default function Collaborations() {
  const clients = [
    {
      name: "FOUNTAINHEAD SCHOOL",
      type: "School",
      description: "Cutting-Edge Financial planning - A support for elevated growth of a modern-day institution dedicated to not just shaping education but also ensuring financial robustness. Our collaborative efforts include streamlined audit through specialized student fee management, robust accounting record during operational activities, for one of Gujarat's top schools.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop"
    },
    {
      name: "MAHENDRA BROTHERS (NOUVEAU GROUP)",
      type: "Restaurant Group",
      description: "Long-Term Accounting Partnership - A multi-location restaurant group that has entrusted us with its comprehensive financial operations. Our work encompasses everything from day-to-day bookkeeping, to strategic advisory, helping them efficiently manage their growth and maintain strong operational and financial control across several sites.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
    },
    {
      name: "K. GIRDHARLLAL GROUP",
      type: "Logistics & Commerce",
      description: "K. Girdharllal is a logistics-focused and commercial services supporting firm. Assessment and strategic consultancy services supporting the group in optimal growth. We have consistently provided assessment and strategic consulting services to accelerate sustainable expansion of operations, in the ever-evolving business landscape.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
    },
    {
      name: "SHOOT AMUSEMENT LTD.",
      type: "Entertainment & Recreation",
      description: "Creative Financial Solutions - The company had strategic planning and creative financing at the forefront. Helping with strategic investments, growth-stage financing, and tailored investment offerings, we leverage expert business analysis, fund accounting, and streamlined fund administration ensuring compliance and strategic potential and operational growth.",
      image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&h=600&fit=crop"
    },
    {
      name: "HYOU FINE JEWELLERY GOENKA JEWELLERS",
      type: "Jewellery Retail",
      description: "Our clients supports this elegant jewellery house with bespoke and high-touch service. For both, with-and-gold-work, we have integrated financial management with accounting procedures, advanced pricing strategies, and comprehensive inventory oversight. We also offer tax optimization advice, together ensuring that their reputation for luxury and trust remains unmatched.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop"
    },
    {
      name: "EXPONENT CASH FLOW PVT. LTD.",
      type: "Financial Services",
      description: "Strategic Accounting Consultancy - We support Exponent expertise in areas like accounting for complex portfolios, we provided guidance on restructuring processes and strategic framework aimed at operational efficiency. Our partnership ensures their expertise and financial compliance align with industry-leading best practices.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop"
    },
    {
      name: "VENUS +",
      type: "Retail",
      description: "Venus+ is Rajkot-based Retail chain. We manage their comprehensive financial reporting, streamlined supply chain accounting and operational accounting helping track inventory and sales. Our advisory includes strategic planning and growth optimization that ensures strong positioning in a competitive retail environment.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
    },
    {
      name: "MAXILK PROCESSORS PVT. LTD.",
      type: "Manufacturing",
      description: "We are proud partners with Maxilk in navigating financial audits, audit compliance and strategic advisory. Their commitment to trust and numbers has been reciprocated through transparent practices.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
    },
    {
      name: "TERRA.DO INC.",
      type: "Climate Tech",
      description: "As a future-forward organization accelerating climate solutions globally, Terra.do needs not just audit & compliance, they need proactive consultancy. Our work with them spans GST compliance, regulatory advisory and real-time financial support advisory for fund raisers, ensuring that they can focus on their mission while we handle financial complexities.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop"
    },
    {
      name: "SHAH BUSINESS VENTURES",
      type: "Business Group",
      description: "Shah Business Ventures - This successful business group entrusts us with strategic consulting, risk management and accounting services. Through high-level advisory, comprehensive financial reporting and proactive audit, we empower them to scale smartly.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
    },
    {
      name: "WEALTH VIEW CAPITAL PVT. LTD.",
      type: "Financial Advisory",
      description: "As a reputed financial house built on trust and transparency, WealthView Capital relies on us for multi-faceted financial expertise. We offer them expertise, along with compliance, tax advisory and custom financial planning ensuring seamless operational stability and strategic expansion for their operations.",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop"
    }
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=800&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-gray-900/70"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Chosen by Businesses That Value Accuracy and Insight
            </h1>

            {/* Client Logos Grid */}
            <div className="mt-16 flex flex-col gap-6">
              <div className="flex flex-wrap justify-center gap-6 items-center">
                {[
                  { src: "/logos/Blossom-logo.png", alt: "Blossom" },
                  { src: "/logos/STRAGEMS_logo.webp", alt: "Stragems" },
                  { src: "/logos/datago_technology_limited_logo.jpg", alt: "DataGo" },
                  { src: "/logos/mtc_co_logo.jpg", alt: "MTC" },
                  { src: "/logos/newmarkable_logo-Photoroom.png", alt: "Newmarkable" },
                ].map((logo, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg flex items-center justify-center w-40 h-24 shadow-sm">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={60}
                      className="object-contain h-16 w-auto"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-6 items-center">
                {[
                  { src: "/logos/7425b29e79ecffb5654f526bede7bf12.w400.h400-Photoroom.png", alt: "Client 6" },
                  { src: "/logos/E5AE8FE899B9Logo-E7AB96E78988-835-scaled-Photoroom.png", alt: "Client 7" },
                  { src: "/logos/WhatsApp Image 2025-11-24 at 11.44.06 PM-Photoroom.png", alt: "Client 8" },
                  { src: "/logos/images (3).png", alt: "Client 10" },
                ].map((logo, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg flex items-center justify-center w-40 h-24 shadow-sm">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={60}
                      className="object-contain h-16 w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-12 text-lg text-brand-lighter max-w-4xl mx-auto">
              From established corporations to dynamic new-age ventures, our clients represent diverse sectors and global markets. At ThinkNorth Services, we deliver measurable impact, long-term reliability, and finance solutions that evolve with your business.
            </p>
            <button className="mt-8 bg-brand text-white px-8 py-3 rounded font-semibold hover:bg-brand-dark transition-colors">
              View Our Portfolio ➔
            </button>
          </div>
        </section>

        {/* Services Strip */}
        <ServicesMarquee />

        {/* Client Details */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
              >
                <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                  <img
                    src={client.image}
                    alt={client.name}
                    className="rounded-lg shadow-lg w-full h-96 object-cover"
                  />
                </div>
                <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{client.name} ➜</h3>
                  <p className="text-brand font-semibold mb-4">Client Type: {client.type}</p>
                  <p className="text-gray-600 leading-relaxed">{client.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <ClientLogos
          title="OUR ESTEEMED CLIENTS"
          description="We are proud to have partnered with diverse businesses that rely on ThinkNorth as their trusted financial partner."
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
