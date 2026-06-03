import type { Metadata, Viewport } from 'next';

import { ReduxProvider } from '@/store/provider';

import './styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Obfuscatorium | Площадка для проведения хакатонов',
    template: '%s | Obfuscatorium',
  },
  description:
    'Платформа для организации и участия в хакатонах. Регистрация команд, подача заявок, проведение онлайн-соревнований. Присоединяйтесь к крупнейшему сообществу разработчиков!',
  keywords: [
    'хакатон',
    'hackathon',
    'программирование',
    'соревнования',
    'разработка',
    'IT мероприятия',
    'онлайн хакатон',
    'обфускация',
    'защита кода',
    'JavaScript обфускатор',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  authors: [{ name: 'Devora Team' }],
  creator: 'Devora Team',
  publisher: 'Obfuscatorium',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Заменить ВЕЗДЕ  URL на реальный домен:
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://obfuscatorium.ru',
    title: 'Obfuscatorium | Площадка для проведения хакатонов',
    description:
      'Организуйте или участвуйте в IT-соревнованиях. Регистрация открыта!',
    siteName: 'Obfuscatorium',
    images: [
      {
        url: '/ogOBF.jpeg',
        alt: 'Obfuscatorium - Площадка для хакатонов',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obfuscatorium | Площадка для хакатонов',
    description: 'Присоединяйтесь к крупнейшему сообществу разработчиков!',
    images: ['/ogOBF.jpeg'],
  },

  alternates: {
    canonical: 'https://obfuscatorium.ru',
  },

  metadataBase: new URL('https://obfuscatorium.ru'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0284c7',
};

export const robots = {
  rules: {
    userAgent: '*',
    allow: ['/', '/login', '/register'],
    disallow: [
      '/admin/',
      '/main/dashboard/',
      '/profile/',
      '/api/',
      '/_next/',
      '/private/',
      '/settings/',
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang='ru'>
      <body className='min-h-screen bg-gray-950 text-white'>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
