"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Calendar } from "@/components/Icons";

interface FAQSectionProps {
  onBookClick: () => void;
}

export default function FAQSection({ onBookClick }: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you offer in-person therapy or virtual telehealth sessions?",
      answer:
        "I offer both in-person therapy from my quiet, private office in Santa Monica, CA (located at 123th Street 45 W, Santa Monica, CA 90401) and HIPAA-compliant secure telehealth video sessions for clients residing anywhere across California.",
    },
    {
      question: "What can I expect during our first session together?",
      answer:
        "Our initial session is a collaborative conversation to explore what brings you to therapy, your current challenges, and your goals. We proceed at a comfortable pace, ensuring you feel respected, understood, and actively involved in designing your care plan.",
    },
    {
      question: "How do CBT, EMDR, and Somatic techniques work together?",
      answer:
        "CBT helps reframe rigid, self-critical thoughts; EMDR processes painful underlying trauma memories; and somatic/mindfulness techniques soothe physical nervous system tension. Combining these modalities addresses both the emotional and physiological sides of your experience.",
    },
    {
      question: "How is trauma therapy structured to ensure safety?",
      answer:
        "Trauma work in my practice is carefully paced. We prioritize grounding, safety, and emotional stabilization first so that you develop effective daily regulation tools before diving into processing deeper memories.",
    },
    {
      question: "Who is your practice best suited for?",
      answer:
        "My practice specializes in working with adults experiencing anxiety, panic, trauma, and professional burnout—particularly high-achieving professionals, entrepreneurs, and self-aware individuals seeking practical tools and depth-oriented healing.",
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF7F3]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Help Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-sage text-xs font-semibold uppercase tracking-wider">
              <HelpCircle size={14} className="text-[#C87D55]" />
              <span>Questions & Clarity</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E342B]">
              Frequently Asked <span className="italic text-[#C87D55]">Questions</span>
            </h2>

            <p className="text-base text-[#475569] leading-relaxed">
              Deciding to start therapy is a meaningful step. Here are answers to common questions about my practice in Santa Monica and virtual sessions across California.
            </p>

            <div className="bg-[#1E342B] text-white p-6 rounded-2xl space-y-4 shadow-md border border-[#2C4A3E]">
              <h3 className="font-serif text-lg font-bold text-[#E4EEE8]">
                Have a specific question not listed here?
              </h3>
              <p className="text-xs text-[#C2D6CC] leading-relaxed">
                I invite you to reach out for a brief, complimentary consultation to discuss your specific needs and confirm mutual fit.
              </p>
              <button
                onClick={onBookClick}
                className="btn-secondary w-full text-xs py-2.5 justify-center cursor-pointer"
              >
                <Calendar size={14} />
                <span>Ask Dr. Maya Reynolds</span>
              </button>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? "border-[#C87D55] shadow-md" : "border-[#E8E2D9] hover:border-[#C87D55]/50"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-semibold text-base sm:text-lg text-[#1E342B] focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "bg-[#C87D55] text-white rotate-180" : "bg-[#F4EFEA] text-[#1E342B]"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9] animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
