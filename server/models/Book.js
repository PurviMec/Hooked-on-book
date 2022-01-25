const { Schema, model } = require('mongoose');
const reviewSchema = require('./Review');


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
        //get: timestamp => dateFormat(timestamp)
    },

    //one
    genere:{
      type: Schema.Types.ObjectId,
      ref:'Genere',
      required:true

    },
//list of
reviews: [reviewSchema]
},
{
  toJSON: {
    getters: true
  }
}
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
