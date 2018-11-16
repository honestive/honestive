module.exports = `
  fragment GitHubReleaseWithGitHubTag on GitHubRelease {
    id
    url
    isDraft

    gitHubTag {
      name
    }
  }
`
