import "./About.css";

export default function About() {
  const missions = [
    "Menguatkan anggota HMIF dengan memperkuat kolaborasi secara internal berupa komunikasi, solidaritas, dan partisipasi, serta mengembangkan hubungan eksternal dalam bidang yang relevan untuk mengenalkan HMIF kepada pihak terkait.",
    "Menjalankan roda kepemimpinan HMIF dengan rasa kebersamaan, kebijaksanaan, dan keberanian berpendapat yang sejalan dengan arah organisasi.",
    "Mewadahi pengembangan diri yang adaptif dan responsif, serta mendorong minat dan bakat mahasiswa Teknik Informatika di bidang akademik maupun non-akademik.",
    "Mengembangkan komunikasi yang efektif kepada seluruh Mahasiswa Teknik Informatika dan Akademik Program Studi Teknik Informatika serta pihak eksternal terkait.",
    "Mengembangkan kreativitas, inovasi, interaktivitas dalam penyampaian informasi untuk menjadikan HMIF sebagai media informasi yang menarik dan bermanfaat.",
  ];

  const stats = [
    {
      number: "07",
      label: "Divisi",
      text: "HMIF hadir sebagai wadah berkembang, berinovasi, dan berkarya bagi seluruh mahasiswa Teknik Informatika.",
    },
    {
      number: "56",
      label: "Anggota Aktif",
      text: "Mahasiswa aktif yang menjadi bagian dari perjalanan dan perkembangan HMIF Telkom University Purwokerto.",
    },
    {
      number: "99+",
      label: "Divisi",
      text: "Beragam perjalanan, kegiatan, dan kontribusi yang terus berkembang dalam setiap periode kepengurusan.",
    },
  ];

  const logoMeanings = [
    {
      title: "Bentuk Dasar Logo",
      text: "Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai organisasi yang kolaboratif, inklusif, dan transformatif dengan membawa jiwa integritas pada setiap langkahnya.",
    },
    {
      title: "Bintang Dalam Lingkaran",
      text: "Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai organisasi yang kolaboratif, inklusif, dan transformatif dengan membawa jiwa integritas pada setiap langkahnya.",
    },
    {
      title: "Garis Putih",
      text: "Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai organisasi yang kolaboratif, inklusif, dan transformatif dengan membawa jiwa integritas pada setiap langkahnya.",
    },
    {
      title: "Motif Daun atau Kelopak",
      text: "Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai organisasi yang kolaboratif, inklusif, dan transformatif dengan membawa jiwa integritas pada setiap langkahnya.",
    },
  ];

  return (
    <div className="about-page bg-astravia-cream text-black overflow-hidden">

      {/* =====================================================
          ABOUT HERO
      ====================================================== */}
      <section className="dot-pattern about-hero">
        <div
          className="about-hero-content scroll-reveal"
        >
          <div className="about-hero-badge">Tentang Kami</div>

          <h1 className="about-hero-title page-hero-title">
            <span className="about-hero-script page-hero-script">About</span>
            <span>Us</span>
          </h1>

          <p className="about-hero-description">
            Mengenal lebih dekat sejarah, arah gerak, dan nilai dasar yang kami
            bawa dalam setiap periode kepengurusan.
          </p>

          <a
            href="#visi-misi"
            className="about-hero-button"
          >
            Pelajari Lebih Lanjut ↓
          </a>
        </div>
      </section>

      {/* =====================================================
          MARQUEE
      ====================================================== */}
      <section className="bg-black text-white overflow-hidden border-y border-black">
        <div
          className="
            about-marquee
            flex
            min-w-max
            whitespace-nowrap
            py-3
          "
        >
          {[...Array(20)].map((_, index) => (
            <span
              key={index}
              className="
                font-display
                text-lg
                md:text-xl
                mr-10
              "
            >
              Kabinet Astravia
            </span>
          ))}
        </div>
      </section>

      {/* =====================================================
          VISI & MISI
      ====================================================== */}
      <section
        id="visi-misi"
        className="
          dot-pattern
          min-h-[620px]
          md:min-h-[560px]
          flex
          items-center
        "
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-16">
          {/* HEADER */}
          <div
            className="
              scroll-reveal
              grid
              grid-cols-1
              md:grid-cols-[120px_1fr]
              gap-5
              md:gap-8
              items-start
              mb-10
            "
          >
            {/* LOGO */}
            <div className="flex justify-start md:justify-center">
              <img
                src="/logo-hmif.png"
                alt="Logo HMIF"
                className="
                  w-20
                  md:w-24
                  lg:w-28
                  h-auto
                  object-contain
                "
              />
            </div>

            {/* TITLE */}
            <div>
              <h2
                className="
                  font-script
                  text-6xl
                  sm:text-7xl
                  md:text-8xl
                  lg:text-[100px]
                  leading-[0.75]
                "
              >
                Visi dan Misi
              </h2>
            </div>
          </div>

          {/* VISI MISI CONTENT */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-10
              md:gap-8 lg:gap-16
              ml-0
              lg:ml-[120px]
            "
          >
            {/* MISI */}
            <div className="scroll-reveal">
              <h3
                className="
                  font-display
                  italic
                  text-3xl
                  md:text-4xl
                  mb-5
                "
              >
                Misi
              </h3>

              <ol
                className="
                  list-decimal
                  pl-5
                  space-y-3
                  text-sm md:text-base
                  leading-relaxed
                  text-black/85
                "
              >
                {missions.map((mission, index) => (
                  <li key={index} className="pl-1">
                    {mission}
                  </li>
                ))}
              </ol>
            </div>

            {/* VISI */}
            <div className="scroll-reveal">
              <h3
                className="
                  font-display
                  italic
                  text-3xl
                  md:text-4xl
                  mb-5
                "
              >
                Visi
              </h3>

              <p
                className="
                  text-sm md:text-base
                  leading-relaxed
                  text-black/85
                  max-w-xl
                "
              >
                Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai
                organisasi yang kolaboratif, inklusif, dan transformatif dengan
                membawa jiwa integritas pada setiap langkahnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATISTICS
      ====================================================== */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.number}
              data-reveal="zoom"
              style={{ "--reveal-delay": `${index * 120}ms` }}
              className={`
                scroll-reveal
                px-8
                py-10
                md:px-10
                md:py-12
                lg:px-12
                lg:py-14
                ${
                  index !== stats.length - 1
                    ? "border-b md:border-b-0 md:border-r border-white/25"
                    : ""
                }
              `}
            >
              <div className="flex items-center gap-2">
                <span className="text-astravia-yellow text-xl">↘</span>

                <span
                  className="
                    font-display
                    italic
                    text-7xl
                    md:text-8xl
                    leading-none
                    text-astravia-yellow
                  "
                >
                  {stat.number}
                </span>
              </div>

              <h3
                className="
                  mt-4
                  text-astravia-yellow
                  text-lg
                  font-medium
                "
              >
                {stat.label}
              </h3>

              <p
                className="
                  mt-2
                  text-xs
                  leading-relaxed
                  text-white/70
                  max-w-sm
                "
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          MAKNA LOGO
      ====================================================== */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[34%_66%]">
          {/* LOGO BESAR */}
          <div
            className="
              scroll-reveal
              min-h-[420px]
              md:min-h-[500px]
              lg:min-h-[560px]
              flex
              items-center
              justify-center
              p-12
              bg-black
            "
          >
            <img
              src="/logo-hmif.png"
              alt="Logo HMIF"
              className="
                w-[220px]
                md:w-[280px]
                lg:w-[320px]
                object-contain
              "
            />
          </div>

          {/* MEANINGS */}
          <div className="dot-pattern text-black">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {logoMeanings.map((item, index) => (
                <div
                  key={item.title}
                  data-reveal={index % 2 === 0 ? "left" : "right"}
                  style={{ "--reveal-delay": `${(index % 2) * 140}ms` }}
                  className={`
                    scroll-reveal
                    min-h-[190px]
                    md:min-h-[220px]
                    p-7
                    md:p-9
                    border-b
                    border-black
                    ${index % 2 === 0 ? "sm:border-r" : ""}
                  `}
                >
                  <h3
                    className="
                      font-display
                      italic
                      text-xl
                      md:text-2xl
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[10px]
                      md:text-xs
                      leading-relaxed
                      text-black/80
                    "
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* BOTTOM */}
            <div
              className="
                scroll-reveal
                min-h-[190px]
                md:min-h-[220px]
                p-8
                md:p-10
                flex
                flex-col
                items-center
                justify-center
                text-center
              "
            >
              <h3
                className="
                  font-display
                  italic
                  text-xl
                  md:text-2xl
                "
              >
                The Blooming Growth: Kekuatan yang Bertumbuh
              </h3>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-[10px]
                  md:text-xs
                  leading-relaxed
                  text-black/80
                "
              >
                Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai
                organisasi yang kolaboratif, inklusif, dan transformatif dengan
                membawa jiwa integritas pada setiap langkahnya.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
