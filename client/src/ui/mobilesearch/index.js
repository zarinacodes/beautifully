import styled from "styled-components";
import { breakpoints, color, font } from "../mixins";

export const MobileSearch = styled.input`
  display: none;
  @media (max-width: ${breakpoints("mobile")}) {
    display: block;
    position: absolute;
    top: 55px;
    left: 50%;
    height: 30px;
    width: 150px;
    border-radius: 10px;
    border: 1px solid ${color("neutral-400")};
    font-family: ${font("sans")};
    padding-left: 10px;
  }
`;

export default MobileSearch;
