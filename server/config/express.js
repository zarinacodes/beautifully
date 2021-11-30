const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const routes = require("../routes");
const path = require("path");
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use("/", routes);
app.use(
  express.static(path.resolve(__dirname, "../client/build", "index.html"))
);

module.exports = app;
