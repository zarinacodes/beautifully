const cheerio = require("cheerio");
const axios = require("axios").default;

const findInProduct = ($, product) => (selector) => $(product).find(selector);

const image = (imgHTML) => {
  return imgHTML
    .attr("data-altimage")
    .replace("res[m]", "res[w]")
    .replace("url[file:/product/style]", "url[file:/product/main]");
};

const attribute = (attributeHTML, attr) => {
  return attributeHTML.attr(attr);
};

const text = (textHTML) => {
  return textHTML.text().trim();
};

const mapProductData = (document, product) => {
  const findInProductQuery = findInProduct(document, product);
  return {
    image: image(findInProductQuery("img.item-image")),
    name: text(findInProductQuery("h3.item-heading > a")),
    collection: text(findInProductQuery(".marketing-marker")),
    price: text(findInProductQuery(".price.regular")),
    id: attribute(
      findInProductQuery("article.hm-product-item").prevObject,
      "data-articlecode"
    ),
  };
};

const parseProducts = (document) => {
  const products = document(
    "ul.products-listing.large > li.product-item"
  ).children();
  return Array.from(products).map((product) =>
    mapProductData(document, product)
  );
};

const scrapProducts = (offset, pageSize) => {
  const url = `https://www2.hm.com/pl_pl/ona/produkty/view-all.html?sort=stock&colorWithNames=fioletowy_800080&patterns=jednolity&image-size=big&offset=${offset}&page-size=${pageSize}`;
  return axios
    .get(url)
    .then((response) => response.data)
    .then(cheerio.load)
    .then(parseProducts);
};

module.exports = scrapProducts;
