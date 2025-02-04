import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { coralIcon } from "../assets";
import { useAppState, useSettings } from "../state/state";
import AlgaeActionMenu from "./AlgaeActionMenu";
import CoralScoring from "./CoralScoring";
import Button from "./inputs/Button";

const Teleop = () => {
  const [state, dispatch] = useAppState();
  const [algaeActionMenu, setAlgaeActionMenu] = useState(false);
  const [settings] = useSettings();

  return (
    <div className="flex flex-col xs:flex-row h-full p-2 gap-2 bg-blue-500 bg-opacity-15 max-w-full overflow-x-auto">
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
      <AnimatePresence>
        {algaeActionMenu && (
          <motion.div
            initial={settings.stimulation ? { opacity: 0, scale: 0 } : false}
            animate={settings.stimulation ? { opacity: 1, scale: 1 } : false}
            exit={settings.stimulation ? { opacity: 0, scale: 0 } : false}
            transition={
              settings.stimulation
                ? { type: "spring", stiffness: 300, damping: 20, duration: 0.1 }
                : false
            }
            className="absolute inset-0 z-40 bg-white dark:bg-dark"
          >
            <AlgaeActionMenu
              handleClose={() => {
                setAlgaeActionMenu(false);
              }}
              phase="teleop"
            />
          </motion.div>
        )}
      </AnimatePresence>
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
