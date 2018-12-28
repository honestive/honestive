const _ = require('lodash')
const fragment = require('./fragment')
const serialize = require('./serialize')

module.exports = async (root, args, ctx) => {
  const gitHubReleases = await ctx.prisma.gitHubReleases({
    where: {
      isDraft: false,
    },
    last: args.last,
  }).$fragment(fragment)

  return _.map(gitHubReleases, serialize)
}
