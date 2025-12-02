import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'KivuSphere - Accueil',
  description: 'Une structure de consultance moderne',
  openGraph: {
    title: 'Kivu Sphere',
    description: 'Une structure de consultance moderne dédiée à l\'accompagner et la transformation digital des entreprises en RD Congo, basé à Bukavu.',
    url: 'https://kivusphere.vercel.app/',
    siteName: 'Palotem Sarl',
    images: [
      {
        url: '/Users/user/kivusphere/public/shar.png',
        width: 1200,
        height: 630,
        alt: 'Présentation de KivuSphere',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Société Palotem Sarl',
    description: 'Notre expertise couvre le commerce général, l’import-export, les produits agricoles, les matériaux de construction, le génie civil, les énergies et les services logistiques.',
    images: ['/Users/user/kivusphere/public/image/logos/logo.svg'],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
