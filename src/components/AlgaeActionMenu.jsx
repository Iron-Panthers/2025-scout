import React from "react";
import Button from "./inputs/Button";
import { useAppState } from "../state/state";

const AlgaeActionMenu = ({ handleClose }) => {
  const [state, dispatch] = useAppState();
  return (
    <div className="flex flex-col h-full p-2 gap-2">
      <div className="flex flex-row gap-2 flex-1">
        <Button label={"Algae Removal"} color="green" className={"flex-1"} />
        <Button label={"Algae in Net"} color="green" className={"flex-1"} />
        <Button
          label={"Algae in Processor"}
          color="green"
          className={"flex-1"}
        />
      </div>
      <Button label={"Back"} onClick={handleClose} className={"h-24"} />
    </div>
  );
};

export default AlgaeActionMenu;
