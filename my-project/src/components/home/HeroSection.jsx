import ScrollReveal from "../common/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* =========================
          HERO
      ========================== */}
      <div
        className="
          relative
          h-[calc(100svh-96px)]
          md:h-[calc(100svh-144px)]
          min-h-[580px]
          md:min-h-[620px]
          overflow-hidden
        "
      >
        {/* =========================
            BACKGROUND IMAGE
        ========================== */}
        <img
          src="/hero-pengurus.jpg"
          alt="Pengurus HMIF"
          className="
            absolute
            inset-0
            z-0
            w-full
            h-full
            object-cover
            object-[center_72%]
            scale-[1.12]
            md:scale-[1.10]
          "
        />

        {/* =========================
            DARK OVERLAY
        ========================== */}
        <div
          className="
            absolute
            inset-0
            z-[1]
            bg-black/35
            pointer-events-none
          "
        />

        {/* =========================
            BOTTOM GRADIENT
        ========================== */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[55%]
            z-[2]
            bg-gradient-to-t
            from-black/80
            via-black/25
            to-transparent
            pointer-events-none
          "
        />

        {/* =========================
            CONTENT
        ========================== */}
        <div
          className="
            section-container
            relative
            z-10
            h-full
            flex
            items-end
            pb-10
            sm:pb-12
            md:pb-14
            lg:pb-16
          "
        >
          <ScrollReveal className="w-full max-w-5xl">
            {/* =========================
                TITLE
            ========================== */}
            <h1
              className="
                font-serif
                text-[34px]
                sm:text-[42px]
                md:text-[56px]
                lg:text-[64px]
                leading-[0.82]
                tracking-tight
              "
            >
              {/* BARIS PERTAMA */}
              <span className="italic">Langkah</span>

              <span className="font-sans font-light"> — Awal</span>

              <br />

              {/* BARIS KEDUA */}
              <span className="font-sans font-light">Menuju —</span>

              {/* BINTANG */}
              <span
                className="
                  font-mea-culpa
                  text-astravia-yellow
                  font-normal
                  text-[1.8em]
                  leading-[0.5]
                  inline-block
                  relative
                  ml-12
                  md:ml-16
                  lg:ml-20
                  top-2
                "
              >
                Bintang
              </span>
            </h1>

            {/* =========================
                DESCRIPTION
            ========================== */}
            <div className="mt-7 md:mt-8 max-w-xl">
              <p
                className="
                  text-sm
                  md:text-base
                  leading-relaxed
                  text-white/90
                  max-w-lg
                "
              >
                HMIF (Himpunan Mahasiswa Teknik Informatika) Telkom University
                Purwokerto hadir sebagai wadah berkembang, berinovasi, dan
                berkarya bagi seluruh mahasiswa Teknik Informatika.
              </p>

              {/* =========================
                  CTA BUTTON
              ========================== */}
              <Link
                to="/program-kerja"
                className="
                  mt-5
                  md:mt-6
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-2.5
                  rounded-full
                  bg-black/70
                  border
                  border-white
                  text-sm
                  backdrop-blur-sm
                  hover:bg-astravia-yellow
                  hover:text-black
                  hover:border-astravia-yellow
                  transition-all
                "
              >
                Jelajahi Program
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* =========================
          CABINET MARQUEE
      ========================== */}
      <div
        className="
          bg-black
          border-t
          border-white/20
          overflow-hidden
          py-3
        "
      >
        <div
          className="
            whitespace-nowrap
            flex
            gap-8
            min-w-max
            animate-[marquee_25s_linear_infinite]
          "
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              className="
                font-serif
                text-2xl
                text-white
              "
            >
              Kabinet Astravia
            </span>
          ))}
        </div>
      </div>

      {/* =========================
          FONTS + MARQUEE
      ========================== */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mea+Culpa&display=swap');

          .font-mea-culpa {
            font-family: 'Mea Culpa', cursive;
          }

          @keyframes marquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
}
