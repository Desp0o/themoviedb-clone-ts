import React from "react";
import "./LoadingSpinner.css";

interface spinnerProps {
  loadingNextPage?: string
}

const LoadingSpinner: React.FC<spinnerProps> =({loadingNextPage}) => {
  return (
    <div className={`loading_spinner ${loadingNextPage}`}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingSpinner