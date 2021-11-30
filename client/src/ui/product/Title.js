import styled from "styled-components";
import { color, font } from "../mixins";

export const Title = styled.h6`
  color: ${color("dark")};
  font-family: ${font("sans")};
  font-weight: 400;
  font-size: 12px;
  padding-top: 2px;
`;

export default Title;
