/**
 * @file proxy.ts
 * @module proxy
 * @description i18n proxy config file
 */

import { type NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { i18nCookieName } from '@shared/config/i18n';

// Базовая i18n-миддлвара next-intl с нашей конфигурацией
const intlMiddleware = createMiddleware(routing);

export default function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const segments = pathname.split('/').filter(Boolean);
	const firstSegment = segments[0];

	const isKnownLocale = routing.locales.includes(firstSegment as any);

	/**
	 * 1) Случай "похоже на локаль, но не из списка"
	 *    Например: /ru/assets, /fr/smth
	 *
	 *    Условие: сегмент длиной 2 символа и не en/de
	 *    → считаем, что это некорректный язык и просто убираем его.
	 */
	if (firstSegment && firstSegment.length === 2 && !isKnownLocale) {
		const rest = segments.slice(1).join('/');
		// Для дефолтной локали en НЕ добавляем префикс
		const targetPath = '/' + (rest ?? '');

		const url = new URL(targetPath, request.url);

		const response = NextResponse.redirect(url);
		response.cookies.set(i18nCookieName, routing.defaultLocale, {
			path: '/',
			maxAge: 60 * 60 * 24 * 365, // TODO вынеси в константу
		});

		return response;
	}

	/**
	 * 2) Все остальные случаи отдаём next-intl:
	 *    - /           → en (без /en)
	 *    - /home/...   → en
	 *    - /de/...     → de
	 */
	const response = intlMiddleware(request);

	// Опционально: синхронизируем cookie локали
	if (isKnownLocale) {
		response.cookies.set(i18nCookieName, firstSegment as string, {
			path: '/',
			maxAge: 60 * 60 * 24 * 365, // TODO вынеси в константу
		});
	} else if (segments.length === 0) {
		// Корень без префикса → явно считаем en
		response.cookies.set(i18nCookieName, routing.defaultLocale, {
			path: '/',
			maxAge: 60 * 60 * 24 * 365, // TODO вынеси в константу
		});
	}

	return response;
}

export const config = {
	matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
