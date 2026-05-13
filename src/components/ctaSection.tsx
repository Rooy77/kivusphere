"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { Button } from "./ui";

export const CtaSection = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-background.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#010C29]/85" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Turn ideas
            <br />
            Into Experiences
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-white/50 text-lg mb-8">
            We create clear, thoughtful, and human-centered digital experiences
            that help brands connect meaningfully with their audience.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <Button icon={ArrowRight}>Get Started</Button>
        </FadeIn>
      </div>
    </section>
  );
};
