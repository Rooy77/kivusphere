import {
  Laptop,
  Globe,
  PenTool,
  Megaphone,
  ArrowUpRight
} from "lucide-react";
import { JSX } from "react";

type Service = {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  featured?: boolean;
};

const services: Service[] = [
  {
    id: "01",
    title: "Graphic & UI / UX Design",
    description: "Conception d’interfaces intuitives et centrées utilisateur. Identité visuelle, branding et supports professionnels.",
    icon: <PenTool className="h-6 w-6 text-indigo-600" />
  },
  {
    id: "02",
    title: "Développement Web & Mobile",
    description: "Création de sites web modernes, performants et évolutifs. Applications mobiles robustes pour Android et iOS.",
    icon: <Globe className="h-6 w-6 text-white" />,
    featured: true
  },
  {
    id: "03",
    title: "Marketing Digital",
    description: "Stratégies digitales pour développer votre visibilité.",
    icon: <Megaphone className="h-6 w-6 text-indigo-600" />
  },
  {
    id: "04",
    title: "Consultance Informatique",
    description: "Accompagnement stratégique et optimisation des systèmes IT.",
    icon: <Laptop className="h-6 w-6 text-[#4576FD]" />
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f8f9fc] px-6 md:px-12 lg:px-24 py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:gap-12">

        {/* HEADER */}
        <div className="w-full md:w-1/3 mb-12 md:mb-0 text-center md:text-left space-y-6">
          <div>
            <span className="inline-flex items-center gap-2 font-bold rounded-md text-sm text-[#4576FD] mb-4">
              <span className='h-2 w-2 bg-[#4576FD] rounded-full'></span>
              Nos services
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Découvrez nos services <br />
              adaptés à votre <span className="text-[#4576FD]">transformation digitale</span>
            </h2>
          </div>

          <p className="text-gray-500 text-sm sm:text-base max-w-md leading-relaxed">
            KivuSphere vous accompagne dans votre transformation digitale et stratégique grâce à des services professionnels et sur mesure.
          </p>

          <button className="mt-6 sm:mt-8 w-fit mx-auto md:mx-0 inline-flex items-center gap-2 rounded-full bg-[#4576FD] px-6 py-3 text-sm font-medium text-white hover:bg-[#4576FD]/90 transition">
            Tous les services
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* GRID */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map(service => (
            <div
              key={service.id}
              className={`relative rounded-2xl p-6 sm:p-8 overflow-visible ${
                service.featured
                  ? "bg-[#4576FD] text-white"
                  : "bg-[#4576FD]/5 text-gray-900"
              } `}
            >
              {/* ICON FLOAT TOUJOURS VISIBLE */}
              <div
                className={`absolute -top-7 -left-7 z-20 h-14 w-14 rounded-full flex items-center justify-center ${
                  service.featured ? "bg-white/20" : "bg-indigo-100"
                }`}
              >
                {service.icon}
              </div>

              {/* CONTENT */}
              <div className="pt-10 text-center sm:text-left relative z-10">
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p
                  className={`text-sm mb-6 ${
                    service.featured ? "text-indigo-100" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>
                <button
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium border transition ${
                    service.featured
                      ? "border-white/30 text-white hover:bg-white/10"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Nos projets
                  <ArrowUpRight size={14} />
                </button>
              </div>

              {/* BIG NUMBER */}
              <span
                className={`absolute bottom-6 right-6 text-5xl sm:text-6xl font-bold select-none ${
                  service.featured ? "text-white/10" : "text-gray-100"
                }`}
              >
                {service.id}
              </span>

              {/* BUBBLE EFFECT CONFINÉ DANS LA CARTE */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-1/2 right-0 w-32 h-32 bg-purple-100 rounded-full blur-2xl translate-x-1/4 -translate-y-1/2"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
