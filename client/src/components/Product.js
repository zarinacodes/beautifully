/* eslint-disable import/no-anonymous-default-export */
import Product from "../ui/product";
import { HeartIcon } from "@heroicons/react/solid";
import { useProductContext } from "./useProductContext";

export default ({ image, collection, name, price, id }) => {
  const { likedProducts, setLikedProducts } = useProductContext();
  const handleLikeClick = () => {
    if (likedProducts.includes(id)) {
      setLikedProducts(likedProducts.filter((productId) => productId !== id));
    } else {
      setLikedProducts([...likedProducts, id]);
    }
  };

  return (
    <Product>
      <Product.Image src={image} />
      <Product.Info>
        <Product.Collection>{collection}</Product.Collection>
        <Product.Title>{name}</Product.Title>
        <Product.Price>{price}</Product.Price>
        <Product.Like
          onClick={handleLikeClick}
          isLiked={likedProducts.includes(id)}
        >
          <HeartIcon />
        </Product.Like>
      </Product.Info>
    </Product>
  );
};
