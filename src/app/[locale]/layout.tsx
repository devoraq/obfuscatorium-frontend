/**
 * @file layout.tsx
 * @module app/[locale]
 * @description Главный layout для всех страниц
 */

/**
 * ! lib imports
 */
import { JSX, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

/**
 * ! my imports
 */
import './../globals.css';
import { i18nDefaultLocale, i18nLocales, TAppLocale } from '@shared/config/i18n/config';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Obfuscatorium',
	description: 'Obfuscatorium - application for managing hackathons',
};

interface ILocaleLayoutProps {
	children: ReactNode;
	params: Promise<{ locale: TAppLocale }>;
}

/**
 * @function RootLayout
 * @description Главный layout для всех страниц
 * @param {Readonly<{ children: React.ReactNode }>} props - Свойства компонента
 * @returns {JSX.Element} - JSX элемент
 */
export default async function RootLayout(props: Readonly<ILocaleLayoutProps>): Promise<JSX.Element> {
	const { children } = props;

	const { locale } = await props.params;

	// Проверка на валидность языка
	// TODO сделать проверку на валидность настоящего языка

	// Проверка на поддержку языка
	if (!i18nLocales.includes(locale)) {
		return notFound(); // TODO сделать показ страницы язык не поддерживается
	}

	return (
		<html lang={locale ?? i18nDefaultLocale}>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
