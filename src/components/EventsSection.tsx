"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

export const EventsSection = () => {
  return (
    <section className="relative py-24 md:py-32 text-[#010C29] bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#010C29]/10 text-xs font-semibold uppercase tracking-wider text-[#4576FD] mb-4">
              Events & Training
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Learn. Collaborate. Grow.
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Event Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/assets/keyboard1.jpeg"
                alt="Bootcamp Tech Event"
                fill
                className="object-cover"
              />
            </div>

            {/* Event info card */}
            <div className="bg-[#f0f4ff] rounded-[40px] p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Unique <span className="text-[#4576FD]">Bootcamp TECH</span> in
                collaboration with Huawei.
              </h3>
              <p className="text-[#010C29]/60 text-lg leading-relaxed mb-10">
                Participate in intensive training sessions led by industry
                experts. We foster digital innovation and tech education through
                hands-on experiences.
              </p>
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-sm font-bold text-[#010C29]/40 hover:text-[#010C29] transition-colors cursor-pointer group">
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />{" "}
                  Prev
                </button>
                <button className="flex items-center gap-2 text-sm font-bold text-[#010C29] cursor-pointer group">
                  Next{" "}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
