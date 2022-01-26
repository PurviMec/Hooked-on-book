// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql` 
    type User{
        _id:ID
        username: String
        email: String
        Books:[Book]
        Reactions: [reaction]
    }
    type Book{
        _id:ID
        title: String
        description: String
        author: String
        rent: Int
        generes: [genere]
        reactions: [Reaction]
    }
    type Reaction{
        _id:ID
        reactionBody: String
        username: String
        createdAt: String
    }

    type Genere{
        _id:ID
        genereText: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me(_id:ID!): User
        books: [Book]
        book(_id: ID!): Book
        // book(genere: generes): [Book]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        signUp(username: String!, email: String!, password: String!): Auth
        addBook:(title:String!, description:String!, author:String, rent:Int)
        addGenere:(genereText:String, title:String): Book
        addReaction:(reactionBody: String!, bookId: ID!): Book
    }
`;
// export the typeDefs
module.exports = typeDefs;