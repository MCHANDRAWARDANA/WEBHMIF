import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./Navbar.css";

const menus = [
  { label: "Beranda", path: "/" },
  { label: "Tentang Kami", path: "/tentang-kami" },
  { label: "Departemen", path: "/departemen" },
  { label: "Program Kerja", path: "/program-kerja" },
  { label: "Berita", path: "/berita" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [openPath, setOpenPath] = useState(null);
  const open = openPath === pathname;
  const closeMenu = () => setOpenPath(null);
  const menuClass = ({ isActive }) =>
    `site-navbar__link${isActive ? " site-navbar__link--active" : ""}`;

  return (
    <header
      className="site-navbar"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMenu();
          event.currentTarget.querySelector("button")?.focus();
        }
      }}
    >
      <div className="site-navbar__tagline">
        Menjadi Jalan Cahaya untuk Informatika
      </div>
      <div className="site-navbar__main">
        <div className="section-container site-navbar__row">
          <div className="site-navbar__socials">
            <a href="https://www.youtube.com/@hmiftelkompurwokerto9584" target="_blank" rel="noopener noreferrer" aria-label="YouTube HMIF">
              <FaYoutube size={18} />
            </a>
            <a href="https://www.instagram.com/hmif_telkompurwokerto/" target="_blank" rel="noopener noreferrer" aria-label="Instagram HMIF">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.linkedin.com/company/hmif-it-telkom-purwokerto/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn HMIF">
              <FaLinkedinIn size={18} />
            </a>
          </div>
          <Link to="/" onClick={closeMenu} className="site-navbar__brand">
            <img src={`${import.meta.env.BASE_URL}logo-hmif.png`} alt="Logo HMIF" width="36" height="36" />
            <span>HMIF Telkom University Purwokerto</span>
          </Link>
          <Link to="/aspirasi" onClick={closeMenu} className="site-navbar__aspiration">
            Aspirasi
          </Link>
          <button
            type="button"
            className="site-navbar__toggle"
            onClick={() => setOpenPath(open ? null : pathname)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <nav className="site-navbar__desktop" aria-label="Navigasi utama">
        {menus.map((menu) => (
          <NavLink key={menu.path} to={menu.path} end={menu.path === "/"} className={menuClass}>
            {menu.label}
          </NavLink>
        ))}
      </nav>
      <nav id="mobile-navigation" className="site-navbar__mobile" aria-label="Navigasi mobile" hidden={!open}>
        {menus.map((menu) => (
          <NavLink key={menu.path} to={menu.path} end={menu.path === "/"} onClick={closeMenu} className={menuClass}>
            {menu.label}
          </NavLink>
        ))}
        <Link to="/aspirasi" onClick={closeMenu} className="site-navbar__mobile-aspiration">Aspirasi</Link>
      </nav>
    </header>
  );
}
