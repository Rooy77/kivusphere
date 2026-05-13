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

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  return (
    <main className="relative bg-white selection:bg-primary selection:text-white">
      <Navbar />

      <div className="relative bg-black overflow-hidden">
        <BackgroundGrid />
        <HeroSection />
      </div>

      <AboutSection />
      <ServicesSection />
      <BlogSection />
      <EventsSection />
      <PartnersSection />
      <TestimonialsSection />
      <CtaSection />

      <div className="p-4">
        <Footer />
      </div>
    </main>
  );
}
