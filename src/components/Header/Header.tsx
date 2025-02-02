import React from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { useWindowSize } from "@uidotdev/usehooks";
import { breakpoints } from "../../constants";

const NavigationBar = () => {
  const { width } = useWindowSize();
  const screenWidth = width ?? 0;
  const isDesktop = screenWidth >= breakpoints.laptop;

  return isDesktop ? <DesktopMenu /> : <MobileMenu />;
};

export default NavigationBar;
