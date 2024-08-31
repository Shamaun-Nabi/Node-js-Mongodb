const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
