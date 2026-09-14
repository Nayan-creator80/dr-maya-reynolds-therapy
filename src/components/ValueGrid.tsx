"use client";

import React from "react";
import { Brain, HeartHandshake, Sun, Video } from "@/components/Icons";

export default function ValueGrid() {
  const pillars = [
    {
      icon: <Brain className="text-[#C87D55]" size={28} />,
      title: "Evidence-Based & Integrative",
      description:
        "Combining CBT, EMDR, mindfulness, and somatic techniques to address both emotional thoughts and physiological stress.",
    },
    {
      icon: <HeartHandshake className="text-[#C87D55]" size={28} />,
      title: "Grounded & Paced Therapy",
      description:
        "Collaborative pacing prioritized around safety, stabilization, and helping you feel regulated in your daily life.",
    },
    {
      icon: <Sun className="text-[#C87D55]" size={28} />,
      title: "Quiet Santa Monica Office",
      description:
        "A private physical sanctuary with natural light and an uncluttered design to help you feel at ease upon arrival.",
    },
    {
      icon: <Video className="text-[#C87D55]" size={28} />,
      title: "In-Person & Telehealth",
      description:
        "Flexible options offering face-to-face sessions in Santa Monica and HIPAA-compliant online therapy throughout California.",
    },
  ];

  return (
    <section className="py-12 bg-[#1E342B] text-white border-y border-[#2C4A3E]">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="glass-card-dark p-6 rounded-2xl border border-[#4B7865]/30 space-y-3 hover:border-[#C87D55]/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2C4A3E] flex items-center justify-center group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#E4EEE8]">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#C2D6CC] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
