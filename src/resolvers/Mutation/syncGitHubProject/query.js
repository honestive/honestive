const { gql } = require('apollo-server-express')

module.exports = gql`
  query GitHubProject($owner: String!, $name: String!, $projectNumber: Int!) {
    repository(owner: $owner, name: $name) {
      project(number: $projectNumber) {
        columns(first: 100) {
          nodes {
            id
            name
            purpose

            cards(first: 100) {
              nodes {
                id
                content {
                  __typename
                  ...IssueFragment
                  ...PullRequestFragment
                }
                note
                url
              }
            }
          }
        }
      }
    }
  }

  fragment IssueFragment on Issue {
    title
    bodyText
    url
  }

  fragment PullRequestFragment on PullRequest {
    title
    bodyText
    url
  }
`
