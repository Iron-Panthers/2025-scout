import React, { useState } from "react";
import Button from "../Button";

const ResetButton = ({ onClick, className, ...rest }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
    } else {
      onClick && onClick();
    }
  };

  return (
    <Button
      color="red"
      label={clicked ? "Confirm Reset" : "Reset"}
      onClick={handleClick}
      {...rest}
      className={className + " "}
    />
  );
};

export default ResetButton;
