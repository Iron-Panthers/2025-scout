import React, { useState } from "react";
import { useAppState } from "../state/state";
import Button from "./inputs/Button";
import ShortTextInput from "./inputs/ShortTextInput";

const EndgameClimbMenu = () => {
  const [state, dispatch] = useAppState();

  const handleAttemptedClimb = () => {
    dispatch({
      type: "SET_IN_PHASE",
      phase: "endgame",
      payload: { attemptedClimb: true },
    });
  };

  return (
    <div className="flex flex-col gap-2 flex-1">
      <ShortTextInput
        label={"Climbing Time"}
        type="number"
        placeholder={"Enter current time here"}
        className={"h-1/3"}
        stateProp={"climbStartTime"}
        phase={"endgame"}
        onChange={(e) => {
          handleAttemptedClimb();
        }}
      />
      <div className="grid grid-rows-2 grid-flow-col gap-2 h-2/3">
        <Button
          label={"Shallow"}
          color="blue"
          className={
            "flex-1 " +
            (state.endgame.climbingCage !== "shallow"
              ? "bg-blue-900 opacity-50"
              : "")
          }
          onClick={() => {
            dispatch({
              type: "SET_IN_PHASE",
              phase: "endgame",
              payload: { climbingCage: "shallow", attemptedClimb: true },
            });
          }}
        />
        <Button
          label={"Deep"}
          color="blue"
          className={
            "flex-1 " +
            (state.endgame.climbingCage !== "deep"
              ? "bg-blue-900 opacity-50"
              : "")
          }
          onClick={() => {
            dispatch({
              type: "SET_IN_PHASE",
              phase: "endgame",
              payload: { climbingCage: "deep", attemptedClimb: true },
            });
          }}
        />
        <Button
          label={"Fail"}
          color="red"
          className={
            "flex-1 " +
            (state.endgame.climbSuccessful !== false
              ? "bg-red-900 opacity-50"
              : "")
          }
          onClick={() => {
            dispatch({
              type: "SET_IN_PHASE",
              phase: "endgame",
              payload: { climbSuccessful: false, attemptedClimb: true },
            });
          }}
        />
        <Button
          label={"Success"}
          color="green"
          className={
            "flex-1 " +
            (state.endgame.climbSuccessful !== true
              ? "bg-green-900 opacity-50"
              : "")
          }
          onClick={() => {
            dispatch({
              type: "SET_IN_PHASE",
              phase: "endgame",
              payload: { climbSuccessful: true, attemptedClimb: true },
            });
          }}
        />
      </div>
    </div>
  );
};

export default EndgameClimbMenu;
