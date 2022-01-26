
const { gql } = require('apollo-server-express');


const typeDefs = gql` 

  type User{
    _id:ID!
    username: String
    email: String
    borrowList:[Book]
    favouriteList:[Book]
  }

  type Book{
    _id:ID!
    title: String
    description: String
    author: String
    publish: String
    rent: Number
    reviews:[Review]
    genere: [Genere]
  }

  type Review{
    _id:ID
    reviewText: String
    username: String
    createdAt: String
  }

  input favouriteList{
    title: String
    description: String
    author: String
    publish: String
  }

  input borrowList{
    title: String
    description: String
    author: String
    publish: String
  }

  type Auth{
    token:ID!
    user:User
  }

  type Query{
    me:User
    books: [Book]
    book(_id: ID!): Book
  }
  
  type Mutation{
    login(username: String!, Password: String) :Auth
    addUser(username: String!, email: String!, password: String!) :Auth
    favouriteList(input:favouriteList!):User
    removeFavouriteBook(bookId: ID!): User
     borrowList(input:borrowList!):User
    addBook(title:String!, description:String!, author:String, rent:Int, genere:String): Book
    addReview(reviewText: String!, bookId: ID!): Book
  }

`;

module.exports = typeDefs;
