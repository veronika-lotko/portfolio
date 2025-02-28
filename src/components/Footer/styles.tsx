import styled from "styled-components";

export const StyledFooter = styled.div`
  min-height: 100px;
  backdrop-filter: blur(250px);

  p {
    padding: 15px;
    font-size: var(--font-size-mobile);
  }

  .links-wrapper {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`;
export const StyledLink = styled.a`
  cursor: pointer;
  border-radius: 100px;
  border: 2px solid var(--color-white);
  background-color: transparent;
  width: 46px;
  height: 46px;
  margin-top: 15px;

  svg {
    margin: 10px;
    width: 24px;
    height: 24px;
    color: var(--color-white);
    &.active {
      color: var(--color-black);
    }
  }

  &:hover {
    transition: all 0.3s ease;
    background-color: var(--color-white);
    svg {
      color: var(--color-black);
    }
  }
`;
