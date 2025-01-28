import React, { useEffect, useMemo, useState } from "react";
import QRCode from "react-qr-code";
import { filterState, flattenState, stateToCsv } from "../api/csvApi";
import { submitToGoogleSheet } from "../api/googleSheetApi";
import { useAppState, useSettings } from "../state/state";
import Button from "./inputs/Button";
import ResetButton from "./inputs/button_variants/ResetButton";

const ScanData = () => {
  const [state, dispatch] = useAppState();
  const [settings, settingsDispatch] = useSettings();
  const [googleSheetSubmitStatus, setGoogleSheetSubmitStatus] =
    useState("none"); // none, pending, success, error will be in the status

  // For debugging the scandata
  // useEffect(() => {
  //   console.log("State", state);
  //   console.log("Filtered", filterState(state));
  //   console.log("Flattened", flattenState(filterState(state)));
  //   console.log("CSV", stateToCsv(state));
  // });

  const value = useMemo(() => stateToCsv(state), [state]);

  return (
    <div className="text-2xl flex flex-col xs:flex-row h-full w-full">
      {/* Google sheet submitting modal to make sure that it actually submits */}
      {googleSheetSubmitStatus !== "none" && (
        <div className="absolute w-full h-full bg-black bg-opacity-50 text-center flex flex-col justify-center items-center">
          <div className="w-1/2 bg-black rounded-lg p-2 text-white">
            {googleSheetSubmitStatus === "pending" ? (
              <>
                <div className="font-bold m-2">Submitting...</div>
                <ResetButton
                  className={"text-lg"}
                  onClick={() => {
                    setGoogleSheetSubmitStatus("none");
                  }}
                  label="Close"
                  confirmLabel="Confirm Close"
                />
              </>
            ) : googleSheetSubmitStatus === "success" ? (
              <>
                <div className="font-bold m-2 text-3xl">Success!</div>
                <ResetButton
                  className={"text-lg"}
                  onClick={() => {
                    dispatch({
                      type: "RESET",
                      increaseMatch: settings.autoIncreaseMatch,
                    });
                  }}
                  label="Reset and Close"
                  confirmLabel="Confirm Reset and Close"
                />
              </>
            ) : (
              <>
                <div className="font-bold m-2 text-3xl">
                  {googleSheetSubmitStatus}
                  <br />
                  Manually scan the QR Code
                </div>
                <ResetButton
                  className={"text-lg"}
                  onClick={() => {
                    setGoogleSheetSubmitStatus("none");
                  }}
                  label="Close"
                  confirmLabel="Confirm Close"
                />
              </>
            )}
          </div>
        </div>
      )}
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
          setGoogleSheetSubmitStatus("pending");
          submitToGoogleSheet(value, settings.googleSheetLink)
            .then((result) => {
              console.log("Result", result);
              setGoogleSheetSubmitStatus("success");
            })
            .catch((error) => {
              console.error("Error", error);
              setGoogleSheetSubmitStatus(error.message);
            });
        }}
        color={"green"}
        label={"Add to Google Sheet"}
        className="flex-grow flex-1"
      ></Button>
    </div>
  );
};

export default ScanData;
