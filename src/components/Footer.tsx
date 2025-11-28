import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="gradient-purple-blue py-12 border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Address */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Address</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              306, Luxuria Business Hub, Nr. Audi<br />
              Showroom, Keshavbaug, Vastrapur,<br />
              Ahmedabad-380015, Gujarat, INDIA
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contacts</h3>
            <p className="text-gray-700 text-sm mb-2">
              📞 +91 635 241 7181
            </p>
            <p className="text-gray-700 text-sm">
              ✉️ info@cakpbhagat.com
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-900 mb-2">Follow us on</p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Subscribe to our newsletter</h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 text-center">
          <p className="text-gray-700 text-sm font-medium">
            K. P. BHAGAT & CO. - ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
