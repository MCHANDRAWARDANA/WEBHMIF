import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./components/common/PageHeroTitle.css";

import LoadingScreen from "./components/common/LoadingScreen";
import ScrollMotion from "./components/common/ScrollMotion";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import WorkPrograms from "./pages/WorkPrograms";
import News from "./pages/News";
import Aspirations from "./pages/Aspirations";

import CCO from "./departments/CCO";
import ERA from "./departments/ERA";
import FED from "./departments/FED";
import HCCB from "./departments/HCCB";
import HID from "./departments/HID";
import TDI from "./departments/TDI";

// =========================
// SCROLL TO TOP
// =========================
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timeoutId = window.setTimeout(() => {
      document.body.style.overflow = previousOverflow;
      setIsLoading(false);
    }, 3000);

    return () => {
      window.clearTimeout(timeoutId);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <BrowserRouter>
      {isLoading && <LoadingScreen />}
      {/* =====================================================
          GLOBAL WRAPPER
          - w-full       : selalu mengikuti lebar layar
          - min-w-0      : mencegah child memaksa lebar parent
          - overflow-x-hidden : MATIKAN SCROLL KANAN-KIRI
      ====================================================== */}
      <div
        className={`min-h-screen w-full min-w-0 overflow-x-hidden flex flex-col ${isLoading ? "site-content--loading" : "site-content--ready"}`}
        inert={isLoading}
        aria-hidden={isLoading || undefined}
      >
        {/* =========================
            NAVBAR
        ========================== */}
        <Navbar />

        {/* =========================
            SCROLL TO TOP
        ========================== */}
        <ScrollToTop />
        <ScrollMotion ready={!isLoading} />

        {/* =========================
            MAIN CONTENT
        ========================== */}
        <main id="main-content" className="site-main flex-1 w-full min-w-0 max-w-full">
          <Routes>
            {/* =========================
                MAIN PAGE
            ========================== */}

            <Route path="/" element={<Home />} />

            <Route path="/tentang-kami" element={<About />} />

            <Route path="/departemen" element={<Departments />} />

            <Route path="/program-kerja" element={<WorkPrograms />} />

            <Route path="/berita" element={<News />} />

            <Route path="/aspirasi" element={<Aspirations />} />

            {/* =========================
                DEPARTMENT PAGE
            ========================== */}

            <Route path="/departemen/cco" element={<CCO />} />

            <Route path="/departemen/hccb" element={<HCCB />} />

            <Route path="/departemen/era" element={<ERA />} />

            <Route path="/departemen/tdi" element={<TDI />} />

            <Route path="/departemen/fed" element={<FED />} />

            <Route path="/departemen/hid" element={<HID />} />
          </Routes>
        </main>

        {/* =========================
            FOOTER
        ========================== */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
