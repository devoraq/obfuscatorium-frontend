/**
 * @file page.tsx
 * @module app/[locale]/(with-sidebar)/security
 * @description Security page
 */

/**
 * ! lib imports
 */
import { JSX } from 'react';
import { useTranslations } from 'next-intl';

/**
 * @function SecurityAppPage
 * @description Security page component
 * @returns {JSX.Element} - Security page component
 */
export default function SecurityAppPage(): JSX.Element {
	const t = useTranslations('pages.security');
	return (
		<div className='container'>
			<h1 className='text-3xl font-bold'>{t('title')}</h1>
		</div>
	);
}
