'use client";'

import Image from "next/image";
import React from 'react';


// Composant des Logos de Confiance
export const TrustedBy = () => {
   const trustedByData = [
    { name: "Boltshift", logo: "/image/logos/hor.svg" },
    { name: "Lightbox", logo: "/image/logos/warp.svg" },
    { name: "FeatherDev", logo: "/image/logos/tos.svg" },
    { name: "GlobalBank", logo: "/image/logos/bbc.svg" },
  ];

  return (
    <div className="mt-15 pt-10 border-t border-white/5 w-full flex flex-col items-center">
      <p className="text-sm text-gray-500 mb-6 font-medium">Trusted by 30+ Entreprises</p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {trustedByData.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3"
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};