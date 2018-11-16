const { gql } = require('apollo-server-express')

module.exports = gql`
  query GitHubRepositoryReleases($owner: String!, $name: String!, $last: Int!) {
    repository(owner: $owner, name: $name) {
      releases(last: $last) {
        nodes {
          id
          isDraft
          publishedAt
          url

          tag {
            id
            name
          }
        }
      }
    }
  }
`
