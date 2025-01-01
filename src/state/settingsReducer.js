import { version } from "../../package.json";
const versionArray = version.split(".");

export const initialSettings = {
  darkMode: false,
  autoIncreaseMatch: true,
  autoAutofillTeamNumber: false,
  version: {
    major: parseInt(versionArray[0]),
    minor: parseInt(versionArray[1]),
    patch: parseInt(versionArray[2]),
  },
};

export const settingsInfo = [
  {
    name: "Dark Mode",
    key: "darkMode",
    type: "boolean",
    description: "Enable dark mode",
  },
  {
    name: "Auto Increase Match",
    key: "autoIncreaseMatch",
    type: "boolean",
    description: "Automatically increase match number",
  },
  {
    name: "Auto Autofill Team Number",
    key: "autoAutofillTeamNumber",
    type: "boolean",
    description: "Automatically autofill team number when possible",
  },
];

export const getSettings = () => {
  return {
    ...initialSettings,
    ...JSON.parse(localStorage.getItem("settings") ?? "{}"),
    version: { ...initialSettings.version },
  };
};

export const initialStoredSettings = getSettings();

const settingsReducerInternal = (settings, action) => {
  //add functionalities here
  switch (action.type) {
    case "SET":
      return { ...settings, ...action.payload };
    case "TOGGLE":
      return { ...settings, [action.payload]: !settings[action.payload] };
    default:
      return settings;
  }
};

export const settingsReducer = (state, action) => {
  const newState = settingsReducerInternal(state, action);
  localStorage.setItem("settings", JSON.stringify(newState));
  return newState;
};
