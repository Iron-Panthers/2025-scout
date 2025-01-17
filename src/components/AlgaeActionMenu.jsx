import React from "react";
import Button from "./inputs/Button";
import { useAppState } from "../state/state";
import {
  algaeToNetIcon,
  algaeToProcessorIcon,
  removeAlgaeIcon,
} from "../assets";

const AlgaeActionMenu = ({ handleClose, phase }) => {
  const [state, dispatch] = useAppState();
  return (
    <div className="flex flex-col h-full p-2 gap-2">
      <div className="flex flex-row gap-2 flex-1">
        <Button
          label={"Algae Removal"}
          color="green"
          className={"flex-1"}
          onClick={() => {
            dispatch({
              type: "INCREMENT_IN_PHASE",
              phase: phase,
              key: "algaeRemoved",
            });
            handleClose();
          }}
        >
          <img src={removeAlgaeIcon} className="max-h-28 mx-auto my-2" />
        </Button>
        <Button
          label={"Algae in Net"}
          color="green"
          className={"flex-1"}
          onClick={() => {
            dispatch({
              type: "INCREMENT_IN_PHASE",
              phase: phase,
              key: "algaeInNet",
            });
            handleClose();
          }}
        >
          <img src={algaeToNetIcon} className="max-h-28 mx-auto my-2" />
        </Button>
        <Button
          label={"Algae in Processor"}
          color="green"
          className={"flex-1"}
          onClick={() => {
            dispatch({
              type: "INCREMENT_IN_PHASE",
              phase: phase,
              key: "algaeInProcessor",
            });
            handleClose();
          }}
        >
          <img src={algaeToProcessorIcon} className="max-h-28 mx-auto my-2" />
        </Button>
      </div>
      <Button label={"Back"} onClick={handleClose} className={"h-24"} />
    </div>
  );
};

export default AlgaeActionMenu;
