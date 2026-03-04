"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 flex flex-col  justify-center items-center text-gray-300 mt-20">
      <div className="max-w-7xl px-10 mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">OilPro</h2>
          <p className="text-sm leading-relaxed">
            Professional well control knowledge platform covering drilling,
            blowout prevention, and oilfield safety practices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/well-control">Well Control</Link></li>
            <li><Link href="/drilling">Drilling</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect With Us</h3>

          <div className="flex gap-4 mt-4">

            <a href="https://facebook.com" target="_blank">
              <Facebook className="hover:text-blue-500 transition" />
            </a>

            <a href="https://wa.me/919837218345" target="_blank">
              <FaWhatsapp className="text-xl hover:text-green-500 transition" />
            </a>

            <a href="https://linkedin.com" target="_blank">
              <Linkedin className="hover:text-blue-400 transition" />
            </a>

            <a href="https://instagram.com" target="_blank">
              <Instagram className="hover:text-pink-500 transition" />
            </a>

          </div>

          <div className="mt-6 text-sm">
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 7536869665
            </p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} OilPro. All rights reserved.
      </div>
    </footer>
  );
}