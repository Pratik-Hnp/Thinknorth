"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        quote: "Working with Think North has brought much-needed clarity and compliance discipline to our diamond operations. From GST to export documentation, their understanding of the diamond trade is exceptional. We finally feel audit-ready at all times.",
        role: "Managing Partner",
        industry: "Diamond Trading"
    },
    {
        id: 2,
        quote: "In an industry where margins, inventory valuation, and foreign remittances need precision, their advisory has been invaluable. They don't just file returns, they understand our business.",
        role: "Director",
        industry: "Diamond Manufacturing"
    },
    {
        id: 3,
        quote: "Our accounts, statutory compliances, and tax planning are now seamlessly managed. What stands out is their deep knowledge of diamond-specific challenges like stock reconciliation and working capital structuring.",
        role: "CFO",
        industry: "Diamond Export"
    },
    {
        id: 4,
        quote: "We trust them completely with our financial governance. Their proactive approach has helped us avoid compliance risks and streamline audits with banks and authorities.",
        role: "Partner",
        industry: "Diamond Industry"
    },
    {
        id: 5,
        quote: "From day one, their team demonstrated professionalism, confidentiality, and strong domain expertise in the diamond industry. Their guidance has supported our growth while keeping us fully compliant.",
        role: "Founder",
        industry: "Diamond Enterprise"
    },
    {
        id: 6,
        quote: "In a volatile market, having professionals that understands diamond cycles, forex exposure, and regulatory nuances makes all the difference. They've been a reliable financial partner for us.",
        role: "Promoter",
        industry: "Diamond Group"
    }
];

interface TestimonialsProps {
    title?: string;
    subtitle?: string;
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="flex-shrink-0 w-[300px] sm:w-[350px] bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-gray-100 mx-3">
            <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand/10 flex items-center justify-center">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-brand" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.role}</div>
                    <div className="text-xs sm:text-sm text-brand">{testimonial.industry}</div>
                </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed italic line-clamp-4">
                &ldquo;{testimonial.quote}&rdquo;
            </p>
        </div>
    );
}

export default function Testimonials({
    title = "VOICES OF TRUST",
    subtitle = "Our commitment to excellence reflects in the feedback we receive."
}: TestimonialsProps) {
    // Duplicate testimonials for seamless loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-gray-600 text-sm sm:text-base">{subtitle}</p>
                </div>
            </div>

            {/* Infinite Scroll Marquee */}
            <div className="relative">
                {/* First Row - scrolls left */}
                <motion.div
                    className="flex py-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                >
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
                    ))}
                </motion.div>

                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
            </div>
        </section>
    );
}
