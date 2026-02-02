import Header from "@/ui/layout/header/header.landing";
import Footer from "@/ui/layout/footer/footer";
import HeroSection from "@/ui/layout/landing-page/hero";
import Cards from "@/ui/layout/landing-page/features-section/cards";
import Stats from "@/ui/layout/landing-page/stats-section/stats";
import CTASection from "@/ui/layout/landing-page/CTASection";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Obfuscatorium | Площадка для проведения хакатонов",
  description: "Платформа для организации и участия в хакатонах. Регистрация команд, подача заявок, проведение онлайн-соревнований. Присоединяйтесь к крупнейшему сообществу разработчиков!",
  keywords: [
    "хакатон",
    "hackathon",
    "программирование",
    "соревнования",
    "разработка",
    "IT мероприятия",
    "онлайн хакатон"
  ],
  openGraph: {
    type: "website",
    url: "",
    title: "Obfuscatorium | Площадка для проведения хакатонов | Присоединяйтесь к соревнованиям",
    description: "Организуйте или участвуйте в IT-соревнованиях. Регистрация открыта!",
    siteName: "Obfuscatorium",
    images: [
      {
      url: "/ogOBF.jpeg",
      alt: "Obfuscatorium",
      width: 1200,
      height: 630,
    },
  ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  
}



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
