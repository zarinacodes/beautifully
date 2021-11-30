const app = require("./config/express");
const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
