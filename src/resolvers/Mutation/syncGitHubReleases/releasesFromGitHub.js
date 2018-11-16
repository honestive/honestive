const _ = require('lodash')
const queryGitHub = require('./queryGitHub')
const serializeRelease = require('./serializeRelease')

module.exports = async () => (
  _.map(await queryGitHub(), serializeRelease)
)
