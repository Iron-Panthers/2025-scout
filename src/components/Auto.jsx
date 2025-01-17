import React, { useState } from "react";
import Button from "./inputs/Button";
import { useAppState } from "../state/state";
import AlgaeActionMenu from "./AlgaeActionMenu";
import CoralScoringMenu from "./CoralScoringMenu";
import { coralIcon } from "../assets";

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
        phase="auto"
      />
    );
  } else if (coralScoringMenu) {
    return (
      <CoralScoringMenu
        handleClose={() => {
          setCoralScoringMenu(false);
        }}
        phase="auto"
      />
    );
  }

  return (
    <div className="flex flex-col h-full p-2 gap-2 bg-red-500 bg-opacity-10">
      <div className="flex flex-row justify-stretch flex-1 gap-2 text-lg">
        <Button
          label={state.auto.leave ? "Robot Left" : "Robot Leave?"}
          color="red"
          disabled={state.auto.leave}
          className={"flex-1"}
          onClick={() => {
            dispatch({
              type: "SET_IN_PHASE",
              phase: "auto",
              payload: { leave: true },
            });
          }}
        />
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
            className="m-auto max-h-28 -rotate-12 my-2 shadow-2xl"
          ></img>
        </Button>
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
