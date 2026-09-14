"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueGrid from "@/components/ValueGrid";
import Services from "@/components/Services";
import AboutBio from "@/components/AboutBio";
import Modalities from "@/components/Modalities";
import OfficeSection from "@/components/OfficeSection";
import ClientFocus from "@/components/ClientFocus";
import FAQSection from "@/components/FAQSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-[#FAF7F3] text-[#1E293B] flex flex-col justify-between">
      <div>
        <Header onBookClick={handleOpenModal} />
        <Hero onBookClick={handleOpenModal} />
        <ValueGrid />
        <Services onBookClick={handleOpenModal} />
        <AboutBio />
        <Modalities />
        <OfficeSection onBookClick={handleOpenModal} />
        <ClientFocus />
        <FAQSection onBookClick={handleOpenModal} />
        <CallToAction onBookClick={handleOpenModal} />
      </div>

      <Footer />

      <ConsultationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
