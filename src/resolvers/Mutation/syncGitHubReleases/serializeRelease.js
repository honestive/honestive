const serializeTag = require('./serializeTag')

module.exports = ({
  id: gitHubId,
  tag,
  __typename,
  ...rest
}) => ({
  gitHubId,
  gitHubTag: serializeTag(tag),
  ...rest,
})
