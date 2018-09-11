require('dotenv').config()
const { GraphQLServer } = require('graphql-yoga')
const { Github } = require('graphql-binding-github')
const { Prisma } = require('prisma-binding')
const { importSchema } = require('graphql-import')
const _ = require('lodash')

const typeDefs = importSchema('./src/schema.graphql')
const token = process.env.GITHUB_TOKEN
const owner = process.env.GITHUB_REPOSITORY_OWNER
const name = process.env.GITHUB_REPOSITORY_NAME
const gitHub = new Github(token)
const repositoryReleasesFragment = `
  {
    releases(last: 100) {
      nodes {
        id
        name
        description
        url
        publishedAt
        isDraft

        tag {
          name
        }
      }
    }
  }
`

const resolvers = {
  Query: {
    async releases(parent, args, ctx, info) {
      const gitHubReleases = await ctx.db.query.gitHubReleases(args,
        `{ id tagName name description publishedAt }`)

      return _.map(gitHubReleases, ({
        id,
        tagName,
        name,
        description,
        publishedAt,
      }) => ({
        id,
        version: tagName,
        title: name,
        description,
        publishedAt,
      }))
    },
    gitHubReleases(parent, args, ctx, info) {
      return ctx.db.query.gitHubReleases(args, info)
    },
  },
  Mutation: {
    async syncGitHubReleases(parent, args, ctx, info) {
      const repository = await gitHub.query.repository({ owner, name }, repositoryReleasesFragment)

      const serialize = (release) => {
        const result = _.omit(_.cloneDeep(release), 'id', 'tag', 'isDraft')
        result.gitHubId = release.id
        result.tagName = _.get(release, 'tag.name')
        return result
      }

      await Promise.all(_.map(_.reject(_.compact(repository.releases.nodes), 'isDraft'), (release) => {
        const serializedRelease = serialize(release)
        return ctx.db.mutation.upsertGitHubRelease({
          where: _.pick(serializedRelease, 'gitHubId'),
          create: serializedRelease,
          update: serializedRelease,
        })
      }))

      return true
    },
  },
  ...gitHub.getAbstractResolvers(typeDefs),
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql', // the auto-generated GraphQL schema of the Prisma API
      endpoint: process.env.PRISMA_ENDPOINT_URL, // the endpoint of the Prisma API
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    }),
  }),
})

server.express.post('/webhook', (req, res) => {
  res.json({ success: true })
})

server.start(() => console.log('Server is running on http://localhost:4000'))
