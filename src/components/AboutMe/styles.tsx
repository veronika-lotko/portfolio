import styled from "styled-components";
import { mquery } from "../../constants";

export const MainWrapper = styled.div`
  margin: 20px auto;
  position: relative;
  z-index: 10;
  padding: 20px;

  @media ${mquery.tablet} {
    display: flex;
    align-items: center;
    min-height: 300px;

    .circle-container {
      order: -1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .content-container,
    h1 {
      width: 100%;
    }

    h1 {
      white-space: nowrap;
    }
  }

  @media ${mquery.desktop} {
    max-width: 1200px;
  }

  .circle-container {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media ${mquery.tablet} {
      display: flex;
      position: relative;
      justify-content: end;
      transform: none;
      left: 0;
      top: 0;
    }
  }

  p {
    margin-top: 120px;
    mix-blend-mode: difference;
    padding: 0 10px;

    @media ${mquery.tablet} {
      mix-blend-mode: color;
      margin-top: 20px;
    }
  }

  img {
    width: 105px;
    height: 105px;
    border-radius: 50%;
    margin: auto;

    @media ${mquery.tablet} {
      width: 190px;
      height: 190px;
    }
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: var(--color-white);
  border-radius: 50%;
  display: flex;

  &.circle-2 {
    margin-right: 120px;
    width: 110px;
    height: 110px;
    box-shadow: 0 0 28px var(--color-hover);
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

  @media ${mquery.tablet} {
    position: relative;
  }
`;
