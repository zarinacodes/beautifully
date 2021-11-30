import styled from "styled-components";
import { font } from "../mixins";

export const Country = styled.div`
  font-family: ${font("sans")};
  font-size: 16px;
  display: flex;
  height: 50px;
  width: 100vw;
  padding: 18px;
  align-items: center;
`;

export default Country;
