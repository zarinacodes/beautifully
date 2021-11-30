const scrapProducts = require("../../scraper");

const getProducts = (req, res) => {
  const { offset = 0, pageSize = 144 } = req.query;
  return scrapProducts(offset, pageSize).then((products) => res.send(products));
};

module.exports = { getProducts };
