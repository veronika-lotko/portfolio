import React from "react";
import { StyledFooter, StyledLink } from "./styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const links = [
    { name: "Linkedin", Icon: FaLinkedin, href: "https://www.linkedin.com/in/veronikalotko/" },
    { name: "GitHub", Icon: FaGithub, href: "https://github.com/veronika-lotko" },
  ];

  return (
    <StyledFooter>
      <div className="links-wrapper">
        {links.map((item, index) => (
          <StyledLink key={index} href={item.href} className="link" target="_blank">
            <item.Icon className="icon" />
          </StyledLink>
        ))}
      </div>
      <p>© 2025 Veronika Lotko. All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;
