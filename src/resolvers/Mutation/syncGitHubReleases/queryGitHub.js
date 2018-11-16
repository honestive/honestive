const { HttpLink } = require('apollo-link-http')
const { ApolloClient } = require('apollo-client')
const { InMemoryCache } = require('apollo-cache-inmemory')
const query = require('./query')

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.github.com/graphql' }),
  cache: new InMemoryCache(),
})

module.exports = async () => {
  const response = await client.query({
    query,
    variables: {
      owner: process.env.GITHUB_REPOSITORY_OWNER,
      name: process.env.GITHUB_REPOSITORY_NAME,
      last: 100,
    },
    context: {
      headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
      }
    }
  })

  return response.data.repository.releases.nodes
}
