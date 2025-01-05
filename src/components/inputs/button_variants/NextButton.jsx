import React from "react";
import Button from "../Button";
import { useAppState } from "../../../state/state";
import { triggerHapticFeedback } from "../../../api/hapticFeedbackApi";

const NextButton = ({ ...rest }) => {
  const [state, dispatch] = useAppState();
  return (
    <Button
      label={"Next"}
      color="green"
      onClick={() => {
        triggerHapticFeedback();
        dispatch({ type: "NEXT_MODE" });
      }}
      {...rest}
    />
  );
};

export default NextButton;
