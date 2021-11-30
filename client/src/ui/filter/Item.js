import styled from "styled-components";
import { color } from "../mixins";

export const Item = styled.li`
  background: ${color("light")};
  min-width: 200px;
  min-height: 50px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Item;
