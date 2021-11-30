const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const routes = require("../routes");
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use("/", routes);

module.exports = app;
