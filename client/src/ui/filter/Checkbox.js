import styled from "styled-components";
import { color } from "../mixins";

export const Checkbox = styled.input`
  display: grid;
  place-content: center;
  appearance: none;
  background-color: ${color("light")};
  margin: 0;
  font: inherit;
  color: ${color("neutral-500")};
  width: 0.9em;
  height: 0.9em;
  border: 0.12em solid currentColor;
  border-radius: 0.5em;
  transform: translateY(-0.075em);
  ::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 0.5em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${color("primary")};
  }
  :checked::before {
    transform: scale(1);
  }
`;

export default Checkbox;
