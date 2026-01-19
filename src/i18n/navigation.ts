/**
 * @file navigation.ts
 * @module i18n/navigation
 * @description Локализованные wrappers вокруг next/navigation
 */

/**
 * ! lib imports
 */
import { createNavigation } from 'next-intl/navigation';

/**
 * ! my imports
 */
import { routing } from './routing';

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
