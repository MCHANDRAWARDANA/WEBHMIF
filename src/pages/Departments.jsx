import "./Departments.css";
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

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="departments-hero">
        <div className="departments-hero-content scroll-reveal">
          <div className="departments-badge">Departemen</div>

          <h1 className="departments-hero-title page-hero-title">
            <span className="departments-hero-script page-hero-script">Susunan Pengurus</span>
            <span>Astravia</span>
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
          <h2 className="departments-executive-title scroll-reveal">Executive Board</h2>

          {/* =====================================================
              CHAIRMAN (atas, lebar penuh) + SECRETARY | TREASURER
          ===================================================== */}

          <div className="departments-board-grid">
            {/* Chairman & Vice Chairman */}
            <div className="departments-board-card departments-board-card--wide scroll-reveal" data-reveal="zoom">
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
            <div className="departments-board-card scroll-reveal" data-reveal="left">
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
            <div className="departments-board-card scroll-reveal" data-reveal="right">
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
            {departments.map((department, index) => (
              <Link
                key={`${department.name}-${department.color}`}
                to={department.path}
                className="departments-card scroll-reveal"
                data-reveal="zoom"
                style={{
                  backgroundColor: department.color,
                  "--reveal-delay": `${(index % 3) * 120}ms`,
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
