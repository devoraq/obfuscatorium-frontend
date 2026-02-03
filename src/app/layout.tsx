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
  verification: {
    //  нейронка подсказывает, что в будущем это надо добавить
    // google: "ваш-google-verification-code",
    // yandex: "ваш-yandex-verification-code",
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
      <head>
        {/* Базовые мета-теги */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        {/* <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}

        {/* Предзагрузка критических ресурсов */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Канонические ссылки */}
        <link rel="canonical" href="https://obfuscatorium.ru" />

        {/* Open Graph (дублируем для надежности) */}
        <meta
          property="og:title"
          content={metadata.openGraph?.title?.toString()}
        />
        <meta
          property="og:description"
          content={metadata.openGraph?.description?.toString()}
        />
        <meta property="og:image" content="/ogOBF.jpeg" />
        <meta property="og:url" content="https://obfuscatorium.ru" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Obfuscatorium" />
        <meta property="og:locale" content="ru_RU" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Obfuscatorium | Площадка для хакатонов"
        />
        <meta
          name="twitter:description"
          content="Присоединяйтесь к крупнейшему сообществу разработчиков!"
        />
        <meta name="twitter:image" content="/ogOBF.jpeg" />

        {/* Дополнительные SEO теги */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="Russian" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Devora Team" />
        <meta name="copyright" content="Obfuscatorium" />

        {/* Для мобильных устройств */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Цвет темы браузера */}
        <meta name="theme-color" content="#0284c7" />
        <meta name="msapplication-TileColor" content="#0284c7" />
      </head>
      <body className="min-h-screen bg-gray-950 text-white">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
