"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Heart, ShieldAlert } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-[#1E342B] text-white border-t border-[#2C4A3E] pt-16 pb-12">
      <div className="section-container space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Bio Summary */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                Dr. Maya Reynolds<span className="text-[#D98E66]">, PsyD</span>
              </span>
              <p className="text-xs uppercase tracking-widest text-[#D98E66] font-semibold mt-0.5">
                Licensed Clinical Psychologist • CA License
              </p>
            </Link>

            <p className="text-xs sm:text-sm text-[#C2D6CC] leading-relaxed max-w-md">
              Offering grounded, evidence-based therapy (CBT, EMDR, Somatic) for adults experiencing anxiety, panic, trauma, and burnout. Providing in-person therapy in Santa Monica, CA, and secure telehealth statewide.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#E4EEE8]">
              <MapPin size={14} className="text-[#D98E66]" />
              <span>123th Street 45 W, Santa Monica, CA 90401</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#E4EEE8] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C2D6CC]">
              <li>
                <Link href="#about" className="hover:text-[#D98E66] transition-colors">
                  About Dr. Maya Reynolds
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#D98E66] transition-colors">
                  Specialized Services (Anxiety, EMDR, Burnout)
                </Link>
              </li>
              <li>
                <Link href="#modalities" className="hover:text-[#D98E66] transition-colors">
                  Therapeutic Approach (CBT & EMDR)
                </Link>
              </li>
              <li>
                <Link href="#office" className="hover:text-[#D98E66] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98E66]"></span>
                  <span>Our Santa Monica Office (New)</span>
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#D98E66] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Service Areas */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#E4EEE8] uppercase tracking-wider">
              Contact & Regions Served
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#C2D6CC]">
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-[#D98E66]" />
                <span>(310) 555-0192</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-[#D98E66]" />
                <span>contact@drmayareynolds.com</span>
              </p>
              <p className="text-xs text-[#A8C3B5] pt-2 leading-relaxed">
                <strong>In-Person Location:</strong> Santa Monica, CA.<br />
                <strong>Serving Nearby Communities:</strong> West Los Angeles, Brentwood, Pacific Palisades, Venice, Culver City, Beverly Hills, & California Telehealth.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Crisis Line Notice */}
        <div className="p-4 rounded-xl bg-[#2C4A3E] border border-[#4B7865]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#E4EEE8]">
          <div className="flex items-center gap-2">
            <ShieldAlert size={18} className="text-[#D98E66] shrink-0" />
            <span>
              <strong>Emergency Notice:</strong> If you are experiencing a mental health emergency or crisis, please call or text <strong>988</strong> immediately for the Suicide & Crisis Lifeline, or go to the nearest emergency room.
            </span>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-6 border-t border-[#2C4A3E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8C3B5]">
          <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">HIPAA Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
