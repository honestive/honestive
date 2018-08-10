const { GraphQLServer } = require('graphql-yoga')
const { Github } = require('graphql-binding-github')
const { Prisma } = require('prisma-binding')
const { importSchema } = require('graphql-import')
const _ = require('lodash')

const typeDefs = importSchema('./src/schema.graphql')
const token = 'SECRET-TOKEN'
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
        tag {
          name
        }
      }
    }
  }
`

const resolvers = {
  Query: {
    releases(parent, args, ctx, info) {
      return ctx.db.query.releases({}, info)
    },
    gitHubReleases(parent, args, ctx, info) {
      return ctx.db.query.gitHubReleases(args, info)
    },
  },
  Mutation: {
    async syncGitHubReleases(parent, args, ctx, info) {
      const owner = 'Nedomas'
      const name = 'honestive-testing'
      const repository = await gitHub.query.repository({ owner, name }, repositoryReleasesFragment)

      const serialize = (release) => {
        const result = _.omit(_.cloneDeep(release), 'id', 'tag')
        result.gitHubId = release.id
        result.tagName = release.tag.name
        return result
      }

      await Promise.all(_.map(_.compact(repository.releases.nodes), (release) => {
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
      endpoint: 'https://eu1.prisma.sh/public-wavepiper-993/honestive/dev', // the endpoint of the Prisma API
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
