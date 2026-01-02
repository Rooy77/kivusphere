import Image from "next/image";

type Partner = {
  id: number;
  name: string;
  logo: string;
};

const partners: Partner[] = [
  { id: 1, name: "Ahrefs", logo: "/image/partners/ahrefs.svg" },
  { id: 2, name: "Microsoft", logo: "/image/partners/microsoft.svg" },
  { id: 3, name: "Help Scout", logo: "/image/partners/helpscout.svg" },
  { id: 4, name: "Jotform", logo: "/image/partners/jotform.svg" },
  { id: 5, name: "Amazon", logo: "/image/partners/amazon.svg" },
  { id: 6, name: "Notion", logo: "/image/partners/notion.svg" },
  { id: 7, name: "LinkedIn", logo: "/image/partners/linkedin.svg" },
  { id: 8, name: "Circle", logo: "/image/partners/circle.svg" },
];

export default function PartnersSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="flex items-center justify-center font-bold rounded-md text-sm mb-4 text-[#4576FD] gap-2">
            <span className='h-2 w-2 bg-[#4576FD] rounded-full'></span>
            Partenaires
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Ils ont confiance en Nous
          </h2>
        </div>

        {/* Logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="
                flex items-center justify-center
                h-24
                bg-white
                transition
              "
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
