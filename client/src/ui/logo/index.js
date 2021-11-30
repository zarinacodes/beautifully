import styled, { css } from "styled-components";
import logo from "../../assets/logo.svg";
import { applyStyleModifiers } from "styled-components-modifiers";

const MODIFIERS = {
  bigger: () => css`
    background-size: 97px 25px;
    width: 97px;
    height: 25px;
  `,
};

export const Logo = styled.div`
  background-image: url(${logo});
  background-size: 93px 20px;
  background-repeat: no-repeat;
  width: 93px;
  height: 20px;
  cursor: pointer;
  box-sizing: border-box;

  ${applyStyleModifiers(MODIFIERS)}
`;

export default Logo;
