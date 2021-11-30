import styled, { css } from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { color, font, breakpoints } from "../mixins";

const MODIFIERS = {
  emoji: () => css`
    font-size: 18px;
    cursor: pointer;
  `,
};

export const ListItem = styled.li`
  color: ${color("neutral-200")};
  font-family: ${font("sans")};
  font-size: 12px;
  cursor: pointer;
  padding: 0 12px;
  display: inline-flex;
  align-items: center;
  ${applyStyleModifiers(MODIFIERS)};

  @media (max-width: ${breakpoints("tablet")}) {
    font-size: 10px;
  }
`;

export default ListItem;
