const express = require("express");
const {
  getAllProducts,
  getMensProducts,
  getWomensProducts,
} = require("./products.controller");
const router = express.Router();

router.get("/", getAllProducts);
router.get("/him", getMensProducts);
router.get("/her", getWomensProducts);

module.exports = router;
