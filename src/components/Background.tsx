"use client";

import React from "react";
import Image from "next/image";
import { Ornament } from "./ui";

export const BackgroundGrid = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] z-0 pointer-events-none overflow-hidden">
    <div className="flex flex-col items-center w-full">
      {/* Horizon Image */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[700px] lg:h-[850px]">
        <Image
          src="/assets/hero-background.png"
          alt="Horizon planétaire lumineux"
          fill
          className="object-cover object-bottom mix-blend-lighten opacity-30 saturate-150 contrast-125 blur-sm"
          priority
        />
      </div>

      {/* Ornament Sphere - Mobile only (follows the image) */}
      <div className="relative w-[90vw] h-[90vw] !mt-[20vh] md:hidden pointer-events-none">
        <Ornament
          position="left"
          opacity={0.3}
          className="!-left-30 rotate-6"
        />
      </div>
    </div>
  </div>
);
