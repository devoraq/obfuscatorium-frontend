/**
 * @file navigation.enums.ts
 * @module widgets/navigation
 * @description
 * Этот модуль содержит enum для работы с состоянием бокового меню.
 */

/**
 * @enum ENavigationKey
 * @description Enum for navigation keys
 */
export enum ENavigationKey {
	// root
	Dashboard = 'dashboard',

	// money
	Hackathon = 'hackathon',
	HackathonCreateNew = 'hackathon.create-new',
	HackathonMy = 'hackathon.my',

	// security
	Security = 'security',
	SecurityVerification = 'security.verification',
}

/**
 * @enum ENavigationUrl
 * @description Enum for navigation urls
 */
export enum ENavigationUrl {
	// root
	Dashboard = '/',

	// money
	Hackathon = '/hackathon',
	HackathonCreateNew = '/hackathon/create-new',
	HackathonMy = '/hackathon/my',

	// security
	Security = '/security',
	SecurityVerification = '/security/verification',
}
