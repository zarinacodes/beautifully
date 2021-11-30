import styled from "styled-components";
import { color, font } from "../mixins";

export const Text = styled.p`
  font-family: ${font("sans")};
  color: ${color("neutral-500")};
  font-size: 14px;
`;

export default Text;
