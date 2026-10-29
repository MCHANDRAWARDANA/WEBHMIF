import "./WorkPrograms.css";
import { useState } from "react";
import ActivityPoster from "../components/common/ActivityPoster";
import { activities, activityCategories } from "../data/activities";

export default function WorkPrograms() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const categories = activityCategories;
  const programs = activities.filter((activity) =>
    selectedCategory === "ALL" || activity.category === selectedCategory,
  );

  return (
    <div className="work-page min-h-screen bg-black text-white overflow-hidden">

      {/* =====================================================
          1. HERO WORK PROGRAMS
      ====================================================== */}
      <section className="program-dot-pattern work-hero">
        <div
          className="work-hero-content scroll-reveal"
        >
          <div className="work-hero-badge">Program Kerja</div>

          <h1 className="work-hero-title page-hero-title">
            <span className="work-hero-script page-hero-script">Program</span>
            <span>Kerja HMIF</span>
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
            className="
              scroll-reveal
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
              <button
                type="button"
                className="min-h-9 rounded-full border border-white/40 px-4 py-1 text-sm"
                style={{ backgroundColor: selectedCategory === "ALL" ? "#ffffff" : "#222222", color: selectedCategory === "ALL" ? "#111111" : "#ffffff" }}
                aria-pressed={selectedCategory === "ALL"}
                onClick={() => setSelectedCategory("ALL")}
              >
                Semua
              </button>
              {categories.map((category) => (
                <button
                  key={category.label}
                  type="button"
                  aria-pressed={selectedCategory === category.label}
                  onClick={() => setSelectedCategory(category.label)}
                  className="
                    min-w-[34px]
                    px-3
                    py-1
                    rounded-full
                    text-xs md:text-sm
                    font-medium
                    border
                    border-transparent
                    hover:border-white
                    transition-all
                  "
                  style={{
                    backgroundColor: category.bg,
                    color: category.text,
                    boxShadow: selectedCategory === category.label ? "0 0 0 2px #ffffff" : "none",
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
                key={program.id}
                className="
                  scroll-reveal
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
                  "--reveal-delay": `${(index % 3) * 120}ms`,
                }}
              >
                {/* Image */}
                <ActivityPoster activity={program} />

                {/* Content */}
                <div className="p-5 md:p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-2 text-xs md:text-sm text-white/50">
                    <span className="text-astravia-yellow font-medium">
                      {program.category}
                    </span>

                    {program.dateLabel && <>
                      <span aria-hidden="true">&bull;</span>
                      <time dateTime={program.dateStart}>{program.dateLabel}</time>
                    </>}
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
                      text-sm md:text-base
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
          {programs.length === 0 && (
            <p className="py-12 text-center text-white/60" role="status">
              Belum ada program kerja pada kategori ini.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
