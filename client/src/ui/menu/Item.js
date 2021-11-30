import styled, { css } from "styled-components";
import { color, font } from "../mixins";
import { applyStyleModifiers } from "styled-components-modifiers";

const MODIFIERS = {
  bold: () => css`
    font-weight: 700;
  `,
  divider: () => css`
    border-right: 1px solid;
  `,
};

export const Item = styled.li`
  color: ${color("dark")};
  font-family: ${font("sans")};
  font-size: 14px;
  padding: 0 12px;
  cursor: pointer;

  ${applyStyleModifiers(MODIFIERS)}
`;

export default Item;
