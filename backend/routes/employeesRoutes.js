const express = require("express");
const employeeModel = require("../models/employeeModel");
const router = express.Router();
/*
req.body == 3jiina mta3 l ghrayba 
model == 9aleb 
*/
router.post("/add", async function (req, res) {
  const newEmployee = new employeeModel(req.body);
  await newEmployee.save().then(() => {
    res.send("employé ajouté avec suuces ! ");
  });
});

router.get("/get_all_employees", async function (req, res) {
  await employeeModel.find({}).then((result) => {
    res.json(result);
  });
});

router.get("/get_employee/:id", async function (req, res) {
  await employeeModel.find({ _id: req.params.id }).then((result) => {
    res.json(result);
  });
});

router.put("/update_employee/:id", async function (req, res) {
  await employeeModel
    .updateOne(
      { _id: req.params.id },
      //pour conserver l id
      { ...req.body, _id: req.params.id }
    )
    .then(() => {
      res.send("employé modifié avec succes ! ");
    });
});

router.delete("/delete_employee/:id", async function (req, res) {
  await employeeModel.deleteOne({ _id: req.params.id }).then(() => {
    res.json("employé supprimé avec succes ! ");
  });
});

// localhost:5000/employees/add
//   localhost:5000/employees/get_all_employees
module.exports = router;
//["efef","fedef"] = x
// ["ffefef","fefef"] = y

// [...x,y]
