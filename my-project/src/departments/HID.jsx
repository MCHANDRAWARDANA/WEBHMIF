import { useNavigate } from "react-router-dom";

const department = {
  code: "HID",
  name: "Nama Lengkap HID",
  description:
    "Mengenal lebih dekat gagasan, arah gerak, dan nilai dasar yang kami bawa dalam satu periode kepengurusan.",
  image: "/departments/hid/HID.jpg",
};

// Ganti "name" dan "role" sesuai anggota.
// Urutan kartu di halaman mengikuti urutan di daftar ini.
const members = [
  {
    name: "MUHAMMAD FACHRI AURAVYANO SAKA",
    role: "Staff of Department",
    image: "/departments/hid/anggotahid1.jpg",
  },
  {
    name: "SHAFIRA SHIFA AZAHRA",
    role: "Staff of Department",
    image: "/departments/hid/anggotahid2.jpg",
  },
  {
    name: "ASSYIFA ZAHRA",
    role: "Staff of Department",
    image: "/departments/hid/anggotahid3.jpg",
  },
  {
    name: "JAHRA SYARIFAH NAQIYYAH SALSABILA",
    role: "Staff of Department",
    image: "/departments/hid/anggotahid4.jpg",
  },
  {
    name: "HILYATI AULIA",
    role: "Staff of Department",
    image: "/departments/hid/anggotahid5.jpg",
  },
  {
    name: "MUHAMMAD FARREL ARGIANTO",
    role: "Staff of Department",
    image: "/departments/hid/anggotahid6.jpg",
  },
  {
    name: "MUHAMMAD ARI TRIANIRTO",
    role: "Staff of Department",
    image: "/departments/hid/anggotahid7.jpg",
  },
];

function BackIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15 5L8 12L15 19"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DepartmentDetailHID() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/departemen");
    }
  };

  return (
    <main className="department-detail-page">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600&family=Mea+Culpa&family=Playfair+Display:wght@400;500;600&display=swap");

        .department-detail-page {
          --accent: #FEE83C;
          width: 100%;
          min-height: 100vh;
          padding: 24px 0 80px;
          background: #000;
          color: #fff;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        .department-detail-page *,
        .department-detail-page *::before,
        .department-detail-page *::after {
          box-sizing: border-box;
        }

        .department-detail-shell {
          width: min(1040px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* HERO FOTO DEPARTMENT (desktop: tinggi mengikuti rasio foto) */
        .department-detail-hero {
          --hero-headroom: 48px;
          position: relative;
          width: 100%;
          margin-top: 32px;
          padding-top: var(--hero-headroom);
          overflow: hidden;
          background: #000;
        }

        .department-detail-hero-image {
          display: block;
          width: 100%;
          height: auto;
        }

        /* FADE ATAS */
        .department-detail-hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 30%;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(
            to bottom,
            #000 0%,
            #000 12%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        /* FADE BAWAH */
        .department-detail-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.4) 40%,
            rgba(0, 0, 0, 0) 70%
          );
        }

        /* BUTTON BACK */
        .department-detail-back {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 4;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          width: 42px;
          height: 42px;
          padding: 0;

          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 50%;

          background: rgba(0, 0, 0, 0.55);
          color: #fff;

          cursor: pointer;

          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);

          transition:
            background 0.2s ease,
            color 0.2s ease,
            border-color 0.2s ease;
        }

        .department-detail-back:hover {
          background: var(--accent);
          border-color: var(--accent);
          color: #111;
        }

        .department-detail-back:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }

        /* INFO */
        .department-detail-hero-info {
          position: absolute;
          left: 4.5%;
          bottom: 16%;
          z-index: 2;
          width: min(315px, 42%);
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
        }

        .department-detail-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-width: 46px;
          height: 22px;
          padding: 0 10px;

          border: 1px solid #111;
          border-radius: 999px;

          background: var(--accent);
          color: #111;

          font-family: "Barlow Condensed", sans-serif;
          font-size: 10px;
          font-weight: 600;
          line-height: 1;
        }

        .department-detail-description {
          width: 100%;
          max-width: 300px;
          margin: 7px 0 0;

          color: rgba(255, 255, 255, 0.94);

          font-family: "Barlow Condensed", sans-serif;
          font-size: 10px;
          font-weight: 400;
          line-height: 1.2;
        }

        /* JUDUL */
        .department-detail-title {
          position: absolute;
          left: 3%;
          right: 3%;
          bottom: 14px;
          z-index: 3;

          margin: 0;

          color: #fff;

          font-family: "Mea Culpa", cursive;
          font-size: clamp(44px, 6.2vw, 82px);
          font-weight: 400;
          line-height: 1;
          text-align: center;

          white-space: nowrap;

          text-shadow:
            0 3px 7px rgba(0, 0, 0, 0.82),
            0 1px 0 rgba(0, 0, 0, 0.9);
        }

        /* MEMBERS */
        .department-detail-members {
          margin-top: 42px;
        }

        .department-detail-members-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          column-gap: 34px;
          row-gap: 22px;
          align-items: stretch;
        }

        .department-detail-member {
          display: grid;
          grid-template-columns: 112px minmax(0, 1fr);
          min-width: 0;
          min-height: 112px;
          gap: 11px;
          padding: 0;
          background: transparent;
        }

        .department-detail-member-image-wrap {
          width: 112px;
          height: 112px;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .department-detail-member-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          background: #fff;
          image-rendering: auto;
        }

        .department-detail-member-content {
          min-width: 0;
          min-height: 112px;

          display: flex;
          flex-direction: column;
          align-items: flex-start;

          padding: 1px 0 0;
        }

        .department-detail-member-name {
          margin: 0 0 7px;

          color: #fff;

          font-family: "Playfair Display", serif;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.03;

          overflow-wrap: anywhere;
        }

        .department-detail-member-role {
          display: inline-flex;
          align-items: center;

          min-height: 18px;
          padding: 3px 10px;

          border-radius: 999px;

          background: var(--accent);
          color: #111;

          font-family: "Barlow Condensed", sans-serif;
          font-size: 8px;
          font-weight: 600;
          line-height: 1;

          white-space: nowrap;
        }

        @media (max-width: 920px) {
          .department-detail-shell {
            width: min(880px, calc(100% - 32px));
          }

          .department-detail-members-grid {
            column-gap: 24px;
          }

          .department-detail-member {
            grid-template-columns: 96px minmax(0, 1fr);
            min-height: 96px;
          }

          .department-detail-member-image-wrap {
            width: 96px;
            height: 96px;
          }

          .department-detail-member-content {
            min-height: 96px;
          }

          .department-detail-member-name {
            font-size: 15px;
          }
        }

        /* MOBILE: tinggi hero dipatok, foto kembali ke mode cover */
        @media (max-width: 760px) {
          .department-detail-page {
            padding-top: 18px;
            padding-bottom: 64px;
          }

          .department-detail-shell {
            width: calc(100% - 28px);
          }

          .department-detail-hero {
            --hero-headroom: 36px;
            height: 380px;
            padding-top: 0;
            margin-top: 20px;
          }

          .department-detail-hero-image {
            position: absolute;
            top: var(--hero-headroom);
            left: 0;
            width: 100%;
            height: calc(100% - var(--hero-headroom));
            object-fit: cover;
            object-position: center center;
            z-index: 0;
          }

          .department-detail-hero-info {
            left: 5%;
            bottom: 19%;
            width: 48%;
          }

          .department-detail-description {
            font-size: 9px;
            max-width: 230px;
          }

          .department-detail-title {
            left: 4%;
            right: 4%;
            bottom: 12px;
            line-height: 1;
            font-size: clamp(38px, 8.5vw, 62px);
            white-space: normal;
          }

          .department-detail-members {
            margin-top: 36px;
          }

          .department-detail-members-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px 18px;
          }

          .department-detail-member {
            grid-template-columns: 88px minmax(0, 1fr);
            min-height: 88px;
            gap: 9px;
          }

          .department-detail-member-image-wrap {
            width: 88px;
            height: 88px;
          }

          .department-detail-member-content {
            min-height: 88px;
          }

          .department-detail-member-name {
            font-size: 14px;
          }
        }

        @media (max-width: 520px) {
          .department-detail-page {
            padding-top: 12px;
            padding-bottom: 50px;
          }

          .department-detail-shell {
            width: calc(100% - 22px);
          }

          .department-detail-hero {
            --hero-headroom: 24px;
            height: 320px;
            padding-top: 0;
            margin-top: 12px;
          }

          .department-detail-hero-info {
            left: 5%;
            bottom: 22%;
            width: 56%;
          }

          .department-detail-badge {
            height: 20px;
            min-width: 43px;
            font-size: 9px;
          }

          .department-detail-description {
            margin-top: 6px;
            font-size: 8.5px;
            line-height: 1.15;
          }

          .department-detail-title {
            left: 4%;
            right: 4%;
            bottom: 12px;
            font-size: clamp(34px, 10vw, 50px);
            line-height: 1;
          }

          .department-detail-members {
            margin-top: 30px;
          }

          .department-detail-members-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .department-detail-member {
            grid-template-columns: 98px minmax(0, 1fr);
            min-height: 98px;
          }

          .department-detail-member-image-wrap {
            width: 98px;
            height: 98px;
          }

          .department-detail-member-content {
            min-height: 98px;
          }

          .department-detail-member-name {
            margin-bottom: 6px;
            font-size: 16px;
          }

          .department-detail-member-role {
            font-size: 8px;
            min-height: 17px;
            padding: 3px 9px;
          }
        }
      `}</style>

      <div className="department-detail-shell">
        {/* FOTO BERSAMA */}
        <section className="department-detail-hero">
          <img
            src={department.image}
            alt={`Foto bersama ${department.name}`}
            className="department-detail-hero-image"
          />

          {/* BUTTON KEMBALI */}
          <button
            type="button"
            className="department-detail-back"
            onClick={handleBack}
            aria-label="Kembali ke halaman sebelumnya"
          >
            <BackIcon />
          </button>

          <div className="department-detail-hero-info">
            <div className="department-detail-badge">{department.code}</div>

            <p className="department-detail-description">
              {department.description}
            </p>
          </div>

          <h1 className="department-detail-title">{department.name}</h1>
        </section>

        {/* DAFTAR ANGGOTA */}
        <section className="department-detail-members">
          <div className="department-detail-members-grid">
            {members.length > 0 ? (
              members.map((member, index) => (
                <article
                  key={`${member.name}-${index}`}
                  className="department-detail-member"
                >
                  <div className="department-detail-member-image-wrap">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="department-detail-member-image"
                      loading="lazy"
                    />
                  </div>

                  <div className="department-detail-member-content">
                    <h3 className="department-detail-member-name">
                      {member.name}
                    </h3>

                    <span className="department-detail-member-role">
                      {member.role}
                    </span>
                  </div>
                </article>
              ))
            ) : (
              <div className="department-detail-empty">
                Belum ada data anggota department.
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
