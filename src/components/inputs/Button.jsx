import React from "react";

const Button = ({ color = "blue", label, onClick, className, ...rest }) => {
  const colorVariants = {
    blue: "bg-blue-500 border-blue-500 text-white bg-opacity-70 hover:bg-opacity-90",
    red: "bg-red-warning border-red-warning text-white bg-opacity-70 hover:bg-opacity-90",
    green:
      "bg-green-500 border-green-500 text-white bg-opacity-70 hover:bg-opacity-90",
  };

  return (
    <button
      className={
        colorVariants[color] +
        " border-2 font-bold py-2 px-4 rounded transition-all duration-100 disabled:bg-gray-400 disabled:border-gray-500 " +
        className
      }
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
