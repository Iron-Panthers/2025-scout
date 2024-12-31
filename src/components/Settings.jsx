import React from "react";
import { useAppState, useSettings } from "../state/state";
import { settingsInfo } from "../state/settingsReducer";
import Button from "./inputs/Button";

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
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked={settings[settingInfo.key]}
                    onChange={() => {
                      dispatchSettings({
                        type: "TOGGLE",
                        payload: settingInfo.key,
                      });
                    }}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">
                    {settingInfo.name}
                  </span>
                </label>
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
