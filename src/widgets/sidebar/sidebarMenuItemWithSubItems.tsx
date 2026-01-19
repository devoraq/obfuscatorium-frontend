/**
 * @file sidebarMenuItemWithSubItems.tsx
 * @module widgets/sidebar
 * @description Sidebar menu item component with sub items
 */

'use client';

/**
 * ! lib imports
 */
import { type JSX, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronDown, ChevronRight } from 'lucide-react';

/**
 * ! my imports
 */
import { Link } from '@i18n/navigation';
import {
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem as SidebarMenuItemLib,
	SidebarMenuSub,
	useSidebar,
} from '@shared';
import { type INavItemWithSubItems } from '@widgets/sidebar/sidebar.types';
import { SidebarMenuSubItem } from '@widgets/sidebar/sidebarMenuSubItem';
import { getSidebarItemTitleKey } from '@widgets/sidebar/sidebar.i18n';
import { getNavigationUrl } from '@widgets/navigation';

/**
 * @interface ISidebarMenuItemWithSubItemsProps
 * @description Sidebar menu item component with sub items props
 */
export interface ISidebarMenuItemWithSubItemsProps {
	item: INavItemWithSubItems;
	activeHref: string;
	isInitiallyOpen: boolean;
	onOpenChange: (open: boolean) => void;
}

/**
 * @function SidebarMenuItemWithSubItems
 * @description Sidebar menu item component with sub items
 * @param {ISidebarMenuItemWithSubItemsProps} props - Sidebar menu item with sub items props
 * @returns {JSX.Element} - Sidebar menu item with sub items component
 */
export function SidebarMenuItemWithSubItems({
	item,
	activeHref,
	isInitiallyOpen,
	onOpenChange,
}: ISidebarMenuItemWithSubItemsProps): JSX.Element {
	const t = useTranslations();
	const { setOpenMobile, isMobile } = useSidebar();
	const Icon = item.icon;

	const href = getNavigationUrl(item.key);

	// Активен ли родитель (его собственный href)
	const isActiveParent = activeHref === href;

	// Активен ли хоть один из дочерних пунктов
	const hasActiveSubItem = useMemo(
		() => item.menuItems.some(subItem => getNavigationUrl(subItem.key) === activeHref),
		[item.menuItems, activeHref],
	);

	// Инициализируем открытость: открыт, если активен сам или кто-то из детей
	const [isOpen, setIsOpen] = useState<boolean>(() => {
		if (isInitiallyOpen) return true;
		return hasActiveSubItem;
	});

	function setOpen(next: boolean) {
		setIsOpen(next);
		onOpenChange(next);
	}

	function close() {
		if (isMobile) {
			setOpenMobile(false);
		}
	}

	return (
		<SidebarMenuItemLib>
			<SidebarMenuButton asChild isActive={isActiveParent} tooltip={t(getSidebarItemTitleKey(item.key))}>
				<Link
					href={href}
					onClick={() => {
						setOpen(true);
						close();
					}}>
					<Icon />
					<span>{t(getSidebarItemTitleKey(item.key))}</span>
				</Link>
			</SidebarMenuButton>

			<SidebarMenuAction aria-label={t('sidebar.more-actions')} onClick={() => setOpen(!isOpen)}>
				{isOpen ? <ChevronDown /> : <ChevronRight />}
			</SidebarMenuAction>

			{isOpen && (
				<SidebarMenuSub>
					{item.menuItems.map(subItem => {
						const isActiveSubItem = activeHref === getNavigationUrl(subItem.key);
						return <SidebarMenuSubItem key={subItem.key} item={subItem} isActive={isActiveSubItem} />;
					})}
				</SidebarMenuSub>
			)}
		</SidebarMenuItemLib>
	);
}
