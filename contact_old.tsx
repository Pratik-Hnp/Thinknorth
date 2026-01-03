"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";

const contactChannels = [
  {
    icon: "≡ƒô₧",
    label: "Phone",
    value: "+91 80000 98089",
    href: "tel:+918000098089"
  },
  {
    icon: "Γ£ë∩╕Å",
    label: "Email",
    value: "vardhan@thinknorth.co.in",
    href: "mailto:vardhan@thinknorth.co.in"
  },
  {
    icon: "≡ƒîÉ",
    label: "Website",
    value: "www.thinknorth.co.in",
    href: "https://www.thinknorth.co.in"
  }
];

const officeLocations = [
  {
    title: "Surat HQ",
    lines: ["806, Rajhans Montessa, Airport Road,", "Surat - 395007"]
  },
  {
    title: "Mumbai Office",
    lines: ["503, Neelkanth Corporate Park,", "Vidya Vihar West, Mumbai - 400086"]
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="gradient-blue text-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Your Direction to Smarter Financial Choices
                </h1>
                <p className="text-brand-lighter mb-8 leading-relaxed">
                  ThinkNorth blends strategic finance, compliance, and technology to guide ambitious teams with clarity. LetΓÇÖs design clearer paths for growth from Surat to Mumbai and beyond.
                </p>
                <div className="space-y-4">
                  {contactChannels.map((channel) => (
                    <div key={channel.label} className="flex items-start gap-3">
                      <span className="text-2xl">{channel.icon}</span>
                      <div>
                        <div className="font-semibold">{channel.label}:</div>
                        <a
                          href={channel.href}
                          className="text-brand-lighter hover:text-white transition-colors"
                          target={channel.href.startsWith("http") ? "_blank" : undefined}
                          rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                        >
                          {channel.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Side - Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">GET IN TOUCH</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you're a startup seeking structure, a business planning for growth, or an individual looking for tax clarity ΓÇö we're here to help.
                </p>
                <p className="text-gray-700 mb-4">
                  Discover firsthand how <strong>Think North</strong> can support your goals.
                </p>

                <div className="space-y-6 mt-8">
                  {contactChannels.map((channel) => (
                    <div key={channel.label}>
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                        <span className="text-brand mr-2">{channel.icon}</span>
                        {channel.label}
                      </h3>
                      <a
                        href={channel.href}
                        className="text-brand hover:text-brand-dark transition-colors"
                        target={channel.href.startsWith("http") ? "_blank" : undefined}
                        rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {channel.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Form */}
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      placeholder="Your last name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      placeholder="Enter your message"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-dark text-white px-6 py-3 rounded font-semibold hover:bg-brand transition-colors"
                  >
                    SUBMIT Γ₧ö
                  </button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Visit our strategy hubs in Surat &amp; Mumbai
                </h2>
                <button className="bg-brand-dark text-white px-8 py-3 rounded font-semibold hover:bg-brand transition-colors">
                  PLAN A VISIT Γ₧ö
                </button>
              </div>

              {/* Embedded Map */}
              <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Rajhans%20Montessa%20Surat&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Surat Office Location"
                />
              </div>

              <div className="mt-10 grid md:grid-cols-2 gap-6">
                {officeLocations.map((office) => (
                  <div key={office.title} className="rounded-lg border border-brand-light p-6 text-left">
                    <p className="text-sm uppercase tracking-[0.2em] text-brand mb-2">Office</p>
                    <p className="font-semibold text-gray-900 mb-2">{office.title}</p>
                    {office.lines.map((line) => (
                      <p key={line} className="text-gray-600">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR ESTEEMED CLIENTS</h2>
              <p className="text-gray-600">Trusted by Businesses That Trust Numbers</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center mb-12">
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
              <p className="text-sm text-gray-600 mb-6">
                Here are just a few of the businesses that have chosen K.P. Bhagat & Co. as their trusted financial partner.
              </p>
              <Link
                href="/collaborations"
                className="inline-block bg-brand-dark text-white px-8 py-3 rounded font-semibold hover:bg-brand transition-colors"
              >
                EXPLORE WHAT WE DELIVERED Γ₧ö
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
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
                      K P Bhagat & Co has been our trusted accounting & tax advisory company for the last 2 years. We've been highly impressed by their financial management. Their expertise and professionalism have been invaluable to Short Amusement Ltd.
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
                      K P Bhagat & Co has been our go-to partner for CA services specializing in accounting, tax filing and compliance. Their expertise and attention to detail have been exceptional.
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
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
