import React, { useState } from "react";
import Button from "./inputs/Button";
import { cageDiagram } from "../assets";
import { useAppState } from "../state/state";
import EndgameClimbMenu from "./EndgameClimbMenu";

const Endgame = () => {
  const [state, dispatch] = useAppState();
  const [endgameClimbMenu, setEndgameClimbMenu] = useState(false);

  if (endgameClimbMenu) {
    return (
      <EndgameClimbMenu
        handleClose={() => {
          setEndgameClimbMenu(false);
        }}
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
      <Button color="amber" label={"Park?"} className={"flex-1"} />
      <img src={cageDiagram} className="max-h-full object-contain" />
      <div className="flex flex-col gap-2 flex-1">
        <Button
          color="blue"
          label={"Shallow climb"}
          className={"flex-1"}
          onClick={() => {
            setEndgameClimbMenu(true);
          }}
        />
        <Button
          color="blue"
          label={"Deep climb"}
          className={"flex-1"}
          onClick={() => {
            setEndgameClimbMenu(true);
          }}
        />
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
