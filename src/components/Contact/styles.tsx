import styled from "styled-components";
import { mquery } from "../../constants";

export const MainWrapper = styled.div`
  margin: 30px auto;
  position: relative;

  @media ${mquery.tablet} {
    margin: 50px auto;
  }

  .formField {
    display: grid;
    max-width: 600px;
    margin: auto;

    @media ${mquery.tablet} {
      max-width: 750px;
    }
  }

  input,
  textarea {
    font-size: var(--font-size-mobile);
    text-align: start;
    border-radius: 25px;
    border: none;
    font-weight: 700;
    resize: none;
    @media ${mquery.tablet} {
      font-size: var(--font-size-tablet);
      border-radius: 50px;
    }
  }
  input {
    padding: 10px 30px;
  }
  textarea {
    padding: 10px 20px;
    border: 10px solid var(--color-white);
  }

  .email {
    min-height: 10px;
    margin: auto 20px;
    @media ${mquery.tablet} {
      min-height: 50px;
      margin: 0;
    }
  }

  .textarea {
    margin: 25px 20px;
    min-height: 100px;
    overflow: hidden;
    @media ${mquery.tablet} {
      margin: 25px 0;
      min-height: 200px;
    }
  }

  .custom-toast-container {
    font-family: var(--font);
  }

  .sending {
    background: gray;
    color: var(--color-white);
    cursor: not-allowed;
    &:hover,
    &:focus-visible {
      background: gray;
      color: var(--color-white);
    }
  }
`;

export const StyledButton = styled.button`
  color: var(--color-white);
  padding: 2px 15px;
  text-decoration: none;
  border-radius: 25px;
  margin: 20px;
  text-align: center;
  background-color: transparent;
  font-size: var(--font-size-tablet);
  border: 1px solid var(--color-white);
  min-width: 200px;
  cursor: pointer;

  @media ${mquery.desktop} {
    min-width: 300px;
  }

  &:hover {
    transition: all 0.3s ease;
    background: var(--color-white);
    color: var(--color-black);
    transform: none;
  }
  &:focus-visible {
    background: var(--color-white);
    color: var(--color-black);
    box-shadow: 0 0 28px var(--color-hover);
  }
`;
