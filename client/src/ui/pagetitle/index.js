import styled from "styled-components";
import { color, font, breakpoints } from "../mixins";

export const PageTitle = styled.h2`
  color: ${color("dark")};
  font-family: ${font("serif")};
  font-size: 28px;
  font-weight: 700;
  padding-bottom: 43px;

  @media (max-width: ${breakpoints("mobile")}) {
    font-size: 24px;
  }
`;

export default PageTitle;
