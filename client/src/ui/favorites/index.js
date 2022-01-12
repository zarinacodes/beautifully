import styled from "styled-components";
import LikeCounter from "./LikeCounter";

export const Favorites = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  position: relative;

  svg {
    width: 20px;
    height: 30px;
  }
`;
Favorites.LikeCounter = LikeCounter;
export default Favorites;
