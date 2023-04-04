const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
  cin: {
    type: Number,
    required: true,
  },
});
// on doit convertir ce shema a un model !
module.exports = mongoose.model("Employee", employeeSchema);
