import styled from "styled-components";
import { mquery } from "../../constants";

export const StyledLink = styled.a`
  color: var(--color-black);
  padding: 5px 20px;
  text-decoration: none;
  border-radius: 25px;
  margin: 20px;
  text-align: center;
  font-size: var(--font-size-tablet);
  position: relative;
  display: inline-block;
  backdrop-filter: blur(18px);
  transition: all 0.3s ease;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.2);
  }

  @media ${mquery.laptop} {
    color: var(--color-white);
    border: 1px solid var(--color-white);
    &:hover {
      background: var(--color-white);
      color: var(--color-black);
      transform: none;
    }
    &:focus,
    &.active {
      background: var(--color-white);
      color: var(--color-black);
      box-shadow: 0 0 28px var(--color-hover);
    }
  }
`;

export const StyledBar = styled.nav`
  margin: auto;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
  backdrop-filter: blur(10px);
  z-index: 100;
  height: 80px;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  width: auto;

  svg {
    width: 40px;
    height: 40px;
    display: flex;
    padding: 10px;
  }

  .list {
    margin: 17px 0;
    color: var(--color-white);
  }

  .arrow {
    color: var(--color-black);
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: var(--color-white);
  display: grid;
  align-items: center;
`;
