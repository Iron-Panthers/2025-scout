import React from "react";
import ShortTextInput from "./inputs/ShortTextInput";
import { useAppState } from "../state/state";
import DropdownInput from "./inputs/DropdownInput";
import { matchTypes, roles } from "../constants";
import Button from "./inputs/Button";

const Configure = () => {
  const [state, dispatch] = useAppState();

  const handleTeamNumberAutofill = () => {};

  return (
    <div className="h-full w-full flex flex-row">
      {/* Main Body */}
      <div className="grow flex flex-col">
        {/* Scouter Info Section */}
        <div className="border-2 border-dark rounded-lg m-1">
          <div className="text-sm ml-1">Scouter Information</div>
          <div className="flex flex-row justify-evenly h-16 p-2">
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
              }}
            />
          </div>
        </div>
        {/* Match info section */}
        <div className="border-2 border-dark rounded-lg m-1 flex-grow">
          <div className="text-sm ml-1 justify-self-start">
            Match Information
          </div>
          <div className="flex flex-col justify-evenly">
            <div className="flex flex-row justify-evenly h-20 p-2">
              <ShortTextInput
                label={"Match Number"}
                placeholder={"Enter the match # here"}
                stateProp={"matchNumber"}
                type="number"
              />
              <DropdownInput
                label={"Match Type"}
                options={matchTypes}
                stateProp={"matchType"}
              />
            </div>
            {state.scoutingType === "qualitative" ? (
              <div className="flex flex-col justify-evenly">
                <div className="flex flex-row justify-evenly h-20 p-2">
                  {state.qualitativeTeams.map((team, index) => (
                    <ShortTextInput
                      label={"Team " + (index + 1) + " number"}
                      placeholder={"Enter team number here"}
                      onChange={() => {
                        dispatch({
                          type: "SET_IN_QUAL",
                          index: index,
                          payload: { team: team.team },
                        });
                      }}
                      value={team.team}
                      key={index}
                      type="number"
                    />
                  ))}
                </div>
                <Button
                  label={"Autofill Team Numbers"}
                  onClick={handleTeamNumberAutofill}
                  disabled={!state.matchNumber}
                  className={"m-2"}
                />
              </div>
            ) : (
              <div className="flex flex-col justify-evenly">
                <ShortTextInput
                  label={"Team Number"}
                  placeholder={"Enter team number here"}
                  stateProp={"team"}
                  className={"p-2 h-20"}
                  type="number"
                />
                <Button
                  label={"Autofill Team Number"}
                  onClick={handleTeamNumberAutofill}
                  disabled={!state.matchNumber}
                  className={"m-2"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Buttons on the right side */}
      <div className="w-20 flex flex-col justify-between p-1">
        <Button
          label={"⚙️"}
          color="blue"
          className="text-3xl"
          onClick={() => {
            dispatch({ type: "SET", payload: { mode: "Settings" } });
          }}
        />
        <Button
          label={"Next"}
          color="green"
          onClick={() => {
            dispatch({ type: "NEXT_MODE" });
            console.log(state);
          }}
          className={"h-20"}
        />
      </div>
    </div>
  );
};

export default Configure;
