const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema(
  {
    sr_no: Number,
    name: String,
    username: String,
    email: String,
    password: String,
    phone: String,
    website: String,
    orders: [
      {
        name: String,
        email: String,
        address: String,
        items: [{ title: String, amount: Number, price: Number }],
        total: Number,
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Users", UsersSchema);
