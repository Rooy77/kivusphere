"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Ornament } from "@/components/ui";
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
      image: "/assets/keyboard1.jpeg",
      href: "/blog",
    },
    {
      title: t("p2_title"),
      category: t("p2_cat"),
      excerpt: t("p2_excerpt"),
      image: "/assets/keyboard1.jpeg",
      href: "/blog",
    },
  ];

  return (
    <section className="relative bg-bg-soft py-24 md:py-32 text-[#010C29] overflow-hidden">
      <Ornament
        position="right"
        opacity={0.4}
        className="absolute -top-40 -right-40 hidden md:block"
      />
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <span className="self-start inline-block px-5 py-2 rounded-full border border-black text-xs font-medium text-black">
              {t("badge")}
            </span>
            <h2 className="section-title mb-4">{t("title")}</h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 mt-4 hover:opacity-80 transition-opacity"
            >
              <span className="text-sm font-medium text-[#010C29]/60">
                {t("see_more")}
              </span>
              <div className="w-8 h-8 rounded-full bg-[#010C29] flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <FadeIn key={post.title} delay={i * 0.15}>
              <Link href={post.href as any}>
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
                      <p className="text-white max-w-sm">{post.excerpt}</p>
                    </div>
                  </div>

                  {/* Arrow button */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#4576FD] transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-white" />
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
