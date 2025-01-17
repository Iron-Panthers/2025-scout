import React, { useState } from "react";
import { useAppState } from "../state/state";
import AlgaeActionMenu from "./AlgaeActionMenu";
import CoralScoringMenu from "./CoralScoringMenu";
import Button from "./inputs/Button";
import { coralIcon } from "../assets";

const Teleop = () => {
  const [state, dispatch] = useAppState();
  const [algaeActionMenu, setAlgaeActionMenu] = useState(false);
  const [coralScoringMenu, setCoralScoringMenu] = useState(false);
  if (algaeActionMenu) {
    return (
      <AlgaeActionMenu
        handleClose={() => {
          setAlgaeActionMenu(false);
        }}
        phase="teleop"
      />
    );
  } else if (coralScoringMenu) {
    return (
      <CoralScoringMenu
        handleClose={() => {
          setCoralScoringMenu(false);
        }}
        phase="teleop"
      />
    );
  }

  return (
    <div className="flex flex-col h-full p-2 gap-2 bg-green-500 bg-opacity-10">
      <div className="flex flex-row justify-stretch flex-1 gap-2 text-lg">
        <Button
          label={"Algae Action"}
          color="turquoise"
          onClick={() => {
            setAlgaeActionMenu(true);
          }}
          className={"flex-1"}
        >
          <div className="max-h-28 max-w-28 size-28 bg-[#00ffd7] rounded-full mx-auto p-2 shadow-2xl"></div>
        </Button>
        <Button
          label={"Coral Scoring"}
          color="gray"
          className={"flex-1"}
          onClick={() => {
            setCoralScoringMenu(true);
          }}
        >
          <img
            src={coralIcon}
            className="m-auto max-h-28 -rotate-12 my-2"
          ></img>
        </Button>
      </div>
      <div className="flex flex-row justify-stretch gap-2 h-24 w-full">
        <Button
          label={"Back to Auto"}
          color="blue"
          className={"flex-1"}
          onClick={() => {
            dispatch({ type: "SET_PHASE", phase: "auto" });
          }}
        />
        <Button
          label={"End Teleop"}
          color="green"
          className={"flex-1"}
          onClick={() => {
            dispatch({ type: "SET_PHASE", phase: "endgame" });
          }}
        />
      </div>
    </div>
  );
};

export default Teleop;
