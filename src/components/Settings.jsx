import React from "react";
import { useAppState, useSettings } from "../state/state";
import { settingsInfo } from "../state/settingsReducer";
import Button from "./inputs/Button";
import ToggleButton from "./inputs/ToggleButton";

const Settings = () => {
  const [settings, dispatchSettings] = useSettings();
  const [state, dispatch] = useAppState();

  return (
    <div className="flex flex-col items-center relative">
      <Button
        label={"Back"}
        className="absolute top-2 left-2"
        onClick={() => {
          dispatch({ type: "SET", payload: { mode: "Configure" } });
        }}
      />
      <div className="text-2xl font-bold m-4">Settings</div>
      <div className="flex flex-col">
        {settingsInfo.map((settingInfo, index) => {
          return (
            <div key={index} className="m-2">
              {settingInfo.type === "boolean" ? (
                <ToggleButton
                  onChange={() => {
                    dispatchSettings({
                      type: "TOGGLE",
                      payload: settingInfo.key,
                    });
                  }}
                  value={settings[settingInfo.key]}
                  label={settingInfo.name}
                />
              ) : (
                <div>Unsupported type</div>
              )}
              <div className="text-xs text-center">
                {settingInfo.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Settings;
