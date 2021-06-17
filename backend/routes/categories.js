const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const { Category } = require('../models/category');


// Get All Employees
router.get('/api/categories', (req, res) => {
    Category.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


// Get Single Employee (First Way)

router.get('/api/category/:id', (req, res) => {
    Category.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});


// Get Single Employee (2nd Way)

// router.get('/api/employee/:id', (req, res) => {
//     if(!ObjectId.isValid(req.params.id))
//     return res.status(400).send(`No record With Given ID : ${req.params.id}`);

//     Employee.findById(req.params.id, (err, data) => {
//         if(!err) {
//             res.send(data);
//         } else {
//            console.log(err);
//         }
//     });
// });


// Save Employee
router.post('/api/category/add', (req, res) => {
    const cat = new Category({
        name: req.body.name,
    });
    cat.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Category Added Successfully', addCategory: data})
        } else {
           console.log(err);
        }
    });
});



// Update Employee

router.put('/api/category/update/:id', (req, res) => {


    const cat = {
        name: req.body.name,
    };
    Category.findByIdAndUpdate(req.params.id, { $set: cat }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Category Updated Successfully', updateCategory: data})
        } else {
            console.log(err);
        }
    });
});





// Delete Employee
router.delete('/api/category/:id', (req, res) => {

    Category.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Category deleted', deleteCategory: data})
        } else {
            console.log(err);
        }
    });
});


module.exports = router;
