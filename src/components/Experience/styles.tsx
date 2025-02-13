import styled from "styled-components";
import { mquery } from "../../constants";

export const MainWrapper = styled.div`
  margin: 30px auto;
  position: relative;

  @media ${mquery.tablet} {
    /* display: flex;
    align-items: center; */
    margin: 50px auto;
  }
`;
