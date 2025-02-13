import { useWindowSize } from "@uidotdev/usehooks";
import { breakpoints } from "../constants";

export const useBreakpoints = () => {
  const { width } = useWindowSize();
  const screenWidth = width ?? 0;

  const isMobile = screenWidth < breakpoints.tablet;
  const isTablet = screenWidth >= breakpoints.tablet && screenWidth < breakpoints.laptop;
  const isLaptop = screenWidth >= breakpoints.laptop && screenWidth < breakpoints.desktop;
  const isDesktop = screenWidth >= breakpoints.desktop;

  return { isMobile, isTablet, isLaptop, isDesktop };
};
