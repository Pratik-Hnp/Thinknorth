"use client";

"use client";

import { Phone } from "lucide-react";

export default function CallButton() {
    return (
        <a
            href="tel:+918000098089"
            className="fixed bottom-6 right-6 z-50 bg-white text-brand hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all hover:scale-110"
            aria-label="Call us"
        >
            <Phone className="w-6 h-6" />
        </a>
    );
}
