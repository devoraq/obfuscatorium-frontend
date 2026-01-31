import Header from "@/ui/layout/header/header.landing";
import Footer from "@/ui/layout/footer/footer";
import HeroSection from "@/ui/layout/landing-page/hero";
import Cards from "@/ui/layout/landing-page/features-section/cards";
import Stats from "@/ui/layout/landing-page/stats-section/stats";
import CTASection from "@/ui/layout/landing-page/CTASection";

export default function LandingPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
   <div className="min-h-screen text-white">
      <Header />
      <HeroSection />
      <Cards/>
      <Stats />
      <CTASection />
      <Footer />
    </div>
    </div>
  );
}
