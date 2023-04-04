const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },
});
// on doit convertir ce shema a un model !
module.exports = mongoose.model("product", productSchema);
