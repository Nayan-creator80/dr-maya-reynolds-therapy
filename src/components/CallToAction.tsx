"use client";

import React from "react";
import { Calendar, ArrowRight, ShieldCheck, MapPin } from "@/components/Icons";

interface CallToActionProps {
  onBookClick: () => void;
}

export default function CallToAction({ onBookClick }: CallToActionProps) {
  return (
    <section id="contact" className="py-20 bg-gradient-to-tr from-[#1E342B] via-[#2C4A3E] to-[#1E342B] text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C87D55]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="section-container relative z-10 text-center max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B6252] text-[#E4EEE8] text-xs font-semibold uppercase tracking-wider border border-[#4B7865]">
          <ShieldCheck size={14} className="text-[#D98E66]" />
          <span>Take The Next Step Toward Sustainable Well-Being</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Find a Therapist Who Is the Right Fit for <span className="italic text-[#D98E66]">You</span>
        </h2>

        <p className="text-base sm:text-lg text-[#C2D6CC] max-w-2xl mx-auto leading-relaxed">
          Coming to therapy is a courageous decision. Whether you prefer in-person sessions in our quiet Santa Monica office or secure telehealth across California, I am here to support your journey.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookClick}
            className="btn-secondary text-base py-4 px-8 cursor-pointer shadow-xl group"
          >
            <Calendar size={18} />
            <span>Schedule Initial Consultation</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="pt-4 text-xs text-[#A8C3B5] flex items-center justify-center gap-2">
          <MapPin size={14} className="text-[#D98E66]" />
          <span>123th Street 45 W, Santa Monica, CA 90401 • Confidential & HIPAA Compliant</span>
        </div>
      </div>
    </section>
  );
}
