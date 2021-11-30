const express = require("express");
const router = express.Router();
const api = require("./api/api.routes");
const path = require("path");

router.use("/api", api);

router.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

module.exports = router;
