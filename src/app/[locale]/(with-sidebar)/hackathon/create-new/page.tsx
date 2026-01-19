/**
 * @file page.tsx
 * @module app/[locale]/(with-sidebar)/hackathon/create-new
 * @description Hackathon create new page
 */

/**
 * ! lib imports
 */
import { JSX } from 'react';
import { useTranslations } from 'next-intl';

/**
 * @function HackathonCreateNewAppPage
 * @description Hackathon create new page component
 * @returns {JSX.Element} - Hackathon create new page component
 */
export default function HackathonCreateNewAppPage(): JSX.Element {
	const t = useTranslations('pages.hackathon.create-new');
	return (
		<div className='container'>
			<h1 className='text-3xl font-bold'>{t('title')}</h1>
		</div>
	);
}
