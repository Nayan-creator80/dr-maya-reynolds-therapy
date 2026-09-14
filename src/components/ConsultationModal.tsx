"use client";

import React, { useState } from "react";
import { X, Calendar, MapPin, Video, CheckCircle2, User, Mail, Phone } from "@/components/Icons";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "in-person",
    serviceInterest: "anxiety",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E8E2D9] relative animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-[#1E342B] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[#C2D6CC] hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
          <div className="inline-flex items-center gap-1.5 bg-[#2C4A3E] px-3 py-1 rounded-full text-xs font-semibold text-[#D98E66] border border-[#4B7865] mb-2">
            <Calendar size={13} />
            <span>Consultation Booking</span>
          </div>
          <h3 className="font-serif text-2xl font-bold">
            Schedule with Dr. Maya Reynolds
          </h3>
          <p className="text-xs text-[#C2D6CC] mt-1">
            Licensed Clinical Psychologist • Santa Monica, CA & Statewide Telehealth
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E4EEE8] text-[#1E342B] mx-auto flex items-center justify-center">
                <CheckCircle2 size={36} className="text-[#3B6252]" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#1E342B]">
                Request Received!
              </h4>
              <p className="text-sm text-[#475569] max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. Dr. Maya Reynolds&apos; office will contact you within 24 business hours to confirm your consultation time.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-primary text-sm py-2.5 px-6 mt-2 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* Session Format Preference */}
              <div>
                <label className="block font-semibold text-[#1E342B] mb-1.5">
                  Preferred Session Format *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label
                    className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer font-medium transition-all ${
                      formData.sessionType === "in-person"
                        ? "border-[#C87D55] bg-[#FDF7F4] text-[#A85D3B]"
                        : "border-[#E8E2D9] text-[#475569] hover:bg-[#FAF7F3]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="sessionType"
                      value="in-person"
                      checked={formData.sessionType === "in-person"}
                      onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                      className="sr-only"
                    />
                    <MapPin size={16} className="text-[#C87D55]" />
                    <span>In-Person (Santa Monica)</span>
                  </label>

                  <label
                    className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer font-medium transition-all ${
                      formData.sessionType === "telehealth"
                        ? "border-[#C87D55] bg-[#FDF7F4] text-[#A85D3B]"
                        : "border-[#E8E2D9] text-[#475569] hover:bg-[#FAF7F3]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="sessionType"
                      value="telehealth"
                      checked={formData.sessionType === "telehealth"}
                      onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                      className="sr-only"
                    />
                    <Video size={16} className="text-[#C87D55]" />
                    <span>Telehealth (California)</span>
                  </label>
                </div>
              </div>

              {/* Service Interest */}
              <div>
                <label className="block font-semibold text-[#1E342B] mb-1.5">
                  Primary Area of Interest
                </label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full p-3 rounded-xl border border-[#E8E2D9] bg-white text-[#1E342B] focus:outline-none focus:border-[#C87D55]"
                >
                  <option value="anxiety">Anxiety & Panic Therapy</option>
                  <option value="trauma">Trauma & EMDR Therapy</option>
                  <option value="burnout">Professional Burnout & Perfectionism</option>
                  <option value="general">General Consultation / Exploration</option>
                </select>
              </div>

              {/* Name & Contact Fields */}
              <div className="space-y-3">
                <div>
                  <label className="block font-semibold text-[#1E342B] mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-3 text-[#64748B]" />
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#E8E2D9] text-[#1E342B] focus:outline-none focus:border-[#C87D55]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-[#1E342B] mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-3 text-[#64748B]" />
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#E8E2D9] text-[#1E342B] focus:outline-none focus:border-[#C87D55]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#1E342B] mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-3 text-[#64748B]" />
                      <input
                        type="tel"
                        required
                        placeholder="(310) 555-0192"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#E8E2D9] text-[#1E342B] focus:outline-none focus:border-[#C87D55]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#1E342B] mb-1">
                    Brief Note / Goals (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Share anything you'd like Dr. Maya Reynolds to know..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-xl border border-[#E8E2D9] text-[#1E342B] focus:outline-none focus:border-[#C87D55]"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-primary w-full py-3 text-sm font-semibold justify-center cursor-pointer mt-2"
              >
                <span>Request Free Consultation</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
