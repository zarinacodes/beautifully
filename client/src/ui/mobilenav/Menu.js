import styled from "styled-components";
import { color } from "../mixins";

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  align-items: left;
  justify-content: center;
  padding: 0 24px;
  border-bottom: 1px solid ${color("neutral-200")};
`;

export default Menu;
