import { useEffect, useRef } from "react";

export default function WorkPrograms() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("work-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
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

  const categories = [
    {
      label: "EB",
      bg: "#176b63",
      text: "#ffffff",
    },
    {
      label: "CCO",
      bg: "#f4e72d",
      text: "#111111",
    },
    {
      label: "HCCB",
      bg: "#e5b9e7",
      text: "#111111",
    },
    {
      label: "ERA",
      bg: "#ff6b3d",
      text: "#ffffff",
    },
    {
      label: "TDI",
      bg: "#748fe8",
      text: "#ffffff",
    },
    {
      label: "FED",
      bg: "#ef4a7e",
      text: "#ffffff",
    },
    {
      label: "HID",
      bg: "#dce633",
      text: "#111111",
    },
  ];

  const programs = [
    {
      category: "CCO",
      date: "Kamis, 17 September 2026",
      title: "Welcoming Party Informatics",
      description:
        "Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai organisasi yang kolaboratif, inklusif, dan transformatif dengan membawa jiwa integritas pada setiap langkahnya.",
    },
    {
      category: "CCO",
      date: "Kamis, 17 September 2026",
      title: "Welcoming Party Informatics",
      description:
        "Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai organisasi yang kolaboratif, inklusif, dan transformatif dengan membawa jiwa integritas pada setiap langkahnya.",
    },
    {
      category: "CCO",
      date: "Kamis, 17 September 2026",
      title: "Welcoming Party Informatics",
      description:
        "Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai organisasi yang kolaboratif, inklusif, dan transformatif dengan membawa jiwa integritas pada setiap langkahnya.",
    },
    {
      category: "CCO",
      date: "Kamis, 17 September 2026",
      title: "Welcoming Party Informatics",
      description:
        "Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai organisasi yang kolaboratif, inklusif, dan transformatif dengan membawa jiwa integritas pada setiap langkahnya.",
    },
    {
      category: "CCO",
      date: "Kamis, 17 September 2026",
      title: "Welcoming Party Informatics",
      description:
        "Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai organisasi yang kolaboratif, inklusif, dan transformatif dengan membawa jiwa integritas pada setiap langkahnya.",
    },
    {
      category: "CCO",
      date: "Kamis, 17 September 2026",
      title: "Welcoming Party Informatics",
      description:
        "Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai organisasi yang kolaboratif, inklusif, dan transformatif dengan membawa jiwa integritas pada setiap langkahnya.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden pt-[96px] md:pt-[144px]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mea+Culpa&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

          .program-display {
            font-family: "Playfair Display", serif;
          }

          .program-script {
            font-family: "Mea Culpa", cursive;
          }

          .program-dot-pattern {
            background-color: #f4f2e8;
            background-image: radial-gradient(
              rgba(0, 0, 0, 0.15) 0.65px,
              transparent 0.65px
            );
            background-size: 5px 5px;
          }

          .work-reveal {
            opacity: 0;
            transform: translateY(35px);
            transition:
              opacity 0.8s ease,
              transform 0.8s ease;
          }

          .work-visible {
            opacity: 1;
            transform: translateY(0);
          }

          @keyframes workMarquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          .work-marquee {
            animation: workMarquee 28s linear infinite;
          }

          /* HERO — disamakan dengan layout hero Berita */
          .work-hero {
            width: 100%;
            height: calc(100svh - 144px);
            min-height: 620px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
          }

          .work-hero-content {
            width: 100%;
            max-width: 900px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .work-hero-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 60px;
            height: 30px;
            padding: 0 16px;
            border: 1px solid #111111;
            border-radius: 999px;
            background: #fee83c;
            color: #111111;
            font-family: "Barlow Condensed", sans-serif;
            font-size: 13px;
            font-weight: 500;
            line-height: 1;
            margin-bottom: 12px;
          }

          .work-hero-title {
            margin: 0;
            font-family: "Playfair Display", serif;
            font-size: clamp(50px, 7vw, 96px);
            line-height: 0.82;
            font-weight: 400;
            letter-spacing: -0.04em;
            color: #111111;
            text-align: center;
          }

          .work-hero-script {
            font-family: "Mea Culpa", cursive;
            font-size: 1.08em;
            font-style: normal;
          }

          .work-hero-description {
            max-width: 620px;
            margin-top: 18px;
            margin-bottom: 20px;
            color: rgba(0, 0, 0, 0.8);
            font-family: "Barlow Condensed", sans-serif;
            font-size: 14px;
            line-height: 1.35;
            text-align: center;
          }

          .work-hero-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #111111;
            background: #000000;
            color: #fee83c;
            padding: 9px 18px;
            border-radius: 999px;
            font-family: "Barlow Condensed", sans-serif;
            font-size: 13px;
            font-weight: 500;
            line-height: 1;
            text-decoration: none;
            transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
          }

          .work-hero-button:hover {
            background: #fee83c;
            color: #111111;
            transform: translateY(-2px);
          }

          @media (max-width: 900px) {
            .work-hero {
              height: calc(100svh - 96px);
              min-height: 620px;
              padding: 24px 18px;
            }

            .work-hero-title {
              font-size: clamp(46px, 13vw, 72px);
              line-height: 0.88;
            }

            .work-hero-description {
              max-width: 340px;
              font-size: 13px;
              line-height: 1.35;
            }
          }

          @media (max-width: 400px) {
            .work-hero-title {
              font-size: 44px;
            }
          }
        `}
      </style>

      {/* =====================================================
          1. HERO WORK PROGRAMS
      ====================================================== */}
      <section className="program-dot-pattern work-hero">
        <div
          ref={addReveal}
          className="work-hero-content work-reveal"
        >
          <div className="work-hero-badge">Program Kerja</div>

          <h1 className="work-hero-title">
            <span className="work-hero-script">Program</span> Kerja <span style={{ fontStyle: "italic" }}>HMIF</span>
          </h1>

          <p className="work-hero-description">
            Ragam kegiatan dan inovasi yang dirancang khusus untuk mendukung
            perkembangan seluruh mahasiswa Teknik Informatika.
          </p>

          <a
            href="#program-list"
            className="work-hero-button"
          >
            Pelajari Lebih Lanjut ↓
          </a>
        </div>
      </section>

      {/* =====================================================
          2. MARQUEE
      ====================================================== */}
      <section className="bg-black text-white overflow-hidden border-y border-white/20">
        <div className="work-marquee flex min-w-max whitespace-nowrap py-3">
          {[...Array(20)].map((_, index) => (
            <span
              key={index}
              className="
                program-display
                text-base
                md:text-lg
                mr-10
              "
            >
              Kabinet Astravia
            </span>
          ))}
        </div>
      </section>

      {/* =====================================================
          3. PROGRAM LIST
      ====================================================== */}
      <section
        id="program-list"
        className="
          bg-black
          text-white
          px-6
          md:px-10
          lg:px-12
          py-14
          md:py-16
          lg:py-20
        "
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            ref={addReveal}
            className="
              work-reveal
              flex
              flex-col
              items-center
              text-center
            "
          >
            <h2
              className="
                program-display
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                leading-[0.8]
                italic
                font-normal
              "
            >
              <span className="program-script not-italic">P</span>
              rogram Kerja <span className="italic text-white">HMIF</span>
            </h2>

            {/* Categories */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.label}
                  type="button"
                  className="
                    min-w-[34px]
                    px-3
                    py-1
                    rounded-full
                    text-[9px]
                    md:text-[10px]
                    font-medium
                    border
                    border-transparent
                    hover:border-white
                    transition-all
                  "
                  style={{
                    backgroundColor: category.bg,
                    color: category.text,
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div
            className="
              mt-10
              md:mt-12
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5
              md:gap-6
            "
          >
            {programs.map((program, index) => (
              <article
                key={`${program.title}-${index}`}
                ref={addReveal}
                className="
                  work-reveal
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/30
                  bg-black
                  hover:-translate-y-1
                  transition-transform
                  duration-300
                "
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-black">
                  <img
                    src="/wpi.jpg"
                    alt="Welcoming Party Informatics"
                    className="
                      w-full
                      h-full
                      object-cover
                      object-center
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-2 text-[9px] md:text-[10px] text-white/50">
                    <span className="text-astravia-yellow font-medium">
                      {program.category}
                    </span>

                    <span>•</span>

                    <span>{program.date}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-3
                      program-display
                      text-xl
                      md:text-2xl
                      leading-tight
                    "
                  >
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      text-[10px]
                      md:text-xs
                      leading-relaxed
                      text-white/65
                    "
                  >
                    {program.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
