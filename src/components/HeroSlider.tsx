"use client";

import React, { useState } from "react";
import { Play, Menu, X, ArrowRight, BarChart3, Globe, Zap, Layers } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import Image from "next/image";

// Composant utilitaire pour la grille de fond
const BackgroundGrid = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Fond sombre global */}
    <div className="absolute inset-0 bg-[#020408]"></div>
    
    {/* Grille */}
    <div 
      className="absolute inset-0 opacity-[0.15]" 
      style={{
        backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    ></div>
    
    {/* Dégradé radial pour assombrir les bords de la grille (vignette) */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020408_100%)]"></div>
  </div>
);

// Effet de "Planète" / Arc lumineux
const PlanetGlow = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] z-0 pointer-events-none">
    {/* L'arc principal */}
    <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[120%] h-[1000px] rounded-[100%] border-t border-blue-500/30 bg-gradient-to-b from-blue-900/10 to-transparent shadow-[0_-20px_100px_rgba(59,130,246,0.2)]"></div>
    
    {/* Glow central intense */}
    <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-blue-600/20 blur-[80px] rounded-full"></div>
  </div>
);

// Composant Navbar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header />
  );
};

// Composant des Logos
const TrustedBy = () => {
  return (
    <div className="mt-20 pt-10 border-t border-white/5 w-full flex flex-col items-center">
      <p className="text-sm text-gray-500 mb-6 font-medium">Trusted by 500+ companies</p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Simulation de logos avec texte/icones */}
        <div className="flex items-center gap-2 text-xl font-bold text-white"><Zap className="w-5 h-5" /> Boltshift</div>
        <div className="flex items-center gap-2 text-xl font-bold text-white"><Layers className="w-5 h-5" /> Lightbox</div>
        <div className="flex items-center gap-2 text-xl font-bold text-white"><BarChart3 className="w-5 h-5" /> FeatherDev</div>
        <div className="flex items-center gap-2 text-xl font-bold text-white"><Globe className="w-5 h-5" /> GlobalBank</div>
      </div>
    </div>
  );
};

export default function LandingPage() {
  return (
    <main className="relative min-h-screen flex flex-col font-sans selection:bg-blue-500/30">
      <BackgroundGrid />
      <Navbar />

      <div className="relative z-10 pt-32 pb-16 md:pt-48 md:pb-32 flex flex-col items-center px-4 overflow-hidden">
        <PlanetGlow />
        
        {/* Badge Notification */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 py-1 pl-1 pr-4 backdrop-blur-sm hover:border-blue-500/40 transition-colors cursor-pointer group">
          <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">New feature</span>
          <span className="text-sm text-blue-100 flex items-center gap-1 group-hover:text-white transition-colors">
            Check out the team dashboard <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto drop-shadow-2xl">
          High-performing remote teams.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
            The future of work.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          Powerful, self-serve team engagement tools and analytics. Supercharge your managers & keep employees engaged from anywhere.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="flex items-center gap-2 px-8 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-medium transition-all hover:scale-105 active:scale-95 group">
            <div className="bg-white text-black rounded-full p-0.5">
               <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            Watch Demo
          </button>
          
          <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)] hover:scale-105 active:scale-95">
            Get started for free
          </button>
        </div>

        {/* Social Proof */}
        <TrustedBy />
        
        {/* Image Teaser (Bottom Crop) */}
        <div className="mt-16 relative w-full max-w-5xl mx-auto rounded-t-2xl overflow-hidden border-t border-l border-r border-white/10 shadow-2xl bg-[#0B0E14]">
           {/* Placeholder pour l'image du bas */}
           <div className="h-[300px] w-full bg-gradient-to-b from-[#1a1f2e] to-[#020408] relative">
              <div className="absolute inset-0 flex items-end justify-center">
                 {/* Simuler le haut d'une tête / image */}
                 <div className="w-64 h-64 bg-gray-800 rounded-full blur-3xl opacity-20 mb-[-100px]"></div>
                 {/* Ici, vous mettriez votre <img> réelle */}
                  <Image 
                    src="/api/placeholder/800/600" 
                    alt="Dashboard Preview" 
                    fill // <--- Ajoute cette propriété (remplace width/height)
                    className="object-cover opacity-50 mix-blend-overlay"
                    priority={false} // Optionnel : chargement différé (lazy)
                  />
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}