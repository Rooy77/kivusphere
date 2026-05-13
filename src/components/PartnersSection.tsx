"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const PARTNERS = [
  { name: "IMAN", src: "/assets/logos/logo-iman.svg" },
  { name: "Blackborn", src: "/assets/logos/logo-blackborn.svg" },
  { name: "Horizon", src: "/assets/logos/logo-horizon.svg" },
  { name: "Soap", src: "/assets/logos/logo-soap.svg" },
  { name: "TOS", src: "/assets/logos/logo-tos.svg" },
  { name: "Warp", src: "/assets/logos/logo-warp.svg" },
];

export const PartnersSection = () => {
  return (
    <section className="relative py-24 md:py-32 text-[#010C29]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#010C29]/10 text-xs font-semibold uppercase tracking-wider text-[#4576FD] mb-4">
              Partners
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary">
              They Trust Us
            </h2>
          </div>
        </FadeIn>

        <div className="relative space-y-12 overflow-hidden py-10">
          {/* Gradients pour masquer les bords */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Premier Carrousel - Vers la gauche */}
          <FadeIn delay={0.1}>
            <div className="flex w-full">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="flex gap-20 items-center whitespace-nowrap"
              >
                {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map(
                  (p, idx) => (
                    <Image
                      key={`${p.name}-${idx}`}
                      src={p.src}
                      alt={p.name}
                      width={140}
                      height={60}
                      className="h-10 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                    />
                  )
                )}
              </motion.div>
            </div>
          </FadeIn>

          {/* Deuxième Carrousel - Vers la droite */}
          <FadeIn delay={0.2}>
            <div className="flex w-full">
              <motion.div
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  duration: 35,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="flex gap-20 items-center whitespace-nowrap"
              >
                {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS]
                  .reverse()
                  .map((p, idx) => (
                    <Image
                      key={`${p.name}-rev-${idx}`}
                      src={p.src}
                      alt={p.name}
                      width={140}
                      height={60}
                      className="h-10 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                    />
                  ))}
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
