/**
 * @file next.config.ts
 * @module next
 * @description next config file
 */

/**
 * ! lib imports
 */
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
