import React, { useState } from "react";
import { useAppState } from "../state/state";
import AlgaeActionMenu from "./AlgaeActionMenu";
import CoralScoringMenu from "./CoralScoringMenu";
import Button from "./inputs/Button";

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
      />
    );
  } else if (coralScoringMenu) {
    return (
      <CoralScoringMenu
        handleClose={() => {
          setCoralScoringMenu(false);
        }}
      />
    );
  }

  return (
    <div className="flex flex-col h-full p-2 gap-2">
      <div className="flex flex-row justify-stretch flex-1 gap-2 text-lg">
        <Button label={"Robot Leave"} color="red" className={"flex-1"} />
        <Button
          label={"Algae Action"}
          color="turquoise"
          onClick={() => {
            setAlgaeActionMenu(true);
          }}
          className={"flex-1"}
        />
        <Button
          label={"Coral Scoring"}
          color="gray"
          className={"flex-1"}
          onClick={() => {
            setCoralScoringMenu(true);
          }}
        />
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
