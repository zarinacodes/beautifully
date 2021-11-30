import styled from "styled-components";
import { color } from "../mixins";

export const MobileHeader = styled.div`
  position: relative;
  height: 64px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  border-bottom: 1px solid ${color("neutral-200")};

  svg {
    position: absolute;
    width: 22px;
    height: 22px;
    right: 25px;
  }
`;

export default MobileHeader;
