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
    ]
	]
}
