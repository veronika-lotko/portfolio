import styled from "styled-components";
import { mquery } from "../../../constants";

// Create a styled div component
export const Wrapper = styled.div`
  margin: auto;
  position: relative;
  z-index: 10;
  padding: 20px;
  /* background-color: #ffffff26; */
  border-radius: 20px;
  border: 1px solid;
  color: white;
  min-height: 200px;
  max-width: 900px;

  /* @media ${mquery.tablet} {
    min-height: 400px;
  }
  @media ${mquery.desktop} {
    min-height: 600px;
  } */
`;
