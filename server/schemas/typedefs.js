const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    removeBook(bookId: ID!): User
  }

  type Book {
    bookId: String
    author: String
    description: String
    title: String
    image: String
    link: String
  }

  input savedBook {
    description: String
    author: String
    bookId: String
    image: String
    link: String
    title: String
  }
`;

module.exports = typeDefs;
