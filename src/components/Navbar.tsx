"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Link, useRouter, usePathname } from "@/navigation";
import {
  Menu,
  X,
  ChevronDown,
  FileText,
  BookOpen,
  Image as ImageIcon,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui";
import { useTranslations, useLocale } from "next-intl";

interface NavLink {
  key: string;
  href?: string;
  isDropdown: boolean;
  children?: { key: string; href: string; icon?: React.ReactNode }[];
}

const NAV_LINKS: NavLink[] = [
  { key: "home", href: "/", isDropdown: false },
  { key: "about", href: "/about", isDropdown: false },
  { key: "services", href: "/services", isDropdown: false },
  {
    key: "pages",
    isDropdown: true,
    children: [
      { key: "presse", href: "/presse", icon: <FileText size={16} /> },
      { key: "blog", href: "/blog", icon: <BookOpen size={16} /> },
      { key: "gallery", href: "/gallery", icon: <ImageIcon size={16} /> },
    ],
  },
];

const LANGUAGES = [
  { code: "fr", label: "Fr", emoji: "🇫🇷" },
  { code: "en", label: "En", emoji: "🇺🇸" },
];

export const Navbar = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopPagesOpen, setDesktopPagesOpen] = useState(false);
  const [desktopLangOpen, setDesktopLangOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setDesktopLangOpen(false);
    setMobileLangOpen(false);
  };

  const currentLang = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full transition-all duration-500 border ${
        scrolled
          ? "bg-primary/20 backdrop-blur-xl border-white/20 shadow-xl py-1"
          : "bg-[#b0c4ff]/10 backdrop-blur-lg border-white/10 py-0"
      }`}
    >
      <div className="px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/"
            className=" px-3 py-1 rounded-full flex items-center gap-2"
          >
            <Image
              src="/assets/logos/kivusphere-full-light.svg"
              width={160}
              height={160}
              alt="Logo KivuSphere"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 relative">
            {NAV_LINKS.map((link) => (
              <div key={link.key} className="relative">
                {!link.isDropdown ? (
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                      href={link.href as any}
                      className="text-sm font-semibold text-primary hover:text-action transition-colors"
                    >
                      {t(link.key)}
                    </Link>
                  </motion.div>
                ) : (
                  <>
                    <div
                      onClick={() => setDesktopPagesOpen(!desktopPagesOpen)}
                      className="flex items-center gap-1 cursor-pointer select-none text-sm font-semibold text-primary hover:text-action"
                    >
                      {t(link.key)}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${desktopPagesOpen ? "rotate-180" : ""}`}
                      />
                    </div>

                    <AnimatePresence>
                      {desktopPagesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-8 left-0 w-44 bg-white/95 backdrop-blur-md shadow-xl rounded-xl flex flex-col py-2 border border-primary/10"
                        >
                          {link.children!.map((child) => (
                            <Link
                              key={child.key}
                              href={child.href as any}
                              className="flex items-center gap-2 px-4 py-2 text-primary font-medium hover:text-action hover:bg-primary/5 hover:border-l-2 hover:border-action transition-colors text-sm"
                            >
                              {child.icon && child.icon}
                              {t(child.key)}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* CTA & Burger */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div
                onClick={() => setDesktopLangOpen(!desktopLangOpen)}
                className="inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-primary/20 px-3 py-2 text-sm font-medium text-primary sm:px-4 hover:bg-primary/5 transition-colors"
              >
                {currentLang.emoji} <span className="ml-1">{currentLang.label}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform ${desktopLangOpen ? "rotate-180" : ""}`}
                />
              </div>

              <AnimatePresence>
                {desktopLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-8 left-0 w-24 bg-white/95 backdrop-blur-md shadow-xl rounded-xl flex flex-col py-1 border border-primary/10"
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="flex items-center gap-1 px-3 py-2 text-primary font-medium hover:text-action hover:bg-primary/5 transition-colors text-sm text-left first:rounded-t-xl last:rounded-b-xl"
                      >
                        {lang.emoji} {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Button icon="">{t('contact')}</Button>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={30} /> : <Menu size={30} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden fixed inset-0 z-40 bg-[#020408]/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-end px-6 pt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                <X size={30} />
              </button>
            </div>

            <div className="flex-1 flex flex-col px-6 mt-6 space-y-4 overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <div key={link.key} className="flex flex-col">
                  {!link.isDropdown ? (
                    <Link
                      href={link.href as any}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-gray-300 hover:text-white transition"
                    >
                      {t(link.key)}
                    </Link>
                  ) : (
                    <div className="flex flex-col">
                      <div
                        onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                        className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-300 hover:text-white"
                      >
                        {t(link.key)}
                        <ChevronDown
                          className={`transition-transform ${mobilePagesOpen ? "rotate-180" : ""}`}
                          size={18}
                        />
                      </div>
                      <AnimatePresence>
                        {mobilePagesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col ml-4 mt-2 overflow-hidden"
                          >
                            {link.children!.map((child) => (
                              <Link
                                key={child.key}
                                href={child.href as any}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 py-2 text-gray-300 hover:text-white transition"
                              >
                                {child.icon && child.icon}
                                {t(child.key)}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}

              {/* Language Switcher Mobile */}
              <div className="mt-4 relative">
                <div
                  onClick={() => setMobileLangOpen(!mobileLangOpen)}
                  className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-300 hover:text-white"
                >
                  {currentLang.emoji} <span className="ml-2">{currentLang.label}</span>
                  <ChevronDown
                    className={`transition-transform ${mobileLangOpen ? "rotate-180" : ""}`}
                    size={18}
                  />
                </div>
                <AnimatePresence>
                  {mobileLangOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col ml-4 mt-2 overflow-hidden"
                    >
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className="py-2 text-gray-300 hover:text-white text-left"
                        >
                          {lang.emoji} {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="px-6 py-8 border-t border-white/10 space-y-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <Link
                  href="/projects"
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-gray-400 hover:text-white"
                >
                  {t('projects')}
                </Link>
                <Link
                  href="/events"
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-gray-400 hover:text-white"
                >
                  {t('events')}
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-gray-400 hover:text-white"
                >
                  {t('blog')}
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Support
                </Link>
              </div>
              <Button icon={ArrowRight} className="w-full justify-center py-4">
                {t('contact')}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
