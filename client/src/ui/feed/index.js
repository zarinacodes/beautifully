import styled from "styled-components";
import { breakpoints } from "../mixins";
import ShowMore from "./ShowMore";
import ButtonContainer from "./ButtonContainer";

export const Feed = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-column-gap: 15px;
  grid-row-gap: 100px;
  max-width: 100%;
  box-sizing: border-box;
  grid-auto-flow: row;
  justify-items: center;

  @media (max-width: ${breakpoints("tablet")}) {
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  }
  @media (max-width: ${breakpoints("mobile")}) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`;

Feed.ShowMore = ShowMore;
Feed.ButtonContainer = ButtonContainer;
export default Feed;
