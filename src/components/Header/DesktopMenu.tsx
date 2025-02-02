import React from "react";
import MenuLink from "./MenuLink";
import { StyledBar } from "./styles";

const DesktopMenu = () => {
  return (
    <StyledBar className="navigation">
      <MenuLink />
    </StyledBar>
  );
};

export default DesktopMenu;
