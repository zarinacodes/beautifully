const express = require("express");
const router = express.Router();
const products = require("./products/products.routes");

router.use("/products", products);

module.exports = router;
