import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: 'Features', href: '#' }, // Corrigé "Futures" -> "Features"
    { name: 'Plans & Tarif', href: '#' },
    { name: 'Actualités & Blogs', href: '#' },
    { name: 'A propos', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Cookies', href: '#' },
  ];

  return (
    <footer className="w-full bg-white pt-20 flex flex-col items-center border-t border-gray-100">

      {/* 1️⃣ Logo & Brand */}
      <div className="flex items-center gap-3 mb-8">
        <Image src="image/logos/logo-.svg" alt="KivuSphere Logo" width={180} height={40} />
      </div>

     {/* 2️⃣ Contact Info Section */}
      <div className="text-center px-4 max-w-3xl mx-auto mb-16 space-y-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Parlons de votre projet !
        </h2>
        <p className='text-sm text-center text-gray-700'>
            Nous sommes basés à Goma, RDC. Quartier les volcans, 10 avenue la corniche, <br /> Immeuble Diplomatique, 3ième étage.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-16">

            {/* --- EMAIL (Gradient Bleu → Orange) --- */}
            <a
                href="mailto:Kivusphere@gmail.com"
                className="group relative flex w-full sm:w-[280px] items-center justify-center space-x-3 rounded-full px-7 py-4 font-medium text-white transition-all"
                style={{
                background: "linear-gradient60deg, #3b82f6, #6366f1, #f97316)", // bleu → indigo → orange
                }}
            >
                {/* Icône Mail */}
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 text-white"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
                </svg>

                {/* Texte */}
                <span className="text-sm text-white font-semibold tracking-wide">
                    Kivusphere@gmail.com
                </span>
            </a>

        </div>

      </div>

      {/* 3️⃣ Navigation Links */}
      <nav className="w-full max-w-5xl px-6 mb-12">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {footerLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-[12px] font-medium text-gray-500 hover:text-gray-900 transition-colors relative group"
              >
                {link.name}
                {/* Petit point décoratif au survol des liens */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Copyright optionnel pour finir proprement */}
      <div className="w-full border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} KivuSphere Inc. Made with ❤️ in DR Congo.
      </div>
    </footer>
  );
};

export default Footer;