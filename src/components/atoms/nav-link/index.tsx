import React from "react";
import { StyledLink } from "./styles";

const NavigationLink = () => {
  const menuItems = [
    { name: "About me", href: "#" },
    { name: "Work experience", href: "#" },
    { name: "Skills", href: "#" },
    { name: "Contact", href: "#" },
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

export default NavigationLink;
