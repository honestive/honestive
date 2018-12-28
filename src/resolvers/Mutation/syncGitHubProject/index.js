const _ = require('lodash')
const upsert = require('./upsert')
const projectColumnsFromGitHub = require('./projectColumnsFromGitHub')

module.exports = async (root, args, ctx) => {
  await upsert(await projectColumnsFromGitHub(), ctx)
  return true
}
