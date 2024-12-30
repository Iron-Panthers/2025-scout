export const initialState = {
  // full app state
  mode: "Configure", // Configure, Scout, Review, ScanData, Settings, ConfigQualitative, Qualitative

  // configuration state
  team: undefined, // e.g. 5026
  matchNumber: undefined, // e.g. 72
  scouterName: "", // e.g. "Bruce 'the skibidi' Peters"
  matchType: "qualification", // practice, qualification, semifinals, finals
  scoutingType: "match", // match, qualitative

  // match scout state
  phase: "auto", // auto, teleop, endgame
  auto: {}, // auto phase data
  teleop: {}, // teleop phase data
  endgame: {}, // endgame phase data

  // qualitative scout state
  teamQualitative: [], // qualitative data for the teams - should be an array of three objects

  // review state
  defense: false,
  scoutingErrors: false, // maybe change to something else
  comments: "",
};
// the MODE is the current page that the user is on
// the PHASE is the current phase of the match

// action.type is the type of action that is being dispatched
export const stateReducer = (state, action) => {
  //add functionalities here
  switch (action.type) {
    case "SET":
      return { ...state, ...action.payload }; // handle the undo stuff later - if it don't work than thats my bad
    case "RESET":
      // do other stuff to the initial state based on settings here
      // e.g. increase match number by one, save scouter name, etc.
      return initialState;
    case "NEXT_MODE":
      // do stuff to the state based on the current mode
      // e.g. if mode is Configure, change to Scout
      // but if the scouting type is qualitative, change to Qualitative
      return state;
    case "SET_PHASE":
      // set our phase to be the phase specified
      return state;
    default:
      return state;
  }
};
