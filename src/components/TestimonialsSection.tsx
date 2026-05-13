"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { FadeIn } from "./FadeIn";

const TESTIMONIAL = {
  name: "Ishimwe Israel Dixon",
  role: "CEO of Nexus OOS",
  quote:
    "We Work closely with our clients to create clear, thoughtful, and human-centered digital experiences. KivuSphere made our vision a reality.",
  image: "/assets/keyboard1.jpeg",
};

export const TestimonialsSection = () => {
  return (
    <section className="relative py-24 md:py-32  text-[#010C29]">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#010C29]/10 text-xs font-semibold uppercase tracking-wider text-[#4576FD] mb-4">
              Testimonial
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-[#010C29]/50 max-w-xl mx-auto">
              We work closely with our clients to create clear, thoughtful, and
              human-centered digital experiences.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative bg-white rounded-3xl shadow-xl p-2 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <Image
                  src={TESTIMONIAL.image}
                  alt={TESTIMONIAL.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Text */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <Quote className="w-10 h-10 text-[#4576FD] mb-4" />
                <h4 className="text-xl font-bold">{TESTIMONIAL.name}</h4>
                <span className="text-[#4576FD] text-sm font-medium mb-4">
                  {TESTIMONIAL.role}
                </span>
                <p className="text-[#010C29]/50 text-sm leading-relaxed">
                  {TESTIMONIAL.quote}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
