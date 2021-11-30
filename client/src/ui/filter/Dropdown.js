import styled, { css } from "styled-components";
import { color } from "../mixins";
import { applyStyleModifiers } from "styled-components-modifiers";

const MODIFIERS = {
  left: () => css`
    right: 0;
  `,
};

export const Dropdown = styled.ul`
  padding: 0 16px;
  margin-right: 16px;
  position: absolute;
  display: flex;
  min-width: 300px;
  background-color: ${color("light")};
  flex-direction: column;
  ${applyStyleModifiers(MODIFIERS)}
`;

export default Dropdown;
