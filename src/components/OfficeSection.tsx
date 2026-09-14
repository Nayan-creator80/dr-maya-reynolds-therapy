"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Sun, Shield, Coffee, Sparkles, CheckCircle2, ArrowRight } from "@/components/Icons";

interface OfficeSectionProps {
  onBookClick: () => void;
}

export default function OfficeSection({ onBookClick }: OfficeSectionProps) {
  return (
    <section id="office" className="py-20 md:py-28 bg-gradient-to-b from-[#1E342B] via-[#2C4A3E] to-[#1E342B] text-white relative overflow-hidden">
      {/* Decorative Glow background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C87D55]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="section-container space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B6252] text-[#E4EEE8] text-xs font-semibold uppercase tracking-wider border border-[#4B7865]">
            <Sparkles size={14} className="text-[#D98E66]" />
            <span>New Custom Feature • Santa Monica Physical Sanctuary</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our Office | <span className="italic text-[#D98E66]">A Calm Space for Healing</span>
          </h2>

          <p className="text-base sm:text-lg text-[#C2D6CC] leading-relaxed">
            Located in downtown Santa Monica, California, our physical office is intentionally crafted as a peaceful, private sanctuary where you can step out of the daily noise and focus entirely on your wellbeing.
          </p>
        </div>

        {/* Office Features Grid & Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Office Description & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-[#E4EEE8] leading-relaxed">
              <p>
                My office is a quiet, private space designed to feel calm and grounding, featuring abundant <strong>natural sunlight, organic warmth, and a comfortable, uncluttered environment</strong>.
              </p>
              <p>
                Clients frequently share that the physical environment itself helps them feel more at ease the moment they walk through the door. Whether you are settling into a plush armchair for in-person therapy or connecting via telehealth, the setting honors your comfort, safety, and confidentiality.
              </p>
            </div>

            {/* Office Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#2C4A3E]/80 border border-[#4B7865]/40 space-y-1.5">
                <div className="flex items-center gap-2 text-[#D98E66] font-semibold text-sm">
                  <Sun size={18} /> Abundant Natural Light
                </div>
                <p className="text-xs text-[#C2D6CC]">
                  Bright, sun-lit therapy room surrounded by tranquil plant life and warm wooden accents.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#2C4A3E]/80 border border-[#4B7865]/40 space-y-1.5">
                <div className="flex items-center gap-2 text-[#D98E66] font-semibold text-sm">
                  <Shield size={18} /> Complete Privacy & Safety
                </div>
                <p className="text-xs text-[#C2D6CC]">
                  Discreet, soundproof physical room providing a safe space for deep emotional work.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#2C4A3E]/80 border border-[#4B7865]/40 space-y-1.5">
                <div className="flex items-center gap-2 text-[#D98E66] font-semibold text-sm">
                  <Coffee size={18} /> Warm & Uncluttered
                </div>
                <p className="text-xs text-[#C2D6CC]">
                  Designed without medical clinical coldness—comfortable seating and calming aesthetics.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#2C4A3E]/80 border border-[#4B7865]/40 space-y-1.5">
                <div className="flex items-center gap-2 text-[#D98E66] font-semibold text-sm">
                  <MapPin size={18} /> Santa Monica Location
                </div>
                <p className="text-xs text-[#C2D6CC]">
                  Conveniently situated at 123th Street 45 W, Santa Monica, CA 90401 with easy parking.
                </p>
              </div>
            </div>

            {/* In-Person vs Telehealth Info Box */}
            <div className="p-4 rounded-xl bg-[#3B6252]/50 border border-[#C87D55]/30 flex items-center justify-between text-xs text-[#E4EEE8]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#D98E66]" />
                <span>Offering In-Person Sessions in Santa Monica & Telehealth Across California</span>
              </div>
            </div>

            <div>
              <button
                onClick={onBookClick}
                className="btn-secondary text-sm py-3 px-6 cursor-pointer"
              >
                <span>Visit Santa Monica Office</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Office Photo Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Office Room Image */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#4B7865]/40 shadow-2xl h-72 sm:h-80 w-full group">
              <Image
                src="/images/office-main.png"
                alt="Dr. Maya Reynolds Santa Monica Therapy Office Space"
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-xs font-semibold text-white flex items-center justify-between">
                <span>Main Santa Monica Consultation Room</span>
                <span className="bg-[#2C4A3E]/90 px-3 py-1 rounded-full text-[#E4EEE8]">123th Street 45 W</span>
              </div>
            </div>

            {/* Secondary Office Seating Nook Image */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#4B7865]/40 shadow-xl h-48 sm:h-56 w-full group">
              <Image
                src="/images/office-seating.png"
                alt="Comfortable Armchair Seating in Dr. Maya Reynolds Santa Monica Office"
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-xs font-semibold text-white flex items-center justify-between">
                <span>Comfortable Consultation Nook</span>
                <span className="bg-[#2C4A3E]/90 px-3 py-1 rounded-full text-[#E4EEE8]">Calm & Private</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
