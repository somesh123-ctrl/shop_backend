const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    address: String,
    items: [{ title: String, amount: Number, price: Number }],
    total: Number,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", OrderSchema);
