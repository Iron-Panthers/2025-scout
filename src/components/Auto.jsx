import { useState } from "react";
import { useAppState } from "../state/state";
import AlgaeActionMenu from "./AlgaeActionMenu";
import CoralScoring from "./CoralScoring";
import Button from "./inputs/Button";

const Auto = () => {
  const [state, dispatch] = useAppState();
  const [algaeActionMenu, setAlgaeActionMenu] = useState(false);
  if (algaeActionMenu) {
    return (
      <AlgaeActionMenu
        handleClose={() => {
          setAlgaeActionMenu(false);
        }}
        phase="auto"
      />
    );
  }

  return (
    <div className="flex flex-col xs:flex-row p-2 gap-2 bg-red-500 bg-opacity-10 relative h-full max-w-full overflow-x-auto">
      <Button
        label={state.auto.leave ? "Robot Left" : "Robot Leave?"}
        color="red"
        disabled={state.auto.leave}
        className={"h-1/6 xs:w-1/6 xs:h-auto"}
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
        className={"h-1/6 xs:w-1/6 xs:h-auto"}
      >
        <div className="size-8 xs:size-16 bg-[#00ffd7] rounded-full mx-auto p-2 shadow-2xl"></div>
      </Button>
      <CoralScoring phase="auto" />
      <Button
        label={"End Auto"}
        color="green"
        className={"h-1/6 xs:w-1/6 xs:h-auto"}
        onClick={() => {
          dispatch({ type: "SET_PHASE", phase: "teleop" });
        }}
      />
    </div>
  );
};

export default Auto;
