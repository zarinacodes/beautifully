/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import Feed from "../ui/feed";
import Product from "./Product";
import { useState, useEffect } from "react";
import Loading from "../ui/loading";
import { useProductContext } from "./useProductContext";
import { Player } from "@lottiefiles/react-lottie-player";

export default ({ gender }) => {
  const { search } = useProductContext();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://beautifully-app.herokuapp.com/api/products/${gender}?offset=0&pageSize=12`
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [gender]);

  return isLoading ? (
    <Loading>
      <Player
        src="https://assets6.lottiefiles.com/packages/lf20_kbxkymqy.json"
        background="transparent"
        speed="1"
        style={({ maxWidth: "300px" }, { maxHeight: "300px" })}
        loop
        autoplay
      />
    </Loading>
  ) : (
    <>
      <Feed>
        {products
          .filter(
            (product) =>
              product.name.toLowerCase().includes(search.toLowerCase()) ||
              search === ""
          )
          .map((product, index) => (
            <Product
              name={product.name}
              collection={product.collection || "Regular"}
              image={product.image}
              price={product.price}
              key={product.id}
              id={product.id}
            />
          ))}
      </Feed>
      <Feed.ButtonContainer>
        <Feed.ShowMore>Show More</Feed.ShowMore>
      </Feed.ButtonContainer>
    </>
  );
};
