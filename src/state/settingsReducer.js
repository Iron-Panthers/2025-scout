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
  darkMode: true,
  autoIncreaseMatch: true,
  autoAutofillTeamNumber: false,
  scoutingPageTransitions: true,
  stimulation: true,
  eventID: "2024cacc",
  googleSheetLink:
    "https://docs.google.com/spreadsheets/d/18aaCpi5fXiX6brnfSokG2z294Vt7ImoQWLaaExzSLJE/edit",
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
    name: "Scouting Page Transitions",
    key: "scoutingPageTransitions",
    type: "boolean",
    description: "Enable page transitions",
  },
  {
    name: "Stimulation",
    key: "stimulation",
    type: "boolean",
    description:
      "Enable input and page stimulation (cool animations for the extra dopamine)",
  },
  {
    name: "Rick Roll",
    key: "rickRoll",
    type: "boolean",
    description: "Enable rick roll - please don't do this in a competition",
  },
  {
    name: "Subway Surf",
    key: "subwaySurf",
    type: "boolean",
    description:
      "Increase your concentration- please don't do this in a competition",
  },
  {
    name: "Event ID",
    key: "eventID",
    type: "string",
    description: "Enter the event ID. format: YYYY[EventCode] (e.g. 2024cacc)",
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
