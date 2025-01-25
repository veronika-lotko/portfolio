import React from "react";
import NavigationLink from "../../atoms/nav-link";
import { StyledBar } from "./styled";

const NavigationBar = () => {
  return (
    <StyledBar className="navigation">
      <NavigationLink />
    </StyledBar>
  );
};

export default NavigationBar;
