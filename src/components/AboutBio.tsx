"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Award, BookOpen, Heart, MapPin } from "@/components/Icons";

export default function AboutBio() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F4EFEA] border-y border-[#E8E2D9]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Credentials Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <Image
                src="/images/dr-maya-reynolds.png"
                alt="Dr. Maya Reynolds, PsyD - Licensed Psychologist in Santa Monica"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="p-5 bg-[#1E342B] text-white space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#D98E66] uppercase tracking-wider">
                  <Award size={14} /> Licensed Clinical Psychologist
                </div>
                <h3 className="font-serif text-xl font-bold">
                  Dr. Maya Reynolds, PsyD
                </h3>
                <p className="text-xs text-[#C2D6CC] leading-relaxed">
                  Doctor of Psychology (PsyD) • California Licensed Psychologist • Specialist in Anxiety, EMDR Trauma Processing & Professional Burnout
                </p>
              </div>
            </div>

            {/* Quick Practice Info Card */}
            <div className="bg-white p-5 rounded-xl border border-[#E8E2D9] shadow-xs space-y-3 text-xs text-[#334155]">
              <div className="flex items-center gap-2 font-semibold text-[#1E342B]">
                <MapPin size={16} className="text-[#C87D55]" />
                <span>Practice Locations & Format</span>
              </div>
              <p>
                <strong>In-Person:</strong> 123th Street 45 W, Santa Monica, CA 90401
              </p>
              <p>
                <strong>Telehealth:</strong> Secure video sessions available statewide across California.
              </p>
            </div>
          </div>

          {/* Right Column: Bio Copy strictly from profile */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-sage text-xs font-semibold uppercase tracking-wider">
              <span>About Dr. Maya Reynolds</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-4xl font-bold text-[#1E342B] leading-tight">
              A Warm, Collaborative, and <span className="italic text-[#C87D55]">Grounded Approach</span> to Therapy
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
              <p>
                I’m a licensed clinical psychologist based in <strong>Santa Monica, California</strong>, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
              </p>
              <p>
                My work often focuses on <strong>anxiety, panic, trauma, and burnout</strong>. Clients frequently come to me feeling &quot;functional&quot; on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.
              </p>
              <p>
                I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as <strong>cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques</strong> to help clients understand both the emotional and physiological sides of what they’re experiencing.
              </p>
              <p>
                Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as complex patterns stemming from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel regulated in daily life—not just during sessions.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-[#E8E2D9] text-xs font-medium text-[#1E342B]">
                <Heart size={16} className="text-[#C87D55]" />
                <span>Paced Carefully for Safety & Regulation</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-[#E8E2D9] text-xs font-medium text-[#1E342B]">
                <BookOpen size={16} className="text-[#C87D55]" />
                <span>CBT & EMDR Evidence-Based Protocol</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E8E2D9] flex items-center justify-between">
              <span className="font-serif italic text-[#1E342B] font-semibold text-lg">
                &quot;Therapy works best when clients feel respected, understood, and actively involved.&quot;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
