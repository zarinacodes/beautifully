const scrapProducts = require("../../scraper");

const getProducts = (gender) => (req, res) => {
  const { offset = 0, pageSize = 144 } = req.query;
  return scrapProducts(offset, pageSize, gender).then((products) =>
    res.send(products)
  );
};

const getAllProducts = (genders) => (req, res) => {
  const { offset = 0, pageSize = 144 } = req.query;
  return Promise.all(
    genders.map((gender) =>
      scrapProducts(offset, Math.floor(pageSize / genders.length), gender)
    )
  )
    .then((products) => products.reduce((acc, x) => [...acc, ...x], []))
    .then((products) => res.send(products));
};

module.exports = {
  getAllProducts: getAllProducts(["ona", "on"]),
  getWomensProducts: getProducts("ona"),
  getMensProducts: getProducts("on"),
};
