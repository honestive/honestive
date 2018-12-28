const serializeContent = require('./serializeContent')

module.exports = ({
  id: gitHubId,
  __typename,
  ...rest
}) => ({
  gitHubId,
  ...rest,
})
