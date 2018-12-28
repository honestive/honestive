const _ = require('lodash')
const serializeCard = require('./serializeCard')

module.exports = ({
  id: gitHubId,
  cards,
  __typename,
  ...rest
}) => ({
  gitHubId,
  gitHubProjectCards: _.map(cards, serializeCard),
  ...rest,
})
