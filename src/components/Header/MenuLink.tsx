import React from "react";
import { StyledLink } from "./styles";

const MenuLink = () => {
  const menuItems = [
    { name: "About me", href: "#about" },
    { name: "Work experience", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <>
      {menuItems.map((item, index) => (
        <StyledLink key={index} href={item.href}>
          {item.name}
        </StyledLink>
      ))}
    </>
  );
};

export default MenuLink;
