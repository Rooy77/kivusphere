"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { useTranslations } from "next-intl";

const PARTNERS = [
  { name: "IMAN", src: "/assets/logos/logo-iman.svg" },
  { name: "Blackborn", src: "/assets/logos/logo-blackborn.svg" },
  { name: "Horizon", src: "/assets/logos/logo-horizon.svg" },
  { name: "Soap", src: "/assets/logos/logo-soap.svg" },
  { name: "TOS", src: "/assets/logos/logo-tos.svg" },
  { name: "Warp", src: "/assets/logos/logo-warp.svg" },
];

export const PartnersSection = () => {
  const t = useTranslations("Partners");

  return (
    <section className="relative py-24 md:py-32 text-[#010C29]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="self-start inline-block px-5 py-2 rounded-full border border-black text-xs font-medium text-black">
              {t("badge")}
            </span>
            <h2 className="section-title">{t("title")}</h2>
          </div>
        </FadeIn>

        <div className="flex flex-wrap items-center justify-center gap-6 max-w-7xl">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center w-[140px] sm:w-[180px] md:w-[220px] lg:w-[280px] h-24 bg-white transition"
            >
              <Image
                src={partner.src}
                alt={`${partner.name} logo`}
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
