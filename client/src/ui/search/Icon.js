import styled from "styled-components";
import { breakpoints } from "../mixins";

export const Icon = styled.div`
  height: 18px;
  width: 18px;
  padding-right: 15px;

  @media (max-width: ${breakpoints("mobile")}) {
    padding: 0;
  }
`;

export default Icon;
