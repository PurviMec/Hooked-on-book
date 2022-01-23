const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reviewSchema = new Schema(
  {
    detail: {
      type: String,
      required: true,
      maxlength: 200
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = reviewSchema;