let mongoose = require('mongoose');



// Product Schema
const Product = mongoose.model('Product', {
    name: {
        type: String,
        required:true
    },
    price: {
      type:Number,
      required:true
  },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true },
    description: {
        type:String,
        required:true
    },
    quantity: {
      type:Number,
      required:true
  },
    imagePath: {
        type:String,
        required:true
    },
});

module.exports = {Product}
