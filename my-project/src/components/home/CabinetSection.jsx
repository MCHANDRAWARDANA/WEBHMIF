import ScrollReveal from "../common/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cabinetData } from "../../data/cabinet";

export default function CabinetSection() {
  return (
    <section className="bg-black text-white py-20 overflow-hidden">
      <div className="section-container">
        <ScrollReveal className="flex items-center justify-between gap-5 mb-12">
          <h2 className="font-serif text-4xl md:text-6xl">
            Pengurus Kabinet
            <span className="italic"> Astravia</span>
          </h2>

          <Link
            to="/departemen"
            className="hidden md:flex items-center gap-2 bg-astravia-yellow text-black rounded-full px-6 py-2 text-sm hover:-translate-y-1 transition-transform"
          >
            Selengkapnya
            <ArrowRight size={16} />
          </Link>
        </ScrollReveal>

        <div className="flex gap-4 overflow-x-auto pb-5 scrollbar-none">
          {cabinetData.map((item, index) => (
            <ScrollReveal
              key={item.id}
              delay={index * 80}
              className="min-w-[180px] md:min-w-[145px] flex-shrink-0"
            >
              <Link
                to={item.path}
                className="block group cursor-pointer"
                aria-label={`Buka ${item.shortName} - ${item.fullName}`}
              >
                <div
                  className="h-[180px] md:h-[145px] w-full flex items-center justify-center transition-transform group-hover:-translate-y-1"
                  style={{ backgroundColor: item.color }}
                />

                <div className="pt-4 text-center">
                  <h3 className="font-serif text-3xl">{item.shortName}</h3>
                  <p className="text-sm text-white/75 mt-1">{item.fullName}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="md:hidden mt-8">
          <Link
            to="/departemen"
            className="inline-flex items-center gap-2 bg-astravia-yellow text-black rounded-full px-6 py-2"
          >
            Selengkapnya
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
