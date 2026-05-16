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
} from "lucide-react";
import { Button } from "@/components/ui";
import { FadeIn } from "./FadeIn";
import { useTranslations } from "next-intl";

const FOOTER_SECTIONS = [
  {
    title_key: "company",
    links: [
      { key: "about", href: "/about" },
      { key: "careers", href: "/careers" },
      { key: "blog", href: "/blog" },
      { key: "press", href: "/presse" },
    ],
  },
  {
    title_key: "services",
    links: [
      { key: "development", href: "/services" },
      { key: "design", href: "/services" },
      { key: "marketing", href: "/services" },
      { key: "audit", href: "/services" },
    ],
  },
  {
    title_key: "support",
    links: [
      { key: "contact", href: "/contact" },
      { key: "faq", href: "/faq" },
      { key: "case_studies", href: "/projects" },
      { key: "quote", href: "/devis-gratuit" },
    ],
  },
];

const LEGAL_LINKS = [
  { key: "legal", href: "/mentions-legales" },
  { key: "privacy", href: "/politique-confidentialite" },
  { key: "terms", href: "/conditions-generales" },
];

export const Footer = () => {
  const t = useTranslations("Footer");
  const nt = useTranslations("Navbar");

  return (
    <footer className="relative bg-[#F0F4FF] text-[#010C29] pt-20 pb-10 rounded-[50px] m-6 max-w-[1232px] mx-auto overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <FadeIn>
              <Image
                src="/assets/logos/kivusphere-full-dark.svg"
                alt="KivuSphere"
                width={180}
                height={45}
                className="mb-6"
              />
              <p className="text-left mb-8">
                {t("address")}
              </p>
              <div className="flex gap-3">
                {[
                  {
                    Icon: Facebook,
                    href: "https://www.facebook.com/profile.php?id=100069308592831",
                  },
                  {
                    Icon: Instagram,
                    href: "https://www.instagram.com/kivus_phere?igsh=MXM1azkxM2ZrMnI1MA==",
                  },
                  { Icon: Twitter, href: "https://x.com/KivuSphere" },
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/in/kivu-sphere-420a2b39a/",
                  },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-secondary/10 text-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-all"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Dynamic Sections */}
          {FOOTER_SECTIONS.map((section, idx) => (
            <div key={idx}>
              <FadeIn delay={0.1 * (idx + 1)}>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6 opacity-40">
                  {t(`section_${section.title_key}`)}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.key}>
                      <Link
                        href={link.href as any}
                        className="text-[#010C29]/60 hover:text-secondary transition-colors text-sm font-medium"
                      >
                        {t(`link_${link.key}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          ))}
        </div>

        {/* Newsletter & Bottom Bar */}
        <div className="pt-12 border-t border-[#010C29]/5">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
            <FadeIn className="max-w-md w-full">
              <div className="relative flex items-center bg-white rounded-full shadow-sm border border-[#010C29]/5 overflow-hidden p-1">
                <Mail className="absolute left-4 w-5 h-5 text-[#010C29]/30" />
                <input
                  type="email"
                  placeholder={t("newsletter_placeholder")}
                  className="flex-1 pl-12 pr-4 py-3 text-sm bg-transparent outline-none text-[#010C29] placeholder:text-[#010C29]/30"
                />
                <Button icon={Send}>{t("newsletter_button")}</Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-6">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={link.href as any}
                  className="text-xs text-[#010C29]/40 hover:text-secondary transition-colors"
                >
                  {t(`link_${link.key}`)}
                </Link>
              ))}
            </FadeIn>
          </div>

          <div className="text-center text-xs text-[#010C29]/20">
            © {new Date().getFullYear()} KivuSphere. {t("rights")}
          </div>
        </div>
      </div>
    </footer>
  );
};
