import styled from "styled-components";
import { breakpoints } from "../mixins";

export const Image = styled.img`
  max-width: 330px;
  height: 415px;
  border: none;
  outline: none;
  box-sizing: border-box;

  @media (max-width: ${breakpoints("tablet")}) {
    width: 215px;
    height: 307px;
  }
  @media (max-width: ${breakpoints("mobile")}) {
    width: 160px;
    height: 240px;
  }
`;

export default Image;
