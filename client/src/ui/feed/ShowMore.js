import styled from "styled-components";
import { color, font } from "../mixins";

export const ShowMore = styled.button`
  height: 40px;
  min-width: 150px;
  background-color: ${color("light")};
  color: ${color("primary")};
  border: 1px solid ${color("primary")};
  font-family: ${font("sans")};

  border-radius: 1em;
  cursor: pointer;

  :hover {
    color: ${color("light")};
    background-color: ${color("primary")};
    border: none;
  }
`;

export default ShowMore;
