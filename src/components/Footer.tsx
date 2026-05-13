"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import {
  Mail,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui";
import { FadeIn } from "./FadeIn";
import { useTranslations } from "next-intl";

const FOOTER_LINKS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "portfolio", href: "/portfolio" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
];

export const Footer = () => {
  const t = useTranslations("Footer");
  const nt = useTranslations("Navbar");

  return (
    <footer className="relative bg-[#F0F4FF] text-[#010C29] py-16 rounded-[50px] m-6 max-w-[1232px] mx-auto ">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <FadeIn>
          <Image
            src="/assets/logos/kivusphere-full-dark.svg"
            alt="KivuSphere"
            width={200}
            height={50}
            className="mx-auto mb-6"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-[#010C29]/50 text-sm max-w-md mx-auto mb-8">
            {t('address')}
          </p>
        </FadeIn>

        {/* Navigation links */}
        <FadeIn delay={0.15}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {FOOTER_LINKS.map((link, i) => (
              <Link
                key={link.key}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-secondary text-white"
                    : "border border-secondary/15 text-secondary/60 hover:border-[#4576FD] hover:text-[#4576FD]"
                }`}
              >
                {nt(link.key)}
              </Link>
            ))}
          </div>
        </FadeIn>

        {/* Newsletter */}
        <FadeIn delay={0.2}>
          <div className="max-w-md mx-auto mb-10">
            <div className="relative flex items-center bg-white rounded-full shadow-sm border border-[#010C29]/5 overflow-hidden">
              <Mail className="absolute left-4 w-5 h-5 text-[#010C29]/30" />
              <input
                type="email"
                placeholder={t('newsletter_placeholder')}
                className="flex-1 pl-12 pr-4 py-4 text-sm bg-transparent outline-none text-[#010C29] placeholder:text-[#010C29]/30"
              />
              <Button icon={Send}>{t('newsletter_button')}</Button>
            </div>
          </div>
        </FadeIn>

        {/* Social icons */}
        <FadeIn delay={0.25}>
          <div className="flex justify-center gap-4 mb-8">
            {[
              { id: "facebook", icon: Facebook },
              { id: "instagram", icon: Instagram },
              { id: "twitter", icon: Twitter },
              { id: "linkedin", icon: Linkedin },
              { id: "youtube", icon: Youtube },
            ].map((social) => (
              <a
                key={social.id}
                href="#"
                className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-[#4576FD] transition-all hover:scale-110 active:scale-95"
                aria-label={social.id}
              >
                <social.icon size={18} strokeWidth={2} />
              </a>
            ))}
          </div>
        </FadeIn>

        <div className="text-xs text-[#010C29]/30 pt-6 border-t border-[#010C29]/5">
          © {new Date().getFullYear()} KivuSphere. {t('rights')}
        </div>
      </div>
    </footer>
  );
};
