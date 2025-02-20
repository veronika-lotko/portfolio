import styled from "styled-components";
import { mquery } from "../../constants";
import SwitchSelector from "react-switch-selector";

export const MainWrapper = styled.div`
  margin: 30px auto;
  position: relative;
  max-width: 920px;

  .skills-wrapper {
    display: block;
    /* grid-template-columns: repeat(1, 1fr);
    gap: 16px; */
  }

  @media ${mquery.tablet} {
    .skills-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;

      .skill-category {
        min-height: 162px;
      }
    }
  }

  @media ${mquery.laptop} {
    .skills-wrapper {
      grid-template-columns: repeat(3, 1fr);

      .skill-category {
        min-height: 162px;
      }
    }
  }

  @media ${mquery.desktop} {
    max-width: 1200px;
  }

  p {
    /* padding: 10px; */
    margin: 10px;
    font-size: var(--font-size-tablet);
  }

  .skill-category {
    min-height: 142px;
  }

  .current-skill {
    border: 2px solid var(--color-white);
    background-color: var(--color-white);
    max-width: 100px;
    height: 20px;
    margin: 10px auto;
    border-radius: 100px;
    box-shadow: 0 0 28px var(--color-hover);
    align-items: center;
    text-align: center;

    p {
      color: var(--color-black);
      font-size: var(--font-size-xs);
      margin: 3px;
    }

    a {
      color: var(--color-black);
      margin: 0 4px;
    }
  }
`;

export const SkillButton = styled.button`
  cursor: pointer;
  border-radius: 100px;
  border: 2px solid var(--color-white);
  background-color: transparent;
  width: 50px;
  height: 50px;
  margin: 5px;

  &.active {
    box-shadow: 0 0 28px var(--color-hover);
    background-color: var(--color-white);
  }

  svg {
    color: var(--color-white);
    &.active {
      color: var(--color-black);
    }
  }
`;
