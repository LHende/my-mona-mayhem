import js from '@eslint/js';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import astro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';

const sharedRules = {
	'no-unused-vars': 'off',
	'@typescript-eslint/no-unused-vars': [
		'error',
		{
			argsIgnorePattern: '^_',
			varsIgnorePattern: '^_',
		},
	],
	semi: ['error', 'always'],
	quotes: ['error', 'single'],
	indent: ['error', 'tab'],
	'no-mixed-spaces-and-tabs': 'error',
};

export default [
	{
		ignores: ['dist/**', '.astro/**', 'node_modules/**', 'docs/**'],
	},
	js.configs.recommended,
	...astro.configs['flat/recommended'],
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
		},
		rules: sharedRules,
	},
	{
		files: ['**/*.astro'],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tsParser,
				ecmaVersion: 'latest',
				sourceType: 'module',
				extraFileExtensions: ['.astro'],
			},
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
		},
		rules: sharedRules,
	},
];
