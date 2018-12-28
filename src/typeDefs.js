const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    releases(last: Int): [Release!]!
  }

  type Mutation {
    syncGitHubReleases: Boolean
    syncGitHubProject: Boolean
  }

  type Release {
    id: ID!
    version: String!
    url: String!
  }
`
