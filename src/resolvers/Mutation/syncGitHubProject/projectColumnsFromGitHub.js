const _ = require('lodash')
const queryGitHub = require('./queryGitHub')
const serializeColumn = require('./serializeColumn')

module.exports = async () => (
  _.map(await queryGitHub(), serializeColumn)
)
