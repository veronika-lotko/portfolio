import styled from "styled-components";
import { mquery } from "../../constants";
import SwitchSelector from "react-switch-selector";

export const MainWrapper = styled.div`
  margin: 30px auto;
  position: relative;

  @media ${mquery.tablet} {
    margin: 50px auto;
  }
`;

export const SwitcherWrapper = styled.div`
  max-width: 760px;
  margin: auto;
  height: 50px;
`;

export const StyledSwitcher = styled(SwitchSelector)``;

export const JobsWrapper = styled.div`
  margin: 30px;
  max-width: 600px;
  font-size: var(--font-size-mobile);

  li {
    text-align: start;
  }

  @media ${mquery.tablet} {
    margin: 30px auto;
    max-width: 768px;

    li,
    p {
      font-size: var(--font-size-tablet);
    }
  }
`;
