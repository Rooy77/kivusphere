"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, MoveDownRight } from "lucide-react";
import { Ornament, VisionBadge } from "@/components/ui";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export const BlogSection = () => {
  const t = useTranslations("Blog");

  const BLOG_POSTS = [
    {
      title: t("p1_title"),
      category: t("p1_cat"),
      excerpt: t("p1_excerpt"),
      image: "/assets/bootcamp.png",
      href: "/blog",
    },
    {
      title: t("p2_title"),
      category: t("p2_cat"),
      excerpt: t("p2_excerpt"),
      image: "/assets/bootcamp.png",
      href: "/blog",
    },
  ];

  return (
    <section className="relative bg-bg-soft py-24 md:py-32 text-background overflow-hidden">
      <Ornament
        position="right"
        opacity={0.4}
        className="absolute -top-40 -right-40 hidden md:block"
      />
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <span className="self-start inline-block px-5 py-2 rounded-full border border-background text-xs font-medium text-background">
              {t("badge")}
            </span>
            <h2 className="section-title mb-4 !text-left">{t("title")}</h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 mt-4 hover:opacity-80 transition-opacity"
            >
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-action underline underline-offset-4">
                {t("see_more")}
              </span>
              <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg shadow-secondary/20">
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <FadeIn key={post.title} delay={i * 0.15}>
              <Link href={post.href as any}>
                <motion.div
                  className="group relative cursor-pointer overflow-hidden h-[460px] bg-background rounded-[50px]"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Image de fond — couvre toute la carte de manière logique et responsive */}
                  <div className="absolute inset-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 opacity-60 group-hover:scale-105"
                    />
                  </div>

                  {/* Badge catégorie — specs Figma: utilise le positionnement automatique par défaut */}
                  <VisionBadge label={post.category} />

                  {/* Conteneur logique unique pour le Titre et l'Excerpt, centré verticalement et horizontalement */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 px-8 z-10 text-center">
                    <h3 className="text-[clamp(28px,4vw,47px)] leading-[1.1] text-center tracking-[-0.075em] text-foreground m-0">
                      {post.title}
                    </h3>
                    <p className="max-w-[360px] not-italic font-light  leading-[19px] tracking-[-0.015em] !text-foreground m-0">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Bouton flèche — dimensions et positions logiques */}
                  <div className="absolute w-24 h-24 right-8 bottom-8 bg-action-soft rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-md z-10">
                    {/* Icône compatible Lucide — remplace le SVG inline */}
                    <MoveDownRight className="w-10 h-10 text-background stroke-1 transition-all duration-300" />
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
