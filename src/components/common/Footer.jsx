import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-black text-white">
      <div className="section-container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8">
          {/* Brand */}
          <div>
            <img
              src="/logo-hmif.png"
              alt="HMIF Logo"
              className="w-24 md:w-32 object-contain mb-5"
            />

            <h3 className="font-serif text-2xl md:text-3xl">Get In Touch</h3>

            <div className="mt-3 space-y-1.5 text-white/75 text-sm md:text-base">
              <p>+62 858 7934 3272</p>
              <p>hmif.telkomuniversity@gmail.com</p>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-4">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@hmiftelkompurwokerto9584"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube HMIF Telkom University Purwokerto"
                className="hover:text-astravia-yellow transition-colors"
              >
                <FaYoutube size={18} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/hmif_telkompurwokerto/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram HMIF Telkom University Purwokerto"
                className="hover:text-astravia-yellow transition-colors"
              >
                <FaInstagram size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/hmif-it-telkom-purwokerto/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn HMIF Telkom University Purwokerto"
                className="hover:text-astravia-yellow transition-colors"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:text-right">
            <h3 className="font-serif text-2xl md:text-3xl">Explore</h3>

            <nav className="mt-4 flex flex-col gap-1.5 md:items-end">
              <Link
                to="/"
                onClick={handleScrollTop}
                className="hover:text-astravia-yellow transition-colors"
              >
                Beranda
              </Link>

              <Link
                to="/tentang-kami"
                onClick={handleScrollTop}
                className="hover:text-astravia-yellow transition-colors"
              >
                Tentang Kami
              </Link>

              <Link
                to="/departemen"
                onClick={handleScrollTop}
                className="hover:text-astravia-yellow transition-colors"
              >
                Departemen
              </Link>

              <Link
                to="/program-kerja"
                onClick={handleScrollTop}
                className="hover:text-astravia-yellow transition-colors"
              >
                Program Kerja
              </Link>

              <Link
                to="/berita"
                onClick={handleScrollTop}
                className="hover:text-astravia-yellow transition-colors"
              >
                Berita
              </Link>

              <Link
                to="/aspirasi"
                onClick={handleScrollTop}
                className="hover:text-astravia-yellow transition-colors"
              >
                Aspirasi
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-4 border-t border-white/20 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/50">
          <p>
            Himpunan Mahasiswa Teknik Informatika Telkom University Purwokerto
          </p>

          <p>© 2026 Kabinet Astravia. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
