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
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
    icon: <Code className="w-8 h-8" />,
    title: "Software Engineering & Mobile Systems",
    description:
      "Creation of modern, high-performance and scalable websites. Robust mobile applications for Android and iOS.",
    accent: "from-[#4576FD] to-[#1746E9]",
  },
  {
    icon: <Pen className="w-8 h-8" />,
    title: "Architecture, Graphic Design & UI/UX",
    description:
      "For interfaces that captivate and convert. Every pixel is designed to reduce friction and maximize customer engagement.",
    accent: "from-[#F49C00] to-[#e08800]",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Systems Audit & Security (Consulting)",
    description:
      "In a hyper-connected world, security is the foundation of trust. Our experts analyze your vulnerabilities and optimize your infrastructure.",
    accent: "from-[#1746E9] to-[#01219B]",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Marketing Strategy & Digital Growth",
    description:
      "Advanced strategies to boost your visibility, engage your audience and convert more effectively through digital channels.",
    accent: "from-[#01219B] to-[#010C29]",
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
    image: "/image/hero.jpg",
  },
  {
    title: "BootCamp Design",
    category: "Events",
    excerpt:
      "Our intensive design bootcamp combines UI/UX mastery with real-world projects for aspiring designers.",
    image: "/image/hero.jpeg",
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
  image: "/image/hero.jpg",
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
    <main className="relative min-h-screen font-sans overflow-x-hidden">
      {/* ── Background ornament (absolute, behind everything) ── */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/assets/bg-ornament.svg"
          alt=""
          width={500}
          height={1100}
          className="absolute -right-40 top-0 opacity-10"
          aria-hidden
        />
      </div>

      <Navbar />

      {/* ╔═══════════════════════════════════════════════════════╗
         ║  SECTION 1 — HERO                                    ║
         ╚═══════════════════════════════════════════════════════╝ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/hero.jpeg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#010C29]/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <FadeIn>
            <span className="text-[#4576FD] font-mono text-sm tracking-widest uppercase">
              &lt;/Hero&gt;
            </span>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
              Let&apos;s Turn Ideas
              <br />
              <span className="bg-gradient-to-r from-[#4576FD] to-[#1746E9] bg-clip-text text-transparent">
                Into Experiences
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-white/60 mt-6 text-lg max-w-xl mx-auto">
              We create clear, thoughtful, and human-centered digital
              experiences that help brands connect meaningfully with their
              audience.
            </p>
          </FadeIn>
          <FadeIn delay={0.45}>
            <div className="mt-8">
              <Button variant="primary" size="lg" icon={ArrowRight}>
                Get Started
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════╗
         ║  SECTION 2 — ABOUT / INTRO                           ║
         ╚═══════════════════════════════════════════════════════╝ */}
      <section className="relative py-24 md:py-32 bg-[#FDFDFE] text-[#010C29]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Left – Text */}
          <FadeIn>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#010C29]/10 text-xs font-semibold uppercase tracking-wider text-[#4576FD] mb-6">
                Who are we?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Your digital partner for{" "}
                <span className="text-[#4576FD]">sustainable growth</span>
              </h2>
              <p className="text-[#010C29]/60 text-lg mb-8 leading-relaxed">
                We craft modern digital strategies, web experiences and mobile
                systems that accelerate business growth and foster innovation in
                the digital age.
              </p>
              <Button variant="primary" icon={ArrowRight}>
                See More
              </Button>
            </div>
          </FadeIn>

          {/* Right – Image composition */}
          <FadeIn delay={0.2} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main image */}
              <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/image/hero.jpeg"
                  alt="Our team at work"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Secondary image */}
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/image/hero.jpg"
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
      <section className="relative py-24 md:py-32 bg-[#FDFDFE] text-[#010C29]">
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

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#010C29]/5 overflow-hidden"
                >
                  {/* Top accent bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />

                  {/* Icon */}
                  <div className="mb-6 text-[#4576FD]">{service.icon}</div>

                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-[#010C29]/50 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#4576FD] hover:gap-2 transition-all"
                  >
                    Nos projets <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════╗
         ║  SECTION 4 — BLOG / INSIGHTS                         ║
         ╚═══════════════════════════════════════════════════════╝ */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#f5f7ff] to-[#FDFDFE] text-[#010C29]">
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
      <section className="relative py-24 md:py-32 bg-[#FDFDFE] text-[#010C29]">
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
                  src="/image/hero.jpeg"
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
      <section className="relative py-24 md:py-32 bg-[#FDFDFE] text-[#010C29]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#010C29]/10 text-xs font-semibold uppercase tracking-wider text-[#4576FD] mb-4">
                Partners
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">They Trust Us</h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-items-center opacity-60">
              {PARTNERS.map((p) => (
                <Image
                  key={p.name}
                  src={p.src}
                  alt={p.name}
                  width={120}
                  height={50}
                  className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════╗
         ║  SECTION 7 — TESTIMONIALS                            ║
         ╚═══════════════════════════════════════════════════════╝ */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#FDFDFE] to-[#f5f7ff] text-[#010C29]">
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
          <Image src="/image/hero.jpeg" alt="" fill className="object-cover" />
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
            <Button variant="primary" size="lg" icon={ArrowRight}>
              Get Started
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════╗
         ║  FOOTER                                              ║
         ╚═══════════════════════════════════════════════════════╝ */}
      <footer className="relative bg-[#f0f4ff] text-[#010C29] py-16">
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
                      ? "bg-[#010C29] text-white"
                      : "border border-[#010C29]/15 text-[#010C29]/60 hover:border-[#4576FD] hover:text-[#4576FD]"
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
                <button className="bg-[#010C29] text-white px-6 py-4 text-sm font-semibold flex items-center gap-2 hover:bg-[#01219B] transition-colors cursor-pointer">
                  Envoyer <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Social icons */}
          <FadeIn delay={0.25}>
            <div className="flex justify-center gap-4 mb-8">
              {["facebook", "instagram", "x", "linkedin", "youtube"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#010C29] text-white flex items-center justify-center hover:bg-[#4576FD] transition-colors"
                    aria-label={social}
                  >
                    <span className="text-xs font-bold uppercase">
                      {social[0]}
                    </span>
                  </a>
                ),
              )}
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
