/**
 * @file page.tsx
 * @module app/[locale]/(with-sidebar)/hackathon/my
 * @description Hackathon transactions page
 */

/**
 * ! lib imports
 */
import { JSX } from 'react';
import { useTranslations } from 'next-intl';

/**
 * @function HackathonMyAppPage
 * @description Hackathon my page component
 * @returns {JSX.Element} - Hackathon my page component
 */
export default function HackathonMyAppPage(): JSX.Element {
	const t = useTranslations('pages.hackathon.my');
	return (
		<div className='container'>
			<h1 className='text-3xl font-bold'>{t('title')}</h1>
		</div>
	);
}
