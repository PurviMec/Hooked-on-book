const { Schema, model } = require('mongoose');


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
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:'Reveiw',
        }

    ]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Book = model('Book', bookSchema);

module.exports = Book;
