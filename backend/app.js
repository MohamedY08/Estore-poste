const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');



const app = express();
mongoose.connect("mongodb+srv://MohamedYesser:be6jlI8aAlfEzyk6@cluster0.k1bdb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
).then(() => {
  console.log("Connected to database!");
})
.catch(() => {
  console.log("Connection failed!");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use((req, res, next) => {
  res.send('express working!');
});


module.exports = app ;
