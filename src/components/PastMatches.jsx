import React, { useEffect, useMemo, useState } from "react";
import QRCode from "react-qr-code";
import { stateToCsv } from "../api/csvApi";
import { getPastMatches } from "../api/pastMatchesApi";
import { useAppState, useSettings } from "../state/state";
import AddToGoogleSheetButton from "./inputs/AddToGoogleSheetButton";
import Button from "./inputs/Button";

const PastMatches = () => {
  const [state, dispatch] = useAppState();
  const [settings] = useSettings();
  const [pastMatches, setPastMatches] = useState(getPastMatches());
  const [displayedMatchIndex, setDisplayedMatchIndex] = useState(0);

  const value = useMemo(
    () => stateToCsv(pastMatches[displayedMatchIndex]),
    [displayedMatchIndex, pastMatches]
  );

  // set us to be default to showing the last match
  useEffect(() => {
    setDisplayedMatchIndex(pastMatches.length - 1);
  }, [pastMatches]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col xs:flex-row flex-1 h-4/5">
        {/* Side menu */}
        <div className="flex flex-row-reverse xs:flex-col-reverse justify-start gap-1 h-1/4 sm:w-1/4 overflow-x-scroll border-r-2 border-black dark:border-white xs:h-full ">
          {pastMatches?.map((match, index) => (
            <Button
              key={index}
              color={index === displayedMatchIndex ? "blue" : "gray"}
              onClick={() => setDisplayedMatchIndex(index)}
            >
              <div>Match #{match.matchNumber}</div>
              <div>Role: {match.role}</div>
              <div>Team: {match.team}</div>
            </Button>
          ))}
        </div>
        {/* QR Code */}
        <div className="bg-white p-2">
          <QRCode
            value={
              settings.rickRoll // its just for the memes
                ? "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                : value
            }
            className="h-full w-full"
          />
        </div>
        <AddToGoogleSheetButton value={value} className={"flex-grow flex-1"} />
      </div>

      <Button
        label={"Back"}
        color="blue"
        onClick={() => {
          dispatch({ type: "SET", payload: { mode: "Configure" } });
        }}
        className={"w-full"}
      />
    </div>
  );
};

export default PastMatches;
