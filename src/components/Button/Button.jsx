import React from "react";

const Button = ({
    className = "pay-btn",
    onClick,
    children,
}) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
        {children}
    </button>
  );
};

export default Button;