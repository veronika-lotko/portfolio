import React, { useState } from "react";
import { StyledLink } from "./styles";

const MenuLink = () => {
  const [activeLink, setActiveLink] = useState("");

  const menuItems = [
    { name: "About me", href: "#about" },
    { name: "Work experience", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <>
      {menuItems.map((item, index) => (
        <StyledLink
          key={index}
          href={item.href}
          className={activeLink === item.href ? "active" : ""}
          onClick={() => handleClick(item.href)}
        >
          {item.name}
        </StyledLink>
      ))}
    </>
  );
};

export default MenuLink;
