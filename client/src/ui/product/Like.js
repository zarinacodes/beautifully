import styled from "styled-components";
import { color } from "../mixins";

export const Like = styled.button`
  position: absolute;
  width: 17px;
  height: 17px;
  right: 3%;
  top: 5%;
  border: none;
  background-color: ${color("light")};
  svg {
    width: 17px;
    height: 17px;
    color: ${(props) =>
      props.isLiked ? color("primary") : color("neutral-200")};
  }
`;

export default Like;
