//Category.JS to create Category Schema in the application

let mongoose = require('mongoose');



// Category Schema
const Category = mongoose.model('Category', {
  name: {
    type: String,
    unique: true,
    lowercase: true
  }
});



module.exports = {Category}

