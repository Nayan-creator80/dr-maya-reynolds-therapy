"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, MapPin, Sparkles, CheckCircle2 } from "@/components/Icons";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F3] via-[#F3EEE8] to-[#FAF7F3] py-16 md:py-24 border-b border-[#E8E2D9]">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E4EEE8]/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Text Column */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Location & License Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-sage text-xs font-semibold uppercase tracking-wider mx-auto lg:mx-0 shadow-xs">
            <Sparkles size={14} className="text-[#C87D55]" />
            <span>Santa Monica, CA • Licensed Clinical Psychologist</span>
          </div>

          {/* H1 SEO Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#1E342B] leading-[1.18] tracking-tight">
            Therapy for Anxiety, Trauma & Professional Burnout in{" "}
            <span className="italic font-normal text-[#C87D55]">Santa Monica, CA</span>
          </h1>

          {/* Supporting Copy strictly from Profile */}
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
            Welcome. I work with high-achieving, thoughtful adults who appear functional on the outside but internally feel exhausted, stuck in overthinking, or emotionally on edge. Together, we combine practical evidence-based tools (CBT, EMDR) with depth-oriented care to rebuild lasting calm.
          </p>

          {/* Trust Highlights */}
          <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-[#4B7865]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#C87D55]" />
              <span>In-Person Therapy in Santa Monica</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#C87D55]" />
              <span>Secure Telehealth Across California</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#C87D55]" />
              <span>EMDR & CBT Specialist</span>
            </div>
          </div>

          {/* Hero Call-To-Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              onClick={onBookClick}
              className="btn-primary w-full sm:w-auto text-base py-3.5 px-7 cursor-pointer group"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#services"
              className="btn-outline w-full sm:w-auto text-base py-3.5 px-7 cursor-pointer"
            >
              Explore Practice Areas
            </a>
          </div>

          {/* Location Mention Footer Note */}
          <div className="pt-2 text-xs text-[#64748B] flex items-center justify-center lg:justify-start gap-1">
            <MapPin size={14} className="text-[#C87D55]" />
            <span>Office located at 123th Street 45 W, Santa Monica, CA 90401</span>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-none">
            {/* Background Decorative Arch/Shape */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#2C4A3E]/10 via-[#C87D55]/15 to-transparent rounded-3xl transform rotate-2"></div>
            
            {/* Main Portrait Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <Image
                src="/images/dr-maya-reynolds.png"
                alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, CA"
                width={540}
                height={640}
                className="w-full h-auto object-cover hover:scale-103 transition-transform duration-500"
                priority
              />

              {/* Floating Credential Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 glass-card p-4 rounded-xl shadow-lg border border-white/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1E342B] text-white flex items-center justify-center font-serif font-bold text-sm">
                    PsyD
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-sm text-[#1E342B]">
                      Dr. Maya Reynolds, PsyD
                    </h3>
                    <p className="text-xs text-[#4B7865] font-medium">
                      Licensed Clinical Psychologist • CA License
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right Decorative Tag */}
            <div className="absolute -top-4 -right-4 bg-[#F8ECE6] text-[#A85D3B] border border-[#C87D55]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5">
              <ShieldCheck size={14} />
              <span>Evidence-Based & Grounded</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
