import React, { useState, useEffect } from "react";
import MenuLink from "./MenuLink";
import { MenuButton, MenuContainer, ScrollUpButton } from "./styles";
import { ArrowLeft, List, ArrowUp } from "phosphor-react";

const MobileMenu = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showScrollUpButton, setShowScrollUpButton] = useState(false);

  const handleButtonClick = () => {
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
  };

  const handleButtonBack = () => {
    setIsOpened(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollUpButton(true);
      } else {
        setShowScrollUpButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          <MenuLink onClick={handleClose} />
        </MenuContainer>
      )}

      {showScrollUpButton && !isOpened && (
        <ScrollUpButton onClick={scrollToTop}>
          <ArrowUp className="arrow-up" />
        </ScrollUpButton>
      )}
    </>
  );
};

export default MobileMenu;
