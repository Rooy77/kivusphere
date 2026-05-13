"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { BackgroundGrid } from "@/components/Background";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BlogSection } from "@/components/BlogSection";
import { EventsSection } from "@/components/EventsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/ctaSection";

/**
 * ╔═══════════════════════════════════════════════════════╗
 * ║  KIVUSPHERE - MAIN LANDING PAGE                        ║
 * ╚═══════════════════════════════════════════════════════╝
 */
export default function Home() {
  return (
    <main className="relative bg-white selection:bg-primary selection:text-white">
      {/* GLOBAL NAVIGATION */}
      <Navbar />

      {/* 1. HERO & BACKGROUND */}
      <div className="relative bg-black overflow-hidden">
        <BackgroundGrid />
        <HeroSection />
      </div>

      {/* 2. ABOUT US */}
      <AboutSection />

      {/* 3. OUR SERVICES */}
      <ServicesSection />

      {/* 4. BLOG / INSIGHTS */}
      <BlogSection />

      {/* 5. EVENTS & COLLABORATIONS */}
      <EventsSection />

      {/* 6. PARTNERS CAROUSEL */}
      <PartnersSection />

      {/* 7. CLIENT TESTIMONIALS */}
      <TestimonialsSection />

      <CtaSection />

      {/* 8. FOOTER & CONTACT */}
      <div className="p-4">
        <Footer />
      </div>
    </main>
  );
}
