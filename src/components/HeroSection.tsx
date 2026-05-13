"use client";

import React from "react";
import { ArrowDownRight } from "lucide-react";
import { Button } from "./ui";

export const HeroSection = () => {
  return (
    <section
      data-scroll-section
      className="wxr-wrapper relative flex min-h-screen w-full items-center justify-center text-white"
    >
      <div className="relative z-10 pt-32 pb-16 md:pt-48 md:pb-32 flex flex-col min-h-screen w-full items-center px-4 overflow-hidden">
        <div className="vide"></div>
        <div className="item-center relative z-10 flex justify-center mt-16 mb-6">
          <div className="max-w-xl px-4 text-center sm:px-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white tracking-tight leading-[1] mb-6 max-w-4xl mx-auto drop-shadow-2xl">
              Transformez <br /> votre vision{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
                en <br /> succès digital.
              </span>
            </h1>
            {/* Subheading */}
            <p className="mt-8 text-sm font-medium text-gray-200 dark:text-gray-400">
              Nous sommes structure de consultance moderne dédiée à
              l&apos;accompagner et la transformation digital des entreprises en{" "}
              <span className="font-bold">RD Congo, basé à Bukavu.</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button icon={ArrowDownRight}>Nous découvrire</Button>
        </div>
        <div className="vide mb-16"></div>
      </div>
    </section>
  );
};
