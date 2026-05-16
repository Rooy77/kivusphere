"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { useTranslations } from "next-intl";

export const EventsSection = () => {
  const t = useTranslations("Events");

  return (
    <section className="relative py-24 md:py-32 text-[#010C29] bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="self-start inline-block px-5 py-2 rounded-full border border-black text-xs font-medium text-black">
              {t("badge")}
            </span>
            <h2 className="section-title">{t("title")}</h2>
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
                {t("event_title")}
              </h3>
              <p className="mb-10">{t("event_desc")}</p>
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-sm font-bold text-[#010C29]/40 hover:text-[#010C29] transition-colors cursor-pointer group">
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />{" "}
                  {t("prev")}
                </button>
                <button className="flex items-center gap-2 text-sm font-bold text-[#010C29] cursor-pointer group">
                  {t("next")}{" "}
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
