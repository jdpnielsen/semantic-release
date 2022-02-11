module.exports = {
	branches: [
		'main',
		{
			name: 'staging',
			prerelease: true,
		},
		{
			name: 'devel',
			prerelease: true,
		},
	],
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
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
				"branches": [{from: "main", to: "staging"}, {from: "staging", to: "devel"}],
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
