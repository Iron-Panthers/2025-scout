import React from "react";
import Button from "./inputs/Button";
import { useAppState } from "../state/state";

const Scout = () => {
  const [state, dispatch] = useAppState();

  return (
    //do more here during on-season
    <div>
      <h1>Scout</h1>
      <Button
        label="Next"
        color="green"
        className={"absolute w-full bottom-0"}
        onClick={() => {
          dispatch({ type: "NEXT_MODE" });
        }}
      />
    </div>
  );
};

export default Scout;
