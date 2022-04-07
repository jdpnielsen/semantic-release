const { types, scopes } = require('../changelog.config.js');

/** @type import("@commitlint/types").UserConfig */
module.exports = {
	extends: ['@commitlint/config-conventional'],
	ignores: [
		(message) => message.includes('WIP'),
	],
	// Add your own rules. See http://marionebl.github.io/commitlint
	rules: {
		// Apply valid scopes and types
		'scope-enum': [2, 'always', scopes],
		'type-enum': [2, 'always', Object.keys(types)],
	},
};
