import React, { useState } from "react";
import Button from "./inputs/Button";
import { cageDiagram } from "../assets";
import { useAppState } from "../state/state";
import EndgameClimbMenu from "./EndgameClimbMenu";

const Endgame = () => {
  const [state, dispatch] = useAppState();
  const [endgameClimbMenu, setEndgameClimbMenu] = useState(null); // the value should be which cage they are climbing

  const getButtonColor = (cage) => {
    console.log(state.endgame);
    if (state.endgame.attemptedClimb) {
      if (state.endgame.climbingCage === cage) {
        if (state.endgame.climbSuccessful) {
          return "green";
        } else {
          return "red";
        }
      } else {
        return "gray";
      }
    } else {
      return "blue";
    }
  };

  if (endgameClimbMenu) {
    return (
      <EndgameClimbMenu
        handleClose={() => {
          setEndgameClimbMenu(null);
        }}
        cage={endgameClimbMenu}
      />
    );
  }
  return (
    <div className="flex flex-row p-2 gap-2 h-full overflow-hidden">
      <Button
        color="blue"
        label={"Back"}
        onClick={() => dispatch({ type: "SET_PHASE", phase: "teleop" })}
      />
      <Button
        color="amber"
        label={state.endgame.park ? "Parked" : "Park?"}
        disabled={state.endgame.park}
        className={"flex-1"}
        onClick={() => {
          dispatch({
            type: "SET_IN_PHASE",
            phase: "endgame",
            payload: { park: true },
          });
        }}
      />
      <img src={cageDiagram} className="max-h-full object-contain" />
      <div className="flex flex-col gap-2 flex-1">
        <Button
          color={getButtonColor("shallow")}
          className={"flex-1"}
          onClick={() => {
            setEndgameClimbMenu("shallow");
          }}
        >
          {state.endgame.attemptedClimb &&
          state.endgame.climbingCage === "shallow" ? (
            <div className="text-sm">
              {state.endgame.climbSuccessful ? "Successful" : "Failed"}
              <div className="text-xs font-normal">
                Climb Start Time: {state.endgame.climbStartTime}
              </div>
            </div>
          ) : (
            "Shallow Climb"
          )}
        </Button>
        <Button
          color={getButtonColor("deep")}
          className={"flex-1"}
          onClick={() => {
            setEndgameClimbMenu("deep");
          }}
        >
          {state.endgame.attemptedClimb &&
          state.endgame.climbingCage === "deep" ? (
            <div className="text-sm">
              {state.endgame.climbSuccessful ? "Successful" : "Failed"}
              <div className="text-xs font-normal">
                Climb Start Time: {state.endgame.climbStartTime}
              </div>
            </div>
          ) : (
            "Deep Climb"
          )}
        </Button>
      </div>
      <Button
        color="green"
        label={"Review"}
        onClick={() => {
          dispatch({ type: "NEXT_MODE" });
        }}
      />
    </div>
  );
};

export default Endgame;
