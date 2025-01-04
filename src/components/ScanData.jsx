import React, { useEffect, useMemo, useState } from "react";
import ResetButton from "./inputs/button_variants/ResetButton";
import Button from "./inputs/Button";
import QRCode from "react-qr-code";
import { useAppState, useSettings } from "../state/state";
import { filterState, flattenState, stateToCsv } from "../api/csvApi";
import { submitToGoogleSheet } from "../api/googleSheetApi";

const ScanData = () => {
  const [state, dispatch] = useAppState();
  const [settings, settingsDispatch] = useSettings();
  const [googleSheetSubmitStatus, setGoogleSheetSubmitStatus] =
    useState("none"); // none, pending, success, error

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
      {/* Google sheet submitting modal to make sure that it actually submits */}
      {googleSheetSubmitStatus !== "none" && <div className=""></div>}
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
            settings.rickRoll // its just for the memes
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
          submitToGoogleSheet(value)
            .then((result) => {
              console.log("Result", result);
            })
            .catch((error) => {
              console.error("Error", error);
            });
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
