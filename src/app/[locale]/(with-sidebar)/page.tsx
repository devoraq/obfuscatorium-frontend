/**
 * @file page.tsx
 * @module app/[locale]/(with-sidebar)/dashboard
 * @description Dashboard page
 */

/**
 * ! lib imports
 */
import { JSX } from 'react';
import { useTranslations } from 'next-intl';

/**
 * @function DashboardAppPage
 * @description Dashboard page component
 * @returns {JSX.Element} - Dashboard page component
 */
export default function DashboardAppPage(): JSX.Element {
	const t = useTranslations('pages.dashboard');
	return (
		<div className='container'>
			<h1 className='text-3xl font-bold'>{t('title')}</h1>
		</div>
	);
}
