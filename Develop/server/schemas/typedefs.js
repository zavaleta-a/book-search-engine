const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Query{
        me: User
    }

    type Mutation {
        login(email: String!, email: String!): Auth
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

    
`