import React from "react";
import Button from "./inputs/Button";
import { useAppState } from "../state/state";
import NextButton from "./inputs/button_variants/NextButton";

const Scout = () => {
  const [state, dispatch] = useAppState();

  return (
    //do more here during on-season
    <div>
      <h1>Scout</h1>
      <NextButton className={"absolute w-full bottom-0"} />
    </div>
  );
};

export default Scout;
