import { useEffect, useMemo, useRef, useState } from "react";

export default function News() {
  /* =========================================================
     STATE
  ========================================================= */

  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [sortOrder, setSortOrder] = useState("terbaru");

  /* =========================================================
     REVEAL ANIMATION
  ========================================================= */

  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("news-visible");
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

  /* =========================================================
     CATEGORY
  ========================================================= */

  const categories = [
    {
      label: "EB",
      bg: "#176B63",
      text: "#FFFFFF",
    },
    {
      label: "CCO",
      bg: "#F4E72D",
      text: "#111111",
    },
    {
      label: "CCO",
      bg: "#E5B9E7",
      text: "#111111",
    },
    {
      label: "ERA",
      bg: "#FF6B3D",
      text: "#FFFFFF",
    },
    {
      label: "TDI",
      bg: "#748FE8",
      text: "#FFFFFF",
    },
    {
      label: "FED",
      bg: "#EF4A7E",
      text: "#FFFFFF",
    },
    {
      label: "HID",
      bg: "#DCE633",
      text: "#111111",
    },
  ];

  /* =========================================================
     NEWS DATA
  ========================================================= */

  const newsData = [
    {
      id: 1,
      category: "CCO",
      date: "Kamis, 17 September 2026",
      title: "Welcoming Party Informatics",
      description:
        "Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai organisasi yang kolaboratif, inklusif, dan transformatif dengan membawa jiwa integritas pada setiap langkahnya.",
      image: "/wpi.jpg",
    },

    {
      id: 2,
      category: "CCO",
      date: "Kamis, 17 September 2026",
      title: "Welcoming Party Informatics",
      description:
        "Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai organisasi yang kolaboratif, inklusif, dan transformatif dengan membawa jiwa integritas pada setiap langkahnya.",
      image: "/wpi.jpg",
    },

    {
      id: 3,
      category: "CCO",
      date: "Kamis, 17 September 2026",
      title: "Welcoming Party Informatics",
      description:
        "Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai organisasi yang kolaboratif, inklusif, dan transformatif dengan membawa jiwa integritas pada setiap langkahnya.",
      image: "/wpi.jpg",
    },

    {
      id: 4,
      category: "CCO",
      date: "Kamis, 17 September 2026",
      title: "Welcoming Party Informatics",
      description:
        "Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai organisasi yang kolaboratif, inklusif, dan transformatif dengan membawa jiwa integritas pada setiap langkahnya.",
      image: "/wpi.jpg",
    },

    {
      id: 5,
      category: "CCO",
      date: "Kamis, 17 September 2026",
      title: "Welcoming Party Informatics",
      description:
        "Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai organisasi yang kolaboratif, inklusif, dan transformatif dengan membawa jiwa integritas pada setiap langkahnya.",
      image: "/wpi.jpg",
    },

    {
      id: 6,
      category: "CCO",
      date: "Kamis, 17 September 2026",
      title: "Welcoming Party Informatics",
      description:
        "Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai organisasi yang kolaboratif, inklusif, dan transformatif dengan membawa jiwa integritas pada setiap langkahnya.",
      image: "/wpi.jpg",
    },
  ];

  /* =========================================================
     FILTER + SORT
  ========================================================= */

  const filteredNews = useMemo(() => {
    let result = [...newsData];

    if (selectedCategory !== "ALL") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (sortOrder === "terbaru") {
      result.sort((a, b) => b.id - a.id);
    }

    if (sortOrder === "terlama") {
      result.sort((a, b) => a.id - b.id);
    }

    if (sortOrder === "az") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [selectedCategory, sortOrder]);

  /* =========================================================
     TICKER
  ========================================================= */

  const tickerItems = Array(20).fill("Kabinet Astravia");

  return (
    <div className="news-page">
      <style>{`

        /* =========================================================
           GOOGLE FONTS
        ========================================================= */

        @import url('https://fonts.googleapis.com/css2?family=Mea+Culpa&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');


        /* =========================================================
           THEME
        ========================================================= */

        :root {
          --news-yellow: #FEE83C;
          --news-cream: #F4F2E8;
          --news-black: #050505;
          --news-green: #176B63;

          --news-display: "Playfair Display", serif;
          --news-script: "Mea Culpa", cursive;
        }


        /* =========================================================
           RESET
        ========================================================= */

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;

          background: var(--news-black);

          color: #ffffff;

          overflow-x: hidden;
        }

        button,
        select {
          font-family: inherit;
        }


        /* =========================================================
           PAGE
        ========================================================= */

        .news-page {
          min-height: 100vh;

          background: #000000;

          color: #ffffff;

          overflow: hidden;

          padding-top: 96px;
        }


        /* =========================================================
           TYPOGRAPHY
        ========================================================= */

        .news-display {
          font-family: var(--news-display);
        }

        .news-script {
          font-family: var(--news-script);
        }


        /* =========================================================
           DOT PATTERN
        ========================================================= */

        .news-dot-pattern {
          background-color: var(--news-cream);

          background-image:
            radial-gradient(
              rgba(0, 0, 0, 0.16) 0.65px,
              transparent 0.65px
            );

          background-size: 5px 5px;
        }


        /* =========================================================
           REVEAL ANIMATION
        ========================================================= */

        .news-reveal {
          opacity: 0;

          transform: translateY(35px);

          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .news-visible {
          opacity: 1;

          transform: translateY(0);
        }


        /* =========================================================
           HERO
        ========================================================= */

        .news-hero {
          width: 100%;

          height: calc(100svh - 96px);

          min-height: 620px;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 24px;
        }

        .news-hero-content {
          width: 100%;

          max-width: 900px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;
        }


        /* =========================================================
           HERO BADGE
        ========================================================= */

        .news-hero-badge {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          min-width: 60px;

          height: 30px;

          padding: 0 16px;

          border-radius: 999px;

          border: 1px solid #111111;

          background: var(--news-yellow);

          color: #111111;

          font-size: 13px;

          font-weight: 500;

          margin-bottom: 12px;
        }


        /* =========================================================
           HERO TITLE
        ========================================================= */

        .news-hero-title {
          margin: 0;

          font-family: var(--news-display);

          font-size: clamp(
            50px,
            7vw,
            96px
          );

          line-height: 0.82;

          font-weight: 400;

          letter-spacing: -0.04em;

          color: #111111;
        }

        .news-hero-script {
          font-family: var(--news-script);

          font-size: 1.08em;

          font-style: normal;
        }


        /* =========================================================
           HERO DESCRIPTION
        ========================================================= */

        .news-hero-description {
          max-width: 620px;

          margin-top: 18px;

          margin-bottom: 20px;

          color: rgba(0, 0, 0, 0.8);

          font-size: 14px;

          line-height: 1.35;

          text-align: center;
        }


        /* =========================================================
           HERO BUTTON
        ========================================================= */

        .news-hero-button {
          border: 1px solid #111111;

          background: #000000;

          color: var(--news-yellow);

          padding: 9px 18px;

          border-radius: 999px;

          cursor: pointer;

          font-size: 13px;

          font-weight: 500;

          transition:
            transform 0.2s ease,
            background 0.2s ease,
            color 0.2s ease;
        }

        .news-hero-button:hover {
          background: var(--news-yellow);

          color: #111111;

          transform: translateY(-2px);
        }


        /* =========================================================
           MARQUEE
        ========================================================= */

        .news-marquee {
          width: 100%;

          overflow: hidden;

          background: #000000;

          border-top: 1px solid rgba(255,255,255,0.15);

          border-bottom: 1px solid rgba(255,255,255,0.15);
        }

        .news-marquee-track {
          display: flex;

          min-width: max-content;

          white-space: nowrap;

          padding: 10px 0;

          animation:
            newsMarquee 28s linear infinite;
        }

        .news-marquee-item {
          flex-shrink: 0;

          margin-right: 28px;

          font-family: var(--news-display);

          font-size: 17px;

          line-height: 1;

          color: #ffffff;
        }

        @keyframes newsMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }


        /* =========================================================
           NEWS SECTION
        ========================================================= */

        .news-section {
          background: #000000;

          padding:
            45px
            24px
            70px;
        }

        .news-container {
          width: 100%;

          max-width: 1180px;

          margin: 0 auto;
        }


        /* =========================================================
           NEWS HEADER
        ========================================================= */

        .news-header {
          display: flex;

          flex-direction: column;

          align-items: center;

          text-align: center;
        }

        .news-section-title {
          margin: 0;

          color: #ffffff;

          font-family: var(--news-display);

          font-size: clamp(
            50px,
            6vw,
            80px
          );

          font-weight: 400;

          line-height: 0.8;

          font-style: italic;
        }

        .news-section-script {
          font-family: var(--news-script);

          font-style: normal;
        }


        /* =========================================================
           FILTER BAR
        ========================================================= */

        .news-filter-bar {
          width: 100%;

          margin-top: 20px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 16px;

          flex-wrap: wrap;
        }

        .news-filter-list {
          display: flex;

          align-items: center;

          gap: 8px;

          flex-wrap: wrap;
        }

        .news-filter-button {
          min-width: 38px;

          height: 27px;

          padding: 0 12px;

          border: 1px solid transparent;

          border-radius: 999px;

          font-size: 10px;

          font-weight: 500;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            opacity 0.2s ease;
        }

        .news-filter-button:hover {
          transform: translateY(-1px);

          border-color: #ffffff;
        }

        .news-filter-button.active {
          border-color: #ffffff;

          box-shadow:
            0 0 0 1px
            rgba(255,255,255,0.18);
        }


        /* =========================================================
           SORT SELECT
        ========================================================= */

        .news-sort {
          height: 30px;

          min-width: 150px;

          padding:
            0
            30px
            0
            10px;

          border: 1px solid #cccccc;

          border-radius: 0;

          outline: none;

          background: #ffffff;

          color: #222222;

          font-size: 10px;

          cursor: pointer;
        }

        .news-sort:focus {
          border-color: var(--news-yellow);
        }


        /* =========================================================
           CARD GRID
        ========================================================= */

        .news-grid {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(0, 1fr)
            );

          gap: 22px;

          margin-top: 32px;
        }


        /* =========================================================
           NEWS CARD
        ========================================================= */

        .news-card {
          overflow: hidden;

          border: 1px solid rgba(
            255,
            255,
            255,
            0.32
          );

          border-radius: 18px;

          background: #000000;

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .news-card:hover {
          transform: translateY(-7px);

          border-color:
            rgba(
              255,
              255,
              255,
              0.6
            );

          box-shadow:
            0 12px 30px
            rgba(0,0,0,0.35);
        }


        /* =========================================================
           IMAGE
        ========================================================= */

        .news-card-image-wrapper {
          position: relative;

          width: 100%;

          aspect-ratio: 16 / 9;

          overflow: hidden;

          background: #111111;
        }

        .news-card-image {
          width: 100%;

          height: 100%;

          object-fit: cover;

          object-position: center;

          transition:
            transform 0.5s ease;
        }

        .news-card:hover
        .news-card-image {
          transform: scale(1.04);
        }


        /* =========================================================
           IMAGE OVERLAY
        ========================================================= */

        .news-card-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to bottom,
              transparent 45%,
              rgba(0,0,0,0.12)
            );
        }


        /* =========================================================
           CARD BODY
        ========================================================= */

        .news-card-body {
          padding:
            13px
            14px
            15px;
        }


        /* =========================================================
           CARD META
        ========================================================= */

        .news-card-meta {
          display: flex;

          align-items: center;

          gap: 6px;

          color:
            rgba(
              255,
              255,
              255,
              0.55
            );

          font-size: 9px;

          line-height: 1.2;
        }

        .news-card-category {
          color: var(--news-yellow);

          font-weight: 500;
        }


        /* =========================================================
           CARD TITLE
        ========================================================= */

        .news-card-title {
          margin:
            10px
            0
            0;

          color: #ffffff;

          font-family: var(--news-display);

          font-size: 19px;

          font-weight: 400;

          line-height: 1.05;
        }


        /* =========================================================
           CARD DESCRIPTION
        ========================================================= */

        .news-card-description {
          margin:
            8px
            0
            0;

          color:
            rgba(
              255,
              255,
              255,
              0.68
            );

          font-size: 10px;

          line-height: 1.42;

          display: -webkit-box;

          -webkit-line-clamp: 4;

          -webkit-box-orient: vertical;

          overflow: hidden;
        }


        /* =========================================================
           EMPTY STATE
        ========================================================= */

        .news-empty {
          width: 100%;

          padding: 60px 20px;

          text-align: center;

          color:
            rgba(
              255,
              255,
              255,
              0.55
            );

          font-size: 14px;
        }


        /* =========================================================
           TABLET
        ========================================================= */

        @media (min-width: 901px) {
          .news-page {
            padding-top: 144px;
          }

          .news-hero {
            height:
              calc(100svh - 144px);
          }
        }

        @media (max-width: 900px) {
          .news-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
          }

          .news-filter-bar {
            align-items: flex-start;
          }
        }


        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 700px) {

          .news-page {
            padding-top: 96px;
          }

          .news-hero {
            height:
              calc(100svh - 96px);

            min-height: 620px;

            padding:
              24px
              18px;
          }

          .news-hero-title {
            font-size:
              clamp(
                46px,
                13vw,
                72px
              );

            line-height: 0.88;
          }

          .news-hero-description {
            max-width: 340px;

            font-size: 13px;

            line-height: 1.35;
          }

          .news-section {
            padding:
              40px
              15px
              55px;
          }

          .news-section-title {
            font-size: 54px;
          }

          .news-filter-bar {
            flex-direction: column;

            align-items: center;
          }

          .news-filter-list {
            justify-content: center;
          }

          .news-sort {
            width: 160px;
          }

          .news-grid {
            grid-template-columns: 1fr;

            gap: 18px;

            margin-top: 28px;
          }

          .news-card-body {
            padding:
              14px
              15px
              17px;
          }

          .news-card-title {
            font-size: 20px;
          }

          .news-card-description {
            font-size: 11px;

            -webkit-line-clamp: 5;
          }
        }


        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 400px) {

          .news-hero-title {
            font-size: 44px;
          }

          .news-section-title {
            font-size: 48px;
          }

          .news-filter-button {
            padding: 0 10px;

            font-size: 9px;
          }

          .news-card-title {
            font-size: 18px;
          }
        }

      `}</style>

      {/* =========================================================
          1. HERO
      ========================================================= */}

      <section className="news-dot-pattern news-hero">
        <div
          ref={addReveal}
          className="
            news-hero-content
            news-reveal
          "
        >
          <div className="news-hero-badge">Berita</div>

          <h1 className="news-hero-title">
            <span className="news-hero-script">Berita & Kabar</span> <br/>
            Informatika
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
            ref={addReveal}
            className="
              news-header
              news-reveal
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
                  ref={addReveal}
                  className="
                      news-card
                      news-reveal
                    "
                  style={{
                    transitionDelay: `${index * 80}ms`,
                  }}
                >
                  {/* IMAGE */}

                  <div
                    className="
                        news-card-image-wrapper
                      "
                  >
                    <img
                      src={news.image}
                      alt={news.title}
                      className="news-card-image"
                    />

                    <div className="news-card-overlay" />
                  </div>

                  {/* BODY */}

                  <div className="news-card-body">
                    {/* META */}

                    <div className="news-card-meta">
                      <span className="news-card-category">
                        {news.category}
                      </span>

                      <span>•</span>

                      <span>{news.date}</span>
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
