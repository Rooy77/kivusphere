"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { ExternalLink } from "lucide-react";

/* ─────────────────────────────────────────────
   TYPES
 ───────────────────────────────────────────── */
type ImagePosition = "top" | "bottom" | "none";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  icon?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: ImagePosition;
  className?: string;
}

/* ─────────────────────────────────────────────
   ACCENT LINE
   Trait doré avec dégradé concentré sur la fin (droite → transparent)
   La couleur vive est à gauche, le transparent arrive progressivement
 ───────────────────────────────────────────── */
const AccentLine = () => (
  <div
    className="h-[2.5px] "
    style={{
      background:
        "linear-gradient(to right, var(--accent) 50%, transparent 100%)",
    }}
  />
);

/* ─────────────────────────────────────────────
   LIEN "Nos projets ↗"
 ───────────────────────────────────────────── */
const CardLink = ({
  href = "#",
  label = "Nos projets",
}: {
  href?: string;
  label?: string;
}) => (
  <Link
    href={href as any}
    className="inline-flex items-center gap-1.5 text-sm font-medium text-action"
  >
    {label}
    <ExternalLink size={13} strokeWidth={2} />
  </Link>
);

/* ─────────────────────────────────────────────
   BASE STYLE COMMUN
 ───────────────────────────────────────────── */
const baseStyle =
  "flex flex-col bg-[#f0f4ff] rounded-[32px] overflow-hidden border border-[#010C29]/10 shadow-sm hover:shadow-md transition-shadow duration-300 break-inside-avoid mb-6";

/* ─────────────────────────────────────────────
   COMPOSANT PRINCIPAL
 ───────────────────────────────────────────── */
export const Card = ({
  title,
  description,
  href = "#",
  linkLabel = "Nos projets",
  icon,
  image,
  imageAlt = "",
  imagePosition = "none",
  className = "",
}: CardProps) => {
  /* ────────────────────────────────────────
     VARIANTE A — Image en HAUT (Frame 92)
     Bords de l'image légèrement arrondis + marge interne
  ──────────────────────────────────────── */
  if (imagePosition === "top" && image) {
    return (
      <div className={`${baseStyle} ${className}`}>
        {/* Image avec marges internes et coins arrondis */}
        <div className="p-3 pb-0">
          <div className="relative w-full h-[200px] rounded-[20px] overflow-hidden border border-[#010C29]/8">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Texte */}
        <div className="flex flex-col gap-4 p-7 pt-6">
          <AccentLine />
          <h3 className="text-[#010C29] font-bold text-[16px] leading-snug">
            {title}
          </h3>
          <p className="">
            {description}
          </p>
          <CardLink href={href} label={linkLabel} />
        </div>
      </div>
    );
  }

  /* ────────────────────────────────────────
     VARIANTE B — Icône en haut (Frame 93)
     Fond uniforme, icône stroke fine
  ──────────────────────────────────────── */
  if (imagePosition === "none") {
    return (
      <div className={`${baseStyle} ${className}`}>
        <div className="flex flex-col gap-4 p-7">
          {/* Icône stroke fine */}
          {icon && (
            <div className="[&>svg]:w-9 [&>svg]:h-9 [&>svg]:stroke-[1.25] text-[#010C29] mb-1">
              {icon}
            </div>
          )}
          <AccentLine />
          <h3 className="text-[#010C29] font-bold text-[16px] leading-snug">
            {title}
          </h3>
          <p className="text-[#010C29]/55 text-[13px] leading-relaxed">
            {description}
          </p>
          <CardLink href={href} label={linkLabel} />
        </div>
      </div>
    );
  }

  /* ────────────────────────────────────────
     VARIANTE C — Image en BAS (Frame 97)
     Texte + séparateur en haut, image arrondie en bas
  ──────────────────────────────────────── */
  if (imagePosition === "bottom" && image) {
    return (
      <div className={`${baseStyle} ${className}`}>
        {/* Texte */}
        <div className="flex flex-col gap-4 p-7 pb-5">
          <h3 className="text-[#010C29] font-bold text-[16px] leading-snug">
            {title}
          </h3>
          <p className="text-[#010C29]/55 text-[13px] leading-relaxed">
            {description}
          </p>
          <CardLink href={href} label={linkLabel} />
          {/* Trait doré : séparateur avant l'image */}
          <AccentLine />
        </div>
        {/* Image arrondie avec marge interne */}
        <div className="px-3 pb-3">
          <div className="relative w-full h-[200px] rounded-[20px] overflow-hidden border border-[#010C29]/8">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  /* Fallback */
  return (
    <div className={`${baseStyle} ${className}`}>
      <div className="flex flex-col gap-4 p-7">
        <AccentLine />
        <h3 className="text-[#010C29] font-bold text-[16px] leading-snug">
          {title}
        </h3>
        <p className="text-[#010C29]/55 text-[13px] leading-relaxed">
          {description}
        </p>
        <CardLink href={href} label={linkLabel} />
      </div>
    </div>
  );
};
