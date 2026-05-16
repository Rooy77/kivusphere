"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { Button } from "./ui";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export const CtaSection = () => {
  const t = useTranslations("CTA");

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-background.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#010C29]/85" />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="section-title !text-white mb-6">{t("title")}</h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className=" mb-8">{t("description")}</p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <Link href="/contact">
            <Button icon={ArrowRight}>{t("cta")}</Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};
