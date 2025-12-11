"use client";

import React from "react";
import { TrendingUp, Target, Award, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// ----------- DATA -----------
const valuesData = [
  {
    icon: TrendingUp,
    title: "Nos valeurs",
    description:
      "Innovation, collaboration, excellence et impact durable guident chacune de nos actions.",
  },
  {
    icon: Target,
    title: "Notre Mission",
    description:
      "Accompagner les entreprises dans leur transformation digitale avec des solutions stratégiques et technologiques sur mesure, pour maximiser leur performance et leur impact.",
  },
];

// ----------- ValueCard -----------
interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex gap-4 p-5 bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 mb-6 transition-transform hover:scale-[1.02]"
  >
    <div className="flex-shrink-0 w-14 h-14 bg-[#3360dc]/30 rounded-full flex items-center justify-center border-2 border-[#3360dc]">
      <Icon className="w-7 h-7 text-[#3360dc]" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  </motion.div>
);

// ----------- ImageStack -----------
const ImageStack = () => (
  <div className="relative w-full h-full min-h-[550px] lg:min-h-[600px] flex items-center justify-center p-6">

    {/* MAIN IMAGE */}
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-[85%] h-[550px] rounded-3xl overflow-hidden shadow-gray-400 z-10  border-white relative"
    >
      <Image
        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
        alt="Team celebrating success"
        fill
        className="object-cover object-center"
        priority
      />
    </motion.div>

    {/* TOP LEFT IMAGE */}
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="absolute top-0 left-0 w-1/3 h-[180px] rounded-2xl overflow-hidden shadow-xl border-2 border-white z-20"
    >
      <Image
        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
        alt="Business meeting"
        fill
        className="object-cover object-center"
      />
    </motion.div>

    {/* BOTTOM RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="absolute bottom-12 right-0 w-1/3 h-[180px] rounded-2xl overflow-hidden shadow-xl border-2 border-white z-20"
    >
      <Image
        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
        alt="Modern workspace"
        fill
        className="object-cover object-center"
      />
    </motion.div>

    {/* BADGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="absolute bottom-[-10px] left-0 bg-[#010c29]/90 backdrop-blur-md text-white py-4 px-6 rounded border-l-4 border-[#3360dc] z-30"
    >
      <div className="flex items-center gap-3">
        <Award className="w-8 h-8" />
        <div>
          <p className="text-4xl font-extrabold leading-none">07+</p>
          <p className="text-sm font-medium">Années d&apos;experience</p>
        </div>
      </div>
    </motion.div>
  </div>
);

// ----------- MAIN SECTION -----------
export const AboutSection: React.FC = () => {
  const paragraph =
    "Fondée pour répondre aux besoins des entreprises modernes, notre structure de consultance accompagne ses clients dans toutes les étapes de la transformation digitale : analyse stratégique, intégration technologique et optimisation des processus. Basés à Bukavu, nous aidons les entreprises de RD Congo à se positionner avec succès dans l’économie numérique.";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white py-24 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* IMAGES */}
        <div className="order-2 lg:order-1">
          <ImageStack />
        </div>

        {/* TEXT */}
        <div className="pt-10 order-1 lg:order-2">
          <p className="mb-3 inline-flex items-center rounded-full px-5 py-2 text-[#4576FD] font-light">
            <span className="mr-2 block h-1.5 w-1.5 bg-[#4576FD]"></span>
            <span className="text-xs font-bold">A propos de nous</span>
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Qui sommes-nous <br /> Pour vous ?
          </h2>

          <p className="text-gray-600 mb-10 max-w-l font-lightg">{paragraph}</p>

          {valuesData.map((item, index) => (
            <ValueCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 flex items-center justify-between border-t border-gray-100 pt-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs font-bold">
                JD
              </div>
              <div>
                <p className="font-semibold text-gray-800">Jonas Duke</p>
                <p className="text-sm text-gray-500">Chairman & Founder</p>
              </div>
            </div>

            <Link href="/about-us">
              <button className="bg-[#4576FD] hover:bg-[#3360dc] flex items-center gap-2 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors">
                <span>Nous Lire plus</span>
                <div className="text-white">
                        <ArrowUpRight />
                    </div>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
