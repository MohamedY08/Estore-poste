const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const multer = require("multer");
const checkAuth = require('../middleware/check-auth');

const { Product } = require('../models/product');

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg"
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  }
});

// Get All Products
router.get('/api/products',  (req, res) => {
    Product.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


// Get Single Product (First Way)

router.get('/api/product/:id', (req, res) => {
    Product.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});


// Get Single Product (2nd Way)

// router.get('/api/Product/:id', (req, res) => {
//     if(!ObjectId.isValid(req.params.id))
//     return res.status(400).send(`No record With Given ID : ${req.params.id}`);

//     Product.findById(req.params.id, (err, data) => {
//         if(!err) {
//             res.send(data);
//         } else {
//            console.log(err);
//         }
//     });
// });


// Save Product

router.post('/api/product/add',checkAuth, multer({ storage: storage }).single("image"), (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    const prod = new Product({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        imagePath: url + "/images/" + req.file.filename,
        quantity: req.body.quantity,
        creator: req.userData.userId,

    });
    prod.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Product Added Successfully', addProduct: data})
        } else {
           console.log(err);
        }
    });
});



// Update Product

router.put('/api/product/update/:id',checkAuth, multer({ storage: storage }).single("image"), (req, res, next) => {

  let imagePath = req.body.imagePath;
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/images/" + req.file.filename;
  }
    const prod = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        imagePath: imagePath,
        quantity: req.body.quantity,
        creator: req.userData.userId
    };
    console.log(prod);
    Product.findByIdAndUpdate({_id :req.params.id, creator : req.userData.userId}, { $set: prod }, { upsert: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Product Updated Successfully', updateProduct: data})
        } else {
            console.log(err);
        }
    });
});





// Delete Product
router.delete('/api/product/:id',checkAuth, (req, res) => {

    Product.findByIdAndRemove({_id :req.params.id, creator : req.userData.userId},(err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Category deleted', deleteProduct: data})
        } else {
            console.log(err);
        }
    });
});


module.exports = router;
