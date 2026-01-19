/**
 * @file sidebar.types.tsx
 * @module widgets/sidebar
 * @description Sidebar widget types
 */

/**
 * ! my imports
 */
import { type ENavigationKey } from '@widgets/navigation';

/**
 * @interface ISidebarInitialState
 * @description Интерфейс для инициализации состояния бокового меню.
 */
export interface ISidebarInitialState {
	/**
	 * @property {boolean} isSidebarOpen - Флаг, указывающий, открыто ли боковое меню.
	 */
	isSidebarOpen: boolean;
	/**
	 * @property {Array<ENavigationKey>} openGroups - Список ключей групп, которые должны быть открытыми.
	 */
	openGroups: Array<ENavigationKey>;
}

/**
 * @interface INavItem
 * @description Интерфейс для элемента навигации.
 */
export interface INavItem {
	/**
	 * @property {ENavigationKey} key - Уникальный ключ элемента навигации.
	 */
	key: ENavigationKey;
	/**
	 * @property {React.ComponentType<React.SVGProps<SVGSVGElement>>} icon - Иконка элемента навигации.
	 */
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

/**
 * @interface INavSubItem
 * @description Интерфейс для подпункта навигации.
 */
export interface INavSubItem extends Omit<INavItem, 'icon'> {}

/**
 * @interface INavItemWithSubItems
 * @description Интерфейс для элемента навигации с подпунктами.
 */
export interface INavItemWithSubItems extends INavItem {
	/**
	 * @property {Array<INavSubItem>} menuItems - Список подпунктов навигации.
	 */
	menuItems: Array<INavSubItem>;
}

/**
 * @function isNavItemWithSubItems
 * @description Проверяет, является ли элемент навигации с подпунктом.
 * @param {INavItem | INavItemWithSubItems} item - Элемент навигации.
 * @returns {boolean} - True, если элемент является с подпунктом, иначе false.
 */
export function isNavItemWithSubItems(item: INavItem | INavItemWithSubItems): item is INavItemWithSubItems {
	return 'menuItems' in item && Array.isArray((item as INavItemWithSubItems).menuItems);
}
