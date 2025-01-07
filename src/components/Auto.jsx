import React, { useState } from "react";
import Button from "./inputs/Button";
import { useAppState } from "../state/state";
import AlgaeActionMenu from "./AlgaeActionMenu";
import CoralScoringMenu from "./CoralScoringMenu";

const Auto = () => {
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
      <Button
        label={"End Auto"}
        color="green"
        className={"h-24"}
        onClick={() => {
          dispatch({ type: "SET_PHASE", phase: "teleop" });
        }}
      />
    </div>
  );
};

export default Auto;
