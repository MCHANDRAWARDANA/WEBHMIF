import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const menus = [
  { label: "Beranda", path: "/" },
  { label: "Tentang Kami", path: "/tentang-kami" },
  { label: "Departemen", path: "/departemen" },
  { label: "Program Kerja", path: "/program-kerja" },
  { label: "Berita", path: "/berita" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full max-w-[100vw] overflow-x-hidden z-[9999] text-black font-sans">
      {/* TOP BAR */}
      <div className="h-7 bg-astravia-yellow flex items-center justify-center border-b border-black px-4">
        <p className="text-[10px] sm:text-[11px] md:text-xs font-medium text-center leading-none text-black">
          Menjadi Jalan Cahaya untuk Informatika
        </p>
      </div>

      {/* MAIN HEADER */}
      <div className="bg-astravia-cream border-b border-black">
        <div className="section-container">
          <div className="h-[68px] relative flex items-center">
            {/* SOCIAL MEDIA - LEFT */}
            <div className="hidden md:flex absolute left-0 items-center gap-4 text-black">
              <a
                href="https://www.youtube.com/@hmiftelkompurwokerto9584"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:scale-110 transition-transform"
                aria-label="YouTube HMIF Telkom University Purwokerto"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="https://www.instagram.com/hmif_telkompurwokerto/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:scale-110 transition-transform"
                aria-label="Instagram HMIF Telkom University Purwokerto"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/hmif-it-telkom-purwokerto/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:scale-110 transition-transform"
                aria-label="LinkedIn HMIF Telkom University Purwokerto"
              >
                <FaLinkedinIn size={17} />
              </a>
            </div>

            {/* LOGO + NAMA */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 text-black w-[calc(100%-100px)] max-w-[300px] text-center md:w-auto md:max-w-none md:justify-center transition-all"
            >
              <img
                src="/logo-hmif.png"
                alt="Logo HMIF"
                className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-9 md:h-9 object-contain"
              />

              <span className="font-serif font-medium leading-tight text-[13px] sm:text-sm md:text-xl lg:text-2xl whitespace-normal md:whitespace-nowrap overflow-hidden text-black">
                HMIF Telkom University Purwokerto
              </span>
            </Link>

            {/* ASPIRASI - RIGHT DESKTOP */}
            <Link
              to="/aspirasi"
              className="hidden md:flex absolute right-0 items-center justify-center px-7 py-2 rounded-full bg-astravia-yellow border border-black text-sm text-black hover:-translate-y-0.5 transition-all"
            >
              Aspirasi
            </Link>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="md:hidden absolute right-0 w-10 h-10 flex items-center justify-center shrink-0 rounded-md text-black hover:bg-black/5 transition-colors z-10"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP NAVIGATION */}
      <nav className="hidden md:block bg-black border-b border-black font-sans">
        <div className="flex justify-center items-center gap-8 lg:gap-12 h-12 px-4">
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) => `
                h-full flex items-center text-sm relative whitespace-nowrap transition-colors text-white
                after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-white after:transition-all
                ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
              `}
            >
              {menu.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden bg-black text-white border-b border-white/10
          transition-all duration-300 ease-in-out
          ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
        `}
      >
        <div className="px-5 sm:px-6 py-4">
          <div className="flex flex-col">
            {menus.map((menu) => (
              <NavLink
                key={menu.path}
                to={menu.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `
                  py-3 border-b border-white/10 text-sm sm:text-base transition-colors
                  ${isActive ? "text-astravia-yellow" : "text-white"}
                `}
              >
                {menu.label}
              </NavLink>
            ))}

            <Link
              to="/aspirasi"
              onClick={() => setOpen(false)}
              className="mt-4 w-full text-center bg-astravia-yellow text-black rounded-full py-2.5 border border-black text-sm font-medium hover:-translate-y-0.5 transition-all"
            >
              Aspirasi
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
