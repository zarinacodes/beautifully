import styled from "styled-components";
import { color, font, breakpoints } from "../mixins";

export const Shipping = styled.p`
  color: ${color("neutral-200")};
  font-family: ${font("sans")};
  font-size: 12px;
  padding-left: 24px;
  @media (max-width: ${breakpoints("tablet")}) {
    font-size: 10px;
  }
`;

export default Shipping;
