import styled, { css } from "styled-components";
import { color, font, breakpoints } from "../mixins";
import { applyStyleModifiers } from "styled-components-modifiers";

const MODIFIERS = {
  recent: () => css`
    font-weight: 700;
    min-width: 100px;
    padding: 0 0;
    box-sizing: border-box;
  `,
};
export const Select = styled.div`
  position: relative;
  color: ${color("dark")};
  font-family: ${font("sans")};
  font-size: 14px;
  min-width: 200px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-right: 24px;
  border: none;
  background-color: ${color("light")};
  cursor: pointer;
  ${applyStyleModifiers(MODIFIERS)}

  svg {
    width: 18px;
    height: 18px;
  }
  @media (max-width: ${breakpoints("tablet")}) {
    padding: 0 0;
  }
  @media (max-width: ${breakpoints("mobile")}) {
    min-width: 130px;
  }
`;

export default Select;
