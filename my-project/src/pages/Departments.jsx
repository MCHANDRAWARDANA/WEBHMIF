import { Link } from "react-router-dom";

const departments = [
  {
    name: "CCO",
    description: "Creative Content & Outreach",
    color: "#FEE83C",
    path: "/departemen/cco",
  },
  {
    name: "HCCB",
    description: "Human Capital & Character Building",
    color: "#F1BAF4",
    path: "/departemen/hccb",
  },
  {
    name: "ERA",
    description: "External Relations & Advocacy",
    color: "#FB5928",
    path: "/departemen/era",
  },
  {
    name: "TDI",
    description: "Talent Development & Innovation",
    color: "#839FFF",
    path: "/departemen/tdi",
  },
  {
    name: "FED",
    description: "Finance & Enterprise Development",
    color: "#F15891",
    path: "/departemen/fed",
  },
  {
    name: "HID",
    description: "Humanity Impact & Development",
    color: "#DBDF57",
    path: "/departemen/hid",
  },
];

const tickerItems = Array(20).fill("Kabinet Astravia");

export default function Departments() {
  return (
    <div className="departments-page">
      <style>{`
        /* =========================================================
           FONTS
           (Mea Culpa, Barlow Condensed, Instrument Serif)
           Kalau sudah di-import di index.html / index.css,
           baris @import ini boleh dihapus.
        ========================================================= */

        @import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=Mea+Culpa&display=swap");

        /* =========================================================
           PAGE
        ========================================================= */

        .departments-page {
          width: 100%;
          min-height: 100vh;
          padding-top: 144px;
          background: #000000;
          color: #ffffff;
          overflow-x: hidden;
        }

        /* =========================================================
           HERO
        ========================================================= */

        .departments-hero {
          width: 100%;
          height: calc(100svh - 144px);
          min-height: 620px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background-color: #F0F0E7;
          background-image: radial-gradient(
            rgba(13, 70, 64, 0.16) 0.7px,
            transparent 0.7px
          );
          background-size: 7px 7px;
        }

        .departments-hero-content {
          width: 100%;
          max-width: 900px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .departments-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 60px;
          height: 30px;
          padding: 0 16px;
          border: 1px solid #111111;
          border-radius: 999px;
          background: #FEE83C;
          color: #111111;
          font-family: "Barlow Condensed", sans-serif;
          font-size: 13px;
          font-weight: 500;
          line-height: 1;
          margin-bottom: 12px;
        }

        .departments-hero-title {
          margin: 0;
          font-family: "Playfair Display", serif;
          font-size: clamp(50px, 7vw, 96px);
          line-height: 0.82;
          font-weight: 400;
          letter-spacing: -0.04em;
          text-align: center;
          color: #111111;
        }

        .departments-hero-script {
          font-family: "Mea Culpa", cursive;
          font-size: 1.08em;
          font-style: normal;
        }

        .departments-hero-description {
          max-width: 620px;
          margin-top: 18px;
          margin-bottom: 20px;
          color: rgba(0, 0, 0, 0.8);
          font-family: "Barlow Condensed", sans-serif;
          font-size: 14px;
          line-height: 1.35;
          text-align: center;
        }

        .departments-hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #111111;
          background: #000000;
          color: #FEE83C;
          padding: 9px 18px;
          border-radius: 999px;
          text-decoration: none;
          font-family: "Barlow Condensed", sans-serif;
          font-size: 13px;
          font-weight: 500;
          line-height: 1;
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
        }

        .departments-hero-button:hover {
          background: #FEE83C;
          color: #111111;
          transform: translateY(-2px);
        }

        /* =========================================================
           MARQUEE
        ========================================================= */

        .departments-marquee {
          width: 100%;
          overflow: hidden;

          background: #000000;
        }

        .departments-marquee-track {
          display: flex;

          width: max-content;

          white-space: nowrap;

          padding: 8px 0;

          animation:
            departmentsMarquee
            28s
            linear
            infinite;
        }

        .departments-marquee-item {
          flex-shrink: 0;

          margin-right: 28px;

          font-family: "Instrument Serif", serif;
          font-size: 27.65px;
          font-weight: 400;
          line-height: 1;

          color: #FEFFFF;
        }

        @keyframes departmentsMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* =========================================================
           EXECUTIVE SECTION
        ========================================================= */

        .departments-executive {
          --header-h: 144px;

          width: 100%;

          min-height: calc(100svh - var(--header-h));

          /* supaya bagian atas tidak tertutup header saat scroll ke #executive-board */
          scroll-margin-top: calc(var(--header-h) + 40px);

          display: flex;
          align-items: flex-start;
          justify-content: center;

          background: #000000;

          padding: 52px 40px 72px;
        }

        .departments-container {
          --board-w: 100%;

          width: min(1500px, calc(100% - 20px));
          max-width: 1500px;

          margin: 0 auto;
        }

        /* =========================================================
           EXECUTIVE TITLE
        ========================================================= */

        .departments-executive-title {
          margin: 0 0 24px;

          color: #FEFFFF;

          font-family: "Mea Culpa", cursive;
          font-size: clamp(40px, 5.5vw, 60px);
          font-weight: 400;
          line-height: 1;

          text-align: center;
        }

        /* =========================================================
           EXECUTIVE BOARD
           Baris 1 : Chairman & Vice Chairman (lebar penuh)
           Baris 2 : Secretary | Treasurer
        ========================================================= */

        .departments-board-grid {
          width: var(--board-w);

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: clamp(18px, 2.2vw, 32px);
        }

        /* =========================================================
           BOARD CARD
        ========================================================= */

        .departments-board-card {
          position: relative;

          width: 100%;

          overflow: hidden;

          background: #111111;

          /* dipakai untuk ukuran teks label (satuan cqw) */
          container-type: inline-size;

          /* Secretary & Treasurer */
          aspect-ratio: 1.55 / 1;
        }

        /* Chairman & Vice Chairman: melebar 2 kolom */
        .departments-board-card--wide {
          grid-column: 1 / -1;

          aspect-ratio: 3.27 / 1;
        }

        .departments-board-image {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;
        }

        /* ---------------------------------------------------------
           POSISI FOTO (bagian foto yang ditampilkan)
           Format: object-position: <horizontal> <vertikal>
           - angka vertikal KECIL = tampilkan bagian ATAS foto
           - angka vertikal BESAR = tampilkan bagian BAWAH foto

           Chairman  : dari kepala sampai leher (rambut menempel di atas)
             -> kalau rambut terpotong, KECILKAN angkanya (mis. 40%)
             -> kalau masih ada tembok kosong di atas, BESARKAN (mis. 50%)

           Secretary & Treasurer : setengah badan
             -> kalau kepala terpotong, KECILKAN angkanya
        --------------------------------------------------------- */

        .departments-board-image--chairman {
          object-position: center 20%;
        }

        .departments-board-image--secretary {
          object-position: center 45%;
        }

        .departments-board-image--treasurer {
          object-position: center 45%;
        }

        /* Gradasi tipis di bawah supaya teks putih tetap terbaca */
        .departments-board-card::after {
          content: "";

          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          height: 40%;

          background:
            linear-gradient(
              to top,
              rgba(0, 0, 0, 0.6),
              rgba(0, 0, 0, 0)
            );

          pointer-events: none;
        }

        /* =========================================================
           BOARD LABEL
        ========================================================= */

        .departments-board-label {
          position: absolute;

          left: 0;
          right: 0;
          bottom: 2%;

          z-index: 1;

          display: flex;
          justify-content: center;

          padding: 0 2%;

          pointer-events: none;
        }

        .departments-board-label h3 {
          margin: 0;

          font-family: "Mea Culpa", cursive;
          font-size: 10cqw;
          font-weight: 400;
          font-style: normal;

          line-height: 1;

          text-align: center;

          color: #FEFFFF;

          text-shadow:
            0 2px 6px rgba(0, 0, 0, 0.55);
        }

        .departments-board-card--wide .departments-board-label h3 {
          font-size: 8.5cqw;
        }

        /* =========================================================
           DEPARTMENT CARDS
        ========================================================= */

        .departments-grid {
          width: var(--board-w);

          margin: 28px auto 0;

          display: grid;

          grid-template-columns:
            repeat(6, minmax(0, 1fr));

          gap: 14px;
        }

        .departments-card {
          width: 100%;

          aspect-ratio: 1 / 1;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: flex-end;

          padding: 0 10px 14px;

          text-decoration: none;

          transition:
            transform 0.2s ease;
        }

        .departments-card:hover {
          transform: translateY(-3px);
        }

        .departments-card:focus-visible {
          outline: 2px solid #FEFFFF;
          outline-offset: 3px;
        }

        .departments-card-name {
          margin: 0;

          font-family: "Instrument Serif", serif;

          font-size: clamp(16px, 1.7vw, 26px);
          font-weight: 400;

          line-height: 1;

          color: #111111;
        }

        .departments-card-description {
          margin: 4px 0 0;

          font-family: "Barlow Condensed", sans-serif;

          font-size: clamp(9px, 0.85vw, 13px);
          font-weight: 500;

          line-height: 1.15;

          text-align: center;

          color: #111111;
        }

        /* =========================================================
           DESKTOP
        ========================================================= */

        @media (min-width: 901px) {
          .departments-hero {
            height: calc(100svh - 144px);
          }
        }

        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 900px) {
          .departments-page {
            padding-top: 96px;
          }

          .departments-executive {
            --header-h: 96px;

            padding: 40px 24px 56px;
          }

          .departments-hero {
            height: calc(100svh - 96px);
            min-height: 560px;
          }

          .departments-hero-title {
            font-size: clamp(46px, 13vw, 72px);
            line-height: 0.88;
          }

          .departments-hero-description {
            max-width: 340px;
            font-size: 13px;
            line-height: 1.35;
          }
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 700px) {
          .departments-hero {
            height: calc(100svh - 96px);

            min-height: 560px;

            padding: 28px 18px;
          }

          .departments-hero-title {
            font-size: clamp(46px, 13vw, 72px);
            line-height: 0.88;
          }

          .departments-hero-description {
            max-width: 340px;
            margin-top: 18px;
            margin-bottom: 20px;
            font-size: 13px;
          }

          .departments-executive {
            padding: 24px 14px 36px;
          }

          .departments-executive-title {
            margin-bottom: 16px;
          }

          /* Kartu departemen: 3 kolom x 2 baris supaya teks terbaca */
          .departments-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));

            gap: 8px;

            margin-top: 16px;
          }

          .departments-card {
            padding: 0 6px 10px;
          }

          .departments-card-name {
            font-size: 16px;
          }

          .departments-card-description {
            font-size: 9.5px;
          }
        }

        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 400px) {
          .departments-hero-title {
            font-size: 44px;
          }
        }

      `}</style>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="departments-hero">
        <div className="departments-hero-content">
          <div className="departments-badge">Departemen</div>

          <h1 className="departments-hero-title">
            <span className="departments-hero-script">Susunan Pengurus</span>{" "}
            Astravia
          </h1>

          <p className="departments-hero-description">
            Dibalik setiap program kerja yang sukses, ada tim yang bekerja keras
            dan saling mendukung.
          </p>

          <a href="#executive-board" className="departments-hero-button">
            Pelajari Lebih Lanjut ↓
          </a>
        </div>
      </section>

      {/* =========================================================
          MARQUEE
      ========================================================= */}

      <section className="departments-marquee">
        <div className="departments-marquee-track">
          {tickerItems.map((item, index) => (
            <span key={`first-${index}`} className="departments-marquee-item">
              {item}
            </span>
          ))}

          {tickerItems.map((item, index) => (
            <span key={`second-${index}`} className="departments-marquee-item">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* =========================================================
          EXECUTIVE BOARD
      ========================================================= */}

      <section id="executive-board" className="departments-executive">
        <div className="departments-container">
          <h2 className="departments-executive-title">Executive Board</h2>

          {/* =====================================================
              CHAIRMAN (atas, lebar penuh) + SECRETARY | TREASURER
          ===================================================== */}

          <div className="departments-board-grid">
            {/* Chairman & Vice Chairman */}
            <div className="departments-board-card departments-board-card--wide">
              <img
                src="/chairman-vice.jpg"
                alt="Chairman & Vice Chairman"
                className="departments-board-image departments-board-image--chairman"
              />

              <div className="departments-board-label">
                <h3>Chairman &amp; Vice Chairman</h3>
              </div>
            </div>

            {/* Secretary */}
            <div className="departments-board-card">
              <img
                src="/secretary.jpg"
                alt="Secretary"
                className="departments-board-image departments-board-image--secretary"
              />

              <div className="departments-board-label">
                <h3>Secretary</h3>
              </div>
            </div>

            {/* Treasurer */}
            <div className="departments-board-card">
              <img
                src="/treasurer.jpg"
                alt="Treasurer"
                className="departments-board-image departments-board-image--treasurer"
              />

              <div className="departments-board-label">
                <h3>Treasurer</h3>
              </div>
            </div>
          </div>

          {/* =====================================================
              DEPARTMENTS
          ===================================================== */}

          <div className="departments-grid">
            {departments.map((department) => (
              <Link
                key={`${department.name}-${department.color}`}
                to={department.path}
                className="departments-card"
                style={{
                  backgroundColor: department.color,
                }}
              >
                <h4 className="departments-card-name">{department.name}</h4>

                <p className="departments-card-description">
                  {department.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
