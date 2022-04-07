const { types } = require('../changelog.config');

const changelogTypes = Object.keys(types).map((k) => {
  const { value: type, release } = types[k];

  return { type, release };
});

/**
 * Default `releaseRules` rules for common commit formats, following conventions.
 *
 * @type {{
 *  release: 'major' | 'minor' | 'patch' | 'no-release',
 *  breaking?: boolean,
 *  revert?: boolean,
 *  component?: string,
 *  emoji?: string,
 *  tag?: string,
 *  type?: string,
 *  }[]}
 */
 module.exports = [
  {breaking: true, release: 'major'},
  {revert: true, release: 'patch'},

  ...changelogTypes,
];