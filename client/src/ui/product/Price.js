import styled from "styled-components";
import { color, font } from "../mixins";

export const Price = styled.p`
  color: ${color("dark")};
  font-family: ${font("sans")};
  font-weight: 700;
  font-size: 10px;
  padding-top: 4px;
`;

export default Price;
