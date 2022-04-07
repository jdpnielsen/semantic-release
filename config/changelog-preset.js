const { types } = require('../changelog.config');

const changelogTypes = Object.keys(types).map((k) => {
  const { value: type, section, hidden } = types[k];

  if (hidden) {
    return { type, hidden };
  }

  return { type, section };
})

/** {@link https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.1.0/schema.json} */
module.exports = {
  types: changelogTypes,
}
