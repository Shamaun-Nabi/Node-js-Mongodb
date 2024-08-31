const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const colors = require("colors");
const productRoutes = require("./routes/products");

app.use(express.json());

// Load environment variables
dotenv.config();

const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB".bgCyan))
  .catch((err) => console.error("Could not connect to MongoDB", err));

//Routes

app.use("/api/products/", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
