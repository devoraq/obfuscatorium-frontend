import { ReduxProvider } from "@/store/provider";
import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "Obfuscatorium | Площадка для проведения хакатонов",
    template: "%s | Obfuscatorium",
  },
  description:
    "Платформа для организации и участия в хакатонах. Регистрация команд, подача заявок, проведение онлайн-соревнований. Присоединяйтесь к крупнейшему сообществу разработчиков!",
  keywords: [
    "хакатон",
    "hackathon",
    "программирование",
    "соревнования",
    "разработка",
    "IT мероприятия",
    "онлайн хакатон",
    "обфускация",
    "защита кода",
    "JavaScript обфускатор",
  ],
   icons: {
    icon: '/favicon.ico', 
  },
  authors: [{ name: "Devora Team" }],
  creator: "Devora Team",
  publisher: "Obfuscatorium",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Заменить ВЕЗДЕ  URL на реальный домен:
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://obfuscatorium.ru",
    title: "Obfuscatorium | Площадка для проведения хакатонов",
    description:
      "Организуйте или участвуйте в IT-соревнованиях. Регистрация открыта!",
    siteName: "Obfuscatorium",
    images: [
      {
        url: "/ogOBF.jpeg",
        alt: "Obfuscatorium - Площадка для хакатонов",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obfuscatorium | Площадка для хакатонов",
    description: "Присоединяйтесь к крупнейшему сообществу разработчиков!",
    images: ["/ogOBF.jpeg"],
  },

  alternates: {
    canonical: "https://obfuscatorium.ru",
  },

  metadataBase: new URL("https://obfuscatorium.ru"),
 
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0284c7", // цвет sky-600
};

export const robots = {
  rules: {
    userAgent: "*",
    allow: ["/", "/login", "/register"],
    disallow: [
      "/admin/",
      "/dashboard/",
      "/profile/",
      "/api/",
      "/_next/",
      "/private/",
      "/settings/",
    ],
  },
};

export const sitemap = {
  pages: [
    {
      url: "https://obfuscatorium.ru",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: "https://obfuscatorium.ru/register",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://obfuscatorium.ru/login",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://obfuscatorium.ru/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: "https://obfuscatorium.ru/terms",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-gray-950 text-white">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
