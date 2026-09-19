import { useEffect, useRef } from "react";

export default function About() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addReveal = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

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
    <div className="bg-astravia-cream text-black overflow-hidden pt-[96px] md:pt-[144px]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mea+Culpa&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

          .font-display {
            font-family: "Playfair Display", serif;
          }

          .font-script {
            font-family: "Mea Culpa", cursive;
          }

          .dot-pattern {
            background-color: #f4f2e8;
            background-image: radial-gradient(
              rgba(0, 0, 0, 0.15) 0.65px,
              transparent 0.65px
            );
            background-size: 5px 5px;
          }

          .about-reveal {
            opacity: 0;
            transform: translateY(35px);
            transition:
              opacity 0.8s ease,
              transform 0.8s ease;
          }

          .about-visible {
            opacity: 1;
            transform: translateY(0);
          }

          @keyframes aboutMarquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          .about-marquee {
            animation: aboutMarquee 28s linear infinite;
          }
        `}
      </style>

      {/* =====================================================
          ABOUT HERO - FULL VIEWPORT
      ====================================================== */}
      <section
        className="
          dot-pattern
          h-[calc(100svh-96px)]
          md:h-[calc(100svh-144px)]
          min-h-[620px]
          flex
          items-center
          justify-center
          px-6
        "
      >
        <div
          ref={addReveal}
          className="
            about-reveal
            text-center
            flex
            flex-col
            items-center
            justify-center
            max-w-3xl
          "
        >
          {/* Badge */}
          <span
            className="
              inline-flex
              items-center
              justify-center
              bg-astravia-yellow
              border
              border-black
              rounded-full
              px-6
              py-1.5
              text-xs
              md:text-sm
              font-medium
            "
          >
            Tentang Kami
          </span>

          {/* ABOUT US */}
          <h1
            className="
              font-script
              text-7xl
              sm:text-8xl
              md:text-[120px]
              lg:text-[145px]
              leading-[0.8]
              mt-3
            "
          >
            About Us
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-xl
              text-sm
              md:text-base
              leading-relaxed
              text-black/80
            "
          >
            Mengenal lebih dekat sejarah, arah gerak, dan nilai dasar yang kami
            bawa dalam setiap periode kepengurusan.
          </p>

          {/* Button */}
          <a
            href="#visi-misi"
            className="
              mt-7
              inline-flex
              items-center
              justify-center
              bg-black
              text-white
              px-6
              py-2.5
              rounded-full
              text-sm
              border
              border-black
              hover:bg-astravia-yellow
              hover:text-black
              transition-all
            "
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
            ref={addReveal}
            className="
              about-reveal
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
              md:gap-16
              lg:gap-24
              ml-0
              md:ml-[120px]
            "
          >
            {/* MISI */}
            <div ref={addReveal} className="about-reveal">
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
                  text-xs
                  md:text-sm
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
            <div ref={addReveal} className="about-reveal">
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
                  text-xs
                  md:text-sm
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
              ref={addReveal}
              className={`
                about-reveal
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
            ref={addReveal}
            className="
              about-reveal
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
                  ref={addReveal}
                  className={`
                    about-reveal
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
              ref={addReveal}
              className="
                about-reveal
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
