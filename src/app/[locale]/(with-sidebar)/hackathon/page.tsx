/**
 * @file page.tsx
 * @module app/[locale]/(with-sidebar)/hackathon
 * @description hackathon page
 */

/**
 * ! lib imports
 */
import { JSX } from 'react';
import { useTranslations } from 'next-intl';

/**
 * @function HackathonAppPage
 * @description Hackathon page component
 * @returns {JSX.Element} - Hackathon page component
 */
export default function HackathonAppPage(): JSX.Element {
	const t = useTranslations('pages.hackathon');
	return (
		<div className='container'>
			<h1 className='text-3xl font-bold'>{t('title')}</h1>
		</div>
	);
}
