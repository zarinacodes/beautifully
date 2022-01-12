import styled from "styled-components";
import Collection from "./Collection";
import Image from "./Image";
import Price from "./Price";
import Title from "./Title";
import Info from "./Info";
import Like from "./Like";
import { breakpoints } from "../mixins";

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 415px;

  @media (max-width: ${breakpoints("tablet")}) {
    width: 215px;
    height: 307px;
  }
  @media (max-width: ${breakpoints("mobile")}) {
    width: 160px;
    height: 240px;
  }
`;
Product.Collection = Collection;
Product.Image = Image;
Product.Price = Price;
Product.Title = Title;
Product.Info = Info;
Product.Like = Like;

export default Product;
