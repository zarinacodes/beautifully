import styled from "styled-components";
import { Link } from "react-router-dom";
import { color } from "../mixins";

export const Anchor = styled(Link)`
  text-decoration: none;
  color: ${color("dark")};
`;

export default Anchor;
