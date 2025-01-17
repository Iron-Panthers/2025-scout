import React, { useState } from "react";
import Button from "./inputs/Button";
import ShortTextInput from "./inputs/ShortTextInput";
import { useAppState } from "../state/state";

const EndgameClimbMenu = ({ handleClose, cage }) => {
  const [state, dispatch] = useAppState();
  const [climbStartTime, setClimbStartTime] = useState("");
  const [climbSuccessful, setClimbSuccessful] = useState(null);
  return (
    <div className="h-full flex flex-row gap-2 p-2">
      <Button
        label={"Back"}
        color="blue"
        className={"w-1/6"}
        onClick={handleClose}
      />
      <div className="flex flex-col gap-2 flex-1">
        <ShortTextInput
          label={"Climbing Time"}
          placeholder={"Enter current time here"}
          className={"flex-1"}
          onChange={(e) => setClimbStartTime(e.target.value)}
          value={climbStartTime}
          phase={"endgame"}
        />
        <div className="flex flex-row gap-2 h-1/3">
          <Button
            label={"Fail"}
            color="red"
            className={
              "flex-1 " +
              (climbSuccessful !== false ? "bg-red-900 opacity-50" : "")
            }
            onClick={() => {
              setClimbSuccessful(false);
            }}
          />
          <Button
            label={"Success"}
            color="green"
            className={
              "flex-1 " +
              (climbSuccessful !== true ? "bg-green-900 opacity-50" : "")
            }
            onClick={() => {
              setClimbSuccessful(true);
            }}
          />
        </div>
      </div>
      <Button
        label={"Submit Climb"}
        color="green"
        className={"w-1/6"}
        onClick={() => {
          // set all of the stuff
          dispatch({
            type: "SET_IN_PHASE",
            phase: "endgame",
            payload: {
              attemptedClimb: true,
              climbStartTime: climbStartTime,
              climbSuccessful: climbSuccessful,
              climbingCage: cage ?? "CAGE NOT SET, MISTAKES HAVE BEEN MADE",
            },
          });
          // close the menu
          handleClose();
        }}
        disabled={climbStartTime === "" || climbSuccessful === null}
      />
    </div>
  );
};

export default EndgameClimbMenu;
