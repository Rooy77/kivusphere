"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Cpu, Layers, Zap, ShieldAlert, Search, Lightbulb, RefreshCw, Rocket, ArrowRight 
} from "lucide-react";

import { Navbar } from '@/components/Navbar';
import { BackgroundGrid } from '@/components/Background';
import PartnersSection  from '@/components/PartnersSection';
import Footer from '@/components/footer';

const ServiceCard = ({ 
  number, title, concept, description, keywords, icon: Icon, className = "" 
}: {
  number: string; title: string; concept: string; description: string; keywords: string[]; icon: React.ElementType; className?: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 transition-all duration-500 hover:border-[#4576FD] ${className}`}
  >
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="flex items-start justify-between">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4576FD]/10 text-[#4576FD]"
          >
            <Icon size={32} />
          </motion.div>
          <span className="font-['Satoshi'] text-5xl font-black text-white/5 tracking-tighter leading-none">{number}</span>
        </div>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#4576FD]">{concept}</p>
        <h3 className="mb-4 font-['Satoshi'] text-2xl font-bold leading-tight text-[var(--foreground)] md:text-3xl">{title}</h3>
        <p className="mb-8 text-base leading-relaxed text-[var(--foreground)]/60">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {keywords.map((word) => (
          <span key={word} className="rounded-full bg-white/5 px-4 py-1.5 text-[11px] font-medium text-[var(--foreground)]/40 border border-white/5">{word}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const MethodStep = ({ number, title, desc, icon: Icon }: any) => (
  <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#4576FD]/30 bg-[#4576FD]/5 text-[#4576FD]">
      <Icon size={24} />
    </div>
    <h4 className="font-['Satoshi'] text-xl font-bold text-[var(--foreground)]">
      <span className="mr-1 text-[#4576FD]">0{number}.</span> {title}
    </h4>
    <p className="mt-3 text-[var(--foreground)]/60 leading-relaxed text-sm">{desc}</p>
  </div>
);

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen flex flex-col font-sans bg-[var(--background)] selection:bg-[#4576FD]/30">
      <BackgroundGrid />
      <Navbar />

      
      <section className="relative px-6 pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto">
          <div className="max-w-5xl">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8 flex items-center gap-4 text-[#4576FD]">
              <div className="h-[1px] w-12 bg-[#4576FD]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Expertise • Agilité • Impact</span>
            </motion.div>
            <motion.h1 className="font-['Satoshi'] text-5xl font-black leading-[1.05] tracking-tight text-[var(--foreground)] md:text-7xl lg:text-8xl">
              Au-delà du code, nous bâtissons votre <span className="text-[#4576FD]">avantage compétitif.</span>
            </motion.h1>
            <motion.p className="mt-10 max-w-3xl text-lg leading-relaxed text-[var(--foreground)]/60 md:text-2xl">
              La transformation digitale n&apos;est pas une option, c&apos;est le moteur de votre pérennité.
            </motion.p>
          </div>
        </div>
      </section>

      
      <section className="container mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-2">
          <ServiceCard number="01" className="md:col-span-8" concept="Ingénierie de précision" title="Ingénierie Logicielle & Systèmes Mobiles" description="Développement d'écosystèmes sur-mesure (Web, iOS, Android) automatisant vos processus complexes." keywords={["Architecture Scalable", "Performance", "API Intégration"]} icon={Cpu} />
          <ServiceCard number="02" className="md:col-span-4" concept="Fonction & Esthétique" title="Design & Expérience UX" description="Interfaces intuitives conçues pour réduire la friction et maximiser l'engagement." keywords={["User-Centric", "Branding", "Prototypage"]} icon={Layers} />
          <ServiceCard number="03" className="md:col-span-4" concept="Visibilité accrue" title="Stratégie Marketing & Croissance" description="Campagnes data-driven pour transformer vos abonnés en ambassadeurs." keywords={["SEO local", "Social Ads", "Inbound"]} icon={Zap} />
          <ServiceCard number="04" className="md:col-span-8" concept="Souveraineté Numérique" title="Audit & Sécurité des Systèmes" description="Analyse des vulnérabilités et optimisation cloud pour protéger vos données." keywords={["Pentesting", "Cloud Computing", "Cyber-résilience"]} icon={ShieldAlert} />
        </div>
      </section>

      
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="font-['Satoshi'] text-4xl font-bold tracking-tight md:text-5xl text-[var(--foreground)]">Notre Méthodologie</h2>
            <p className="mt-4 text-[var(--foreground)]/60 text-lg italic">L&apos;art de transformer l&apos;idée en impact tangible.</p>
          </div>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
            <MethodStep number="1" title="Immersion" desc="Analyse profonde de vos défis business." icon={Search} />
            <MethodStep number="2" title="Idéation" desc="Co-conception créative et définition technique." icon={Lightbulb} />
            <MethodStep number="3" title="Itération" desc="Développement agile avec feedback continu." icon={RefreshCw} />
            <MethodStep number="4" title="Déploiement" desc="Mise en production sécurisée et monitoring." icon={Rocket} />
          </div>
        </div>
      </section>

      
      <PartnersSection />

      
      <section className="relative mt-20 overflow-hidden text-white min-h-[50vh] px-6 py-28">
        <Image
          src="/image/hero.jpeg"
          alt="Solution digitale"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0B0F2F]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F2F]/90 via-[#0B0F2F]/80 to-[#0B0F2F]/60" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="font-['Satoshi'] font-bold leading-tight text-4xl md:text-6xl lg:text-7xl">
              Votre futur digital <br /> commence aujourd&apos;hui.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-[#4576FD] font-medium">
              Basé à Bukavu av Mbaki. Disponible pour des projets d&apos;envergure nationale et internationale.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#4576FD] px-8 py-4 text-sm font-bold text-white transition hover:scale-105 active:scale-95">
                Lancer mon projet
                <ArrowRight size={18} />
              </Link>
              <Link href="/events" className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 backdrop-blur px-8 py-4 text-sm font-bold text-white transition hover:bg-white/20">
                Nos événements
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}