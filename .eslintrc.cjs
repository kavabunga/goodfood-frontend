module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:storybook/recommended',
		'eslint-config-prettier',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', '!.storybook'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
	},
	overrides: [
		{
			files: ['**/*.stories.*', 'src/stories/**/*'],
			rules: {
				'import/no-anonymous-default-export': 'off',
				'import/no-extraneous-dependencies': 'off',
			},
		},
	],
};
