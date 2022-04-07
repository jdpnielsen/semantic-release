module.exports = {
	branches: [
		'main'
	],
	plugins: [
		["@semantic-release/commit-analyzer", {
			preset: "conventionalcommits",
		}],
		["@semantic-release/release-notes-generator", {
			preset: "conventionalcommits",
		}],
		"@semantic-release/changelog",
		"@semantic-release/github",
		"@semantic-release/npm",
		[
			"@semantic-release/git",
			{"assets": ["CHANGELOG.md", "package.json", "package-lock.json"]}
		],
		[
			"@saithodev/semantic-release-backmerge",
			{
				"branches": [{from: "main", to: "staging"}, {from: "main", to: "devel"}],
				"plugins": [
					[
						"@semantic-release/exec",
						{
							"successCmd": "echo 'Version in master is ${nextRelease.version}' > test.txt && git add test.txt"
						}
					]
				]
			}
		]
	]
}
