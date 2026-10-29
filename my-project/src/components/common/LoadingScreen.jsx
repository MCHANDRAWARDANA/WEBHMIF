import "./LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-screen__content">
        <div className="loading-screen__emblem" aria-hidden="true">
          <span className="loading-screen__ring" />
          <span className="loading-screen__ring loading-screen__ring--inner" />
          <img
            className="loading-screen__logo"
            src={`${import.meta.env.BASE_URL}logo-hmif.png`}
            alt=""
            width="199"
            height="226"
            fetchPriority="high"
          />
        </div>

        <p className="loading-screen__eyebrow">Kabinet Astravia</p>
        <p className="loading-screen__title">HMIF</p>
        <p className="loading-screen__subtitle">
          Telkom University Purwokerto
        </p>

        <div className="loading-screen__progress" aria-hidden="true">
          <span />
        </div>
        <p className="loading-screen__status">
          Memuat website
          <span className="loading-screen__dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </p>
      </div>

      <p className="loading-screen__tagline">
        Menjadi Jalan Cahaya untuk Informatika
      </p>
    </div>
  );
}
