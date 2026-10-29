import "./News.css";
import ActivityPoster from "../components/common/ActivityPoster";
import { activities, activityCategories } from "../data/activities";
import { useMemo, useState } from "react";

export default function News() {
  /* =========================================================
     STATE
  ========================================================= */

  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [sortOrder, setSortOrder] = useState("terbaru");

  /* =========================================================
     CATEGORY
  ========================================================= */

  const categories = activityCategories;

  /* =========================================================
     FILTER + SORT
  ========================================================= */

  const filteredNews = useMemo(() => {
    let result = [...activities];

    if (selectedCategory !== "ALL") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (sortOrder === "az") {
      result.sort((a, b) => a.title.localeCompare(b.title, "id"));
    } else {
      result.sort((a, b) => {
        if (!a.dateStart) return b.dateStart ? 1 : 0;
        if (!b.dateStart) return -1;
        const difference = a.dateStart.localeCompare(b.dateStart);
        return sortOrder === "terlama" ? difference : -difference;
      });
    }

    return result;
  }, [selectedCategory, sortOrder]);

  /* =========================================================
     TICKER
  ========================================================= */

  const tickerItems = Array(20).fill("Kabinet Astravia");

  return (
    <div className="news-page">

      {/* =========================================================
          1. HERO
      ========================================================= */}

      <section className="news-dot-pattern news-hero">
        <div
          className="
            news-hero-content
            scroll-reveal
          "
        >
          <div className="news-hero-badge">Berita</div>

          <h1 className="news-hero-title page-hero-title page-hero-title--stacked">
            <span className="news-hero-script page-hero-script">Berita & Kabar</span>
            <span>Informatika</span>
          </h1>

          <p className="news-hero-description">
            Informasi terbaru seputar kegiatan perkuliahan, prestasi mahasiswa,
            dan artikel teknologi dari Telkom University Purwokerto.
          </p>

          <button
            type="button"
            className="news-hero-button"
            onClick={() => {
              document.getElementById("news-list")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Pelajari Lebih Lanjut ↓
          </button>
        </div>
      </section>

      {/* =========================================================
          2. MARQUEE
      ========================================================= */}

      <section className="news-marquee">
        <div className="news-marquee-track">
          {tickerItems.map((item, index) => (
            <span key={index} className="news-marquee-item">
              {item}
            </span>
          ))}

          {tickerItems.map((item, index) => (
            <span key={`duplicate-${index}`} className="news-marquee-item">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* =========================================================
          3. NEWS LIST
      ========================================================= */}

      <section id="news-list" className="news-section">
        <div className="news-container">
          {/* =====================================================
              HEADER
          ===================================================== */}

          <div
            className="
              news-header
              scroll-reveal
            "
          >
            <h2 className="news-section-title">
              <span className="news-section-script">B</span>
              erita
            </h2>

            {/* =================================================
                FILTER BAR
            ================================================= */}

            <div className="news-filter-bar">
              <div className="news-filter-list">
                {/* ALL */}

                <button
                  type="button"
                  aria-pressed={selectedCategory === "ALL"}
                  className={`
                    news-filter-button
                    ${selectedCategory === "ALL" ? "active" : ""}
                  `}
                  style={{
                    backgroundColor:
                      selectedCategory === "ALL" ? "#ffffff" : "#222222",

                    color: selectedCategory === "ALL" ? "#111111" : "#ffffff",
                  }}
                  onClick={() => {
                    setSelectedCategory("ALL");
                  }}
                >
                  ALL
                </button>

                {/* CATEGORIES */}

                {categories.map((category, index) => (
                  <button
                    type="button"
                    key={`${category.label}-${index}`}
                    aria-pressed={selectedCategory === category.label}
                    className={`
                        news-filter-button
                        ${selectedCategory === category.label ? "active" : ""}
                      `}
                    style={{
                      backgroundColor: category.bg,

                      color: category.text,
                    }}
                    onClick={() => {
                      setSelectedCategory(category.label);
                    }}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* SORT */}

              <select
                value={sortOrder}
                onChange={(e) => {
                  setSortOrder(e.target.value);
                }}
                className="news-sort"
                aria-label="Urutkan berita"
              >
                <option value="terbaru">Urutkan Terbaru...</option>

                <option value="terlama">Urutkan Terlama...</option>

                <option value="az">Urutkan A-Z</option>
              </select>
            </div>
          </div>

          {/* =====================================================
              GRID
          ===================================================== */}

          {filteredNews.length > 0 ? (
            <div className="news-grid">
              {filteredNews.map((news, index) => (
                <article
                  key={news.id}
                  className="
                      news-card
                      scroll-reveal
                    "
                  style={{
                    "--reveal-delay": `${(index % 3) * 120}ms`,
                  }}
                >
                  {/* IMAGE */}

                  <ActivityPoster activity={news} />

                  {/* BODY */}

                  <div className="news-card-body">
                    {/* META */}

                    <div className="news-card-meta">
                      <span className="news-card-category">
                        {news.category}
                      </span>

                      {news.dateLabel && <>
                        <span aria-hidden="true">&bull;</span>
                        <time dateTime={news.dateStart}>{news.dateLabel}</time>
                      </>}
                    </div>

                    {/* TITLE */}

                    <h3 className="news-card-title">{news.title}</h3>

                    {/* DESCRIPTION */}

                    <p className="news-card-description">{news.description}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="news-empty">
              Belum ada berita pada kategori ini.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
