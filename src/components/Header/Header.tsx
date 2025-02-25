import React from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { breakpoints } from "../../constants";
import { useWindowSize } from "@uidotdev/usehooks";

const NavigationBar = () => {
  const { width } = useWindowSize();
  const screenWidth = width ?? 0;
  const isDesktop = screenWidth >= breakpoints.laptop;

  return isDesktop ? <DesktopMenu /> : <MobileMenu />;
};

export default NavigationBar;
