module.exports = {
        typeDefs: /* GraphQL */ `type AggregateGitHubProjectCard {
  count: Int!
}

type AggregateGitHubProjectCardItem {
  count: Int!
}

type AggregateGitHubProjectColumn {
  count: Int!
}

type AggregateGitHubRelease {
  count: Int!
}

type AggregateGitHubTag {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type GitHubProjectCard {
  id: ID!
  gitHubId: String!
  gitHubProjectColumn: GitHubProjectColumn!
  gitHubProjectCardContent: GitHubProjectCardItem
  note: String
  url: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GitHubProjectCardConnection {
  pageInfo: PageInfo!
  edges: [GitHubProjectCardEdge]!
  aggregate: AggregateGitHubProjectCard!
}

input GitHubProjectCardCreateInput {
  gitHubId: String!
  gitHubProjectColumn: GitHubProjectColumnCreateOneWithoutGitHubProjectCardsInput!
  gitHubProjectCardContent: GitHubProjectCardItemCreateOneInput
  note: String
  url: String!
}

input GitHubProjectCardCreateManyWithoutGitHubProjectColumnInput {
  create: [GitHubProjectCardCreateWithoutGitHubProjectColumnInput!]
  connect: [GitHubProjectCardWhereUniqueInput!]
}

input GitHubProjectCardCreateWithoutGitHubProjectColumnInput {
  gitHubId: String!
  gitHubProjectCardContent: GitHubProjectCardItemCreateOneInput
  note: String
  url: String!
}

type GitHubProjectCardEdge {
  node: GitHubProjectCard!
  cursor: String!
}

type GitHubProjectCardItem {
  id: ID!
  gitHubId: String!
  title: String!
  bodyText: String!
  url: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GitHubProjectCardItemConnection {
  pageInfo: PageInfo!
  edges: [GitHubProjectCardItemEdge]!
  aggregate: AggregateGitHubProjectCardItem!
}

input GitHubProjectCardItemCreateInput {
  gitHubId: String!
  title: String!
  bodyText: String!
  url: String!
}

input GitHubProjectCardItemCreateOneInput {
  create: GitHubProjectCardItemCreateInput
  connect: GitHubProjectCardItemWhereUniqueInput
}

type GitHubProjectCardItemEdge {
  node: GitHubProjectCardItem!
  cursor: String!
}

enum GitHubProjectCardItemOrderByInput {
  id_ASC
  id_DESC
  gitHubId_ASC
  gitHubId_DESC
  title_ASC
  title_DESC
  bodyText_ASC
  bodyText_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubProjectCardItemPreviousValues {
  id: ID!
  gitHubId: String!
  title: String!
  bodyText: String!
  url: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GitHubProjectCardItemSubscriptionPayload {
  mutation: MutationType!
  node: GitHubProjectCardItem
  updatedFields: [String!]
  previousValues: GitHubProjectCardItemPreviousValues
}

input GitHubProjectCardItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GitHubProjectCardItemWhereInput
  AND: [GitHubProjectCardItemSubscriptionWhereInput!]
  OR: [GitHubProjectCardItemSubscriptionWhereInput!]
  NOT: [GitHubProjectCardItemSubscriptionWhereInput!]
}

input GitHubProjectCardItemUpdateDataInput {
  gitHubId: String
  title: String
  bodyText: String
  url: String
}

input GitHubProjectCardItemUpdateInput {
  gitHubId: String
  title: String
  bodyText: String
  url: String
}

input GitHubProjectCardItemUpdateManyMutationInput {
  gitHubId: String
  title: String
  bodyText: String
  url: String
}

input GitHubProjectCardItemUpdateOneInput {
  create: GitHubProjectCardItemCreateInput
  update: GitHubProjectCardItemUpdateDataInput
  upsert: GitHubProjectCardItemUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: GitHubProjectCardItemWhereUniqueInput
}

input GitHubProjectCardItemUpsertNestedInput {
  update: GitHubProjectCardItemUpdateDataInput!
  create: GitHubProjectCardItemCreateInput!
}

input GitHubProjectCardItemWhereInput {
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
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  bodyText: String
  bodyText_not: String
  bodyText_in: [String!]
  bodyText_not_in: [String!]
  bodyText_lt: String
  bodyText_lte: String
  bodyText_gt: String
  bodyText_gte: String
  bodyText_contains: String
  bodyText_not_contains: String
  bodyText_starts_with: String
  bodyText_not_starts_with: String
  bodyText_ends_with: String
  bodyText_not_ends_with: String
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
  AND: [GitHubProjectCardItemWhereInput!]
  OR: [GitHubProjectCardItemWhereInput!]
  NOT: [GitHubProjectCardItemWhereInput!]
}

input GitHubProjectCardItemWhereUniqueInput {
  id: ID
  gitHubId: String
}

enum GitHubProjectCardOrderByInput {
  id_ASC
  id_DESC
  gitHubId_ASC
  gitHubId_DESC
  note_ASC
  note_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubProjectCardPreviousValues {
  id: ID!
  gitHubId: String!
  note: String
  url: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input GitHubProjectCardScalarWhereInput {
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
  note: String
  note_not: String
  note_in: [String!]
  note_not_in: [String!]
  note_lt: String
  note_lte: String
  note_gt: String
  note_gte: String
  note_contains: String
  note_not_contains: String
  note_starts_with: String
  note_not_starts_with: String
  note_ends_with: String
  note_not_ends_with: String
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
  AND: [GitHubProjectCardScalarWhereInput!]
  OR: [GitHubProjectCardScalarWhereInput!]
  NOT: [GitHubProjectCardScalarWhereInput!]
}

type GitHubProjectCardSubscriptionPayload {
  mutation: MutationType!
  node: GitHubProjectCard
  updatedFields: [String!]
  previousValues: GitHubProjectCardPreviousValues
}

input GitHubProjectCardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GitHubProjectCardWhereInput
  AND: [GitHubProjectCardSubscriptionWhereInput!]
  OR: [GitHubProjectCardSubscriptionWhereInput!]
  NOT: [GitHubProjectCardSubscriptionWhereInput!]
}

input GitHubProjectCardUpdateInput {
  gitHubId: String
  gitHubProjectColumn: GitHubProjectColumnUpdateOneRequiredWithoutGitHubProjectCardsInput
  gitHubProjectCardContent: GitHubProjectCardItemUpdateOneInput
  note: String
  url: String
}

input GitHubProjectCardUpdateManyDataInput {
  gitHubId: String
  note: String
  url: String
}

input GitHubProjectCardUpdateManyMutationInput {
  gitHubId: String
  note: String
  url: String
}

input GitHubProjectCardUpdateManyWithoutGitHubProjectColumnInput {
  create: [GitHubProjectCardCreateWithoutGitHubProjectColumnInput!]
  delete: [GitHubProjectCardWhereUniqueInput!]
  connect: [GitHubProjectCardWhereUniqueInput!]
  disconnect: [GitHubProjectCardWhereUniqueInput!]
  update: [GitHubProjectCardUpdateWithWhereUniqueWithoutGitHubProjectColumnInput!]
  upsert: [GitHubProjectCardUpsertWithWhereUniqueWithoutGitHubProjectColumnInput!]
  deleteMany: [GitHubProjectCardScalarWhereInput!]
  updateMany: [GitHubProjectCardUpdateManyWithWhereNestedInput!]
}

input GitHubProjectCardUpdateManyWithWhereNestedInput {
  where: GitHubProjectCardScalarWhereInput!
  data: GitHubProjectCardUpdateManyDataInput!
}

input GitHubProjectCardUpdateWithoutGitHubProjectColumnDataInput {
  gitHubId: String
  gitHubProjectCardContent: GitHubProjectCardItemUpdateOneInput
  note: String
  url: String
}

input GitHubProjectCardUpdateWithWhereUniqueWithoutGitHubProjectColumnInput {
  where: GitHubProjectCardWhereUniqueInput!
  data: GitHubProjectCardUpdateWithoutGitHubProjectColumnDataInput!
}

input GitHubProjectCardUpsertWithWhereUniqueWithoutGitHubProjectColumnInput {
  where: GitHubProjectCardWhereUniqueInput!
  update: GitHubProjectCardUpdateWithoutGitHubProjectColumnDataInput!
  create: GitHubProjectCardCreateWithoutGitHubProjectColumnInput!
}

input GitHubProjectCardWhereInput {
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
  gitHubProjectColumn: GitHubProjectColumnWhereInput
  gitHubProjectCardContent: GitHubProjectCardItemWhereInput
  note: String
  note_not: String
  note_in: [String!]
  note_not_in: [String!]
  note_lt: String
  note_lte: String
  note_gt: String
  note_gte: String
  note_contains: String
  note_not_contains: String
  note_starts_with: String
  note_not_starts_with: String
  note_ends_with: String
  note_not_ends_with: String
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
  AND: [GitHubProjectCardWhereInput!]
  OR: [GitHubProjectCardWhereInput!]
  NOT: [GitHubProjectCardWhereInput!]
}

input GitHubProjectCardWhereUniqueInput {
  id: ID
  gitHubId: String
}

type GitHubProjectColumn {
  id: ID!
  gitHubId: String!
  gitHubProjectCards(where: GitHubProjectCardWhereInput, orderBy: GitHubProjectCardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubProjectCard!]
  name: String!
  purpose: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GitHubProjectColumnConnection {
  pageInfo: PageInfo!
  edges: [GitHubProjectColumnEdge]!
  aggregate: AggregateGitHubProjectColumn!
}

input GitHubProjectColumnCreateInput {
  gitHubId: String!
  gitHubProjectCards: GitHubProjectCardCreateManyWithoutGitHubProjectColumnInput
  name: String!
  purpose: String
}

input GitHubProjectColumnCreateOneWithoutGitHubProjectCardsInput {
  create: GitHubProjectColumnCreateWithoutGitHubProjectCardsInput
  connect: GitHubProjectColumnWhereUniqueInput
}

input GitHubProjectColumnCreateWithoutGitHubProjectCardsInput {
  gitHubId: String!
  name: String!
  purpose: String
}

type GitHubProjectColumnEdge {
  node: GitHubProjectColumn!
  cursor: String!
}

enum GitHubProjectColumnOrderByInput {
  id_ASC
  id_DESC
  gitHubId_ASC
  gitHubId_DESC
  name_ASC
  name_DESC
  purpose_ASC
  purpose_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubProjectColumnPreviousValues {
  id: ID!
  gitHubId: String!
  name: String!
  purpose: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GitHubProjectColumnSubscriptionPayload {
  mutation: MutationType!
  node: GitHubProjectColumn
  updatedFields: [String!]
  previousValues: GitHubProjectColumnPreviousValues
}

input GitHubProjectColumnSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GitHubProjectColumnWhereInput
  AND: [GitHubProjectColumnSubscriptionWhereInput!]
  OR: [GitHubProjectColumnSubscriptionWhereInput!]
  NOT: [GitHubProjectColumnSubscriptionWhereInput!]
}

input GitHubProjectColumnUpdateInput {
  gitHubId: String
  gitHubProjectCards: GitHubProjectCardUpdateManyWithoutGitHubProjectColumnInput
  name: String
  purpose: String
}

input GitHubProjectColumnUpdateManyMutationInput {
  gitHubId: String
  name: String
  purpose: String
}

input GitHubProjectColumnUpdateOneRequiredWithoutGitHubProjectCardsInput {
  create: GitHubProjectColumnCreateWithoutGitHubProjectCardsInput
  update: GitHubProjectColumnUpdateWithoutGitHubProjectCardsDataInput
  upsert: GitHubProjectColumnUpsertWithoutGitHubProjectCardsInput
  connect: GitHubProjectColumnWhereUniqueInput
}

input GitHubProjectColumnUpdateWithoutGitHubProjectCardsDataInput {
  gitHubId: String
  name: String
  purpose: String
}

input GitHubProjectColumnUpsertWithoutGitHubProjectCardsInput {
  update: GitHubProjectColumnUpdateWithoutGitHubProjectCardsDataInput!
  create: GitHubProjectColumnCreateWithoutGitHubProjectCardsInput!
}

input GitHubProjectColumnWhereInput {
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
  gitHubProjectCards_every: GitHubProjectCardWhereInput
  gitHubProjectCards_some: GitHubProjectCardWhereInput
  gitHubProjectCards_none: GitHubProjectCardWhereInput
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
  purpose: String
  purpose_not: String
  purpose_in: [String!]
  purpose_not_in: [String!]
  purpose_lt: String
  purpose_lte: String
  purpose_gt: String
  purpose_gte: String
  purpose_contains: String
  purpose_not_contains: String
  purpose_starts_with: String
  purpose_not_starts_with: String
  purpose_ends_with: String
  purpose_not_ends_with: String
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
  AND: [GitHubProjectColumnWhereInput!]
  OR: [GitHubProjectColumnWhereInput!]
  NOT: [GitHubProjectColumnWhereInput!]
}

input GitHubProjectColumnWhereUniqueInput {
  id: ID
  gitHubId: String
}

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
  createGitHubProjectCard(data: GitHubProjectCardCreateInput!): GitHubProjectCard!
  updateGitHubProjectCard(data: GitHubProjectCardUpdateInput!, where: GitHubProjectCardWhereUniqueInput!): GitHubProjectCard
  updateManyGitHubProjectCards(data: GitHubProjectCardUpdateManyMutationInput!, where: GitHubProjectCardWhereInput): BatchPayload!
  upsertGitHubProjectCard(where: GitHubProjectCardWhereUniqueInput!, create: GitHubProjectCardCreateInput!, update: GitHubProjectCardUpdateInput!): GitHubProjectCard!
  deleteGitHubProjectCard(where: GitHubProjectCardWhereUniqueInput!): GitHubProjectCard
  deleteManyGitHubProjectCards(where: GitHubProjectCardWhereInput): BatchPayload!
  createGitHubProjectCardItem(data: GitHubProjectCardItemCreateInput!): GitHubProjectCardItem!
  updateGitHubProjectCardItem(data: GitHubProjectCardItemUpdateInput!, where: GitHubProjectCardItemWhereUniqueInput!): GitHubProjectCardItem
  updateManyGitHubProjectCardItems(data: GitHubProjectCardItemUpdateManyMutationInput!, where: GitHubProjectCardItemWhereInput): BatchPayload!
  upsertGitHubProjectCardItem(where: GitHubProjectCardItemWhereUniqueInput!, create: GitHubProjectCardItemCreateInput!, update: GitHubProjectCardItemUpdateInput!): GitHubProjectCardItem!
  deleteGitHubProjectCardItem(where: GitHubProjectCardItemWhereUniqueInput!): GitHubProjectCardItem
  deleteManyGitHubProjectCardItems(where: GitHubProjectCardItemWhereInput): BatchPayload!
  createGitHubProjectColumn(data: GitHubProjectColumnCreateInput!): GitHubProjectColumn!
  updateGitHubProjectColumn(data: GitHubProjectColumnUpdateInput!, where: GitHubProjectColumnWhereUniqueInput!): GitHubProjectColumn
  updateManyGitHubProjectColumns(data: GitHubProjectColumnUpdateManyMutationInput!, where: GitHubProjectColumnWhereInput): BatchPayload!
  upsertGitHubProjectColumn(where: GitHubProjectColumnWhereUniqueInput!, create: GitHubProjectColumnCreateInput!, update: GitHubProjectColumnUpdateInput!): GitHubProjectColumn!
  deleteGitHubProjectColumn(where: GitHubProjectColumnWhereUniqueInput!): GitHubProjectColumn
  deleteManyGitHubProjectColumns(where: GitHubProjectColumnWhereInput): BatchPayload!
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
  gitHubProjectCard(where: GitHubProjectCardWhereUniqueInput!): GitHubProjectCard
  gitHubProjectCards(where: GitHubProjectCardWhereInput, orderBy: GitHubProjectCardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubProjectCard]!
  gitHubProjectCardsConnection(where: GitHubProjectCardWhereInput, orderBy: GitHubProjectCardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubProjectCardConnection!
  gitHubProjectCardItem(where: GitHubProjectCardItemWhereUniqueInput!): GitHubProjectCardItem
  gitHubProjectCardItems(where: GitHubProjectCardItemWhereInput, orderBy: GitHubProjectCardItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubProjectCardItem]!
  gitHubProjectCardItemsConnection(where: GitHubProjectCardItemWhereInput, orderBy: GitHubProjectCardItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubProjectCardItemConnection!
  gitHubProjectColumn(where: GitHubProjectColumnWhereUniqueInput!): GitHubProjectColumn
  gitHubProjectColumns(where: GitHubProjectColumnWhereInput, orderBy: GitHubProjectColumnOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubProjectColumn]!
  gitHubProjectColumnsConnection(where: GitHubProjectColumnWhereInput, orderBy: GitHubProjectColumnOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubProjectColumnConnection!
  gitHubRelease(where: GitHubReleaseWhereUniqueInput!): GitHubRelease
  gitHubReleases(where: GitHubReleaseWhereInput, orderBy: GitHubReleaseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubRelease]!
  gitHubReleasesConnection(where: GitHubReleaseWhereInput, orderBy: GitHubReleaseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubReleaseConnection!
  gitHubTag(where: GitHubTagWhereUniqueInput!): GitHubTag
  gitHubTags(where: GitHubTagWhereInput, orderBy: GitHubTagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubTag]!
  gitHubTagsConnection(where: GitHubTagWhereInput, orderBy: GitHubTagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubTagConnection!
  node(id: ID!): Node
}

type Subscription {
  gitHubProjectCard(where: GitHubProjectCardSubscriptionWhereInput): GitHubProjectCardSubscriptionPayload
  gitHubProjectCardItem(where: GitHubProjectCardItemSubscriptionWhereInput): GitHubProjectCardItemSubscriptionPayload
  gitHubProjectColumn(where: GitHubProjectColumnSubscriptionWhereInput): GitHubProjectColumnSubscriptionPayload
  gitHubRelease(where: GitHubReleaseSubscriptionWhereInput): GitHubReleaseSubscriptionPayload
  gitHubTag(where: GitHubTagSubscriptionWhereInput): GitHubTagSubscriptionPayload
}
`
      }
    