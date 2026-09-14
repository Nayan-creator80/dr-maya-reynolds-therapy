"use client";

import React from "react";
import { Brain, Eye, Sparkles, Waves } from "@/components/Icons";

export default function Modalities() {
  const modalitiesList = [
    {
      name: "Cognitive Behavioral Therapy (CBT)",
      icon: <Brain className="text-[#C87D55]" size={30} />,
      tagline: "Understanding Thought Patterns",
      description:
        "Identifies and rewires rigid thought patterns, perfectionist self-talk, and cognitive loops that fuel anxiety and emotional distress.",
      benefits: ["Interrupts overthinking", "Practical daily coping tools", "Restructures internal pressure"],
    },
    {
      name: "EMDR Therapy",
      icon: <Eye className="text-[#C87D55]" size={30} />,
      tagline: "Trauma Reprocessing",
      description:
        "Eye Movement Desensitization and Reprocessing helps the brain process unintegrated trauma memories, lowering emotional charge and triggers.",
      benefits: ["Processes single-incident & complex trauma", "Reduces hypervigilance", "Paced for safety & stabilization"],
    },
    {
      name: "Mindfulness-Based Practices",
      icon: <Sparkles className="text-[#C87D55]" size={30} />,
      tagline: "Grounded Present Awareness",
      description:
        "Cultivates non-judgmental awareness of bodily sensations and feelings, allowing high achievers to slow down and stay rooted.",
      benefits: ["Decreases stress response", "Fosters self-compassion", "Improves sleep and mental clarity"],
    },
    {
      name: "Body-Oriented / Somatic Techniques",
      icon: <Waves className="text-[#C87D55]" size={30} />,
      tagline: "Physiological Regulation",
      description:
        "Connects the mind and nervous system, helping resolve somatic tension, chest tightness, and physical symptoms of chronic stress.",
      benefits: ["Soothes nervous system arousal", "Relieves muscle tension", "Restores somatic comfort"],
    },
  ];

  return (
    <section id="modalities" className="py-20 md:py-28 bg-[#FAF7F3]">
      <div className="section-container space-y-16">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-sage text-xs font-semibold uppercase tracking-wider">
            <span>Evidence-Based Methodology</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E342B]">
            Integrative & Depth-Oriented <span className="italic text-[#C87D55]">Therapeutic Modalities</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Dr. Maya Reynolds combines structured, evidence-based methods with reflective depth therapy so you experience both immediate relief and long-term transformation.
          </p>
        </div>

        {/* Modalities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modalitiesList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-[#E8E2D9] shadow-sm hover:shadow-md hover:border-[#C87D55]/40 transition-all duration-300 space-y-5"
            >
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-[#F8ECE6] w-fit">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold text-[#A85D3B] uppercase tracking-wider bg-[#FDF7F4] px-3 py-1 rounded-full border border-[#C87D55]/20">
                  {item.tagline}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1E342B]">
                {item.name}
              </h3>

              <p className="text-sm text-[#475569] leading-relaxed">
                {item.description}
              </p>

              <div className="pt-3 border-t border-[#F1F5F9] space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#3B6252]">
                  Key Outcomes:
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.benefits.map((b, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-xs bg-[#E4EEE8] text-[#1E342B] px-3 py-1 rounded-md font-medium"
                    >
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
