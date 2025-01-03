import React, { useEffect, useMemo } from "react";
import ResetButton from "./inputs/button_variants/ResetButton";
import Button from "./inputs/Button";
import QRCode from "react-qr-code";
import { useAppState, useSettings } from "../state/state";
import { filterState, flattenState, stateToCsv } from "../api/csvApi";

const ScanData = () => {
  const [state, dispatch] = useAppState();
  const [settings, settingsDispatch] = useSettings();

  // For debugging the scandata
  // useEffect(() => {
  //   console.log("State", state);
  //   console.log("Filtered", filterState(state));
  //   console.log("Flattened", flattenState(filterState(state)));
  //   console.log("CSV", stateToCsv(state));
  // });

  const value = useMemo(() => stateToCsv(state), [state]);

  return (
    <div className="text-2xl flex flex-col sm:flex-row h-full w-full">
      {/* Reset Button */}
      <ResetButton
        onClick={() => {
          dispatch({
            type: "RESET",
            increaseMatch: settings.autoIncreaseMatch,
          });
        }}
        className="flex-grow flex-1"
      />
      {/* QR Code */}
      <div className="bg-white p-4 ">
        <QRCode
          value={
            settings.rickRoll
              ? "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              : value
          }
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
