import React, { useState } from "react";
import { useAppState } from "../../state/state";

const Slider = ({
  label,
  maxValue = 5,
  minValue = 0,
  value,
  onChange,
  stateProp,
  className,
  phase, // only used if we are setting inside of a phase
  ...rest
}) => {
  const [state, dispatch] = stateProp ? useAppState() : [null, null]; // no need to call use App State if we don't have a state prop

  const getValue = () => {
    return (
      (stateProp && phase
        ? state[phase][stateProp]
        : stateProp
        ? state[stateProp]
        : value) ?? ""
    );
  };

  const handleChange = (e) => {
    if (stateProp) {
      const value = e.target.value;

      // if we have a state prop to set, we set that on change
      if (phase) {
        dispatch({
          type: "SET_IN_PHASE",
          phase,
          payload: { [stateProp]: value },
        });
      } else {
        dispatch({
          type: "SET",
          payload: {
            [stateProp]: value,
          },
        });
        console.log(state);
      }
    }
    onChange && onChange(e);
  };

  return (
    <div className={"" + className}>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type="range"
        max={maxValue}
        min={minValue}
        id={label}
        value={getValue()} // if were given a state prop, we use that, otherwise we use the value prop
        onChange={handleChange}
        className="w-full h-2 rounded-lg appearance-none bg-gradient-to-r from-red-500 to-green-500 outline-none opacity-70 transition-opacity duration-200 hover:opacity-100"
        {...rest}
      />
      <div className="flex justify-between w-full mt-2">
        {new Array(maxValue - minValue + 1).fill(0).map((_, index) => (
          <span key={index}>{index + minValue}</span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
