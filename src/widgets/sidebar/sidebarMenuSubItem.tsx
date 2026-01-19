/**
 * @file sidebarMenuSubItem.tsx
 * @module widgets/sidebar
 * @description Sidebar menu sub item component
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
import { SidebarMenuSubButton, useSidebar } from '@shared';
import { type INavSubItem } from '@widgets/sidebar/sidebar.types';
import { getSidebarItemTitleKey } from '@widgets/sidebar/sidebar.i18n';
import { getNavigationUrl } from '@widgets/navigation';

export interface ISidebarMenuSubItemProps {
	item: INavSubItem;
	isActive: boolean;
}

/**
 * @function SidebarMenuSubItem
 * @description Sidebar menu sub item component
 * @param {ISidebarMenuSubItemProps} props - Sidebar menu sub item props
 * @returns {JSX.Element} - Sidebar menu sub item component
 */
export function SidebarMenuSubItem({ item, isActive }: ISidebarMenuSubItemProps): JSX.Element {
	const t = useTranslations();
	const { setOpenMobile, isMobile } = useSidebar();

	function close() {
		if (isMobile) {
			setOpenMobile(false);
		}
	}

	const href = getNavigationUrl(item.key);

	return (
		<SidebarMenuSubButton asChild isActive={isActive}>
			<Link href={href} onClick={close}>
				{t(getSidebarItemTitleKey(item.key))}
			</Link>
		</SidebarMenuSubButton>
	);
}
