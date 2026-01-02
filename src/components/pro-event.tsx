"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroCareer() {
  return (
    <section
      className="
        relative overflow-hidden text-white
        min-h-[50vh] md:min-h-[55vh] lg:min-h-[20vh]
        px-5 sm:px-8 lg:px-12
        py-16 sm:py-20 lg:py-28
      "
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <Image
        src="/image/hero.jpeg"
        alt="KivuSphere accompagne la transformation digitale et l’innovation en Afrique"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#0B0F2F]/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F2F]/90 via-[#0B0F2F]/80 to-[#0B0F2F]/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center">
        <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl">
          <h1
            id="hero-heading"
            className="
              font-bold leading-tight
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            "
          >
            Nous bâtissons des solutions
            <br />
            digitales durables
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#4576FD]">
            KivuSphere accompagne les organisations, entreprises et institutions
            dans leur transformation digitale, stratégique et opérationnelle.
          </p>

          {/* CTA */}
          {/* CTA */}
          <div className="mt-8 sm:mt-10 flex justify-center sm:justify-start">
            <div className="inline-grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/actualites"
                className="
                  group inline-flex items-center justify-center gap-3
                  rounded-full bg-[#4576FD]
                  px-6 sm:px-8 py-2.5
                  text-sm font-medium text-white
                  transition hover:scale-105 active:scale-95
                "
                aria-label="Voir les actualités de KivuSphere"
              >
                Actualités
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/events"
                className="
                  group inline-flex items-center justify-center gap-3
                  rounded-full border border-white/40
                  bg-white/10 backdrop-blur
                  px-6 sm:px-8 py-2.5
                  text-sm font-medium text-white
                  transition hover:bg-white/20
                "
                aria-label="Découvrir les événements KivuSphere"
              >
                Nos événements
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
