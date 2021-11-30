const express = require("express");
const router = express.Router();
const api = require("./api/api.routes");
const path = require("path");

router.use("/api", api);

module.exports = router;
