import React from "react";
import Button from "./inputs/Button";
import ShortTextInput from "./inputs/ShortTextInput";

const EndgameClimbMenu = ({ handleClose }) => {
  return (
    <div className="h-full flex flex-row gap-2 p-2">
      <Button
        label={"Back"}
        color="blue"
        className={"w-1/6"}
        onClick={handleClose}
      />
      <div className="flex flex-col gap-2 flex-1">
        <ShortTextInput
          label={"Climbing Time"}
          placeholder={"Enter current time here"}
          className={"flex-1"}
        />
        <div className="flex flex-row gap-2 h-1/3">
          <Button label={"Fail"} color="red" className={"flex-1"} />
          <Button label={"Success"} color="green" className={"flex-1"} />
        </div>
      </div>
      <Button label={"Continue"} color="green" className={"w-1/6"} />
    </div>
  );
};

export default EndgameClimbMenu;
