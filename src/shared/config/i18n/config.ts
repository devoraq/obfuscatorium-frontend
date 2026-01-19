/**
 * @file config.ts
 * @module shared/config/i18n
 * @description Базовая конфигурация i18n для next-intl
 */

export const i18nCookieName = 'NEXT_LOCALE';

/**
 * @description Поддерживаемые локали приложения
 */
export const i18nLocales = ['en', 'ru'] as const;

/**
 * @description Тип поддерживаемых локалей приложения
 */
export type TAppLocale = (typeof i18nLocales)[number];

/**
 * @description Дефолтная локаль приложения
 */
export const i18nDefaultLocale: TAppLocale = 'en';
