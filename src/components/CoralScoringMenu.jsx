import React from "react";
import { useAppState } from "../state/state";
import Button from "./inputs/Button";
import { reefDiagram } from "../assets";

const CoralScoringMenu = ({ handleClose, phase = "teleop" }) => {
  const [state, dispatch] = useAppState();
  return (
    <div className="flex flex-row h-full p-2 gap-2 overflow-hidden">
      {/* insert svg of thingy here */}
      <img src={reefDiagram} className="max-h-full object-contain" />
      <div className="flex flex-col gap-2 flex-1">
        <CoralScoringButton
          phase={phase}
          stateKey={"coralScoredL4"}
          label={"Level 4"}
          color={"green"}
          handleClose={handleClose}
        />
        <CoralScoringButton
          phase={phase}
          stateKey={"coralScoredL3"}
          label={"Level 3"}
          color={"amber"}
          handleClose={handleClose}
        />
        <CoralScoringButton
          phase={phase}
          stateKey={"coralScoredL2"}
          label={"Level 2"}
          color={"amber"}
          handleClose={handleClose}
        />
        <CoralScoringButton
          phase={phase}
          stateKey={"coralScoredL1"}
          label={"Level 1"}
          color={"red"}
          handleClose={handleClose}
        />
      </div>
      <Button label={"Back"} onClick={handleClose} />
    </div>
  );
};

const CoralScoringButton = ({ phase, stateKey, label, color, handleClose }) => {
  const [state, dispatch] = useAppState();
  return (
    <Button
      label={label}
      color={color}
      onClick={() => {
        dispatch({
          type: "INCREMENT_IN_PHASE",
          phase: phase === "auto" || phase === "teleop" ? phase : "teleop", // if its not auto or teleop then its teleop
          key: stateKey,
        });
        handleClose();
      }}
      className={"flex-1 relative"}
    >
      <div className="absolute top-1/2 left-2 -translate-y-1/2 text-xl">
        {state[phase][stateKey] === 0 ? "" : state[phase][stateKey]}
      </div>
    </Button>
  );
};

export default CoralScoringMenu;
