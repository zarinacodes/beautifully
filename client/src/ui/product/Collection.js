import styled from "styled-components";
import { color, font } from "../mixins";

export const Collection = styled.h5`
  color: ${color("neutral-500")};
  font-family: ${font("sans")};
  font-size: 10px;
  padding: 9px 0 4px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  svg {
    width: 17px;
    height: 17px;
    color: ${color("dark")};
  }
`;

export default Collection;
