/**
 * @file cn.ts
 * @module shared/lib
 * @description Утилита для работы с классами
 */

/**
 * ! lib imports
 */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @function cn
 * @description Объединяет классы с помощью clsx и tailwind-merge
 * @param {...Array<ClassValue>} inputs - Список классов
 * @returns {string} - Объединенная строка классов
 */
export function cn(...inputs: Array<ClassValue>): string {
	return twMerge(clsx(inputs));
}
