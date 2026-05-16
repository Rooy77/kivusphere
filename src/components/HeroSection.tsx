"use client";

import React from "react";
import { ArrowDownRight } from "lucide-react";
import { Button } from "./ui";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export const HeroSection = () => {
  const t = useTranslations("Hero");

  return (
    <section
      data-scroll-section
      className="wxr-wrapper relative flex min-h-screen w-full items-center justify-center text-white"
    >
      <div className="relative z-10 pt-32 pb-16 md:pt-48 md:pb-32 flex flex-col min-h-screen w-full items-center px-4 overflow-hidden">
        <div className="vide"></div>
        <div className="item-center relative z-10 flex justify-center mt-16 mb-6">
          <div className="max-w-xl px-4 text-center sm:px-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto drop-shadow-2xl">
              {t('title').split('|').map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>
            {/* Subheading */}
            <p className="mt-8 hero-p font-medium">
              {t('description')}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/portfolio">
            <Button icon={ArrowDownRight}>{t('cta_work')}</Button>
          </Link>
        </div>
        <div className="vide mb-16"></div>
      </div>
    </section>
  );
};
