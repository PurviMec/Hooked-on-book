// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql` 
type User{
  id:_ID
  username: String
  email: String
  Books:[Book]
  Reviews:[Review]
}

type Book{
  id:_ID
  title: String
  description: String
  author: String
  publish: String
  Reviews:[Review]
}

type Review{
  id:_ID
  detail: String
  username: String
  createdAt: String
}

`;
// export the typeDefs
module.exports = typeDefs;