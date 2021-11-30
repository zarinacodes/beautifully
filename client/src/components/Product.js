/* eslint-disable import/no-anonymous-default-export */
import Product from "../ui/product";
import { HeartIcon } from "@heroicons/react/outline";

export default ({ image, collection, name, price }) => {
  return (
    <Product>
      <Product.Image src={image} />
      <Product.Collection>
        {collection} <HeartIcon />
      </Product.Collection>
      <Product.Title>{name}</Product.Title>
      <Product.Price>{price}</Product.Price>
    </Product>
  );
};
