module.exports = {
	extends: "eslint:recommended",
	env: {
		node: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2019,
	},
	rules: {
		indent: ["error", "tab", { SwitchCase: 1 }],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-console": "error",
		"no-unused-vars": "off",
	},
};
