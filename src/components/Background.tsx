import React from 'react';
import Image from 'next/image';


export const BackgroundGrid = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[850px] z-0 pointer-events-none overflow-hidden">
    <div className="relative w-full h-full">
      <Image
        // Votre chemin d'image. Assurez-vous qu'il est correct : /public/image/back.jpg
        src="/image/back.jpg" 
        alt="Horizon planétaire lumineux"
        fill // L'image remplit absolument ce conteneur relatif (w-full h-full)
        className="
          overflow-hidden
          object-cover 
          // Positionne l'image en bas du conteneur pour ne voir que l'horizon
          object-bottom 
          // Ajustements visuels
          mix-blend-lighten 
          opacity-30 
          saturate-150 
          contrast-125 
          blur-sm
        "
        priority
      />
    </div>

    {/* Ajout d'une ombre floue en haut pour intensifier la lueur bleue sous l'image (INCHANGÉ) */}
    <div className="absolute top-0 left-0 right-0 h-1/4 bg-blue-500/10 blur-3xl opacity-50"></div>
  </div>
);