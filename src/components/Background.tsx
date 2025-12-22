"use client";

import React from 'react';
import Image from 'next/image';

export const BackgroundGrid = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] z-0 pointer-events-none overflow-hidden">
    <div className="relative w-full h-[400px] sm:h-[550px] md:h-[700px] lg:h-[850px]">
      <Image
        src="/image/back.png"
        alt="Horizon planétaire lumineux"
        fill
        className="object-cover object-bottom mix-blend-lighten opacity-30 saturate-150 contrast-125 blur-sm"
        priority
      />
    </div>
  </div>
);
