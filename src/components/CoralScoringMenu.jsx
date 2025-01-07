import React from "react";
import { useAppState } from "../state/state";
import Button from "./inputs/Button";
import { reefDiagram } from "../assets";

const CoralScoringMenu = ({ handleClose }) => {
  const [state, dispatch] = useAppState();
  return (
    <div className="flex flex-row h-full p-2 gap-2 overflow-hidden">
      {/* insert svg of thingy here */}
      <img src={reefDiagram} className="max-h-full object-contain" />
      <div className="flex flex-col gap-2 flex-1">
        <Button
          label={"Level 4"}
          color="green"
          onClick={() => {}}
          className={"flex-1"}
        />
        <Button
          label={"Level 3"}
          color="amber"
          onClick={() => {}}
          className={"flex-1"}
        />
        <Button
          label={"Level 2"}
          color="amber"
          onClick={() => {}}
          className={"flex-1"}
        />
        <Button
          label={"Level 1"}
          color="red"
          onClick={() => {}}
          className={"flex-1"}
        />
      </div>
      <Button label={"Back"} onClick={handleClose} />
    </div>
  );
};

export default CoralScoringMenu;
