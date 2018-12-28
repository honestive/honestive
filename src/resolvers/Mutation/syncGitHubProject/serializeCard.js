const serializeContent = require('./serializeContent')

module.exports = ({
  id: gitHubId,
  content,
  __typename,
  ...rest
}) => ({
  gitHubId,
  githubProjectCardContent: serializeContent(content),
  ...rest,
})
