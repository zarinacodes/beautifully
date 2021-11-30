import styled from "styled-components";
import Item from "./Item";
import List from "./List";
import { breakpoints } from "../mixins";

export const Menu = styled.nav`
  display: flex;

  @media (max-width: ${breakpoints("mobile")}) {
    display: none;
  }
`;

Menu.Item = Item;
Menu.List = List;
export default Menu;
