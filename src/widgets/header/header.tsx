/**
 * @file header.tsx
 * @module widgets/header
 * @description Шапка приложения
 */

'use client';

/**
 * ! lib imports
 */
import { Fragment, JSX } from 'react';
import { useTranslations } from 'next-intl';
import { Download, Ellipsis, Import, Plus, Timer } from 'lucide-react';

/**
 * ! my imports
 */
import { usePathname } from '@i18n/navigation';
import {
	cn,
	SidebarTrigger,
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage,
	DropdownMenu,
	DropdownMenuTrigger,
	Button,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from '@shared';
import { ENavigationUrl, getBreadcrumbsByPathname } from '@widgets/navigation';
import { getSidebarItemTitleKey } from '@widgets/sidebar';

/**
 * @interface DropdownButtonConfig
 * @description Конфигурация элемента выпадающего меню.
 */
interface DropdownButtonConfig {
	/**
	 * @property {React.ComponentType<React.SVGProps<SVGSVGElement>>} icon - Иконка элемента навигации.
	 */
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	/**
	 * @property {string} key - Текст элемента навигации.
	 */
	key: string;
}

/**
 * @interface Separator
 * @description Конфигурация разделителя выпадающего меню.
 */
interface Separator {
	/**
	 * @property {boolean} separator - Отображает разделитель.
	 */
	separator: boolean;
}

/**
 * @interface DropdownConfig
 * @description Конфигурация выпадающего меню.
 */
type DropdownConfig = Record<string, Array<DropdownButtonConfig | Separator>>;

/**
 * @constant dropdownButtonsConfig
 * @description Конфигурация элементов выпадающего меню.
 */
const dropdownButtonsConfig: DropdownConfig = {
	[ENavigationUrl.Dashboard]: [],
	// Money
	[ENavigationUrl.Hackathon]: [
		{ icon: Plus, key: 'hackathon.hackathon.add' },
		{ separator: true },
		{ icon: Timer, key: 'hackathon.hackathon.hide' },
	],
	[ENavigationUrl.HackathonCreateNew]: [],
	[ENavigationUrl.HackathonMy]: [],

	// Securities
	[ENavigationUrl.Security]: [],
	[ENavigationUrl.SecurityVerification]: [],
};

/**
 * @function AppHeader
 * @description Шапка приложения
 * @returns {JSX.Element} - Шапка приложения
 */
export function AppHeader(): JSX.Element {
	const pathname = usePathname();
	const breadcrumbs = getBreadcrumbsByPathname(pathname);

	const t = useTranslations();

	return (
		<header
			data-slot='application-header'
			className={cn('flex h-12 flex-row items-center justify-between gap-3 border-b px-3')}>
			<div className='flex items-center gap-2'>
				<SidebarTrigger />

				{/* Breadcrumbs */}
				{breadcrumbs.length > 0 && (
					<Breadcrumb>
						<BreadcrumbList>
							{breadcrumbs.map((item, index) => {
								const isLast = index === breadcrumbs.length - 1;

								return (
									<Fragment key={item.key}>
										<BreadcrumbItem>
											{isLast ? (
												<BreadcrumbPage>{t(getSidebarItemTitleKey(item.key))}</BreadcrumbPage>
											) : (
												<BreadcrumbLink href={item.href}>
													{t(getSidebarItemTitleKey(item.key))}
												</BreadcrumbLink>
											)}
										</BreadcrumbItem>

										{/* Сепаратор — ТОЛЬКО если не последний */}
										{!isLast && <BreadcrumbSeparator />}
									</Fragment>
								);
							})}
						</BreadcrumbList>
					</Breadcrumb>
				)}

				{/* Action menu items */}
				{dropdownButtonsConfig[pathname].length > 0 && (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='ghost' className='size-7'>
								<Ellipsis className='size-4' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							{dropdownButtonsConfig[pathname].map((item, index) => {
								if ('separator' in item && item.separator) {
									return <DropdownMenuSeparator key={index} />;
								} else {
									const con = item as DropdownButtonConfig;

									const Icon = con.icon;

									return (
										<DropdownMenuItem key={index}>
											<Icon />
											{t(`header.action-menu-items.${con.key}`)}
										</DropdownMenuItem>
									);
								}
							})}
						</DropdownMenuContent>
					</DropdownMenu>
				)}
			</div>

			{/* Правая часть под actions / профиль и т.д. */}
			<div className='flex items-center gap-2'>{/* <HeaderActions /> */}</div>
		</header>
	);
}
