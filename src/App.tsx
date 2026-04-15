import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import MarqueeStrip from "./components/sections/MarqueeStrip";
import ProblemSection from "./components/sections/ProblemSection";
import PlatformApps from "./components/sections/PlatformApps";
import ContentFormats from "./components/sections/ContentFormats";
import CreatorTiers from "./components/sections/CreatorTiers";
import RevenueSection from "./components/sections/RevenueSection";
import MarketNumbers from "./components/sections/MarketNumbers";
import SecuritySection from "./components/sections/SecuritySection";
import CompetitorTable from "./components/sections/CompetitorTable";
import CTASection from "./components/sections/CTASection";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <ProblemSection />
        <PlatformApps />
        <ContentFormats />
        <CreatorTiers />
        <RevenueSection />
        <MarketNumbers />
        <SecuritySection />
        <CompetitorTable />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
