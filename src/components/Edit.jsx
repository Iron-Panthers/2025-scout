import React from "react";
import Button from "./inputs/Button";
import { useAppState } from "../state/state";

const Edit = () => {
  const [state, dispatch] = useAppState();
  return (
    <div>
      <div>
        <h1 className="text-3xl">Edit</h1>
        <p className="text-lg">Edit the data you have entered</p>
      </div>
      <Button
        label={"Back"}
        color="blue"
        onClick={() => {
          dispatch({ type: "SET", payload: { mode: "Review" } });
        }}
        className={"absolute w-full bottom-0"}
      />
    </div>
  );
};

export default Edit;
