import styled from "styled-components";
import { color, breakpoints } from "../mixins";
import Menu from "./menu";

export const MainHeader = styled.div`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${color("light")};
  width: 100%;
  height: 64px;
  display: grid;
  grid-template-columns: 15% 70% 5% 10%;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid ${color("neutral-200")};
  padding: 0 10px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints("mobile")}) {
    grid-template-columns: 15% 55% 10% 15%;
    justify-items: flex-start;
    padding: 0 15px;
  }
`;
MainHeader.Menu = Menu;

export default MainHeader;
