'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDownRight, Wallet, Users, Layout, Briefcase } from 'lucide-react';

// Animation variants pour une apparition fluide
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* COLONNE GAUCHE (Cartes) */}
          <div className="flex flex-col gap-6">
            
            {/* Carte Principale (Financial Planning) */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#4576FD]/5 rounded-[2.5rem] p-6 relative overflow-hidden flex flex-col sm:flex-row gap-6 items-center"
            >
              {/* Image Container */}
              <div className="relative w-full sm:w-1/2 h-48 sm:h-56 rounded-2xl overflow-hidden shrink-0">
                {/* Placeholder Image - Remplacez src par votre image réelle */}
                <Image
                  src="https://images.pexels.com/photos/35132397/pexels-photo-35132397.jpeg"
                  alt="Team meeting"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenu Carte */}
              <div className="flex flex-col justify-center relative z-10 w-full sm:w-1/2">
                <p className="text-gray-500 text-sm leading-relaxed">
                  Nous analysons votre activité, définissons une feuille de route digitale claire.
                </p>
                <div className="vide mb-14"></div>
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-4 sm:mt-0">
                      Stratégie digitale <br /> & consultance
                    </h3>
                    <span className='text-gray-900 flex items-center gap-2 font-medium hover:underline cursor-pointer'>
                       <ArrowDownRight size={30}/>
                    </span>
                </div>

              </div>
              
              {/* Élément décoratif d'arrière-plan (forme vague subtile) */}
              <div className="absolute top-1/2 right-0 w-32 h-32 bg-purple-100 rounded-full blur-2xl -z-0 translate-x-1/2 -translate-y-1/2" />
            </motion.div>

            {/* Carte Statistiques */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#4576FD]/5 rounded-[2.5rem] p-8 flex flex-wrap justify-between items-center text-center divide-x divide-purple-200/50"
            >
              <div className="flex-1 px-2">
                <h4 className="text-3xl font-bold text-gray-900">01+</h4>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">Années d’expérience</p>
              </div>
              <div className="flex-1 px-2">
                <h4 className="text-3xl font-bold text-gray-900">15+</h4>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">Projets réalisés</p>
              </div>
              <div className="flex-1 px-2">
                <h4 className="text-3xl font-bold text-gray-900">05+</h4>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">Clients satisfaits</p>
              </div>
            </motion.div>
          </div>

          {/* COLONNE DROITE (Texte) */}
          <div className="flex flex-col items-start gap-6 lg:pl-8">
            <motion.div variants={itemVariants}>
              <span className="flex items-center w-auto font-bold  rounded-md text-sm mb-4 text-[#4576FD] gap-2">
                <span className='h-2 w-2 bg-[#4576FD] rounded-full'></span>
                Nous sommes ?
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                Votre partenaire <br className="hidden md:block"/>
                digital pour une croissance durable
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg">
                Kivu Sphere est une structure moderne de consultance. Nous accompagnons les entreprises dans la définition
                de stratégies digitales efficaces, le développement de solutions numériques performantes et la prise de
                  décisions basées sur les données.
              </p>
            </motion.div>

            {/* Feature : Cost Effective */}
            <motion.div 
              variants={itemVariants}
              className="w-auto bg-gray-50 rounded-2xl p-4 flex items-center gap-4 mb-6  transition-all border border-transparent hover:border-gray-100"
            >
              <div className="bg-[#4576FD]/20 p-3 rounded-xl text-[#4576FD] shrink-0">
                <Wallet size={24} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-sm">Solutions sur mesure & rentables</h4>
                <p className="text-gray-400 text-xs">Adaptées à votre budget, sans compromettre la qualité</p>
              </div>
            </motion.div>

            {/* Bouton CTA */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-2.5 bg-[#4576FD] border border-white/10 hover:bg-white/10 text-white text-sm rounded-full font-medium transition-all hover:scale-105 active:scale-95 group cursor-pointer"
            >
              Plus sur nous
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}