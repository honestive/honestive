module.exports = ({
  id,
  url,
  gitHubTag: {
    name: version,
  },
}) => ({
  id,
  version,
  url,
})
