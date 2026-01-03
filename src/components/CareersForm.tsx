"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import SimpleCaptcha, { SimpleCaptchaHandle } from "./SimpleCaptcha";

// Validation Schema
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    mobile: z.string().regex(/^\d{10}$/, "Mobile number must be 10 digits"),
    email: z.string().email("Invalid email address"),
    city: z.string().min(2, "City name is too short"),
    position: z.string().min(1, "Please select a position"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const positions = [
    "Chartered Accountant",
    "Article Assistant",
    "Tax Consultant",
    "Audit Manager",
    "Accountant",
    "HR Executive",
    "Business Development Manager",
    "Other",
];

export default function CareersForm() {
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
    const captchaRef = useRef<SimpleCaptchaHandle>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        if (!isCaptchaValid) {
            alert("Please verify the captcha correctly.");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log("Form Data:", data);
        setIsSubmitting(false);
        setSubmitStatus("success");
        reset();
        captchaRef.current?.reset();
        setIsCaptchaValid(false);

        // Auto hide success message
        setTimeout(() => setSubmitStatus(null), 5000);
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-brand p-6 text-white text-center">
                <h3 className="text-2xl font-bold">Join Our Team</h3>
                <p className="text-brand-lighter mt-2 text-sm">Start your journey with Think North</p>
            </div>

            <div className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                {...register("name")}
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-hidden transition-all ${errors.name ? "border-red-500" : "border-gray-300"
                                    }`}
                                placeholder="John Doe"
                            />
                            {errors.name && (
                                <p className="text-xs text-red-500 flex items-center gap-1">
                                    <AlertCircle size={12} /> {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Mobile */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Mobile Number</label>
                            <input
                                {...register("mobile")}
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-hidden transition-all ${errors.mobile ? "border-red-500" : "border-gray-300"
                                    }`}
                                placeholder="9876543210"
                                maxLength={10}
                            />
                            {errors.mobile && (
                                <p className="text-xs text-red-500 flex items-center gap-1">
                                    <AlertCircle size={12} /> {errors.mobile.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                {...register("email")}
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-hidden transition-all ${errors.email ? "border-red-500" : "border-gray-300"
                                    }`}
                                placeholder="john@example.com"
                            />
                            {errors.email && (
                                <p className="text-xs text-red-500 flex items-center gap-1">
                                    <AlertCircle size={12} /> {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* City */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">City</label>
                            <input
                                {...register("city")}
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-hidden transition-all ${errors.city ? "border-red-500" : "border-gray-300"
                                    }`}
                                placeholder="Mumbai"
                            />
                            {errors.city && (
                                <p className="text-xs text-red-500 flex items-center gap-1">
                                    <AlertCircle size={12} /> {errors.city.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Position */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Desired Position</label>
                        <select
                            {...register("position")}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-hidden transition-all bg-white ${errors.position ? "border-red-500" : "border-gray-300"
                                }`}
                        >
                            <option value="">Select a position</option>
                            {positions.map((pos) => (
                                <option key={pos} value={pos}>
                                    {pos}
                                </option>
                            ))}
                        </select>
                        {errors.position && (
                            <p className="text-xs text-red-500 flex items-center gap-1">
                                <AlertCircle size={12} /> {errors.position.message}
                            </p>
                        )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Message / Cover Letter</label>
                        <textarea
                            {...register("message")}
                            rows={4}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-hidden transition-all resize-none ${errors.message ? "border-red-500" : "border-gray-300"
                                }`}
                            placeholder="Tell us about yourself and why you'd be a great fit..."
                        />
                        {errors.message && (
                            <p className="text-xs text-red-500 flex items-center gap-1">
                                <AlertCircle size={12} /> {errors.message.message}
                            </p>
                        )}
                    </div>

                    {/* Captcha */}
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Security Check</label>
                        <SimpleCaptcha ref={captchaRef} onValidate={setIsCaptchaValid} />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting || !isCaptchaValid}
                        className={`w-full py-3 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 ${isSubmitting || !isCaptchaValid
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-brand hover:bg-brand-dark shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            }`}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="animate-spin" size={20} /> Sending Application...
                            </>
                        ) : (
                            "Submit Application"
                        )}
                    </button>
                </form>

                {/* Success Message */}
                <AnimatePresence>
                    {submitStatus === "success" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-3 border border-green-200"
                        >
                            <CheckCircle size={24} />
                            <div>
                                <strong className="block">Application Submitted Successfully!</strong>
                                <span className="text-sm">We will review your profile and get back to you soon.</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
