const preset = require('./config/changelog-preset');

module.exports = {
	branches: [
		'main'
	],
	plugins: [
		["@semantic-release/commit-analyzer", {
			preset: "conventionalcommits",
			parserOpts: preset,
			releaseRules: "./config/release-rules.js",
		}],
		["@semantic-release/release-notes-generator", {
			preset: "conventionalcommits",
			presetConfig: preset,
		}],
		"@semantic-release/changelog",
		"@semantic-release/github",
		"@semantic-release/npm",
		["@semantic-release/git", {
			"assets": ["CHANGELOG.md", "package.json", "package-lock.json"],
			"message": "release: ${nextRelease.version} [skip ci]"
		}],
		[
			"@saithodev/semantic-release-backmerge",
			{
				"branches": [{from: "main", to: "devel"}]
			}
		]
	]
}
