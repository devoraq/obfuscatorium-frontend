/**
 * @file routing.ts
 * @module i18n
 * @description i18n routing config file
 */

/**
 * ! lib imports
 */
import { defineRouting } from 'next-intl/routing';

/**
 * ! my imports
 */
import { i18nLocales, i18nDefaultLocale } from '@shared/config/i18n/config';

export const routing = defineRouting({
	locales: i18nLocales,
	defaultLocale: i18nDefaultLocale,
	// ⚠️ вот это главное: убирает /en для дефолтной локали
	localePrefix: 'as-needed',
	// чтобы next-intl не перенаправлял / на /de по Accept-Language / cookie
	localeDetection: false,
});
