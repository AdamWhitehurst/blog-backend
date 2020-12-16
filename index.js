import {gql} from 'apollo-server'

const typeDefs = gql`
  type Topic {
    id: ID!
    name: String!
    posts: [post]!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    topics: [Topic]!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    topics: [Topic]
  }
`

const topics = [
  {
    id: 'dev',
    name: 'Development',
    posts,
  },
  {
    id: 'zettel',
    name: 'Zettelkasten',
    posts,
  },
]

const posts = [
  {
    id: '1',
    title: 'First Post',
    content: 'Hello World 😎',
    topics,
  },
  {
    id: '2',
    title: 'Another Post',
    content: "I'm just here to make the other one look good.",
    topics,
  },
]

const resolvers = {
  Query: {
    topics: () => topics,
    posts: () => posts,
  },
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({typeDefs, resolvers})

// The `listen` method launches a web server.
server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`)
})
