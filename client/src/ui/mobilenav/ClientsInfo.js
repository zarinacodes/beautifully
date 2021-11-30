import styled from "styled-components";
import { color, font } from "../mixins";

export const ClientsInfo = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: ${font("sans")};
  color: ${color("neutral-400")};
  padding: 30px 24px;
  height: 300px;
  width: 100%;
  justify-content: flex-start;
  border-bottom: 1px solid ${color("neutral-200")};

  li {
    display: flex;
    height: 50px;
    align-items: center;
  }
`;

export default ClientsInfo;
