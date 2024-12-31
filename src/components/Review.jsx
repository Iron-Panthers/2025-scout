import React from "react";
import Checkbox from "./inputs/Checkbox";
import { reviewToggles } from "../constants";
import { useAppState } from "../state/state";
import LongTextInput from "./inputs/LongTextInput";
import Button from "./inputs/Button";
import NextButton from "./inputs/button_variants/NextButton";

const Review = () => {
  const [state, dispatch] = useAppState();
  return (
    <div className="flex flex-col sm:flex-row justify-stretch items-stretch w-full h-full p-1 gap-2">
      {/* Toggle Option Section */}
      <div className="flex flex-col border border-dark rounded-lg p-2 gap-5">
        <h1 className="font-bold text-xl">Review</h1>
        {
          // checkboxes
          reviewToggles.map((toggle, index) => (
            <Checkbox
              key={index}
              label={toggle.label}
              stateProp={toggle.key}
              className={"text-lg"}
            />
          ))
        }
        {/* Scouting error description section */}
        {state.hasScoutingErrors && (
          <LongTextInput
            stateProp={"scoutingErrors"}
            placeholder={"Describe your scouting errors here"}
            className={"text-sm flex-grow"}
          />
        )}
      </div>
      {/* Comments Section */}
      <div className="flex-grow flex flex-col">
        <LongTextInput
          label={"Comments"}
          stateProp={"comments"}
          placeholder={"Enter any comments here"}
          className={"text-base flex-grow"}
        />
      </div>
      {/* Buttons Section */}
      <div className="w-full sm:w-20 flex flex-row sm:flex-col justify-between gap-2 p-1">
        <Button
          label={"Edit"}
          color="blue"
          onClick={() => {
            dispatch({ type: "SET", payload: { mode: "Edit" } });
          }}
          className={"flex-grow"}
        />
        <NextButton className={"flex-grow"} />
      </div>
    </div>
  );
};

export default Review;
