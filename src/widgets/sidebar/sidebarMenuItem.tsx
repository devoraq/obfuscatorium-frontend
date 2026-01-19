/**
 * @file sidebarMenuItem.tsx
 * @module widgets/sidebar
 * @description Sidebar menu item component
 */

/**
 * ! lib imports
 */
import { type JSX } from 'react';
import { useTranslations } from 'next-intl';

/**
 * ! my imports
 */
import { Link } from '@i18n/navigation';
import { SidebarMenuButton, SidebarMenuItem as SidebarMenuItemLib, useSidebar } from '@shared';
import { INavItem } from '@widgets/sidebar/sidebar.types';
import { getSidebarItemTitleKey } from '@widgets/sidebar/sidebar.i18n';
import { getNavigationUrl } from '@widgets/navigation';

/**
 * @interface ISidebarMenuItemProps
 * @description Sidebar menu item component props
 */
export interface ISidebarMenuItemProps {
	item: INavItem;
	activeHref: string;
}

/**
 * @function SidebarMenuItem
 * @description Sidebar menu item component
 * @param {ISidebarMenuItemProps} props - Sidebar menu item props
 * @returns {JSX.Element} - Sidebar menu item component
 */
export function SidebarMenuItem({ item, activeHref }: ISidebarMenuItemProps): JSX.Element {
	const t = useTranslations();
	const { setOpenMobile, isMobile } = useSidebar();
	const Icon = item.icon;

	const href = getNavigationUrl(item.key);

	const isActive = activeHref === href;

	function close() {
		if (isMobile) {
			setOpenMobile(false);
		}
	}

	return (
		<SidebarMenuItemLib key={item.key}>
			<SidebarMenuButton asChild isActive={isActive} tooltip={t(getSidebarItemTitleKey(item.key))}>
				<Link href={href} onClick={close}>
					<Icon />
					<span>{t(getSidebarItemTitleKey(item.key))}</span>
				</Link>
			</SidebarMenuButton>
		</SidebarMenuItemLib>
	);
}
