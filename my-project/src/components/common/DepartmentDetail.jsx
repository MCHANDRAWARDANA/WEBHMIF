import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./DepartmentDetail.css";

export default function DepartmentDetail({ department, members }) {
  const navigate = useNavigate();
  const handleBack = () => {
    if (window.history.state?.idx > 0) navigate(-1);
    else navigate("/departemen");
  };

  return (
    <div className="department-detail-page">
      <div className="section-container department-detail-shell">
        <section className="department-detail-hero" aria-labelledby="department-title">
          <img src={department.image} alt={`Foto bersama ${department.name}`} className="department-detail-hero-image" fetchPriority="high" />
          <button type="button" className="department-detail-back" onClick={handleBack} aria-label="Kembali ke halaman departemen">
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <div className="department-detail-hero-content scroll-reveal">
            <div className="department-detail-hero-info">
              <span className="department-detail-badge">{department.code}</span>
              <p className="department-detail-description">{department.description}</p>
            </div>
            <h1 id="department-title" className="department-detail-title">{department.name}</h1>
          </div>
        </section>

        <section className="department-detail-members" aria-label={`Anggota departemen ${department.code}`}>
          <div className="department-detail-members-grid">
            {members.map((member, index) => (
              <article
                key={member.name}
                className="department-detail-member scroll-reveal"
                data-reveal="zoom"
                style={{ "--reveal-delay": `${(index % 3) * 120}ms` }}
              >
                <div className="department-detail-member-image-wrap">
                  <img src={member.image} alt={member.name} className="department-detail-member-image" loading="lazy" width="300" height="400" />
                </div>
                <div className="department-detail-member-content">
                  <h2 className="department-detail-member-name">{member.name}</h2>
                  <span className="department-detail-member-role">{member.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
