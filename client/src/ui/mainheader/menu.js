import styled from "styled-components";
import { breakpoints } from "../mixins";

export const Menu = styled.button`
  display: none;

  @media (max-width: ${breakpoints("mobile")}) {
    display: flex;
    border: none;
    border-style: none;
    background-color: transparent;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
export default Menu;
