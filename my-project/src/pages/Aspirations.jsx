import "./Aspirations.css";
import { useState } from "react";

export default function App() {
  const [category, setCategory] = useState("Fasilitas Kampus");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  /* =========================================================
     CATEGORIES
  ========================================================= */

  const categories = [
    {
      name: "Fasilitas Kampus",
      color: "#0D4640",
      text: "#FFFFFF",
    },
    {
      name: "Akademik",
      color: "#FEE83C",
      text: "#111111",
    },
    {
      name: "Kegiatan HMIF",
      color: "#F1BAF4",
      text: "#111111",
    },
    {
      name: "Lainnya",
      color: "#FB5928",
      text: "#FFFFFF",
    },
  ];

  /* =========================================================
     SUBMIT FORM
  ========================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowSuccessModal(true);
  };

  /* =========================================================
     CLOSE MODAL
  ========================================================= */

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  /* =========================================================
     TICKER
  ========================================================= */

  const tickerItems = Array(10).fill("Kabinet Astravia");

  return (
    <div className="aspiration-page">

      {/* =========================================================
          MAIN PAGE
      ========================================================= */}

      <div className="aspiration-content">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hero-section">
          <div
            className="
              hero-content
              scroll-reveal
            "
          >
            {/* BADGE */}

            <div className="hero-badge">Aspirasi</div>

            {/* TITLE */}

            <h1 className="hero-title">Suarakan Aspirasimu</h1>

            {/* DESCRIPTION */}

            <p className="hero-description">
              Sampaikan saran, kritik, atau keluhanmu untuk perbaikan jurusan
              dan organisasi kita bersama.
            </p>

            {/* BUTTON */}

            <button
              type="button"
              className="hero-button"
              onClick={() => {
                document.getElementById("form-aspirasi")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Pelajari Lebih Lanjut →
            </button>
          </div>
        </section>

        {/* =====================================================
            TICKER
        ===================================================== */}

        <div className="ticker-wrapper">
          <div className="ticker-track">
            {tickerItems.map((item, index) => (
              <span className="ticker-item" key={index}>
                {item}
              </span>
            ))}

            {/* DUPLICATE */}

            {tickerItems.map((item, index) => (
              <span className="ticker-item" key={`duplicate-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* =====================================================
            FORM ASPIRASI
        ===================================================== */}

        <section id="form-aspirasi" className="form-section">
          <div
            className="
              form-card
              scroll-reveal
            "
          >
            {/* TITLE */}

            <h2 className="form-title">Tulis Aspirasimu</h2>

            {/* SUBTITLE */}

            <p className="form-subtitle">
              Sampaikan pesan secara anonim atau lampirkan identitas jika
              membutuhkan tanggapan langsung dari kami.
            </p>

            {/* FORM */}

            <form onSubmit={handleSubmit}>
              {/* =================================================
                  NAMA + ANGKATAN
              ================================================= */}

              <div className="form-grid">
                {/* NAMA */}

                <div className="field">
                  <label htmlFor="nama" className="field-label">
                    Nama
                  </label>

                  <input
                    id="nama"
                    type="text"
                    className="input"
                    placeholder="Boleh dikosongkan (anonim)"
                  />
                </div>

                {/* ANGKATAN */}

                <div className="field">
                  <label htmlFor="angkatan" className="field-label">
                    Angkatan
                  </label>

                  <select id="angkatan" className="select" defaultValue="">
                    <option value="" disabled>
                      Pilih angkatan...
                    </option>

                    <option value="2026">2026</option>

                    <option value="2025">2025</option>

                    <option value="2024">2024</option>

                    <option value="2023">2023</option>

                    <option value="2022">2022</option>
                  </select>
                </div>
              </div>

              {/* =================================================
                  CATEGORY
              ================================================= */}

              <div
                className="
                  field
                  category-field
                "
              >
                <label className="field-label">Kategori Aspirasi</label>

                <div className="category-list">
                  {categories.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      className={`
                          category-button
                          ${category === item.name ? "active" : ""}
                        `}
                      style={{
                        backgroundColor: item.color,

                        color: item.text,
                      }}
                      onClick={() => {
                        setCategory(item.name);
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* =================================================
                  MESSAGE
              ================================================= */}

              <div
                className="
                  field
                  message-field
                "
              >
                <label htmlFor="pesan" className="field-label">
                  Pesan Aspirasi
                </label>

                <textarea
                  id="pesan"
                  className="textarea"
                  placeholder="Tuliskan aspirasimu di sini..."
                  required
                />
              </div>

              {/* =================================================
                  SUBMIT
              ================================================= */}

              <button type="submit" className="submit-button">
                Kirim Suaramu
                <span className="submit-arrow">→</span>
              </button>
            </form>
          </div>
        </section>

        {/* =====================================================
            SUCCESS MODAL
        ===================================================== */}

        {showSuccessModal && (
          <div className="success-modal-overlay" onClick={closeSuccessModal}>
            <div
              className="success-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="success-modal-title"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {/* ICON */}

              <div className="success-icon">✓</div>

              {/* TITLE */}

              <h2 id="success-modal-title" className="success-modal-title">
                Aspirasi Berhasil Terkirim!
              </h2>

              {/* DESCRIPTION */}

              <p className="success-modal-text">
                Terima kasih sudah menyuarakan aspirasimu. Setiap masukan yang
                kamu berikan berarti bagi perbaikan jurusan dan organisasi kita
                bersama.
              </p>

              {/* BUTTON */}

              <button
                type="button"
                className="success-modal-button"
                onClick={closeSuccessModal}
              >
                Kembali
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
