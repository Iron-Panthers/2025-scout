import React from "react";
import ResetButton from "./inputs/button_variants/ResetButton";
import Button from "./inputs/Button";
import QRCode from "react-qr-code";
import { useAppState } from "../state/state";

const ScanData = () => {
  const [state, dispatch] = useAppState();

  return (
    <div className="text-2xl flex flex-col sm:flex-row h-full w-full">
      {/* Reset Button */}
      <ResetButton
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
        className="flex-grow flex-1"
      />
      {/* QR Code */}
      <div className="bg-white p-4 ">
        <QRCode
          value="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="h-full w-full"
        />
      </div>
      {/* Add to google sheet button */}
      <Button
        onClick={() => {
          console.log("Add to Google Sheet");
        }}
        color={"green"}
        label={"Add to Google Sheet"}
        className="flex-grow flex-1"
      >
        Add to Google Sheet
      </Button>
    </div>
  );
};

export default ScanData;
