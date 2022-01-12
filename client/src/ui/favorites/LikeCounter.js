import styled from "styled-components";
import { color, font } from "../mixins";

export const LikeCounter = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: -3px;
  bottom: -1px;
  height: 16px;
  width: 15px;
  background-color: ${color("primary")};
  color: ${color("light")};
  font-family: ${font("sans")};
  font-size: 10px;
  border-radius: 50%;
`;

export default LikeCounter;
