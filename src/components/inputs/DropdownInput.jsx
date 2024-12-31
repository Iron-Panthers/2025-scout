import React from "react";
import { useAppState } from "../../state/state";

const DropdownInput = ({
  fillColor,
  label,
  options,
  onChange,
  value,
  axis = "vertical",
  stateProp,
  className,
  ...rest
}) => {
  const [state, dispatch] = stateProp ? useAppState() : [null, null]; // no need to call use App State if we don't have a state prop

  const handleChange = (e) => {
    if (stateProp) {
      // if we have a state prop to set, we set that on change
      dispatch({
        type: "SET",
        payload: {
          [stateProp]: e.target.value,
        },
      });
    }
    onChange && onChange(e);
  };

  return (
    <div
      className={
        `flex ${axis === "horizontal" ? "flex-row" : "flex-col"} ${
          fillColor ? "bg-" + fillColor : ""
        } ` + className
      }
    >
      <label>{label}</label>
      <select
        value={stateProp ? state[stateProp] : value}
        onChange={handleChange}
        {...rest}
        className="rounded-md border border-dark flex-grow"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownInput;