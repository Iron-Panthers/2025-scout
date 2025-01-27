import React from "react";
import { useAppState } from "../state/state";
import Auto from "./Auto";
import Endgame from "./Endgame";
import Button from "./inputs/Button";
import NextButton from "./inputs/button_variants/NextButton";
import ScoutInfoBar from "./ScoutInfoBar";
import Teleop from "./Teleop";

const Scout = () => {
  const [state, dispatch] = useAppState();

  // this switches its content based on our current mode

  return (
    <div className="flex flex-col h-full relative w-full">
      <ScoutInfoBar />
      {state.phase === "auto" ? (
        <Auto />
      ) : state.phase === "teleop" ? (
        <Teleop />
      ) : state.phase === "endgame" ? (
        <Endgame />
      ) : (
        <div>You fucked up</div>
      )}
    </div>
  );
};

export default Scout;
