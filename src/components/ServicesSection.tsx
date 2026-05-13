"use client";

import React from "react";
import { Code, Pen, Shield, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui";
import { FadeIn } from "./FadeIn";

const SERVICES = [
  {
    icon: <Code />,
    title: "Software Engineering & Mobile Systems",
    description:
      "Creation of modern, high-performance and scalable websites. Robust mobile applications for Android and iOS.",
    image: "/assets/keyboard1.jpeg",
    imagePosition: "top" as const,
  },
  {
    icon: <Pen />,
    title: "Architecture, Graphic Design & UI/UX",
    description:
      "For interfaces that captivate and convert. Every pixel is designed to reduce friction and maximize customer engagement.",
    imagePosition: "none" as const,
  },
  {
    icon: <Shield />,
    title: "Systems Audit & Security (Consulting)",
    description:
      "In a hyper-connected world, security is the foundation of trust. Our experts analyze your vulnerabilities and optimize your infrastructure.",
    imagePosition: "none" as const,
  },
  {
    icon: <BarChart3 />,
    title: "Marketing Strategy & Digital Growth",
    description:
      "Advanced strategies to boost your visibility, engage your audience and convert more effectively through digital channels.",
    imagePosition: "bottom" as const,
    image: "/assets/hero-background.jpg",
  },
];

export const ServicesSection = () => {
  return (
    <section className="relative py-24 md:py-32 text-[#010C29]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#010C29]/10 text-xs font-semibold uppercase tracking-wider text-[#4576FD] mb-4">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Design With Purpose.
              <br />
              Build With Impact.
            </h2>
            <p className="text-[#010C29]/50 max-w-xl mx-auto">
              We Work closely with our clients to create clear, thoughtful, and
              human-centered digital experiences.
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
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
