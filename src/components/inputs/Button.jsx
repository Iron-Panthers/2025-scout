import { motion, stagger, useAnimate } from "framer-motion";
import React, { useRef } from "react";
import { useSettings } from "../../state/state";

/**
 * A simple button component
 *
 * @param {*} {
 *   color = "blue",
 *   label,
 *   onClick,
 *   className,
 *   children,
 *   ...rest
 * }
 * @returns {*}
 */
const Button = ({
  color = "blue",
  label,
  onClick,
  className,
  children,
  ...rest
}) => {
  const [settings] = useSettings();

  const colorVariants = {
    blue: "bg-blue-500 border-blue-500 ",
    red: "bg-red-warning border-red-warning",
    green: "bg-green-500 border-green-500",
    amber: "bg-amber-500 border-amber-500",
    gray: "bg-gray-500 border-gray-500",
    turquoise: "bg-teal-500 border-teal-500",
  };
  const baseStyles =
    "text-white bg-opacity-90 dark:bg-opacity-50 hover:bg-opacity-90 border-2 font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:border-gray-500";

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <motion.button
      className={colorVariants[color] + " " + baseStyles + " " + className}
      onClick={handleClick}
      whileTap={
        settings.stimulation && !rest.disabled ? { scale: 1.05 } : undefined
      }
      transition={
        settings.stimulation
          ? { type: "spring", stiffness: 500, damping: 10 }
          : undefined
      }
      {...rest}
    >
      {label}
      {children}
    </motion.button>
  );
};

export default Button;
