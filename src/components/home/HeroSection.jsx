import ScrollReveal from "../common/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="home-hero">
        <img
          src="/hero-pengurus.jpg"
          alt="Pengurus HMIF"
          className="home-hero__image"
        />
        <div className="home-hero__shade" aria-hidden="true" />
        <div className="home-hero__gradient" aria-hidden="true" />

        <div className="section-container home-hero__content">
          <ScrollReveal className="home-hero__intro">
            <h1 className="home-hero__title" aria-label="Langkah — Awal Menuju — Bintang">
              <span className="home-hero__line" aria-hidden="true">
                <span className="home-hero__serif">Langkah</span>
                <span className="home-hero__dash">—</span>
                <span className="home-hero__condensed">Awal</span>
              </span>
              <span className="home-hero__line home-hero__line--second" aria-hidden="true">
                <span className="home-hero__condensed">Menuju</span>
                <span className="home-hero__dash home-hero__dash--yellow">—</span>
                <span className="home-hero__star">
                  <span className="home-hero__initial">B</span><span>intang</span>
                </span>
              </span>
            </h1>

            <div className="home-hero__meta">
              <p className="home-hero__description">
                HMIF (Himpunan Mahasiswa Teknik Informatika) Telkom University
                Purwokerto hadir sebagai wadah berkembang, berinovasi, dan
                berkarya bagi seluruh mahasiswa Teknik Informatika.
              </p>
              <Link to="/program-kerja" className="home-hero__button">
                Jelajahi Program
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="bg-black border-t border-white/20 overflow-hidden py-3">
        <div className="home-hero__marquee whitespace-nowrap flex gap-8 min-w-max">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index} className="font-serif text-2xl text-white">
              Kabinet Astravia
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
