import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useAppState, useSettings } from "../state/state";
import AlgaeActionMenu from "./AlgaeActionMenu";
import CoralScoring from "./CoralScoring";
import Button from "./inputs/Button";

const Auto = () => {
  const [state, dispatch] = useAppState();
  const [algaeActionMenu, setAlgaeActionMenu] = useState(false);
  const [settings] = useSettings();

  return (
    <div className="flex flex-col xs:flex-row p-2 gap-2 bg-red-500 bg-opacity-15 relative h-full max-w-full overflow-x-auto">
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
      <AnimatePresence>
        {algaeActionMenu && (
          <motion.div
            initial={settings.stimulation ? { opacity: 0, scale: 0 } : false}
            animate={settings.stimulation ? { opacity: 1, scale: 1 } : false}
            exit={settings.stimulation ? { opacity: 0, scale: 0 } : false}
            transition={
              settings.stimulation
                ? { type: "spring", stiffness: 200, damping: 10, duration: 0.3 }
                : false
            }
            className="absolute inset-0 z-40 bg-white dark:bg-dark"
          >
            <AlgaeActionMenu
              handleClose={() => {
                setAlgaeActionMenu(false);
              }}
              phase="auto"
            />
          </motion.div>
        )}
      </AnimatePresence>
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
