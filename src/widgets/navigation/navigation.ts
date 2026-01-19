/**
 * @file navigation.ts
 * @module widgets/navigation
 * @description Навигационная конфигурация приложения (для sidebar, breadcrumbs и т.п.)
 */

/**
 * ! my imports
 */
import { ENavigationKey, ENavigationUrl } from '@widgets/navigation/navigation.enums';
import { type IBreadcrumbItem, type INavigationNode } from '@widgets/navigation/navigation.types';

/**
 * @constant APP_NAVIGATION_MAP
 * @description Карта навигации приложения (ключ -> URL)
 */
const APP_NAVIGATION_MAP: Record<ENavigationKey, ENavigationUrl> = {
	[ENavigationKey.Dashboard]: ENavigationUrl.Dashboard,
	[ENavigationKey.Hackathon]: ENavigationUrl.Hackathon,
	[ENavigationKey.HackathonCreateNew]: ENavigationUrl.HackathonCreateNew,
	[ENavigationKey.HackathonMy]: ENavigationUrl.HackathonMy,
	[ENavigationKey.Security]: ENavigationUrl.Security,
	[ENavigationKey.SecurityVerification]: ENavigationUrl.SecurityVerification,
};

/**
 * @constant APP_NAVIGATION
 * @description Навигационная конфигурация приложения (для sidebar, breadcrumbs и т.п.)
 */
export const APP_NAVIGATION: Array<INavigationNode> = [
	// root
	{
		key: ENavigationKey.Dashboard,
		href: ENavigationUrl.Dashboard,
	},

	// money
	{
		key: ENavigationKey.Hackathon,
		href: ENavigationUrl.Hackathon,
	},
	{
		key: ENavigationKey.HackathonCreateNew,
		href: ENavigationUrl.HackathonCreateNew,
		parentKey: ENavigationKey.Hackathon,
	},

	{
		key: ENavigationKey.HackathonMy,
		href: ENavigationUrl.HackathonMy,
		parentKey: ENavigationKey.Hackathon,
	},

	// security
	{
		key: ENavigationKey.Security,
		href: ENavigationUrl.Security,
	},
	{
		key: ENavigationKey.SecurityVerification,
		href: ENavigationUrl.SecurityVerification,
		parentKey: ENavigationKey.Security,
	},
];

/**
 * @function getNavigationUrl
 * @description Возвращает URL для заданного ключа навигации
 */
export function getNavigationUrl(key: ENavigationKey): ENavigationUrl {
	return APP_NAVIGATION_MAP[key];
}

/**
 * @function getBreadcrumbsByPathname
 * @description Строит список хлебных крошек по текущему pathname
 */
export function getBreadcrumbsByPathname(pathname: string): Array<IBreadcrumbItem> {
	/**
	 * @constant cleanPath
	 * @description Удаляет query-параметры и хеш из pathname
	 */
	const cleanPath = pathname.split('?')[0].split('#')[0];

	const nodes = APP_NAVIGATION;
	const current = nodes.find(node => node.href === cleanPath);
	if (!current) {
		return [];
	}

	const chain: Array<IBreadcrumbItem> = [];

	let cursor: INavigationNode | undefined = current;
	while (cursor) {
		chain.push({
			key: cursor.key,
			href: cursor.href,
		});

		if (!cursor.parentKey) break;
		cursor = nodes.find(node => node.key === cursor!.parentKey);
	}

	return chain.reverse();
}
