import React from "react";
import Button from "./inputs/Button";
import { useAppState } from "../state/state";
import NextButton from "./inputs/button_variants/NextButton";
import Auto from "./Auto";
import Endgame from "./Endgame";
import Teleop from "./Teleop";
import ScoutInfoBar from "./ScoutInfoBar";

const Scout = () => {
  const [state, dispatch] = useAppState();

  // this switches its content based on our current mode

  return (
    <div className="flex flex-col h-full">
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
