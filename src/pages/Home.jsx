import HeroSection from "../components/home/HeroSection";
import AboutPreviewSection from "../components/home/AboutPreviewSection";
import StatsSection from "../components/home/StatsSection";
import CabinetSection from "../components/home/CabinetSection";
import FAQSection from "../components/home/FAQSection";

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutPreviewSection />
      <StatsSection />
      <CabinetSection />
      <FAQSection />
    </div>
  );
}
