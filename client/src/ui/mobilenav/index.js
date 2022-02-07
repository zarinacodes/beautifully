import styled from "styled-components";
import { breakpoints, color } from "../mixins";
import ClientsInfo from "./ClientsInfo";
import Close from "./Close";
import Country from "./Country";
import Menu from "./Menu";
import MobileHeader from "./MobileHeader";
import MenuItem from "./MenuItem";

export const MobileNav = styled.nav`
  display: none;
  @media (max-width: ${breakpoints("mobile")}) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${color("light")};
    z-index: 999;
  }
`;

MobileNav.ClientsInfo = ClientsInfo;
MobileNav.Close = Close;
MobileNav.Country = Country;
MobileNav.Menu = Menu;
MobileNav.MobileHeader = MobileHeader;
MobileNav.MenuItem = MenuItem;

export default MobileNav;
