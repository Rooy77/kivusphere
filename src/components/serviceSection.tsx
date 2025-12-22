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
    icon: <Laptop className="h-6 w-6 text-indigo-600" />
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f8f9fc] px-8 py-24">
      <div className="flex max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="w-[80%] mb-16 ml-20 md:mb-24 space-y-6 md:space-y-8 text-center md:text-left">
          <div>
            <span className="flex items-center w-auto font-bold  rounded-md text-sm mb-4 text-[#4576FD] gap-2">
                <span className='h-2 w-2 bg-[#4576FD] rounded-full'></span>
               Nos services
            </span>

            <h2 className="text-4xl font-bold leading-tight text-gray-900">
              Choose Your Favourite <br />
              Service from Top{" "}
              <span className="text-indigo-600">Categories</span>
            </h2>
          </div>

          <div className="flex flex-col justify-between">
            <p className="text-gray-500 max-w-md leading-relaxed">
              Découvrez une variété de services professionnels conçus pour
              accélérer votre transformation digitale.
            </p>

            <button className="mt-8 w-fit inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700 transition">
              Browse All Services
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map(service => (
            <div
              key={service.id}
              className={`relative rounded-2xl p-8 shadow-sm overflow-visible ${
                service.featured
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              {/* ICON FLOAT DEVANT LA CARTE */}
              <div
                className={`absolute -top-7 left-1/2 transform -translate-x-1/2 z-10 h-14 w-14 rounded-full flex items-center justify-center ${
                  service.featured
                    ? "bg-white/20"
                    : "bg-indigo-100"
                }`}
              >
                {service.icon}
              </div>

              {/* CONTENT */}
              <div className="pt-10 text-center md:text-left">
                <h3 className="text-lg font-semibold mb-3">
                  {service.title}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    service.featured
                      ? "text-indigo-100"
                      : "text-gray-500"
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
                  Show More
                  <ArrowUpRight size={14} />
                </button>
              </div>

              {/* BIG NUMBER */}
              <span
                className={`absolute bottom-6 right-6 text-6xl font-bold select-none ${
                  service.featured
                    ? "text-white/10"
                    : "text-gray-100"
                }`}
              >
                {service.id}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
