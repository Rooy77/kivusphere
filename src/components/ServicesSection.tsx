"use client";

import Image from "next/image";
import { Card } from "@/components/ui";
import { FadeIn } from "./FadeIn";
import { useTranslations } from "next-intl";

const ServiceIcon = ({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) => (
  <Image
    src={src}
    alt=""
    width={width}
    height={height}
    className="block h-auto max-h-11 w-auto"
    aria-hidden
  />
);

export const ServicesSection = () => {
  const t = useTranslations("Services");

  const SERVICES = [
    {
      title: t("s1_title"),
      description: t("s1_desc"),
      image: "/assets/software.jpg",
      imagePosition: "top" as const,
      href: "/services",
    },
    {
      icon: <ServiceIcon src="/assets/marketing.svg" width={43} height={47} />,
      title: t("s2_title"),
      description: t("s2_desc"),
      imagePosition: "none" as const,
      href: "/services",
    },
    {
      icon: <ServiceIcon src="/assets/shield.svg" width={51} height={43} />,
      title: t("s3_title"),
      description: t("s3_desc"),
      imagePosition: "none" as const,
      href: "/services",
    },
    {
      title: t("s4_title"),
      description: t("s4_desc"),
      image: "/assets/consulting.jpg",
      imagePosition: "bottom" as const,
      href: "/services",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 text-[#010C29]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="self-start inline-block px-5 py-2 rounded-full border border-black text-xs font-medium text-black">
              {t("badge")}
            </span>
            <h2 className="section-title mb-4 whitespace-pre-line">
              {t("title")}
            </h2>
            <p className="max-w-xl mx-auto">{t("description")}</p>
          </div>
        </FadeIn>

        <div className="columns-1 md:columns-2 gap-8 [column-fill:_balance] max-w-[1048px] mx-auto">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <Card
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                imagePosition={service.imagePosition}
                linkLabel={t("card_link")}
                href={service.href}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
