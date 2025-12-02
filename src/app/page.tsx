import React from 'react';
// Importation des composants que vous avez créés dans le dossier 'components'
// NOTE : L'importation utilise le chemin relatif '..' car 'page.tsx' est dans 'app/'
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { BackgroundGrid } from '../components/Background';


/**
 * @name LandingPage
 * @description Composant principal qui assemble la navigation, le fond, et la section Hero.
 * @returns {JSX.Element}
 */
export default function LandingPage() {
  return (
    <main className="relative min-h-screen flex flex-col font-sans selection:bg-blue-500/30">
      
      {/* 1. Fond (Grille et effets visuels de base) */}
      <BackgroundGrid />
      
      {/* 2. Navigation (Header / Navbar Flottante) */}
      <Navbar />

      {/* 3. Contenu de la page Héros (Titre, CTA, Logos, Aperçu d'image) */}
      {/* Le HeroSection contient déjà PlanetGlow, TrustedBy et le contenu textuel. */}
      <HeroSection />

      {/* --- Section de remplissage pour la démonstration du défilement --- */}
      <section className="h-[100vh] border-t border-white/10 flex flex-col justify-center items-center px-4 bg-[#020408] relative z-10">
        <h2 className="text-3xl font-semibold text-gray-500 mb-4">
          Ceci est le reste de votre page
        </h2>
        <p className="text-gray-600">
          Le contenu ci-dessus est votre Hero Section assemblée. Le composant Navbar reste fixe en haut.
        </p>
      </section>

    </main>
  );
}