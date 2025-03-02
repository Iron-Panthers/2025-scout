import React from "react";
import { version } from "../../package.json";
import { settingsInfo } from "../state/settingsReducer";
import { useAppState, useSettings } from "../state/state";
import Button from "./inputs/Button";
import ShortTextInput from "./inputs/ShortTextInput";
import ToggleButton from "./inputs/ToggleButton";

const Settings = () => {
  const [settings, dispatchSettings] = useSettings();
  const [state, dispatch] = useAppState();

  return (
    <div className="flex flex-col items-center relative overflow-hidden">
      <Button
        label={"Back"}
        className="absolute top-2 left-2"
        onClick={() => {
          dispatch({ type: "SET", payload: { mode: "Configure" } });
        }}
      />
      <div className="text-2xl font-bold mt-4">Settings</div>
      <div className="text-xs mb-4">Version {version}</div>
      <div className="flex flex-col overflow-scroll w-3/4 flex-1">
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
              ) : settingInfo.type === "string" ? (
                <ShortTextInput
                  label={settingInfo.name}
                  value={settings[settingInfo.key]}
                  onChange={(e) => {
                    dispatchSettings({
                      type: "SET",
                      payload: { [settingInfo.key]: e.target.value },
                    });
                  }}
                />
              ) : (
                <div>Unsupported type</div>
              )}
              <div className="text-xs m-2">{settingInfo.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Settings;
