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
		"@semantic-release/git",
		"@semantic-release/changelog",
	]
}
