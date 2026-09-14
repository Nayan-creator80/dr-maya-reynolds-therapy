"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Activity, Compass } from "@/components/Icons";

interface ServicesProps {
  onBookClick: () => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  const servicesList = [
    {
      id: "anxiety",
      title: "Anxiety & Panic Therapy",
      tagline: "Break free from constant worry, overthinking, and internal tension",
      image: "/images/service-anxiety.png",
      icon: <Activity className="text-[#C87D55]" size={24} />,
      description:
        "Designed for adults who feel functional on the outside but experience relentless internal pressure, physical muscle tension, racing thoughts, or difficulty sleeping. We help you soothe your nervous system and regain emotional balance.",
      highlights: [
        "Identify and interrupt overthinking loops and panic responses",
        "Master body-oriented and mindfulness regulation tools",
        "Develop sustainable coping strategies for high-stress environments",
      ],
      seoKeywords: "Anxiety Therapy Santa Monica • Panic Attacks • CBT for Overthinking",
    },
    {
      id: "trauma",
      title: "Trauma & EMDR Therapy",
      tagline: "Paced trauma recovery focusing on safety, stabilization, and relief",
      image: "/images/service-emdr.png",
      icon: <Shield className="text-[#C87D55]" size={24} />,
      description:
        "Comprehensive trauma therapy for adults processing single-incident trauma as well as complex, long-standing patterns from childhood or past relationships. Using EMDR and somatic techniques, we reprocess painful memories with careful pacing.",
      highlights: [
        "EMDR (Eye Movement Desensitization & Reprocessing) integration",
        "Paced carefully to prioritize safety and emotional regulation",
        "Resolve lingering triggers and restore your sense of internal safety",
      ],
      seoKeywords: "EMDR Therapist Santa Monica • Complex Trauma • Somatic Healing",
    },
    {
      id: "burnout",
      title: "Burnout & Perfectionism Counseling",
      tagline: "Reconnect with yourself after years of pushing through stress",
      image: "/images/service-burnout.png",
      icon: <Compass className="text-[#C87D55]" size={24} />,
      description:
        "Tailored for high achievers, entrepreneurs, creatives, and professionals who feel disconnected from themselves due to intense workplace or personal demands. Therapy becomes a grounded space to slow down, set boundaries, and thrive.",
      highlights: [
        "Address perfectionism and self-critical internal dialogues",
        "Establish healthy professional and personal boundaries",
        "Build a more sustainable, fulfilling relationship with work and life",
      ],
      seoKeywords: "Burnout Counseling Santa Monica • High Achiever Therapy • Career Stress",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF7F3]">
      <div className="section-container space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-sage text-xs font-semibold uppercase tracking-wider">
            <span>Specialized Clinical Practice Areas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E342B]">
            Therapy Tailored for Your <span className="italic text-[#C87D55]">Healing & Growth</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Every session is structured enough to feel supportive while leaving ample space for reflection. Explore Dr. Maya Reynolds&apos; core specialties in Santa Monica, CA.
          </p>
        </div>

        {/* Services Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D9] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Service Card Top Image */}
              <div className="relative h-56 w-full overflow-hidden bg-[#F3EEE8]">
                <Image
                  src={service.image}
                  alt={`${service.title} - Dr. Maya Reynolds Santa Monica`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 text-xs font-medium text-white/90 bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full w-fit">
                  {service.seoKeywords}
                </div>
              </div>

              {/* Service Card Content */}
              <div className="p-6 md:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#F8ECE6] text-[#C87D55]">
                      {service.icon}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1E342B] group-hover:text-[#C87D55] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm font-semibold text-[#A85D3B] italic">
                    &quot;{service.tagline}&quot;
                  </p>

                  <p className="text-sm text-[#475569] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 pt-2 border-t border-[#F1F5F9]">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#334155]">
                        <CheckCircle2 size={15} className="text-[#3B6252] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-6">
                  <button
                    onClick={onBookClick}
                    className="w-full btn-outline py-2.5 text-sm justify-center group-hover:bg-[#1E342B] group-hover:text-white group-hover:border-[#1E342B]"
                  >
                    <span>Schedule for {service.title.split(" ")[0]}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
