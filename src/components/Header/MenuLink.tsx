import React, { useState, FC } from "react";
import { StyledLink } from "./styles";

interface MenuLinkProps {
  onClick?: () => void;
}

const MenuLink: FC<MenuLinkProps> = ({ onClick }) => {
  const [activeLink, setActiveLink] = useState("");

  const menuItems = [
    { name: "About me", href: "#about" },
    { name: "Work experience", href: "#work" },
    { name: "Skills", href: "#skills" },
    // { name: "Projects", href: "#projects" }, // will be added later
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setActiveLink(href);
    if (onClick) {
      onClick();
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const menuHeight = 100;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - menuHeight - 10,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {menuItems.map((item, index) => (
        <StyledLink
          key={index}
          href={item.href}
          className={activeLink === item.href ? "active" : ""}
          onClick={(event) => handleClick(event, item.href)}
        >
          {item.name}
        </StyledLink>
      ))}
    </>
  );
};

export default MenuLink;
