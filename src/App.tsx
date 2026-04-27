import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import MarqueeStrip from "./components/sections/MarqueeStrip";
import ProblemSection from "./components/sections/ProblemSection";
import PhilosophySection from "./components/sections/PhilosophySection";
import FeaturesSection from "./components/sections/FeaturesSection";
import TrustSection from "./components/sections/TrustSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import RevenuePromiseSection from "./components/sections/RevenuePromiseSection";
import StoriesSection from "./components/sections/StoriesSection";
import FAQSection from "./components/sections/FAQSection";
import CTASection from "./components/sections/CTASection";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <ProblemSection />
        <PhilosophySection />
        <FeaturesSection />
        <TrustSection />
        <HowItWorksSection />
        <RevenuePromiseSection />
        <StoriesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
