import styled from "styled-components";
import { color, font, breakpoints } from "../mixins";
import Icon from "./Icon";

export const Search = styled.input`
  color: ${color("dark")};
  font-family: ${font("sans")};
  max-width: 266px;
  height: 32px;
  text-decoration: none;
  resize: none;
  border: none;
  outline: none;
  box-sizing: border-box;
  ::placeholder {
    color: ${color("dark")};
    font-size: 14px;
  }
  @media (max-width: ${breakpoints("tablet")}) {
    display: none;
  }
`;

Search.Icon = Icon;
export default Search;
