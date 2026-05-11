"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Laptop,
  Globe,
  PenTool,
  Megaphone,
  ArrowUpRight,
  Search,
  Layout,
  Code,
  Rocket,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { BackgroundGrid } from "@/components/Background";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/footer";

const services = [
  {
    id: "01",
    title: "Développement Web & Mobile",
    description:
      "Nous créons des sites web et des applications mobiles robustes, performants et adaptés à vos besoins spécifiques.",
    icon: <Globe className="h-6 w-6 text-white" />,
    featured: true,
    keywords: ["Next.js", "React Native", "API REST"],
  },
  {
    id: "02",
    title: "Design UI / UX",
    description:
      "Des interfaces modernes et intuitives conçues pour offrir la meilleure expérience possible à vos utilisateurs.",
    icon: <PenTool className="h-6 w-6 text-[#4576FD]" />,
    keywords: ["Prototypage", "Branding", "User Research"],
  },
  {
    id: "03",
    title: "Marketing Digital",
    description:
      "Augmentez votre visibilité en ligne et atteignez vos clients grâce à des stratégies de contenu et de publicité ciblées.",
    icon: <Megaphone className="h-6 w-6 text-[#4576FD]" />,
    keywords: ["SEO", "Social Media", "Ads"],
  },
  {
    id: "04",
    title: "Consultance Informatique",
    description:
      "Un accompagnement stratégique pour optimiser vos systèmes d'information et réussir votre transformation digitale.",
    icon: <Laptop className="h-6 w-6 text-[#4576FD]" />,
    keywords: ["Audit IT", "Stratégie", "Cloud"],
  },
];

const methodology = [
  {
    id: "01",
    title: "Audit & Analyse",
    desc: "Nous analysons vos besoins et vos processus pour définir la meilleure stratégie.",
    icon: Search,
  },
  {
    id: "02",
    title: "Conception",
    desc: "Création des maquettes et définition de l'architecture technique de votre projet.",
    icon: Layout,
  },
  {
    id: "03",
    title: "Développement",
    desc: "Réalisation de votre solution avec des technologies modernes et une approche agile.",
    icon: Code,
  },
  {
    id: "04",
    title: "Déploiement",
    desc: "Mise en production sécurisée et suivi des performances de votre application.",
    icon: Rocket,
  },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen flex flex-col font-sans bg-[var(--background)]">
      <BackgroundGrid />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative px-6 pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 font-bold rounded-md text-sm text-[#4576FD]"
            >
              <span className="h-2 w-2 bg-[#4576FD] rounded-full"></span>
              Nos services
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-8"
            >
              Des solutions <span className="text-[#4576FD]">digitales</span>{" "}
              sur mesure pour votre entreprise.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
            >
              KivuSphere vous accompagne dans la conception, le développement et
              la promotion de vos projets technologiques en RD Congo.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-[#f8f9fc] py-24 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`relative rounded-3xl p-8 md:p-10 overflow-hidden ${
                  service.featured
                    ? "bg-[#4576FD] text-white"
                    : "bg-white border border-gray-100 shadow-sm text-gray-900"
                }`}
              >
                <div
                  className={`mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                    service.featured ? "bg-white/20" : "bg-[#4576FD]/10"
                  }`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p
                  className={`text-base mb-8 leading-relaxed ${
                    service.featured ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.keywords.map((word) => (
                    <span
                      key={word}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        service.featured
                          ? "bg-white/10 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                </div>

                <span
                  className={`absolute top-6 right-8 text-6xl font-bold opacity-10 ${
                    service.featured ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.id}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-24 bg-white px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre approche
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Une méthodologie structurée pour garantir la réussite de vos
              projets, de l'idée à la mise en service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {methodology.map((step) => (
              <div key={step.id} className="relative p-6 group">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4576FD]/5 text-[#4576FD] transition-colors group-hover:bg-[#4576FD] group-hover:text-white">
                  <step.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  <span className="text-[#4576FD] mr-1">{step.id}.</span>{" "}
                  {step.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnersSection />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden text-white min-h-[60vh] flex items-center px-6 py-24">
        <Image
          src="/image/hero.jpeg"
          alt="Contactez KivuSphere"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0B0F2F]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F2F] via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Prêt à lancer votre <br />{" "}
              <span className="text-[#4576FD]">projet digital ?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl">
              Discutons de vos idées et voyons comment nous pouvons les
              concrétiser ensemble.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#4576FD] px-8 py-4 text-sm font-bold text-white transition hover:scale-105 active:scale-95"
              >
                Nous contacter
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
