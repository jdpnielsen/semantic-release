module.exports = {
	branches: [
		'master',
		{
			name: 'staging',
			prerelease: true,
		},
		{
			name: 'devel',
			prerelease: true,
		},
		{
			name: 'next',
			prerelease: true,
		},
	],
}
