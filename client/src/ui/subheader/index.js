import styled from "styled-components";
import { color, breakpoints } from "../mixins";
import Shipping from "./Shipping";
import ClientsInfo from "./ClientsInfo";
import ListItem from "./ListItem";

export const Subheader = styled.div`
  background-color: ${color("primary")};
  width: 100%;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints("tablet")}) {
    width: 100%;
    height: 29px;
  }
  @media (max-width: ${breakpoints("mobile")}) {
    display: none;
  }
`;

Subheader.Shipping = Shipping;
Subheader.ClientsInfo = ClientsInfo;
Subheader.ListItem = ListItem;

export default Subheader;
