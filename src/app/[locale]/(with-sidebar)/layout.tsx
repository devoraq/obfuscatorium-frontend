/**
 * @file layout.tsx
 * @module app/[locale]/(with-sidebar)
 * @description Layout with sidebar
 */

/**
 * ! lib imports
 */
import { JSX } from 'react';

/**
 * ! my imports
 */
import { SidebarInset, SidebarProvider } from '@shared/ui';
import { AppSidebar, getSidebarInitialState } from '@widgets/sidebar';
import { AppHeader } from '@widgets/header';

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): Promise<JSX.Element> {
	const { isSidebarOpen, openGroups } = await getSidebarInitialState();

	return (
		<SidebarProvider defaultOpen={isSidebarOpen} className='flex min-h-screen w-full'>
			<>
				<AppSidebar initialOpenGroups={openGroups} />
				<SidebarInset>
					<AppHeader />
					{children}
				</SidebarInset>
			</>
		</SidebarProvider>
	);
}
