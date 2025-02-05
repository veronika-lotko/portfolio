import styled from "styled-components";
import { mquery } from "../../constants";

export const MainWrapper = styled.div`
  margin: auto;
  position: relative;
  z-index: 10;
  padding: 20px;
  min-height: 200px;
  max-width: 900px;

  .circle-container {
    display: flex;
    justify-content: end;
  }

  p {
    mix-blend-mode: difference;
    @media ${mquery.laptop} {
      mix-blend-mode: color;
    }
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 50%;
`;
