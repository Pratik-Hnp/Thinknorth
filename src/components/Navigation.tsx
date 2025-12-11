"use client";


import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <AnimatedLogo />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="text-gray-700 hover:text-brand transition-colors font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-brand after:transition-all after:duration-300 hover:after:w-full">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-brand transition-colors font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-brand after:transition-all after:duration-300 hover:after:w-full">
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`text-gray-700 hover:text-brand transition-colors font-medium relative py-2 flex items-center gap-1 ${isServicesOpen ? 'text-brand' : ''}`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </Link>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[800px] z-50"
                  >
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden p-8">
                      <div className="grid grid-cols-12 gap-8">
                        {/* Left Column: Intro */}
                        <div className="col-span-4 bg-gray-50 -my-8 -ml-8 p-8 flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Services</h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-6">
                              Explore how we can partner to H(edge) Your Business Growth.
                            </p>
                            <p className="text-xs text-gray-500">
                              We help you take the right steps toward building a strong, compliant, and scalable business.
                            </p>
                          </div>
                          <Link href="/services" className="text-brand text-sm font-semibold hover:underline mt-4 inline-block">
                            Explore All Services ➔
                          </Link>
                        </div>

                        {/* Right Column: Links */}
                        <div className="col-span-8 space-y-2">
                          <Link
                            href="/services?id=1"
                            className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-sm font-medium text-gray-700 group-hover:text-brand">Global Financial & Compliance</span>
                            <span className="text-gray-400 group-hover:text-brand transition-colors">➔</span>
                          </Link>
                          <div className="h-px bg-gray-100 mx-3"></div>

                          <Link
                            href="/services?id=2"
                            className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-sm font-medium text-gray-700 group-hover:text-brand">Finance & Accounting</span>
                            <span className="text-gray-400 group-hover:text-brand transition-colors">➔</span>
                          </Link>
                          <div className="h-px bg-gray-100 mx-3"></div>

                          <Link
                            href="/services?id=3"
                            className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-sm font-medium text-gray-700 group-hover:text-brand">Fundraising & Capital Advisory</span>
                            <span className="text-gray-400 group-hover:text-brand transition-colors">➔</span>
                          </Link>
                          <div className="h-px bg-gray-100 mx-3"></div>

                          <Link
                            href="/services?id=4"
                            className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-sm font-medium text-gray-700 group-hover:text-brand">Audit, Due Diligence & Litigation</span>
                            <span className="text-gray-400 group-hover:text-brand transition-colors">➔</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Section: Contact & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-brand text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-dark transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            {/* <Link
              href="/collaborations"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Portfolios
            </Link> */}
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
