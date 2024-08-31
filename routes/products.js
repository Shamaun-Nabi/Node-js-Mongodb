const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/allProducts", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.send({
      message: true,
      data: allProducts,
    });
  } catch (error) {
    res.send({
      message: "Error in getting products",
      error: error,
    });
  }
});

// create a New Products

router.post("/createProduct", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    desc: req.body.desc,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
  });
  try {
    const newProduct = await product.save();
    res.send({
      message: true,
      data: newProduct,
    });
  } catch (error) {
    res.send({
      message: "Error in creating product",
      error: error,
    });
  }
});

// Get a single product

router.get("/single/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    console.log(productId);
    const product = await Product.findById(productId);
    if (!product) {
      res.send({
        message: false,
        data: "Product not found",
      });
    }
    res.send({
      message: true,
      data: product,
    });
  } catch (error) {
    res.send({
      message: "Error in getting product",
      error: error,
    });
  }
});

module.exports = router;
