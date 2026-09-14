"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Calendar, MapPin, Phone, ArrowRight } from "@/components/Icons";

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#1E342B] text-[#E4EEE8] text-xs md:text-sm py-2 px-4 text-center flex items-center justify-center gap-2 font-medium border-b border-[#2C4A3E]">
        <span className="inline-block w-2 h-2 rounded-full bg-[#D98E66] animate-pulse"></span>
        <span>Accepting New Clients for In-Person Therapy in Santa Monica & Telehealth Across California</span>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF7F3]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D9] py-3.5"
            : "bg-[#FAF7F3] py-5 border-b border-[#E8E2D9]/60"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-[#1E342B] group-hover:text-[#C87D55] transition-colors">
              Dr. Maya Reynolds<span className="text-[#C87D55]">, PsyD</span>
            </span>
            <span className="text-[11px] uppercase tracking-widest text-[#4B7865] font-semibold flex items-center gap-1">
              <MapPin size={11} className="text-[#C87D55]" /> Santa Monica, CA • Licensed Psychologist
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#334155]">
            <Link href="#about" className="hover:text-[#1E342B] transition-colors py-1 hover:border-b-2 hover:border-[#C87D55]">
              About
            </Link>
            <Link href="#services" className="hover:text-[#1E342B] transition-colors py-1 hover:border-b-2 hover:border-[#C87D55]">
              Services
            </Link>
            <Link href="#modalities" className="hover:text-[#1E342B] transition-colors py-1 hover:border-b-2 hover:border-[#C87D55]">
              Approach
            </Link>
            <Link href="#office" className="hover:text-[#1E342B] transition-colors py-1 hover:border-b-2 hover:border-[#C87D55] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C87D55]"></span>
              Our Office
            </Link>
            <Link href="#faq" className="hover:text-[#1E342B] transition-colors py-1 hover:border-b-2 hover:border-[#C87D55]">
              FAQs
            </Link>
            <Link href="#contact" className="hover:text-[#1E342B] transition-colors py-1 hover:border-b-2 hover:border-[#C87D55]">
              Contact
            </Link>
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onBookClick}
              className="btn-primary text-xs md:text-sm py-2.5 px-5 cursor-pointer"
            >
              <Calendar size={16} />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1E342B] hover:bg-[#E4EEE8] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F3] border-b border-[#E8E2D9] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-3 font-medium text-[#1E342B]">
              <Link
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E8E2D9] hover:text-[#C87D55]"
              >
                About Dr. Maya Reynolds
              </Link>
              <Link
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E8E2D9] hover:text-[#C87D55]"
              >
                Specialized Services
              </Link>
              <Link
                href="#modalities"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E8E2D9] hover:text-[#C87D55]"
              >
                Therapeutic Approach (CBT & EMDR)
              </Link>
              <Link
                href="#office"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E8E2D9] text-[#C87D55] font-semibold flex items-center justify-between"
              >
                <span>Our Santa Monica Office</span>
                <span className="text-xs bg-[#F8ECE6] px-2 py-0.5 rounded text-[#A85D3B]">New Section</span>
              </Link>
              <Link
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E8E2D9] hover:text-[#C87D55]"
              >
                Frequently Asked Questions
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#C87D55]"
              >
                Contact & Location
              </Link>
            </nav>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="btn-secondary w-full py-3 text-sm justify-center"
              >
                <Calendar size={18} />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
