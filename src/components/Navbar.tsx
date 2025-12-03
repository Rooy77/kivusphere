"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

// --- STRUCTURE DE DONNÉES NODE/TS/REACT ---
interface NavLink {
  label: string;
  href: string;
  isDropdown: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: "Accueil", href: "/", isDropdown: false },
  { label: "A propos", href: "/about", isDropdown: false },
  { label: "Services", href: "/about", isDropdown: false },
  // Exemple d'un lien avec un indicateur de dropdown (le vrai menu peut être géré par un autre composant)
  { label: "Pages", href: "/features", isDropdown: true },

  // Nous avons retiré "Contact" du menu Desktop pour garder le CTA plus visible.
];

// --- COMPOSANT NAVBAR ---
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour gérer le basculement du menu mobile
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full border-2-white  bg-[#020408]/20 backdrop-blur-md shadow-lg transition-all">
      <div className="px-6">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className=" p-1.5 rounded-full">
                <Image
                    src="image/logos/Asset 2.svg"
                    width={160}
                    height={160}
                    alt="Logo KivuSphere"
                />
            </div>
          </Link>

          {/* Desktop Links (Gérés par le tableau NAV_LINKS) */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1"
              >
                {link.label}
                {link.isDropdown && <span className="text-[10px] text-gray-300"><ChevronDown /></span>}
              </Link>
            ))}
          </div>

          {/* CTA & Menu */}
            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center">
                    <button className="text-gray-200 focus:outline-none focus:border-none --btn group inline-flex items-center rounded-full bg-gray-900/20 text-sm font-medium">
                        <div className="inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-gray-800 px-3 py-2 text-sm text-gray-200 sm:px-4">
                            <div className="flex items-center justify-center">
                                <span><svg className="w-4 h-4 mr-2 rounded-full" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_110_14610)"><rect width="100" height="100" fill="white"></rect><path d="M100 0H0V100H100V0Z" fill="white"></path><path d="M33.3333 0H0V100H33.3333V0Z" fill="#002654"></path><path d="M100 0H66.6667V100H100V0Z" fill="#CE1126"></path></g><defs><clipPath id="clip0_110_14610"><rect width="100" height="100" fill="white"></rect></clipPath></defs></svg></span>
                                <span className="text-xs">Fr</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-gray-400 lg:block hidden ml-0 h-5 w-5 group-hover:text-gray-500"><path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path></svg>
                        </div>
                    </button>
                </div>
                <div className="hidden md:flex items-center">
                    <button className="bg-[#4576FD] hover:bg-[#3360dc] text-white px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                        Contact-nous
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-300 hover:text-white pt-1">
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
                </div>
            </div>
        </div>
      </div>

      {/* Mobile Menu (Géré par le tableau NAV_LINKS) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#020408] backdrop-blur-lg w-full h-min-screen rounded-2xl overflow-hidden shadow-xl transition-all">
            <div className="px-4 py-3 space-y-2">
                {/* On ajoute Contact ici, car il n'est pas dans le menu Desktop, mais utile sur mobile */}
                {[...NAV_LINKS, { label: "Contact", href: "/contact", isDropdown: false }].map((link) => (
                <Link 
                    key={link.label} 
                    href={link.href} 
                    onClick={toggleMenu} // Ferme le menu après avoir cliqué sur un lien
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                    {link.label}
                </Link>
                ))}
                
            </div>
            <div className="text-center justify-center content-center">
                <div className="pt-2 border-t top-6 text-center content-center border-white/5 mx-1-auto flex items-center gap-4">
                    <div className="md:flex items-center">
                        <button className="text-gray-200 focus:outline-none focus:border-none --btn group inline-flex items-center rounded-full bg-gray-900/20 text-sm font-medium">
                            <div className="inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-gray-800 px-3 py-2 text-sm text-gray-200 sm:px-4">
                                <div className="flex items-center justify-center">
                                    <span><svg className="w-4 h-4 mr-2 rounded-full" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_110_14610)"><rect width="100" height="100" fill="white"></rect><path d="M100 0H0V100H100V0Z" fill="white"></path><path d="M33.3333 0H0V100H33.3333V0Z" fill="#002654"></path><path d="M100 0H66.6667V100H100V0Z" fill="#CE1126"></path></g><defs><clipPath id="clip0_110_14610"><rect width="100" height="100" fill="white"></rect></clipPath></defs></svg></span>
                                    <span className="text-xs">Fr</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-gray-400 lg:block ml-0 h-5 w-5 group-hover:text-gray-500"><path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path></svg>
                            </div>
                        </button>
                    </div>
                    <div className=" md:flex items-center">
                        <button className="bg-[#4576FD] hover:bg-[#3360dc] text-white px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                            Contact-nous
                        </button>
                    </div>
                </div>
                <div className="flex flex-col-reverse mb-16 mt-8 items-center justify-between sm:flex-row">
                    <div className="mt-6 px-2 sm:mt-0 sm:px-0">
                        <span className="block text-center text-xs font-light text-gray-400">© 2025 Kivu Sphere. Made with ❤️ and ☕.</span>
                    </div>
                </div>
            </div>
        </div>
      )}
    </nav>
  );
};