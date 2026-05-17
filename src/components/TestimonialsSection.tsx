"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { useTranslations } from "next-intl";

export const TestimonialsSection = () => {
  const t = useTranslations("Testimonials");

  const TESTIMONIAL = {
    name: "Ishimwe Israel Dixon",
    role: "CEO of Nexus OOS",
    quote: t("client_quote"),
    image: "/assets/keyboard1.jpeg",
  };
  const gradientBorderStyle = {
    background:
      "linear-gradient(#f0f4ff, #f0f4ff) padding-box, linear-gradient(135.64deg, rgba(163, 187, 255, 0.2835) 5.15%, rgba(241, 247, 255, 0.81) 50.01%, rgba(163, 187, 255, 0.81) 94.85%) border-box",
    border: "1px solid transparent",
  };

  return (
    <section className="relative py-24 md:py-32  text-[#010C29]">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="self-start inline-block px-5 py-2 rounded-full border border-black text-xs font-medium text-black">
              {t("badge")}
            </span>
            <h2 className="section-title mb-4">{t("title")}</h2>
            <p className="max-w-xl mx-auto">{t("description")}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            className="relative bg-white rounded-3xl  p-2 max-w-3xl mx-auto"
            style={gradientBorderStyle}
          >
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
              {/* Image */}
              <div className="relative h-64 md:h-auto p-2 m-3 rounded-2xl">
                <Image
                  src={TESTIMONIAL.image}
                  alt={TESTIMONIAL.name}
                  fill
                  className="object-cover rounded-[34px]"
                />
              </div>
              {/* Text */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <Quote className="w-10 h-10 text-[#4576FD] mb-4" />
                <h4 className="text-xl font-bold">{TESTIMONIAL.name}</h4>
                <span className="text-[#4576FD] text-sm font-medium mb-4">
                  {TESTIMONIAL.role}
                </span>
                <p className="">{TESTIMONIAL.quote}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
