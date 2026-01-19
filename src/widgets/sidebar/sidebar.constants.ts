/**
 * @file sidebar.storage.ts
 * @module widgets/sidebar/sidebar.storage
 * @description
 * Этот модуль содержит функции для работы с состоянием бокового меню.
 */

/**
 * @constant SIDEBAR_COOKIE_NAME
 * @description Название куки для хранения состояния бокового меню.
 * Важно что бы название было именно `sidebar_state`, так как при закрытия sidebar, в компоненте используется именно это значение.
 */
export const SIDEBAR_COOKIE_NAME = 'sidebar_state';
/**
 * @constant SIDEBAR_GROUPS_COOKIE_NAME
 * @description Название куки для хранения состояния групп бокового меню.
 */
export const SIDEBAR_GROUPS_COOKIE_NAME = 'egal_sidebar_groups';
/**
 * @constant SIDEBAR_GROUPS_COOKIE_MAX_AGE
 * @description Время жизни куки для хранения состояния групп бокового меню.
 */
export const SIDEBAR_GROUPS_COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 дней
