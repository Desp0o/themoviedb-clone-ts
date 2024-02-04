import React from "react";

interface ErrorProps {
  errorName: {
    message?: string;
  }
}

const ErrorScreen: React.FC<ErrorProps> = ({ errorName }) => {
  return (
    <div className="server_error">
      <p>{errorName.message}</p>
    </div>
  );
};

export default ErrorScreen;
