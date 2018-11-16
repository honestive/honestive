const _ = require('lodash')
const upsert = require('./upsert')
const releasesFromGitHub = require('./releasesFromGitHub')

module.exports = async (root, args, ctx) => {
  await upsert(await releasesFromGitHub(), ctx)
  return true
}
