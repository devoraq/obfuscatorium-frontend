/**
 * @file navigation.types.ts
 * @module widgets/navigation
 * @description Типы для навигации приложения (для sidebar, breadcrumbs и т.п.)
 */

/**
 * ! my imports
 */
import { type ENavigationKey } from '@widgets/navigation/navigation.enums';

/**
 * @interface INavigationNode
 * @description Интерфейс для узла навигации
 */
export interface INavigationNode {
	key: ENavigationKey;
	href: string;
	parentKey?: ENavigationKey;
}

/**
 * @interface IBreadcrumbItem
 * @description Интерфейс для элемента хлебных крошек
 */
export interface IBreadcrumbItem {
	key: ENavigationKey;
	href: string;
}
