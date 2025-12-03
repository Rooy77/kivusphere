import React from "react";
import { TrendingUp, Target, Award } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// ----------- DATA (Node.js style array) -----------
const valuesData = [
  {
    icon: TrendingUp,
    title: "Company Values",
    description:
      "Occaecati voluptatem etiam hic excepteur at ut curae. Minim possimus orci, facilisis.",
  },
  {
    icon: Target,
    title: "Company Mission",
    description:
      "Occaecati voluptatem etiam hic excepteur at ut curae. Minim possimus orci, facilisis.",
  },
];

// ----------- ValueCard Component -----------
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
    <div className="flex-shrink-0 w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center border-2 border-teal-300">
      <Icon className="w-7 h-7 text-teal-600" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  </motion.div>
);

// ----------- ImageStack Component -----------
const ImageStack = () => (
  <div className="relative w-full h-full min-h-[550px] lg:min-h-[600px] flex items-center justify-center p-6">
    {/* MAIN IMAGE */}
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-[85%] h-[550px] rounded-3xl overflow-hidden shadow-2xl shadow-gray-400 z-10 border-4 border-white"
    >
      <div className="w-full h-full bg-yellow-400/80 flex flex-col items-center justify-center text-white text-lg font-bold">
        Image Principale (Équipe qui célèbre)
      </div>
    </motion.div>

    {/* TOP LEFT IMAGE */}
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="absolute top-0 left-0 w-1/3 h-[180px] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20"
    >
      <div className="w-full h-full bg-blue-400/80 flex items-center justify-center text-white text-sm">
        Image A
      </div>
    </motion.div>

    {/* BOTTOM RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="absolute bottom-12 right-0 w-1/3 h-[180px] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20"
    >
      <div className="w-full h-full bg-green-400/80 flex items-center justify-center text-white text-sm">
        Image B
      </div>
    </motion.div>

    {/* BADGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="absolute bottom-[-10px] left-0 bg-teal-500 text-white py-4 px-6 rounded-2xl rounded-tl-none shadow-xl z-30"
    >
      <div className="flex items-center gap-3">
        <Award className="w-8 h-8" />
        <div>
          <p className="text-4xl font-extrabold leading-none">25+</p>
          <p className="text-sm font-medium">Years of Experience</p>
        </div>
      </div>
    </motion.div>
  </div>
);

// ----------- MAIN SECTION -----------
export const AboutSection: React.FC = () => {
  const paragraph =
    "Pellentesque dolore suscipit metus nisi pede, cursus primis, semper senectus, donec, purus parturient? Egestas, faucibus laudanit! Qium quo? Sem, mollis nemo posuere risus.";

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
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            We Build Competitive <br /> Business sectors
          </h2>

          <p className="text-gray-600 mb-10 max-w-lg">{paragraph}</p>

          {/* VALUES / MISSIONS */}
          {valuesData.map((item, index) => (
            <ValueCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}

          {/* FOUNDER + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 flex items-center justify-between border-t border-gray-100 pt-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                JD
              </div>
              <div>
                <p className="font-semibold text-gray-800">Jonas Duke</p>
                <p className="text-sm text-gray-500">Chairman & Founder</p>
              </div>
            </div>

            <Link href="/about-us">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors shadow-lg shadow-teal-500/30">
                More About Us
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
