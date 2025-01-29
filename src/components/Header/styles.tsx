import styled from "styled-components";

export const StyledLink = styled.a`
  color: #fff;
  padding: 5px 20px;
  text-decoration: none;
  border-radius: 25px;
  margin: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  position: relative;
  display: inline-block;
  /* background: rgba(255, 255, 255, 0.1); */
  backdrop-filter: blur(18px);
  border: 1px solid rgb(255, 238, 253);
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 30px;

  &:hover {
    background: rgb(255, 255, 255);
    color: #000;
  }

  &:focus {
    background: rgb(255, 255, 255);
    color: #460041;
    box-shadow: 0 0 28px rgba(255, 133, 214, 1);
  }
`;

export const StyledBar = styled.nav`
  margin: 15px auto;
  position: relative;
  z-index: 10;
  padding: 20px;
`;
