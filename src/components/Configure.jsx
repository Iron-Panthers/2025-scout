import React from "react";
import ShortTextInput from "./inputs/ShortTextInput";
import { useAppState } from "../state/state";
import DropdownInput from "./inputs/DropdownInput";
import { matchLevels, roles } from "../constants";
import Button from "./inputs/Button";
import NextButton from "./inputs/button_variants/NextButton";
import {
  getAllianceNumbersFromMatchInfo,
  getTeamNumberFromMatchInfo,
} from "../api/tbaApi";

const Configure = () => {
  const [state, dispatch] = useAppState();

  const handleTeamNumberAutofill = () => {
    console.log("Autofilling team number");
    if (state.scoutingType === "qualitative") {
      getAllianceNumbersFromMatchInfo(
        state.matchNumber,
        state.matchLevel,
        state.alliance
      )
        .then((teamNumbers) => {
          for (let i = 0; i < teamNumbers.length; i++) {
            dispatch({
              type: "SET_IN_QUAL",
              index: i,
              payload: { team: teamNumbers[i] },
            });
          }
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      const teamIndex = state.role[state.role.length - 1] - 1;
      getTeamNumberFromMatchInfo(
        state.matchNumber,
        state.matchLevel,
        state.alliance,
        teamIndex
      )
        .then((teamNumber) => {
          dispatch({
            type: "SET",
            payload: { team: teamNumber },
          });
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  const canGoNext = () => {
    if (
      !state.scouterName ||
      !state.scouterID ||
      !state.role ||
      !state.matchNumber
    ) {
      return false;
    }
    if (state.scoutingType === "qualitative") {
      return state.qualitativeTeams.every((team) => team.team);
    } else {
      return state.team;
    }
  };

  return (
    <div className="h-full w-full flex flex-col sm:flex-row text-lg">
      {/* Main Body */}
      <div className="grow flex flex-col p-1 gap-1">
        {/* Scouter Info Section */}
        <div className="border-2 border-dark rounded-lg">
          <div className="text-sm ml-1">Scouter Information</div>
          <div className="flex flex-col sm:flex-row justify-between p-2">
            <ShortTextInput
              label="Scouter Name"
              placeholder={"Enter your name here"}
              stateProp={"scouterName"}
            />
            <ShortTextInput
              label="Scouter ID"
              placeholder={"Enter your ID here"}
              stateProp={"scouterID"}
              type="number"
            />
            <DropdownInput
              label={"Scouter Role"}
              options={roles}
              stateProp={"role"}
              onChange={(e) => {
                if (e.target.value.includes("Qualitative")) {
                  //check qualitative vs match
                  dispatch({
                    type: "SET",
                    payload: {
                      scoutingType: "qualitative",
                    },
                  });
                } else {
                  dispatch({
                    type: "SET",
                    payload: {
                      scoutingType: "match",
                    },
                  });
                }
                if (e.target.value.includes("blue")) {
                  dispatch({
                    type: "SET",
                    payload: {
                      alliance: "blue",
                    },
                  });
                } else {
                  dispatch({
                    type: "SET",
                    payload: {
                      alliance: "red",
                    },
                  });
                }
              }}
            />
          </div>
        </div>
        {/* Match info section */}
        <div className="border-2 border-dark rounded-lg flex-grow flex flex-col justify-between ">
          <div className="text-sm ml-1 justify-self-start">
            Match Information
          </div>
          <div className="flex flex-col sm:flex-row justify-evenly sm:h-20 gap-2 p-2">
            <ShortTextInput
              label={"Match Number"}
              placeholder={"Enter the match # here"}
              stateProp={"matchNumber"}
              type="number"
            />
            <DropdownInput
              label={"Match Level"}
              options={matchLevels}
              stateProp={"matchLevel"}
            />
          </div>
          {state.scoutingType === "qualitative" ? (
            <div className="flex flex-col sm:flex-row justify-evenly sm:h-20 p-2 gap-2">
              {state.qualitativeTeams.map((team, index) => (
                <ShortTextInput
                  label={"Team " + (index + 1) + " number"}
                  placeholder={"Enter team number here"}
                  onChange={(e) => {
                    dispatch({
                      type: "SET_IN_QUAL",
                      index: index,
                      payload: { team: e.target.value },
                    });
                  }}
                  value={team.team}
                  key={index}
                  type="number"
                />
              ))}
            </div>
          ) : (
            <ShortTextInput
              label={"Team Number"}
              placeholder={"Enter team number here"}
              stateProp={"team"}
              className={"p-2 h-20"}
              type="number"
            />
          )}
          <Button //only works with qualitative matches
            label={
              "Autofill Team Number" +
              (state.scoutingType === "qualitative" ? "s" : "")
            }
            onClick={handleTeamNumberAutofill}
            disabled={!state.matchNumber}
            className={"m-2"}
          />
        </div>
      </div>
      {/* Buttons on the right side */}
      <div className="w-full min-w-20 sm:w-[10%] flex flex-row sm:flex-col p-1">
        <Button
          label={"⚙️"}
          color="blue"
          className="text-2xl flex-grow"
          onClick={() => {
            dispatch({ type: "SET", payload: { mode: "Settings" } });
          }}
        />
        <NextButton className={"flex-grow"} disabled={!canGoNext()} />
      </div>
    </div>
  );
};

export default Configure;
