"use client";

import { Link } from "@/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Button, Ornament } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-soft">
      {/* Background Ornaments */}
      <Ornament
        position="left"
        opacity={0.08}
        className="absolute -top-20 -left-40 hidden md:block"
      />
      <Ornament
        position="right"
        opacity={0.08}
        className="absolute -bottom-20 -right-40 hidden md:block"
      />

      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* Large 404 display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-6"
        >
          <h1 className="text-[120px] md:text-[220px] font-black leading-none bg-gradient-to-b from-black via-black/40 to-transparent bg-clip-text text-transparent select-none tracking-tighter">
            404
          </h1>
          {/* Animated accent line beneath 404 */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[3px] bg-accent mx-auto rounded-full"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {t('title')}
          </h2>
          <p className="text-black/60 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/">
            <Button icon={Home}>
              {t('back_to_home')}
            </Button>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-black/60 hover:text-black transition-colors group px-6 py-3"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">{t('go_back')}</span>
          </button>
        </motion.div>

        {/* Branding Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-10 border-t border-black/5"
        >
          <Link href="/">
            <Image
              src="/assets/logos/kivusphere-full-dark.svg"
              alt="KivuSphere"
              width={160}
              height={40}
              className="mx-auto opacity-20 hover:opacity-50 transition-opacity"
            />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
