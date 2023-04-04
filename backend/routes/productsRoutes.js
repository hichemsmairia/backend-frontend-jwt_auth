const express = require("express");
const productModel = require("../models/productModel");
const router = express.Router();
/*
req.body == 3jiina mta3 l ghrayba 
model == 9aleb 
*/
router.post("/add", async function (req, res) {
  const newProduct = new productModel(req.body);
  await newProduct.save().then(() => {
    res.send("produit ajouté avec suuces ! ");
  });
});

// localhost:5000/employees/add
//   localhost:5000/employees/get_all_employees
module.exports = router;
//["efef","fedef"] = x
// ["ffefef","fefef"] = y

// [...x,y]
