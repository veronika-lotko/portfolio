import React, { FC } from "react";
import styled from "styled-components";

interface AlertProps {
  error?: boolean;
  success?: boolean;
  message: string;
}

const StyledAlert = styled.div<AlertProps>`
  width: 300px;
  height: 60px;
  background-color: ${(props) => (props.success ? "green" : props.error ? "red" : "gray")};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-bottom: 15px;
  visibility: ${(props) => (props.message ? "visible" : "hidden")};
`;

const Alert: FC<AlertProps> = ({ error, success, message }) => {
  return (
    <StyledAlert error={error} success={success} message={message}>
      {message}
    </StyledAlert>
  );
};

export default Alert;
