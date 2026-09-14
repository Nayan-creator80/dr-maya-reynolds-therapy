"use client";

import React from "react";
import { UserCheck, Sparkles, Target, Zap, Heart } from "@/components/Icons";

export default function ClientFocus() {
  const populations = [
    {
      title: "High-Achieving Professionals",
      description:
        "Individuals who appear functional and successful on the outside but internally experience constant worry, perfectionism, and high internal pressure.",
      icon: <Zap className="text-[#C87D55]" size={24} />,
    },
    {
      title: "Entrepreneurs & Creatives",
      description:
        "Business founders and creative minds navigating intense burnout, decision fatigue, and feeling disconnected from themselves after pushing through stress.",
      icon: <Sparkles className="text-[#C87D55]" size={24} />,
    },
    {
      title: "Adults Healing from Trauma",
      description:
        "People carrying the weight of earlier life experiences, relationship wounds, or chronic stress who seek a safe, carefully paced space to heal.",
      icon: <Heart className="text-[#C87D55]" size={24} />,
    },
    {
      title: "Thoughtful & Self-Aware Adults",
      description:
        "Clients who have already done personal reflection or therapy before, but feel stuck in overthinking loops and want deeper somatic & emotional integration.",
      icon: <Target className="text-[#C87D55]" size={24} />,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F4EFEA] border-y border-[#E8E2D9]">
      <div className="section-container space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-sage text-xs font-semibold uppercase tracking-wider">
            <UserCheck size={14} className="text-[#C87D55]" />
            <span>Client Focus & Practice Fit</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E342B]">
            Who I <span className="italic text-[#C87D55]">Work With</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Therapy works best when there is a strong mutual fit. My practice is thoughtfully designed for adults looking for both practical tools and depth-oriented care.
          </p>
        </div>

        {/* Population Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {populations.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-[#E8E2D9] shadow-xs space-y-4 hover:shadow-md hover:border-[#C87D55]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#F8ECE6] flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1E342B]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="pt-3 border-t border-[#F1F5F9] text-xs font-medium text-[#3B6252] flex items-center gap-1">
                <span>Tailored Care in Santa Monica & Telehealth</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
