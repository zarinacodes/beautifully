/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import Feed from "../ui/feed";
import Product from "./Product";
import { useState, useEffect } from "react";
import gif from "../assets/loading.gif";
import Loading from "../ui/loading";

export default () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://beautifully-app.herokuapp.com/api/products?offset=0&pageSize=12"
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <Loading>
      <img src={gif} style={({ maxHeight: "300px" }, { maxWidth: "300px" })} />
    </Loading>
  ) : (
    <>
      <Feed>
        {products.map((product, index) => (
          <Product
            name={product.name}
            collection={product.collection || "Regular"}
            image={product.image}
            price={product.price}
            key={product.name + index}
          />
        ))}
      </Feed>
      <Feed.ButtonContainer>
        <Feed.ShowMore>Show More</Feed.ShowMore>
      </Feed.ButtonContainer>
    </>
  );
};
