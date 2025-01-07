import React from "react";

const Button = ({
  color = "blue",
  label,
  onClick,
  className,
  children,
  ...rest
}) => {
  const colorVariants = {
    blue: "bg-blue-500 border-blue-500 ",
    red: "bg-red-warning border-red-warning",
    green: "bg-green-500 border-green-500",
    amber: "bg-amber-500 border-amber-500",
    gray: "bg-gray-500 border-gray-500",
    turquoise: "bg-teal-500 border-teal-500",
  };

  return (
    <button
      className={
        colorVariants[color] +
        " text-white bg-opacity-90 dark:bg-opacity-50 hover:bg-opacity-90 border-2 font-bold py-2 px-4 rounded transition-all duration-100 disabled:bg-gray-400 disabled:border-gray-500 " +
        className
      }
      onClick={onClick ?? (() => {})}
      {...rest}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
