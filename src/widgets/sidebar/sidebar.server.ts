/**
 * @file sidebar.server.ts
 * @module widgets/sidebar
 * @description Server-side helpers for sidebar initial state
 */

'use server';

/**
 * ! lib imports
 */
import { cookies } from 'next/headers';

/**
 * ! my imports
 */
import { ISidebarInitialState } from '@widgets/sidebar/sidebar.types';
import { SIDEBAR_COOKIE_NAME, SIDEBAR_GROUPS_COOKIE_NAME } from '@widgets/sidebar/sidebar.constants';
import { type ENavigationKey } from '@widgets/navigation';

/**
 * @function getSidebarInitialState
 * @description Reads sidebar state from cookies on server
 * @returns {Promise<ISidebarInitialState>} - Sidebar initial state
 */
export async function getSidebarInitialState(): Promise<ISidebarInitialState> {
	const cookieStore = await cookies();

	// open / collapsed (shadcn по дефолту пишет "true"/"false")
	const rawSidebar = cookieStore.get(SIDEBAR_COOKIE_NAME)?.value;
	const isSidebarOpen = rawSidebar === undefined ? true : rawSidebar === 'true';

	// открытые группы
	const rawGroups = cookieStore.get(SIDEBAR_GROUPS_COOKIE_NAME)?.value ?? '';
	const openGroups =
		rawGroups.length > 0
			? (rawGroups
					.split('|')
					.map(key => key.trim())
					.filter(Boolean) as Array<ENavigationKey>)
			: [];

	return {
		isSidebarOpen,
		openGroups,
	};
}
