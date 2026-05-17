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
import { Ornament } from "@/components/ui";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="relative bg-white selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />

      <div className="relative bg-black overflow-hidden">
        <BackgroundGrid />
        <HeroSection />
      </div>

      <AboutSection />

      <Ornament
        opacity={0.3}
        className="absolute z-10 pointer-events-none hidden md:block"
        style={{
          width: "1113px",
          height: "1109px",
          left: "-744px",
          top: "1174px",
          transform: "matrix(-1, 0, 0, 1, 0, 0)",
        }}
      />

      <ServicesSection />

      <Ornament
        opacity={0.2}
        className="absolute z-10 pointer-events-none hidden md:block"
        style={{
          width: "1113px",
          height: "1109px",
          left: "1075px",
          top: "3561px",
          transform: "matrix(-1, 0, 0, 1, 0, 0)",
        }}
      />

      <BlogSection />
      <EventsSection />
      <PartnersSection />
      <TestimonialsSection />
      <CtaSection />

      <Ornament
        opacity={0.05}
        className="absolute z-10 pointer-events-none hidden md:block"
        style={{
          width: "1113px",
          height: "1109px",
          left: "-587px",
          top: "6046px",
        }}
      />

      <div className="p-4">
        <Footer />
      </div>
    </main>
  );
}
