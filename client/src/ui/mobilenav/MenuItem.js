import styled, { css } from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { font } from "../mixins";

const MODIFIERS = {
  bold: () => css`
    font-weight: 700;
  `,
};

export const MenuItem = styled.li`
  font-family: ${font("sans")};
  font-size: 16px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    height: 20px;
    width: 20px;
  }
  ${applyStyleModifiers(MODIFIERS)}
`;

export default MenuItem;
