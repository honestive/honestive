module.exports = {
        typeDefs: /* GraphQL */ `type AggregateGitHubRelease {
  count: Int!
}

type AggregateGitHubTag {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type GitHubRelease {
  id: ID!
  gitHubId: String!
  isDraft: Boolean!
  publishedAt: DateTime!
  url: String!
  gitHubTag: GitHubTag
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GitHubReleaseConnection {
  pageInfo: PageInfo!
  edges: [GitHubReleaseEdge]!
  aggregate: AggregateGitHubRelease!
}

input GitHubReleaseCreateInput {
  gitHubId: String!
  isDraft: Boolean!
  publishedAt: DateTime!
  url: String!
  gitHubTag: GitHubTagCreateOneWithoutGitHubReleaseInput
}

input GitHubReleaseCreateOneWithoutGitHubTagInput {
  create: GitHubReleaseCreateWithoutGitHubTagInput
  connect: GitHubReleaseWhereUniqueInput
}

input GitHubReleaseCreateWithoutGitHubTagInput {
  gitHubId: String!
  isDraft: Boolean!
  publishedAt: DateTime!
  url: String!
}

type GitHubReleaseEdge {
  node: GitHubRelease!
  cursor: String!
}

enum GitHubReleaseOrderByInput {
  id_ASC
  id_DESC
  gitHubId_ASC
  gitHubId_DESC
  isDraft_ASC
  isDraft_DESC
  publishedAt_ASC
  publishedAt_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubReleasePreviousValues {
  id: ID!
  gitHubId: String!
  isDraft: Boolean!
  publishedAt: DateTime!
  url: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GitHubReleaseSubscriptionPayload {
  mutation: MutationType!
  node: GitHubRelease
  updatedFields: [String!]
  previousValues: GitHubReleasePreviousValues
}

input GitHubReleaseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GitHubReleaseWhereInput
  AND: [GitHubReleaseSubscriptionWhereInput!]
  OR: [GitHubReleaseSubscriptionWhereInput!]
  NOT: [GitHubReleaseSubscriptionWhereInput!]
}

input GitHubReleaseUpdateInput {
  gitHubId: String
  isDraft: Boolean
  publishedAt: DateTime
  url: String
  gitHubTag: GitHubTagUpdateOneWithoutGitHubReleaseInput
}

input GitHubReleaseUpdateManyMutationInput {
  gitHubId: String
  isDraft: Boolean
  publishedAt: DateTime
  url: String
}

input GitHubReleaseUpdateOneRequiredWithoutGitHubTagInput {
  create: GitHubReleaseCreateWithoutGitHubTagInput
  update: GitHubReleaseUpdateWithoutGitHubTagDataInput
  upsert: GitHubReleaseUpsertWithoutGitHubTagInput
  connect: GitHubReleaseWhereUniqueInput
}

input GitHubReleaseUpdateWithoutGitHubTagDataInput {
  gitHubId: String
  isDraft: Boolean
  publishedAt: DateTime
  url: String
}

input GitHubReleaseUpsertWithoutGitHubTagInput {
  update: GitHubReleaseUpdateWithoutGitHubTagDataInput!
  create: GitHubReleaseCreateWithoutGitHubTagInput!
}

input GitHubReleaseWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  gitHubId: String
  gitHubId_not: String
  gitHubId_in: [String!]
  gitHubId_not_in: [String!]
  gitHubId_lt: String
  gitHubId_lte: String
  gitHubId_gt: String
  gitHubId_gte: String
  gitHubId_contains: String
  gitHubId_not_contains: String
  gitHubId_starts_with: String
  gitHubId_not_starts_with: String
  gitHubId_ends_with: String
  gitHubId_not_ends_with: String
  isDraft: Boolean
  isDraft_not: Boolean
  publishedAt: DateTime
  publishedAt_not: DateTime
  publishedAt_in: [DateTime!]
  publishedAt_not_in: [DateTime!]
  publishedAt_lt: DateTime
  publishedAt_lte: DateTime
  publishedAt_gt: DateTime
  publishedAt_gte: DateTime
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  gitHubTag: GitHubTagWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [GitHubReleaseWhereInput!]
  OR: [GitHubReleaseWhereInput!]
  NOT: [GitHubReleaseWhereInput!]
}

input GitHubReleaseWhereUniqueInput {
  id: ID
  gitHubId: String
}

type GitHubTag {
  id: ID!
  gitHubId: String!
  gitHubRelease: GitHubRelease!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GitHubTagConnection {
  pageInfo: PageInfo!
  edges: [GitHubTagEdge]!
  aggregate: AggregateGitHubTag!
}

input GitHubTagCreateInput {
  gitHubId: String!
  gitHubRelease: GitHubReleaseCreateOneWithoutGitHubTagInput!
  name: String!
}

input GitHubTagCreateOneWithoutGitHubReleaseInput {
  create: GitHubTagCreateWithoutGitHubReleaseInput
  connect: GitHubTagWhereUniqueInput
}

input GitHubTagCreateWithoutGitHubReleaseInput {
  gitHubId: String!
  name: String!
}

type GitHubTagEdge {
  node: GitHubTag!
  cursor: String!
}

enum GitHubTagOrderByInput {
  id_ASC
  id_DESC
  gitHubId_ASC
  gitHubId_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubTagPreviousValues {
  id: ID!
  gitHubId: String!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GitHubTagSubscriptionPayload {
  mutation: MutationType!
  node: GitHubTag
  updatedFields: [String!]
  previousValues: GitHubTagPreviousValues
}

input GitHubTagSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GitHubTagWhereInput
  AND: [GitHubTagSubscriptionWhereInput!]
  OR: [GitHubTagSubscriptionWhereInput!]
  NOT: [GitHubTagSubscriptionWhereInput!]
}

input GitHubTagUpdateInput {
  gitHubId: String
  gitHubRelease: GitHubReleaseUpdateOneRequiredWithoutGitHubTagInput
  name: String
}

input GitHubTagUpdateManyMutationInput {
  gitHubId: String
  name: String
}

input GitHubTagUpdateOneWithoutGitHubReleaseInput {
  create: GitHubTagCreateWithoutGitHubReleaseInput
  update: GitHubTagUpdateWithoutGitHubReleaseDataInput
  upsert: GitHubTagUpsertWithoutGitHubReleaseInput
  delete: Boolean
  disconnect: Boolean
  connect: GitHubTagWhereUniqueInput
}

input GitHubTagUpdateWithoutGitHubReleaseDataInput {
  gitHubId: String
  name: String
}

input GitHubTagUpsertWithoutGitHubReleaseInput {
  update: GitHubTagUpdateWithoutGitHubReleaseDataInput!
  create: GitHubTagCreateWithoutGitHubReleaseInput!
}

input GitHubTagWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  gitHubId: String
  gitHubId_not: String
  gitHubId_in: [String!]
  gitHubId_not_in: [String!]
  gitHubId_lt: String
  gitHubId_lte: String
  gitHubId_gt: String
  gitHubId_gte: String
  gitHubId_contains: String
  gitHubId_not_contains: String
  gitHubId_starts_with: String
  gitHubId_not_starts_with: String
  gitHubId_ends_with: String
  gitHubId_not_ends_with: String
  gitHubRelease: GitHubReleaseWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [GitHubTagWhereInput!]
  OR: [GitHubTagWhereInput!]
  NOT: [GitHubTagWhereInput!]
}

input GitHubTagWhereUniqueInput {
  id: ID
  gitHubId: String
}

scalar Long

type Mutation {
  createGitHubRelease(data: GitHubReleaseCreateInput!): GitHubRelease!
  updateGitHubRelease(data: GitHubReleaseUpdateInput!, where: GitHubReleaseWhereUniqueInput!): GitHubRelease
  updateManyGitHubReleases(data: GitHubReleaseUpdateManyMutationInput!, where: GitHubReleaseWhereInput): BatchPayload!
  upsertGitHubRelease(where: GitHubReleaseWhereUniqueInput!, create: GitHubReleaseCreateInput!, update: GitHubReleaseUpdateInput!): GitHubRelease!
  deleteGitHubRelease(where: GitHubReleaseWhereUniqueInput!): GitHubRelease
  deleteManyGitHubReleases(where: GitHubReleaseWhereInput): BatchPayload!
  createGitHubTag(data: GitHubTagCreateInput!): GitHubTag!
  updateGitHubTag(data: GitHubTagUpdateInput!, where: GitHubTagWhereUniqueInput!): GitHubTag
  updateManyGitHubTags(data: GitHubTagUpdateManyMutationInput!, where: GitHubTagWhereInput): BatchPayload!
  upsertGitHubTag(where: GitHubTagWhereUniqueInput!, create: GitHubTagCreateInput!, update: GitHubTagUpdateInput!): GitHubTag!
  deleteGitHubTag(where: GitHubTagWhereUniqueInput!): GitHubTag
  deleteManyGitHubTags(where: GitHubTagWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  gitHubRelease(where: GitHubReleaseWhereUniqueInput!): GitHubRelease
  gitHubReleases(where: GitHubReleaseWhereInput, orderBy: GitHubReleaseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubRelease]!
  gitHubReleasesConnection(where: GitHubReleaseWhereInput, orderBy: GitHubReleaseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubReleaseConnection!
  gitHubTag(where: GitHubTagWhereUniqueInput!): GitHubTag
  gitHubTags(where: GitHubTagWhereInput, orderBy: GitHubTagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubTag]!
  gitHubTagsConnection(where: GitHubTagWhereInput, orderBy: GitHubTagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubTagConnection!
  node(id: ID!): Node
}

type Subscription {
  gitHubRelease(where: GitHubReleaseSubscriptionWhereInput): GitHubReleaseSubscriptionPayload
  gitHubTag(where: GitHubTagSubscriptionWhereInput): GitHubTagSubscriptionPayload
}
`
      }
    