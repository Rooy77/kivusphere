"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button, VisionBadge } from "@/components/ui";
import { FadeIn } from "./FadeIn";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export const AboutSection = () => {
  const t = useTranslations("About");
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-24 md:py-32 bg-white text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr_1fr] gap-8 md:gap-10 items-center">
          {/* ── Colonne gauche : Texte ── */}
          <FadeIn>
            <div className="flex flex-col gap-6">
              {/* Badge pill */}
              <span className="self-start inline-block px-5 py-2 rounded-full border border-black text-xs font-medium text-black">
                {t("badge")}
              </span>

              {/* Title */}
              <h2 className="section-title !text-left !text-[38px] md:!text-[42px] !leading-[1.15]">
                {t("title")}
              </h2>

              {/* Description */}
              <p className="!text-left text-foreground/60 leading-relaxed">
                {t("description")}
              </p>

              {/* CTA */}
              <div>
                <Link href="/portfolio">
                  <Button icon={ArrowRight}>{t("cta")}</Button>
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* ── Colonne centrale : Image + Play button ── */}
          <FadeIn delay={0.15} className="relative">
            <div className="relative rounded-[28px] overflow-hidden aspect-square md:aspect-[4/4.5]">
              <Image
                src="/assets/mockup.png"
                alt="KivuSphere apps mockup"
                fill
                className="object-cover scale-125 overflow-hidden"
              />
              {/* Play button overlay */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                aria-label="Play video"
              >
                <div className="relative flex items-center justify-center">
                  {/* Outer ring - 132px, 45% opacity secondary */}
                  <div className="w-[132px] h-[132px] rounded-full bg-secondary/45 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-all duration-500">
                    {/* Inner circle - 88px, full secondary */}
                    <div className="w-[88px] h-[88px] rounded-full bg-secondary flex items-center justify-center shadow-2xl">
                      <Play className="w-[46px] h-[46px] text-white bg-white rounded-full fill-secondary p-2" />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </FadeIn>

          {/* ── Colonne droite : Carte Vision ── */}
          <FadeIn delay={0.3}>
            <div className="flex flex-col gap-4">
              {/* Vision photo avec badge glassmorphisme pixel-perfect */}
              <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-lg border border-foreground/5">
                <Image
                  src="/assets/conference.png"
                  alt="KivuSphere vision"
                  fill
                  className="object-cover"
                />
                {/* Badge VISION — composant réutilisable pixel-perfect Figma */}
                <VisionBadge label={t("vision_label")} />
              </div>

              {/* Vision text */}
              <p className="!text-left text-foreground/70 text-sm leading-snug">
                {t("vision_text")}
              </p>

              {/* Nav arrows - 40px circles, one outlined, one filled secondary */}
              <div className="flex items-center gap-3 mt-2">
                <button className="w-10 h-10 rounded-full border border-secondary flex items-center justify-center text-secondary hover:bg-secondary/10 transition-all duration-300 cursor-pointer">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-primary transition-all duration-300 cursor-pointer shadow-lg shadow-secondary/20">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
