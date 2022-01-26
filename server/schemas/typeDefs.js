// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql` 
type Query{
  me:User
}
type Mutation{
  login(username: String!, Password: String) :Auth
  addUser(username: String!, email: String!, password: String!) :Auth
  favouriteList(input:favouriteList!):User
  removeFavouriteBook(bookId: ID!): User
  borrowList(input:borrowList!):User
}
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
  reviews:[Review]
}

type Review{
  _id:ID
  detail: String
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

`;
// export the typeDefs
module.exports = typeDefs;
