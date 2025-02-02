import React, { useState } from "react";
import MenuLink from "./MenuLink";
import { MenuButton, MenuContainer } from "./styles";
import { ArrowLeft, List } from "phosphor-react";

const MobileMenu = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleButtonClick = () => {
    setIsOpened(true);
  };

  const handleButtonBack = () => {
    setIsOpened(false);
  };

  return (
    <>
      {!isOpened ? (
        <MenuButton onClick={handleButtonClick}>
          <List className="list" />
        </MenuButton>
      ) : (
        <MenuContainer>
          <MenuButton onClick={handleButtonBack}>
            <ArrowLeft className="arrow" />
          </MenuButton>
          <MenuLink />
        </MenuContainer>
      )}
    </>
  );
};

export default MobileMenu;
