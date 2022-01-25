const mongoose = require('mongoose');

const {Schema} = mongoose;

const genereSchema = new Schema({
name:{
    type: String,
    require: true,
    trim: true,
    default: "Undefine"
}
});

const Genere = mongoose.model('Genere', genereSchema);
module.exports = Genere;