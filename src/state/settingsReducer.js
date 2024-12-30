export const initialSettings = {
  darkMode: false,
};

export const settingsReducer = (settings, action) => {
  //add functionalities here
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...settings, darkMode: !settings.darkMode };
    default:
      return settings;
  }
};
