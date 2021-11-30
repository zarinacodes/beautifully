import styled from "styled-components";
import { color, breakpoints } from "../mixins";

export const Header = styled.header`
  background-color: ${color("primary")};
  width: 100%;
  height: 93px;

  @media (max-width: ${breakpoints("mobile")}) {
    background-color: ${color("light")};
    height: 64px;
  }
`;
export default Header;
