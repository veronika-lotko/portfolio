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
    width: 30px;
    height: 30px;
    display: flex;
    padding: 10px 15px;
    z-index: 100;
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

export const ScrollUpButton = styled.button`
  position: fixed;
  top: 20px;
  left: 10px;
  background: rgba(255, 255, 255, 0.5);
  color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 100;

  &:hover {
    background: var(--color-white);
    color: var(--color-black);
    transform: scale(1.1);
  }

  .arrow-up {
    width: 24px;
    height: 24px;
  }
`;
