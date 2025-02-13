import styled from "styled-components";
import { mquery } from "../../constants";

export const MainWrapper = styled.div`
  margin: auto;
  position: relative;
  z-index: 10;
  padding: 20px;
  min-height: 200px;
  max-width: 900px;

  @media ${mquery.tablet} {
    display: flex;
    max-height: fit-content;

    .content-container {
      display: flex;
      flex-direction: column;
    }

    .circle-container {
      display: flex;
      flex-direction: column;
    }
  }

  .circle-container {
    display: flex;
    justify-content: end;
  }

  p {
    margin-top: 120px;
    mix-blend-mode: difference;
    @media ${mquery.tablet} {
      mix-blend-mode: color;
    }
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: auto;
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 50%;
  display: flex;
  margin: 0;

  &.circle-2 {
    margin: 0 120px 0 0;
    width: 110px;
    height: 110px;
    background: var(--color-hover);
    align-items: center;
  }

  &.circle-3 {
    width: 40px;
    height: 40px;
    margin: 80px 110px 0 0;
    background: var(--color1);
  }

  &.circle-4 {
    width: 20px;
    height: 20px;
    margin: 50px 90px 0 0;
    background: var(--color3);
  }
`;
