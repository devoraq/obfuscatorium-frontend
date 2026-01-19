/**
 * @file request.ts
 * @module i18n
 * @description i18n request config file
 */

/**
 * ! lib imports
 */
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

/**
 * ! my imports
 */
import { i18nCookieName, i18nLocales, i18nDefaultLocale, TAppLocale } from '@shared/config/i18n/config';

export default getRequestConfig(async () => {
	const cookieStore = await cookies();
	const cookieLocale = cookieStore.get(i18nCookieName)?.value as TAppLocale | undefined;

	const locale: TAppLocale = cookieLocale && i18nLocales.includes(cookieLocale) ? cookieLocale : i18nDefaultLocale;

	return {
		locale,
		messages: (await import(`./../../messages/${locale}.json`)).default,
	};
});
