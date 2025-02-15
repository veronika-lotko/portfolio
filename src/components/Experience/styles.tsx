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

export const StyledSwitcher = styled(SwitchSelector)``;

export const JobsWrapper = styled.div`
  margin: 10px;

  li {
    align-items: start;
    text-align: start;
  }

  @media ${mquery.tablet} {
    margin: 30px auto;
  }
`;
