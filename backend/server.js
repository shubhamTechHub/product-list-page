const express = require("express");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const Product = require("./models/productSchema");
const Category = require("./models/categorySchema");
require("dotenv").config();

PORT = process.env.PORT || 5000;
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// APIs
app.get("/api/product", async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

// add new product
app.post("/api/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// add new category
app.post("/api/category", async (req, res) => {
  try {
    const category = await Category.insertMany(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const server = () => {
  connectDb();
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

server();
