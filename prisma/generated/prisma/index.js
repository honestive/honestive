"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "GitHubProjectCard",
    embedded: false
  },
  {
    name: "GitHubProjectCardItem",
    embedded: false
  },
  {
    name: "GitHubProjectColumn",
    embedded: false
  },
  {
    name: "GitHubRelease",
    embedded: false
  },
  {
    name: "GitHubTag",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`
});
exports.prisma = new exports.Prisma();
