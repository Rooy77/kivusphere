"use client";

import React from 'react';
// Importation des composants que vous avez créés dans le dossier 'components'
// NOTE : L'importation utilise le chemin relatif '..' car 'page.tsx' est dans 'app/'
import { Navbar } from '@/components/Navbar';

import { BackgroundGrid } from '@/components/Background';
import  AboutSection  from '@/components/aboutSection';
import { HeroSection } from '@/components/HeroSection';
import  ServiceSection  from '@/components/serviceSection';
import PartnersSection from '@/components/PartnersSection';
import ProEvent from '@/components/pro-event';
import Footer from '@/components/footer';


/**
 * @name LandingPage
 * @description Composant principal qui assemble la navigation, le fond, et la section Hero.
 * @returns {JSX.Element}
 */
export default function LandingPage() {
  return (
    <main className="relative min-h-screen flex flex-col font-sans">
      <BackgroundGrid />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <PartnersSection />
      <ProEvent />
      <Footer />
    </main>
  );
}