"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button, Ornament } from "@/components/ui";
import { FadeIn } from "./FadeIn";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export const AboutSection = () => {
  const t = useTranslations("About");

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
              {t("badge")}
            </span>
            <h2 className="section-title mb-6 !text-left">{t("title")}</h2>
            <p className="mb-8">{t("description")}</p>
            <Link href="/about">
              <Button icon={ArrowRight}>{t("cta")}</Button>
            </Link>
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
