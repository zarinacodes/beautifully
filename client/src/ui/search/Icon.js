import styled from "styled-components";
import { breakpoints, color } from "../mixins";

export const Icon = styled.button`
  display: none;

  @media (max-width: ${breakpoints("mobile")}) {
    position: relative;
    height: 19px;
    width: 19px;
    display: flex;
    padding: 0;
    border: none;
    background-color: ${color("light")};

    svg {
      height: 19px;
      width: 19px;
    }
  }
`;

export default Icon;
