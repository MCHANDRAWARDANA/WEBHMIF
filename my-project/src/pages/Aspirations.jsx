import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [category, setCategory] = useState("Fasilitas Kampus");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  /* =========================================================
     REVEAL ANIMATION
  ========================================================= */

  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aspiration-visible");
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
    <>
      <style>{`

        /* =========================================================
           GOOGLE FONTS
        ========================================================= */

        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');

        @import url('https://fonts.googleapis.com/css2?family=Mea+Culpa&display=swap');


        /* =========================================================
           THEME
        ========================================================= */

        :root {
          --astravia-yellow: #FEE83C;
          --astravia-white: #FEFFFF;
          --astravia-blue: #839FFF;
          --astravia-cream: #F0F0E7;
          --astravia-orange: #FB5928;
          --astravia-pink: #F15891;
          --astravia-lavender: #F1BAF4;
          --astravia-lime: #DBDF57;
          --astravia-green: #0D4640;
          --astravia-black: #050505;

          --font-serif: "Instrument Serif", serif;
          --font-script: "Mea Culpa", cursive;
          --font-sans: "Barlow Condensed", sans-serif;
        }


        /* =========================================================
           RESET
        ========================================================= */

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          min-width: 320px;
          background: var(--astravia-black);
          color: #111111;
          font-family: var(--font-sans);
          overflow-x: hidden;
        }

        button,
        input,
        textarea,
        select {
          font-family: inherit;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        img {
          display: block;
          max-width: 100%;
        }


        /* =========================================================
           SCROLLBAR
        ========================================================= */

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: var(--astravia-green);
        }

        ::-webkit-scrollbar-thumb {
          background: var(--astravia-yellow);
        }

        ::-webkit-scrollbar-thumb:hover {
          background: var(--astravia-lime);
        }


        /* =========================================================
           PAGE
        ========================================================= */

        .aspiration-page {
          width: 100%;
          background: var(--astravia-black);
        }


        /* =========================================================
           REVEAL ANIMATION
           Sama konsep dengan menu Program Kerja
        ========================================================= */

        .aspiration-reveal {
          opacity: 0;

          transform: translateY(35px);

          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .aspiration-visible {
          opacity: 1;

          transform: translateY(0);
        }


        /* =========================================================
           HERO
        ========================================================= */

        .hero-section {
          position: relative;

          width: 100%;

          height: calc(100svh - 144px);

          min-height: 620px;

          display: flex;

          align-items: center;
          justify-content: center;

          overflow: hidden;

          background-color: var(--astravia-cream);

          background-image:
            radial-gradient(
              rgba(13, 70, 64, 0.18) 1px,
              transparent 1px
            );

          background-size: 7px 7px;
        }


        /* =========================================================
           HERO CONTENT
        ========================================================= */

        .hero-content {
          width: 100%;

          max-width: 900px;

          padding: 24px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;
        }


        /* =========================================================
           BADGE
        ========================================================= */

        .hero-badge {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          min-width: 70px;

          height: 38px;

          padding: 0 20px;

          background: var(--astravia-yellow);

          color: #111111;

          border: 1px solid #111111;

          border-radius: 999px;

          font-size: 16px;

          font-weight: 500;

          margin-bottom: 14px;
        }


        /* =========================================================
           HERO TITLE
        ========================================================= */

        .hero-title {
          font-family: var(--font-script);

          font-size: clamp(
            60px,
            8vw,
            110px
          );

          font-weight: 400;

          line-height: 0.8;

          color: #111111;

          margin-bottom: 22px;

          white-space: nowrap;
        }


        /* =========================================================
           HERO DESCRIPTION
        ========================================================= */

        .hero-description {
          max-width: 650px;

          font-family: var(--font-sans);

          font-size: 17px;

          line-height: 1.35;

          font-weight: 400;

          color: #111111;

          margin-bottom: 22px;
        }


        /* =========================================================
           HERO BUTTON
        ========================================================= */

        .hero-button {
          border: 1px solid #111111;

          background: #000000;

          color: var(--astravia-yellow);

          padding: 12px 24px;

          min-width: 180px;

          border-radius: 999px;

          font-size: 16px;

          font-weight: 500;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            background 0.2s ease,
            color 0.2s ease;
        }

        .hero-button:hover {
          background: var(--astravia-yellow);

          color: #111111;

          transform: translateY(-2px);
        }

        .hero-button:active {
          transform: translateY(0);
        }


        /* =========================================================
           TICKER
        ========================================================= */

        .ticker-wrapper {
          position: relative;

          width: 100%;

          height: 52px;

          overflow: hidden;

          background: #000000;

          border-top: 1px solid #000000;

          border-bottom: 1px solid #000000;

          display: flex;

          align-items: center;
        }

        .ticker-track {
          display: flex;

          align-items: center;

          width: max-content;

          animation:
            tickerMove 28s linear infinite;
        }

        .ticker-item {
          flex-shrink: 0;

          color: var(--astravia-cream);

          font-family: var(--font-serif);

          font-size: 20px;

          line-height: 1;

          margin-right: 35px;

          white-space: nowrap;
        }

        @keyframes tickerMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }


        /* =========================================================
           FORM SECTION
        ========================================================= */

        .form-section {
          width: 100%;

          min-height: auto;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 90px 24px;

          background: #000000;
        }


        /* =========================================================
           FORM CARD
        ========================================================= */

        .form-card {
          width: 100%;

          max-width: 1100px;

          background: var(--astravia-cream);

          border-radius: 25px;

          padding: 48px 34px 30px;

          border: 1px solid #111111;

          box-shadow: none;
        }


        /* =========================================================
           FORM HEADER
        ========================================================= */

        .form-title {
          font-family: var(--font-serif);

          font-size: clamp(
            40px,
            5vw,
            52px
          );

          font-weight: 400;

          line-height: 0.95;

          color: #111111;

          margin-bottom: 18px;
        }

        .form-subtitle {
          font-family: var(--font-sans);

          font-size: 15px;

          line-height: 1.2;

          margin-bottom: 28px;

          color: #222222;
        }


        /* =========================================================
           FORM GRID
        ========================================================= */

        .form-grid {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 28px;

          margin-bottom: 20px;
        }


        /* =========================================================
           FIELD
        ========================================================= */

        .field {
          display: flex;

          flex-direction: column;

          gap: 7px;
        }

        .field-label {
          font-family: var(--font-serif);

          font-size: 19px;

          color: #111111;
        }


        /* =========================================================
           INPUT
        ========================================================= */

        .input,
        .select,
        .textarea {
          width: 100%;

          border: 1px solid #777777;

          background: #ffffff;

          color: #111111;

          outline: none;

          font-family: var(--font-sans);

          font-size: 15px;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .input,
        .select {
          height: 42px;

          padding: 0 13px;
        }

        .textarea {
          min-height: 120px;

          padding: 12px 13px;

          resize: vertical;
        }

        .input::placeholder,
        .textarea::placeholder {
          color: #999999;
        }

        .input:focus,
        .select:focus,
        .textarea:focus {
          border-color: var(--astravia-green);

          box-shadow:
            0 0 0 2px
            rgba(13, 70, 64, 0.12);
        }


        /* =========================================================
           CATEGORY
        ========================================================= */

        .category-field {
          margin-bottom: 23px;
        }

        .category-list {
          display: flex;

          flex-wrap: wrap;

          gap: 10px;
        }

        .category-button {
          border: 0;

          padding: 7px 17px;

          border-radius: 999px;

          font-family: var(--font-sans);

          font-size: 15px;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            opacity 0.2s ease,
            box-shadow 0.2s ease;
        }

        .category-button:hover {
          transform: translateY(-1px);
        }

        .category-button.active {
          box-shadow:
            0 0 0 2px #111111;
        }


        /* =========================================================
           MESSAGE
        ========================================================= */

        .message-field {
          margin-bottom: 24px;
        }


        /* =========================================================
           SUBMIT BUTTON
        ========================================================= */

        .submit-button {
          width: 100%;

          min-height: 48px;

          border-radius: 999px;

          border: 1px solid #111111;

          background: var(--astravia-yellow);

          color: #111111;

          font-size: 18px;

          font-weight: 400;

          cursor: pointer;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 7px;

          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .submit-button:hover {
          background: var(--astravia-lime);

          transform: translateY(-2px);
        }

        .submit-button:active {
          transform: translateY(0);
        }

        .submit-arrow {
          font-size: 22px;

          line-height: 1;

          transform: translateY(-1px);
        }


        /* =========================================================
           SUCCESS MODAL
        ========================================================= */

        .success-modal-overlay {
          position: fixed;

          inset: 0;

          z-index: 9999;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 20px;

          background: rgba(
            0,
            0,
            0,
            0.72
          );

          backdrop-filter: blur(5px);

          -webkit-backdrop-filter: blur(5px);

          animation:
            modalFadeIn 0.25s ease;
        }


        /* =========================================================
           MODAL CARD
        ========================================================= */

        .success-modal {
          position: relative;

          width: 100%;

          max-width: 430px;

          background: var(--astravia-cream);

          border: 1px solid #111111;

          border-radius: 25px;

          padding: 38px 30px 30px;

          text-align: center;

          box-shadow:
            10px 10px 0 #000000;

          animation:
            modalScaleIn 0.25s ease;
        }


        /* =========================================================
           MODAL ICON
        ========================================================= */

        .success-icon {
          width: 68px;

          height: 68px;

          margin: 0 auto 20px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: var(--astravia-green);

          color: var(--astravia-yellow);

          border: 2px solid #111111;

          font-size: 34px;

          font-weight: 700;

          line-height: 1;
        }


        /* =========================================================
           MODAL TITLE
        ========================================================= */

        .success-modal-title {
          font-family: var(--font-serif);

          font-size: 42px;

          font-weight: 400;

          line-height: 0.95;

          color: #111111;

          margin-bottom: 12px;
        }


        /* =========================================================
           MODAL DESCRIPTION
        ========================================================= */

        .success-modal-text {
          max-width: 320px;

          margin: 0 auto 25px;

          font-family: var(--font-sans);

          font-size: 16px;

          line-height: 1.2;

          color: #333333;
        }


        /* =========================================================
           MODAL BUTTON
        ========================================================= */

        .success-modal-button {
          width: 100%;

          min-height: 46px;

          border: 1px solid #111111;

          border-radius: 999px;

          background: var(--astravia-yellow);

          color: #111111;

          font-family: var(--font-sans);

          font-size: 17px;

          font-weight: 500;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .success-modal-button:hover {
          background: var(--astravia-lime);

          transform: translateY(-2px);
        }

        .success-modal-button:active {
          transform: translateY(0);
        }


        /* =========================================================
           MODAL ANIMATION
        ========================================================= */

        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes modalScaleIn {
          from {
            opacity: 0;

            transform:
              scale(0.92)
              translateY(10px);
          }

          to {
            opacity: 1;

            transform:
              scale(1)
              translateY(0);
          }
        }


        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 900px) {

          .hero-section {
            height: calc(100svh - 144px);

            min-height: 620px;
          }

          .hero-title {
            font-size:
              clamp(
                55px,
                9vw,
                85px
              );
          }

          .form-card {
            padding:
              40px
              28px
              28px;
          }

        }


        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 700px) {

          .hero-section {
            height:
              calc(100svh - 96px);

            min-height: 620px;
          }

          .hero-content {
            padding:
              24px
              18px;
          }

          .hero-badge {
            min-width: 65px;

            height: 34px;

            padding:
              0 17px;

            font-size: 14px;

            margin-bottom: 12px;
          }

          .hero-title {
            font-size:
              clamp(
                48px,
                14vw,
                72px
              );

            line-height: 0.9;

            white-space: normal;

            margin-bottom: 18px;
          }

          .hero-description {
            max-width: 330px;

            font-size: 14px;

            line-height: 1.25;

            margin-bottom: 20px;
          }

          .hero-button {
            font-size: 14px;

            padding:
              10px
              18px;

            min-width: 165px;
          }


          /* TICKER */

          .ticker-wrapper {
            height: 44px;
          }

          .ticker-item {
            font-size: 17px;

            margin-right: 25px;
          }


          /* FORM */

          .form-section {
            min-height: auto;

            padding:
              45px
              15px;
          }

          .form-card {
            padding:
              32px
              18px
              22px;

            border-radius: 20px;
          }

          .form-title {
            font-size: 42px;
          }

          .form-subtitle {
            font-size: 14px;

            margin-bottom: 22px;
          }

          .form-grid {
            grid-template-columns: 1fr;

            gap: 18px;
          }

          .field-label {
            font-size: 18px;
          }

          .category-list {
            gap: 8px;
          }

          .category-button {
            font-size: 14px;

            padding:
              6px
              14px;
          }

          .textarea {
            min-height: 130px;
          }

          .submit-button {
            min-height: 46px;

            font-size: 16px;
          }


          /* MODAL */

          .success-modal {
            padding:
              32px
              22px
              24px;

            border-radius: 20px;

            box-shadow:
              7px 7px 0 #000000;
          }

          .success-icon {
            width: 60px;

            height: 60px;

            font-size: 30px;
          }

          .success-modal-title {
            font-size: 36px;
          }

          .success-modal-text {
            font-size: 15px;
          }

        }


        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 400px) {

          .hero-title {
            font-size: 46px;
          }

          .hero-description {
            font-size: 13px;
          }

          .form-title {
            font-size: 38px;
          }

          .form-card {
            padding-left: 15px;

            padding-right: 15px;
          }

          .success-modal-title {
            font-size: 33px;
          }

        }

      `}</style>

      {/* =========================================================
          MAIN PAGE
      ========================================================= */}

      <main className="aspiration-page">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hero-section">
          <div
            ref={addReveal}
            className="
              hero-content
              aspiration-reveal
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
            ref={addReveal}
            className="
              form-card
              aspiration-reveal
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
      </main>
    </>
  );
}
