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
  // Exemple d'un lien avec un indicateur de dropdown (le vrai menu peut être géré par un autre composant)
  { label: "Services", href: "/features", isDropdown: true },
  { label: "Tarification", href: "/pricing", isDropdown: false },
  { label: "Projets", href: "/pricing", isDropdown: false },
  { label: "Contact-us", href: "/pricing", isDropdown: false },
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
                {link.isDropdown && <span className="text-[10px] opacity-50"><ChevronDown /></span>}
              </Link>
            ))}
          </div>

          {/* CTA & Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center">
              <button className="bg-[#4576FD] hover:bg-[#3360dc] text-white px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                Get started
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
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0B0E14] rounded-2xl overflow-hidden shadow-xl mx-2">
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
            <div className="pt-2 border-t border-white/5 mx-[-1rem]">
                <button className="w-[calc(100%-2rem)] mx-4 bg-[#4576FD] hover:bg-[#3360dc] text-white py-2 rounded-full text-sm font-bold transition-all">
                    Get started
                </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};