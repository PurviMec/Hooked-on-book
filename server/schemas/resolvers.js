const {Book, User} = require('../models')
const resolvers = {
    Query: {
      users: async () => {
        return User.find()
          .select('-__v -password')
          .populate('books')
          .populate('reviews');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username })
          .select('-__v -password')
          .populate('books')
          .populate('reviews');
      },
      books: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Book.find(params).sort({ createdAt: -1 });
      },
      book: async (parent, { _id }) => {
        return Book.findOne({ _id });
      }
  
    }
   

  };
  
  module.exports = resolvers;