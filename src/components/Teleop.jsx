import React, { useState } from "react";
import { coralIcon } from "../assets";
import { useAppState } from "../state/state";
import AlgaeActionMenu from "./AlgaeActionMenu";
import CoralScoring from "./CoralScoring";
import Button from "./inputs/Button";

const Teleop = () => {
  const [state, dispatch] = useAppState();
  const [algaeActionMenu, setAlgaeActionMenu] = useState(false);
  if (algaeActionMenu) {
    return (
      <AlgaeActionMenu
        handleClose={() => {
          setAlgaeActionMenu(false);
        }}
        phase="teleop"
      />
    );
  }

  return (
    <div className="flex flex-col xs:flex-row h-full p-2 gap-2 bg-green-500 bg-opacity-10 max-w-full overflow-x-auto">
      <Button
        label={"Back to Auto"}
        color="blue"
        className={"h-1/6 xs:w-1/6 xs:h-auto"}
        onClick={() => {
          dispatch({ type: "SET_PHASE", phase: "auto" });
        }}
      />
      <Button
        label={"Algae Action"}
        color="turquoise"
        onClick={() => {
          setAlgaeActionMenu(true);
        }}
        className={"h-1/6 xs:w-1/6 xs:h-auto"}
      >
        <div className="size-8 xs:size-16 bg-[#00ffd7] rounded-full mx-auto p-2 shadow-2xl"></div>
      </Button>
      <CoralScoring phase="teleop" />
      <Button
        label={"End Teleop"}
        color="green"
        className={"h-1/6 xs:w-1/6 xs:h-auto"}
        onClick={() => {
          dispatch({ type: "SET_PHASE", phase: "endgame" });
        }}
      />
    </div>
  );
};

export default Teleop;
