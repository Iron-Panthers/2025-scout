import { version } from "../../package.json";
const versionArray = version.split(".");

export const initialSettings = {
  version: {
    major: parseInt(versionArray[0]),
    minor: parseInt(versionArray[1]),
    patch: parseInt(versionArray[2]),
  },
  prevVersion: {
    major: parseInt(versionArray[0]),
    minor: parseInt(versionArray[1]),
    patch: parseInt(versionArray[2]),
  },
  darkMode: false,
  autoIncreaseMatch: true,
  autoAutofillTeamNumber: false,
  eventID: "2024miken",
  googleSheetLink:
<<<<<<< HEAD
    "https://docs.google.com/spreadsheets/d/1h0gSCY-ZWZskMp37Uva4hfjcncRGoFHKk2RqDea3jK0/edit?gid=195681231#gid=195681231",
=======
    "https://docs.google.com/spreadsheets/d/1Q9UFEYUi2YjhTI84I-R0SoF4drZWVNoXEb4i9eGk1Cw/edit?gid=0#gid=0",
>>>>>>> 0396beea699481a21e172013662ea2ebd8e66c19
  rickRoll: false,
  subwaySurf: false,
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
  {
    name: "Event ID",
    key: "eventID",
    type: "string",
    description: "Enter the event ID. format: YYYY[EventCode] (e.g. 2024miken)",
  },
  {
    name: "Google Sheet Link",
    key: "googleSheetLink",
    type: "string",
    description:
      "Insert the link to the current scouting google sheet - make sure it is the correct link",
  },
];

export const getSettings = () => {
  let settings = {
    ...initialSettings,
    ...JSON.parse(localStorage.getItem("settings") ?? "{}"),
    version: { ...initialSettings.version },
  };

  // updating settings if version has changed
  if (settings.version.patch !== settings.prevVersion.patch) {
    settings = {
      ...settings,
      googleSheetLink: initialSettings.googleSheetLink,
      eventID: initialSettings.eventID,
    };
  }
  return settings;
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
