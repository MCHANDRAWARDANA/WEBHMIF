import ScrollReveal from "../common/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

export default function AboutPreviewSection() {
  return (
    <section id="tentang-kami" className="bg-astravia-cream">
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[31%_1fr_130px]
        "
      >
        {/* Logo */}
        <div
          className="
            min-h-[320px]
            lg:min-h-[380px]
            bg-astravia-green
            flex
            items-center
            justify-center
            p-12
          "
        >
          <ScrollReveal>
            <img
              src="/logo-hmif.png"
              alt="Logo HMIF"
              className="
                w-[180px]
                md:w-[230px]
                object-contain
              "
            />
          </ScrollReveal>
        </div>

        {/* Text */}
        <div
          className="
            dot-pattern
            min-h-[320px]
            lg:min-h-[380px]
            flex
            flex-col
            justify-center
            px-8
            md:px-16
            py-14
          "
        >
          <ScrollReveal>
            <span
              className="
                inline-flex
                bg-astravia-yellow
                border
                border-black
                rounded-full
                px-5
                py-1
                text-sm
                mb-6
              "
            >
              Tentang Kami
            </span>

            <h2
              className="
    font-serif
    text-5xl
    md:text-6xl
    leading-[0.9]
    max-w-xl
  "
            >
              <span className="block">Menjadi Jalan Cahaya Untuk</span>

              <span className="block italic">Informatika</span>
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                text-sm
                md:text-base
                leading-relaxed
              "
            >
              HMIF Telkom University Purwokerto bertujuan untuk mewujudkan
              aspirasi anggota dalam membentuk kader yang berorganisasi,
              berakhlak dan bertanggung jawab serta memelihara iklim mahasiswa
              yang ilmiah, sehat, dinamis, dan kreatif.
            </p>
          </ScrollReveal>
        </div>

        {/* Visi Misi */}
        <div className="flex min-h-[320px] lg:min-h-[380px]">
          <div
            className="
              flex-1
              bg-astravia-yellow
              flex
              items-center
              justify-center
            "
          >
            <span className="font-serif text-xl">Visi</span>
          </div>

          <div
            className="
              flex-1
              bg-astravia-green
              text-white
              flex
              items-center
              justify-center
            "
          >
            <span className="font-serif text-xl">Misi</span>
          </div>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="lg:hidden bg-black p-6">
        <a
          href="/tentang-kami"
          className="
            inline-flex
            items-center
            gap-2
            text-astravia-yellow
          "
        >
          Selengkapnya
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
