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
        `}
      </style>

      {/* =====================================================
          1. HERO WORK PROGRAMS
      ====================================================== */}
      <section
        className="
          program-dot-pattern
          text-black
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
            work-reveal
            text-center
            max-w-3xl
            flex
            flex-col
            items-center
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
            Program Kerja
          </span>

          {/* Title */}
          <h1
            className="
              program-display
              text-6xl
              sm:text-7xl
              md:text-[92px]
              lg:text-[110px]
              leading-[0.8]
              mt-3
              italic
              font-normal
            "
          >
            <span className="program-script not-italic">P</span>
            rogram Kerja <span className="italic">HMIF</span>
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
            Ragam kegiatan dan inovasi yang dirancang khusus untuk mendukung
            perkembangan seluruh mahasiswa Teknik Informatika.
          </p>

          {/* Button */}
          <a
            href="#program-list"
            className="
              mt-6
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
