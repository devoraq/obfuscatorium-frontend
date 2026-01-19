/**
 * @file sidebar.i18n.ts
 * @module widgets/sidebar
 * @description Sidebar i18n keys
 */

/**
 * ! my imports
 */
import { type ENavigationKey } from '@widgets/navigation/navigation.enums';

/**
 * @function getSidebarTitleKey
 * @description Returns sidebar title key by nav key
 * @param {ENavigationKey} key - Sidebar nav key
 * @returns {string} Sidebar menu item title key
 */
export function getSidebarItemTitleKey(key: ENavigationKey): string {
	return `sidebar.menu-items.${key}.title`;
}
