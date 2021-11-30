const express = require("express");
const { getProducts } = require("./products.controller");
const router = express.Router();

router.get("/", getProducts);

module.exports = router;
