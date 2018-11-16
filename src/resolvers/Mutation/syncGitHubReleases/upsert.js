const _ = require('lodash')

module.exports = (releases, ctx) => (
  Promise.all(_.map(releases, ({ gitHubId, gitHubTag, ...rest }) => (
    ctx.prisma.upsertGitHubRelease({
      where: {
        gitHubId,
      },
      create: {
        gitHubId,
        gitHubTag: {
          create: gitHubTag,
        },
        ...rest,
      },
      update: {
        gitHubId,
        gitHubTag: {
          update: gitHubTag,
        },
        ...rest,
      },
    })
  )))
)
