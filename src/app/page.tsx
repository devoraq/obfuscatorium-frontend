import Header from "@/ui/layout/header/header";
import Footer from "@/ui/layout/footer/footer";
import HeroSection from "@/ui/layout/landing-page/hero";
import FeaturesSection from "@/ui/layout/landing-page/features";
import Stats from "@/ui/layout/landing-page/stats-section/stats";
import CTASection from "@/ui/layout/landing-page/CTA";

const LandingPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="min-h-screen text-white">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <Stats />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
