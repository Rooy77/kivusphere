"use client";

import React from "react";
import { Code, Pen, Shield, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui";
import { FadeIn } from "./FadeIn";
import { useTranslations } from "next-intl";

export const ServicesSection = () => {
  const t = useTranslations("Services");

  const SERVICES = [
    {
      icon: <Code />,
      title: t('s1_title'),
      description: t('s1_desc'),
      image: "/assets/keyboard1.jpeg",
      imagePosition: "top" as const,
      href: "/services",
    },
    {
      icon: <Pen />,
      title: t('s2_title'),
      description: t('s2_desc'),
      imagePosition: "none" as const,
      href: "/services",
    },
    {
      icon: <Shield />,
      title: t('s3_title'),
      description: t('s3_desc'),
      imagePosition: "none" as const,
      href: "/services",
    },
    {
      icon: <BarChart3 />,
      title: t('s4_title'),
      description: t('s4_desc'),
      imagePosition: "bottom" as const,
      image: "/assets/hero-background.jpg",
      href: "/services",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 text-[#010C29]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#010C29]/10 text-xs font-semibold uppercase tracking-wider text-[#4576FD] mb-4">
              {t('badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('title')}
            </h2>
            <p className="text-[#010C29]/50 max-w-xl mx-auto">
              {t('description')}
            </p>
          </div>
        </FadeIn>

        <div className="columns-1 md:columns-2 gap-8 [column-fill:_balance]">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <Card
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                imagePosition={service.imagePosition}
                linkLabel={t('card_link')}
                href={service.href}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
