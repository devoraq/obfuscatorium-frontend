/**
 * @file page.tsx
 * @module app/[locale]/(with-sidebar)/security/verification
 * @description Security verification page
 */

/**
 * ! lib imports
 */
import { JSX } from 'react';
import { useTranslations } from 'next-intl';

/**
 * @function SecurityVerificationAppPage
 * @description Security verification page component
 * @returns {JSX.Element} - Security verification page component
 */
export default function SecurityVerificationAppPage(): JSX.Element {
	const t = useTranslations('pages.security.verification');

	return (
		<div className='container'>
			<h1 className='text-3xl font-bold'>{t('title')}</h1>
		</div>
	);
}
