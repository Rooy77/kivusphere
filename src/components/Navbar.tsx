"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, FileText, BookOpen, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  label: string;
  href?: string;
  isDropdown: boolean;
  children?: { label: string; href: string; icon?: React.ReactNode }[];
}

const NAV_LINKS: NavLink[] = [
  { label: "Accueil", href: "/", isDropdown: false },
  { label: "A propos", href: "/about", isDropdown: false },
  { label: "Services", href: "/services", isDropdown: false },
  {
    label: "Pages",
    isDropdown: true,
    children: [
      { label: "Presse", href: "/presse", icon: <FileText size={16} /> },
      { label: "Blogue", href: "/blogue", icon: <BookOpen size={16} /> },
      { label: "Gallery", href: "/gallery", icon: <ImageIcon size={16} /> },
    ],
  },
];

const LANGUAGES = [
  { code: "fr", label: "Fr", emoji: "🇫🇷" },
  { code: "en", label: "En", emoji: "🇺🇸" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopPagesOpen, setDesktopPagesOpen] = useState(false);
  const [desktopLangOpen, setDesktopLangOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full bg-[#020408]/20 backdrop-blur-md shadow-lg transition-all"
    >
      <div className="px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/image/logos/Asset 2.svg" width={160} height={160} alt="Logo KivuSphere" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 relative">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative">
                {!link.isDropdown ? (
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link href={link.href!} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <>
                    <div
                      onClick={() => setDesktopPagesOpen(!desktopPagesOpen)}
                      className="flex items-center gap-1 cursor-pointer select-none text-sm font-medium text-gray-300 hover:text-white"
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform ${desktopPagesOpen ? "rotate-180" : ""}`} />
                    </div>

                    <AnimatePresence>
                      {desktopPagesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-8 left-0 w-44 bg-[#020408]/95 backdrop-blur-md shadow-lg rounded-md flex flex-col py-2"
                        >
                          {link.children!.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 hover:border-l-2 hover:border-[#4576FD] transition-colors text-sm"
                            >
                              {child.icon && child.icon}
                              {child.label}
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
                className="inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-gray-800 px-3 py-2 text-sm text-gray-200 sm:px-4"
              >
                🇫🇷 <span className="ml-1">Fr</span>
                <ChevronDown size={14} className={`transition-transform ${desktopLangOpen ? "rotate-180" : ""}`} />
              </div>

              <AnimatePresence>
                {desktopLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-8 left-0 w-24 bg-[#020408]/95 backdrop-blur-md shadow-lg rounded-md flex flex-col py-1"
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        className="flex items-center gap-1 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 transition-colors text-sm text-left"
                      >
                        {lang.emoji} {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="bg-[#4576FD] hover:bg-[#3360dc] text-white px-4 py-2.5 rounded-full text-xs font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all"
              >
                Contact-nous
              </motion.button>
            </div>

            {/* Mobile button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-white">
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
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
              <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
                <X size={30} />
              </button>
            </div>

            <div className="flex-1 flex flex-col px-6 mt-6 space-y-4 overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="flex flex-col">
                  {!link.isDropdown ? (
                    <Link
                      href={link.href!}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-gray-300 hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <div className="flex flex-col">
                      <div
                        onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                        className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-300 hover:text-white"
                      >
                        {link.label}
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
                                key={child.label}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 py-2 text-gray-300 hover:text-white transition"
                              >
                                {child.icon && child.icon}
                                {child.label}
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
                  🇫🇷 <span className="ml-2">Fr</span>
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

            <div className="px-6 py-6 border-t border-white/10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="bg-[#4576FD] hover:bg-[#3360dc] text-white px-4 py-2.5 rounded-full text-xs font-bold transition shadow-[0_0_15px_rgba(37,99,235,0.4)] w-full"
              >
                Contact-nous
              </motion.button>
              <p className="text-center text-xs text-gray-400 mt-4">
                © 2025 Kivu Sphere. Made with ❤️ & ☕
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
