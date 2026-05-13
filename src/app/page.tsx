"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Pen,
  Shield,
  BarChart3,
  Quote,
  ChevronLeft,
  ChevronRight,
  Send,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Button, Card, SectionHeading, Ornament } from "@/components/ui";
import { HeroSection } from "@/components/HeroSection";
import { BackgroundGrid } from "@/components/Background";

/* ─────────────────── Fade-in animation wrapper ─────────────────── */
const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ═══════════════════════════════════════════════════════════════════
   SERVICE DATA
   ═══════════════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    icon: <Code />,
    title: "Software Engineering & Mobile Systems",
    description:
      "Creation of modern, high-performance and scalable websites. Robust mobile applications for Android and iOS.",
    image: "/assets/keyboard1.jpeg",
    imagePosition: "top" as const,
  },
  {
    icon: <Pen />,
    title: "Architecture, Graphic Design & UI/UX",
    description:
      "For interfaces that captivate and convert. Every pixel is designed to reduce friction and maximize customer engagement.",
    imagePosition: "none" as const,
  },
  {
    icon: <Shield />,
    title: "Systems Audit & Security (Consulting)",
    description:
      "In a hyper-connected world, security is the foundation of trust. Our experts analyze your vulnerabilities and optimize your infrastructure.",
  },
  {
    icon: <BarChart3 />,
    title: "Marketing Strategy & Digital Growth",
    description:
      "Advanced strategies to boost your visibility, engage your audience and convert more effectively through digital channels.",
    imagePosition: "bottom" as const,
    image: "/assets/hero-background.jpg",
  },
];

/* ═══════════════════════════════════════════════════════════════════
   PARTNER LOGOS (real SVGs from /assets/logos/)
   ═══════════════════════════════════════════════════════════════════ */
const PARTNERS = [
  { name: "IMAN", src: "/assets/logos/logo-iman.svg" },
  { name: "Blackborn", src: "/assets/logos/logo-blackborn.svg" },
  { name: "Horizon", src: "/assets/logos/logo-horizon.svg" },
  { name: "Soap", src: "/assets/logos/logo-soap.svg" },
  { name: "TOS", src: "/assets/logos/logo-tos.svg" },
  { name: "Warp", src: "/assets/logos/logo-warp.svg" },
];

/* ═══════════════════════════════════════════════════════════════════
   BLOG CARDS
   ═══════════════════════════════════════════════════════════════════ */
const BLOG_POSTS = [
  {
    title: "Welcome to Kivu Sphere",
    category: "News",
    excerpt:
      "Created on December 15, 2020, KivuSphere works to foster digital innovation and tech education in the region.",
    image: "/assets/keyboard1.jpeg",
  },
  {
    title: "BootCamp Design",
    category: "Events",
    excerpt:
      "Our intensive design bootcamp combines UI/UX mastery with real-world projects for aspiring designers.",
    image: "/assets/keyboard1.jpeg",
  },
];

/* ═══════════════════════════════════════════════════════════════════
   TESTIMONIAL
   ═══════════════════════════════════════════════════════════════════ */
const TESTIMONIAL = {
  name: "Ishimwe Israel Dixon",
  role: "CEO of Nexus OOS",
  quote:
    "We Work closely with our clients to create clear, thoughtful, and human-centered digital experiences. KivuSphere made our vision a reality.",
  image: "/assets/keyboard1.jpeg",
};

/* ═══════════════════════════════════════════════════════════════════
   NAV LINKS FOR FOOTER
   ═══════════════════════════════════════════════════════════════════ */
const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blog" },
  { label: "Events", href: "/events" },
];

/* ═══════════════════════════════════════════════════════════════════
   LANDING PAGE
   ═══════════════════════════════════════════════════════════════════ */
