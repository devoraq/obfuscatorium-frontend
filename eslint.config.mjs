// eslint.config.mjs
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import next from 'eslint-config-next';

export default [
	...next(),
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		ignores: ['node_modules', '.next', 'out', 'dist'],
	},
	{
		files: ['**/*.{ts,tsx}'],
		rules: {
			// Tabs
			indent: ['error', 'tab', { SwitchCase: 1 }],
			'no-tabs': 'off',

			// Стиль
			quotes: ['error', 'single'],
			semi: ['error', 'always'],
			'comma-dangle': ['error', 'always-multiline'],
			'object-curly-spacing': ['error', 'always'],

			// Небольшая строгость/юзабилити
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'no-console': ['warn', { allow: ['warn', 'error'] }],
		},
	},

	// ============================
	// FSD: core (самый нижний слой)
	// ============================
	{
		files: ['src/core/**/*.{ts,tsx}'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: [
								'@entities',
								'@entities/*',
								'@features',
								'@features/*',
								'@widgets',
								'@widgets/*',
								'@lib',
								'@lib/*',
								'@shared',
								'@shared/*',
							],
							message: '[FSD] core-слой не может импортировать из entities/features/widgets/lib/shared',
						},
					],
				},
			],
		},
	},

	// ============================
	// FSD: lib (утилиты уровня приложения)
	// ============================
	{
		files: ['src/lib/**/*.{ts,tsx}'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['@entities', '@entities/*', '@features', '@features/*', '@widgets', '@widgets/*'],
							message: '[FSD] lib-слой не может импортировать из entities/features/widgets',
						},
					],
				},
			],
		},
	},

	// ============================
	// FSD: shared (включая @lib/*)
	// ============================
	{
		files: ['src/shared/**/*.{ts,tsx}'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['@entities', '@entities/*', '@features', '@features/*', '@widgets', '@widgets/*'],
							message:
								'[FSD] shared-layer (включая lib) не может импортировать из entities/features/widgets',
						},
					],
				},
			],
		},
	},

	// ============================
	// FSD: entities
	// ============================
	{
		files: ['src/entities/**/*.{ts,tsx}'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['@features', '@features/*', '@widgets', '@widgets/*'],
							message: '[FSD] entities-слой не может импортировать из features/widgets',
						},
					],
				},
			],
		},
	},

	// ============================
	// FSD: features
	// ============================
	{
		files: ['src/features/**/*.{ts,tsx}'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['@widgets', '@widgets/*'],
							message: '[FSD] features-слой не может импортировать из widgets',
						},
					],
				},
			],
		},
	},

	// ============================
	// FSD: widgets (верхний слой среди этих)
	// ограничений нет — он может тянуть всё ниже
	// ============================
];
