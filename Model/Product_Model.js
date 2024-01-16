const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
  id: Number,
  title: String,

  price: Number,
  description: String,
  image: String,
  Rate: Number,
  amount: Number,
});
module.exports = mongoose.model("Products", ProductsSchema);
