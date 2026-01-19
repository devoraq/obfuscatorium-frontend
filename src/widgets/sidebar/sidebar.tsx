/**
 * @file sidebar.tsx
 * @module widgets/sidebar
 * @description Sidebar widget
 */

'use client';

/**
 * ! lib imports
 */
import { useState, type JSX } from 'react';
import { HandFistIcon, Shield, Navigation } from 'lucide-react';

/**
 * ! my imports
 */
import { usePathname } from '@i18n/navigation';
import {
	Sidebar,
	SidebarHeader,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarRail,
	useSidebar,
	Avatar,
	AvatarFallback,
	cn,
} from '@shared';
import { ENavigationKey } from '@widgets/navigation';
import { INavItem, INavItemWithSubItems, isNavItemWithSubItems } from '@widgets/sidebar/sidebar.types';
import { SidebarMenuItemWithSubItems } from '@widgets/sidebar/sidebarMenuItemWithSubItems';
import { SidebarMenuItem } from '@widgets/sidebar/sidebarMenuItem';
import { SIDEBAR_GROUPS_COOKIE_MAX_AGE, SIDEBAR_GROUPS_COOKIE_NAME } from '@widgets/sidebar/sidebar.constants';
import { useTranslations } from 'next-intl';

/**
 * @constant navItems
 * @description Navigation items with sub items
 */
const navItems: Array<INavItem | INavItemWithSubItems> = [
	{
		key: ENavigationKey.Dashboard,
		icon: Navigation,
	},
	{
		key: ENavigationKey.Hackathon,
		icon: HandFistIcon,
		menuItems: [
			{
				key: ENavigationKey.HackathonCreateNew,
			},
			{
				key: ENavigationKey.HackathonMy,
			},
		],
	},
	{
		key: ENavigationKey.Security,
		icon: Shield,
		menuItems: [
			{
				key: ENavigationKey.SecurityVerification,
			},
		],
	},
];

/**
 * @interface AppSideBarProps
 * @description App sidebar component props
 */
export interface AppSideBarProps {
	initialOpenGroups: Array<ENavigationKey>;
}

/**
 * @function AppSidebar
 * @description App sidebar component
 * @returns {JSX.Element} - App sidebar component
 */
export function AppSidebar({ initialOpenGroups }: AppSideBarProps): JSX.Element {
	const pathname = usePathname();
	const { open } = useSidebar();
	const t = useTranslations();

	const [openGroups, setOpenGroups] = useState<Array<ENavigationKey>>(initialOpenGroups);

	/**
	 * @function setGroupOpen
	 * @description Устанавливает состояние открытия группы меню
	 * @param {ENavigationKey} groupKey - Ключ группы меню
	 * @param {boolean} nextOpen - Следующее состояние открытия группы
	 */
	function setGroupOpen(groupKey: ENavigationKey, nextOpen: boolean): void {
		setOpenGroups(prev => {
			const set = new Set(prev);
			if (nextOpen) {
				set.add(groupKey);
			} else {
				set.delete(groupKey);
			}
			const result = Array.from(set);

			// Сохраняем в cookie (клиентская часть)
			if (typeof document !== 'undefined') {
				const value = result.join('|');
				document.cookie = `${encodeURIComponent(SIDEBAR_GROUPS_COOKIE_NAME)}=${encodeURIComponent(
					value,
				)}; path=/; max-age=${SIDEBAR_GROUPS_COOKIE_MAX_AGE}`;
			}

			return result;
		});
	}

	return (
		<Sidebar side='left' variant='sidebar' collapsible='icon'>
			{/* Заголовок бокового меню */}
			<SidebarHeader className={cn('flex h-12 flex-row items-center p-3', {
				'gap-2': open,
			})}>
				<Avatar
					className={cn({
						'size-4': open,
						'size-6': !open,
						rounded: open,
						'rounded-md': !open,
					})}>
					{/*
						// TODO вставить аватар пользователя
						<AvatarImage src='/avatar.jpg' alt='User avatar' />
					*/}
					<AvatarFallback
						className={cn('flex items-center justify-center bg-primary text-primary-foreground text-xs', {
							rounded: open,
							'rounded-md': !open,
						})}>
						O
					</AvatarFallback>
				</Avatar>

				{open && <span className='text-sm font-semibold tracking-tight'>{t('common.appName')}</span>}
			</SidebarHeader>

			{/* Меню навигации */}
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{navItems.map(item => {
								if (isNavItemWithSubItems(item) && item.menuItems.length > 0) {
									return (
										<SidebarMenuItemWithSubItems
											key={item.key}
											item={item}
											activeHref={pathname}
											isInitiallyOpen={openGroups.includes(item.key)}
											onOpenChange={nextOpen => setGroupOpen(item.key, nextOpen)}
										/>
									);
								} else {
									return (
										<SidebarMenuItem key={item.key} item={item as INavItem} activeHref={pathname} />
									);
								}
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			{/* Rail — зона для ресайза / клика при collapsed */}
			<SidebarRail />
		</Sidebar>
	);
}
