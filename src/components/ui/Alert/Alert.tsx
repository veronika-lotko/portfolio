import React from "react";

interface AlertProps {
  error?: boolean;
  success?: boolean;
}

const Alert: React.FC<AlertProps> = () => {
  return <div className="alert"></div>;
};

export default Alert;