export default function LandingPage() {
  return (
    <main className="relative min-h-screen font-sans overflow-x-hidden bg-[#FDFDFE]">
      <Navbar />

      {/* ╔═══════════════════════════════════════════════════════╗
         ║  SECTION 1 — HERO                                    ║
         ╚═══════════════════════════════════════════════════════╝ */}
      <div className="relative bg-black overflow-hidden">
        <BackgroundGrid />

        <HeroSection />
      </div>

      {/* ╔═══════════════════════════════════════════════════════╗
         ║  SECTION 2 — ABOUT / INTRO                           ║
         ╚═══════════════════════════════════════════════════════╝ */}
      <section className="relative py-24 md:py-32 text-[#010C29] overflow-hidden">
        <Ornament
          position="right"
          opacity={0.3}
          className="absolute -bottom-40 -left-115 hidden md:block"
        />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Left – Text */}
          <FadeIn>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#010C29]/10 text-xs font-semibold uppercase tracking-wider text-[#4576FD] mb-6">
                Who are we?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Your digital partner for sustainable growth
              </h2>
              <p className="text-[#010C29]/60 text-lg mb-8 leading-relaxed">
                We craft modern digital strategies, web experiences and mobile
                systems that accelerate business growth and foster innovation in
                the digital age.
              </p>
              <Button icon={ArrowRight}>See More</Button>
            </div>
          </FadeIn>

          {/* Right – Image composition */}
          <FadeIn delay={0.2} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main image */}
              <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/keyboard1.jpeg"
                  alt="Our team at work"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Secondary image */}
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/assets/keyboard1.jpeg"
                  alt="Innovation"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Blue decorative dot */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#4576FD]/20 rounded-full blur-xl" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════╗
         ║  SECTION 3 — SERVICES                                ║
         ╚═══════════════════════════════════════════════════════╝ */}
      <section className="relative py-24 md:py-32 text-[#010C29]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#010C29]/10 text-xs font-semibold uppercase tracking-wider text-[#4576FD] mb-4">
                Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Design With Purpose.
                <br />
                Build With Impact.
              </h2>
              <p className="text-[#010C29]/50 max-w-xl mx-auto">
                We Work closely with our clients to create clear, thoughtful,
                and human-centered digital experiences.
              </p>
            </div>
          </FadeIn>

          <div className="columns-1 md:columns-2 gap-8 [column-fill:_balance]">
            {SERVICES.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <Card
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  image={service.image}
                  imagePosition={service.imagePosition}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════╗
         ║  SECTION 4 — BLOG / INSIGHTS                         ║
         ╚═══════════════════════════════════════════════════════╝ */}
      <section className="relative bg-bg-soft py-24 md:py-32 text-[#010C29] overflow-hidden">
        <Ornament
          position="right"
          opacity={0.4}
          className="absolute -top-40 -right-40 hidden md:block"
        />
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#010C29]/10 text-xs font-semibold uppercase tracking-wider text-[#4576FD] mb-4">
                Blogs
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Unique experiences that foster
                <br />
                innovation and collaboration.
              </h2>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-sm font-medium text-[#010C29]/60">
                  See More
                </span>
                <div className="w-8 h-8 rounded-full bg-[#010C29] flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <FadeIn key={post.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative rounded-3xl overflow-hidden h-[420px] cursor-pointer"
                >
                  {/* Background image */}
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010C29] via-[#010C29]/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <span className="self-start px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/80 text-xs font-medium border border-white/10">
                      {post.category}
                    </span>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {post.title}
                      </h3>
                      <p className="text-white/60 text-sm max-w-sm">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Arrow button */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#4576FD] transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════╗
         ║  SECTION 5 — EVENTS                                  ║
         ╚═══════════════════════════════════════════════════════╝ */}
      <section className="relative py-24 md:py-32  text-[#010C29] m-6 max-w-[1232px] mx-auto overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#010C29]/10 text-xs font-semibold uppercase tracking-wider text-[#4576FD] mb-4">
                Events
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Unique experiences that foster
                <br />
                innovation and collaboration.
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Event image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/assets/keyboard1.jpeg"
                  alt="Bootcamp Tech Event"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Event info card */}
              <div className="bg-[#f0f4ff] rounded-3xl p-8 md:p-10">
                <span className="text-sm text-[#010C29]/40 mb-4 block">
                  Formation
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Unique <span className="text-[#4576FD]">Bootcamp TECH</span>{" "}
                  and collaboration with Huawei.
                </h3>
                <p className="text-[#010C29]/50 text-sm leading-relaxed mb-8">
                  Unique experiences that foster innovation and collaboration.
                  Unique experiences that foster innovation and collaboration.
                  Unique experiences that foster innovation and collaboration.
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-sm text-[#010C29]/40 hover:text-[#010C29] transition-colors cursor-pointer">
                    <ChevronLeft className="w-4 h-4" /> Prev
                  </button>
                  <button className="flex items-center gap-2 text-sm font-bold text-[#010C29] cursor-pointer">
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════╗
         ║  SECTION 6 — PARTNERS / TRUST                        ║
         ╚═══════════════════════════════════════════════════════╝ */}
      <section className="relative py-24 md:py-32 text-[#010C29]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#010C29]/10 text-xs font-semibold uppercase tracking-wider text-[#4576FD] mb-4">
                Partners
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">They Trust Us</h2>
            </div>
          </FadeIn>

          <div className="relative space-y-12 overflow-hidden py-10">
            {/* Gradients pour masquer les bords et créer un effet de fondu */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Premier Carrousel - Vers la gauche */}
            <FadeIn delay={0.1}>
              <div className="flex w-full">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="flex gap-20 items-center whitespace-nowrap"
                >
                  {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map(
                    (p, idx) => (
                      <Image
                        key={`${p.name}-${idx}`}
                        src={p.src}
                        alt={p.name}
                        width={140}
                        height={60}
                        className="h-10 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                      />
                    ),
                  )}
                </motion.div>
              </div>
            </FadeIn>

            {/* Deuxième Carrousel - Vers la droite */}
            <FadeIn delay={0.2}>
              <div className="flex w-full">
                <motion.div
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{
                    duration: 35,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="flex gap-20 items-center whitespace-nowrap"
                >
                  {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS]
                    .reverse()
                    .map((p, idx) => (
                      <Image
                        key={`${p.name}-rev-${idx}`}
                        src={p.src}
                        alt={p.name}
                        width={140}
                        height={60}
                        className="h-10 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                      />
                    ))}
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════╗
         ║  SECTION 7 — TESTIMONIALS                            ║
         ╚═══════════════════════════════════════════════════════╝ */}
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
                We work closely with our clients to create clear, thoughtful,
                and human-centered digital experiences.
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

      {/* ╔═══════════════════════════════════════════════════════╗
         ║  SECTION 8 — CTA                                     ║
         ╚═══════════════════════════════════════════════════════╝ */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-background.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#010C29]/85" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Turn ideas
              <br />
              Into Experiences
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-white/50 text-lg mb-8">
              We create clear, thoughtful, and human-centered digital
              experiences that help brands connect meaningfully with their
              audience.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Button icon={ArrowRight}>Get Started</Button>
          </FadeIn>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════╗
         ║  FOOTER                                              ║
         ╚═══════════════════════════════════════════════════════╝ */}
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
              Nous sommes basés à Bukavu, République Démocratique du Congo.
              Quartier les volcans, 10 avenue la corniche, Immeuble
              Diplomatique, 3ième étage.
            </p>
          </FadeIn>

          {/* Navigation links */}
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {FOOTER_LINKS.map((link, i) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    i === 0
                      ? "bg-secondary text-white"
                      : "border border-secondary/15 text-secondary/60 hover:border-[#4576FD] hover:text-[#4576FD]"
                  }`}
                >
                  {link.label}
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
                  placeholder="Votre adresse mail"
                  className="flex-1 pl-12 pr-4 py-4 text-sm bg-transparent outline-none text-[#010C29] placeholder:text-[#010C29]/30"
                />
                <Button icon={Send}>Envoyer</Button>
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
            © {new Date().getFullYear()} KivuSphere. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
