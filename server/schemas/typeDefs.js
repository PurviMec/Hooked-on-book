// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql` 
type User{
  _id:ID
  username: String
  email: String
  Books:[Book]
  Reviews:[Review]
}

type Book{
  _id:ID
  title: String
  description: String
  author: String
  publish: String
  Reviews:[Review]
}

type Review{
  _id:ID
  detail: String
  username: String
  createdAt: String
}

`;
// export the typeDefs
module.exports = typeDefs;