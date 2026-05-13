"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button, Ornament } from "@/components/ui";
import { FadeIn } from "./FadeIn";

export const AboutSection = () => {
  return (
    <section className="relative py-24 md:py-32 text-[#010C29] overflow-hidden">
      <Ornament
        position="right"
        opacity={0.3}
        className="absolute -bottom-40 -left-115 hidden md:block"
      />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left – Text */}
        <FadeIn>
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#010C29]/10 text-xs font-semibold uppercase tracking-wider text-[#4576FD] mb-6">
              Who are we?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Your digital partner for sustainable growth
            </h2>
            <p className="text-[#010C29]/60 text-lg mb-8 leading-relaxed">
              We craft modern digital strategies, web experiences and mobile
              systems that accelerate business growth and foster innovation in
              the digital age.
            </p>
            <Button icon={ArrowRight}>See More</Button>
          </div>
        </FadeIn>

        {/* Right – Image composition */}
        <FadeIn delay={0.2} className="relative">
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Main image */}
            <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/keyboard1.jpeg"
                alt="Our team at work"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent image */}
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/assets/keyboard1.jpeg"
                alt="Innovation process"
                fill
                className="object-cover saturate-0 hover:saturate-100 transition-all duration-700"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
