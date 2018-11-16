require('dotenv').config()
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { prisma } = require('../prisma/generated/prisma')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
  },
})

const app = express()
server.applyMiddleware({ app })

const port = process.env.PORT || 4000

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
)
