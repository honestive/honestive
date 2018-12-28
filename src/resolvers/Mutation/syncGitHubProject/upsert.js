const _ = require('lodash')

module.exports = (columns, ctx) => (
  Promise.all(_.map(columns, ({ gitHubId, gitHubProjectCards, ...rest }) => (
    ctx.prisma.upsertGitHubColumn({
      where: {
        gitHubId,
      },
      create: {
        gitHubId,
        gitHubProjectCards: {
          upsert: upsertProjectCards(gitHubProjectCards),
        },
        ...rest
      },
      update: {
        gitHubId,
        gitHubProjectCards: {
          upsert: upsertProjectCards(gitHubProjectCards),
        },
        ...rest,
      },
    })
  )))
)
