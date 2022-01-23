const { Schema, model } = require('mongoose');
const reviewSchema = require('./Review');
const dateFormat = require('../utils/dateFormat');

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require:true,
      maxlength:400,
    },
    author:{
        type:String,
        require:true,
    },
    publish:{
        type:Date,
        default:undefined,
        get: timestamp => dateFormat(timestamp)
    },
    reviews:[
        reviewSchema
    ]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    }
  }
);

userSchema.virtual('reviewCount').get(function() {
    return this.reviews.length;
});

const Book = model('Book', bookSchema);

module.exports = Book;