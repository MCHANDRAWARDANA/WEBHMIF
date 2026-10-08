import ScrollReveal from "../common/ScrollReveal";

const stats = [
  {
    value: "06",
    title: "Divisi",
    description:
      "HMIF (Himpunan Mahasiswa Teknik Informatika) Telkom University Purwokerto hadir sebagai wadah berkembang, berinovasi, dan berkarya bagi seluruh mahasiswa Teknik Informatika.",
  },
  {
    value: "56",
    title: "Anggota Aktif",
    description:
      "Mahasiswa Teknik Informatika Telkom University Purwokerto yang aktif berkontribusi dalam berbagai kegiatan dan pengembangan organisasi.",
  },
  {
    value: "99+",
    title: "Kegiatan",
    description:
      "Berbagai aktivitas dan program yang menjadi wadah mahasiswa untuk berkembang, berkarya, dan berkolaborasi.",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-black text-white">
      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        max-w-[1400px]
        mx-auto
      "
      >
        {stats.map((stat, index) => (
          <ScrollReveal
            key={stat.title}
            delay={index * 100}
            className="
              px-8
              md:px-12
              py-16
              md:py-20
              border-b
              md:border-b-0
              md:border-r
              border-white/30
              last:border-r-0
            "
          >
            <div
              className="
              flex
              items-start
              gap-3
            "
            >
              <span
                className="
                text-astravia-yellow
                text-xl
                mt-2
              "
              >
                ↘
              </span>

              <span
                className="
                font-serif
                italic
                text-7xl
                md:text-8xl
                leading-none
                text-astravia-yellow
              "
              >
                {stat.value}
              </span>
            </div>

            <h3
              className="
              mt-5
              text-2xl
              md:text-3xl
              text-astravia-yellow
            "
            >
              {stat.title}
            </h3>

            <p
              className="
              mt-4
              text-sm
              md:text-base
              leading-relaxed
              max-w-sm
              text-white/80
            "
            >
              {stat.description}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
