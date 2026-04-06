import { Footer } from '@/ui/layout/footer/footer';
import { Header } from '@/ui/layout/header/header';
import { CTASection } from '@/ui/layout/landing-page/CTA';
import { FeaturesSection } from '@/ui/layout/landing-page/features';
import { HeroSection } from '@/ui/layout/landing-page/hero';
import { Stats } from '@/ui/layout/landing-page/stats';

const LandingPage = () => (
  <div className='min-h-screen bg-gray-950'>
    <div className='min-h-screen text-white'>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Stats />
      <CTASection />
      <Footer />
    </div>
  </div>
);

export default LandingPage;
