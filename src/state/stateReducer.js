import { getSettings } from "./settingsReducer";

const qualitativeTeam = {
  team: undefined, // e.g. 5026
  quickness: 1, // 1-3
  fieldAwareness: 1, // 1-3
};

export const initialState = {
  // full app state
  mode: "Configure", // Configure, Scout, Review, ScanData, Settings, Qualitative, Edit

  // configuration state
  team: undefined, // e.g. 5026
  matchNumber: undefined, // e.g. 72
  scouterName: "", // e.g. "Bruce 'the skibidi' Peters"
  scouterID: "", // e.g. "123456"
  role: "blue1", // blue1, blue2, blue3, blueQualitative, red1, red2, red3, redQualitative
  matchLevel: "qualification", // practice, qualification, semifinals, finals
  alliance: "blue", // blue, red
  scoutingType: "match", // match, qualitative

  // match scout state
  phase: "auto", // auto, teleop, endgame
  auto: {}, // auto phase data
  teleop: {}, // teleop phase data
  endgame: {}, // endgame phase data

  // qualitative scout state
  qualitativeTeams: [
    { ...qualitativeTeam },
    { ...qualitativeTeam },
    { ...qualitativeTeam },
  ], // qualitative data for the teams - should be an array of three objects

  // review state
  defense: false,
  robotProblems: false,
  hasScoutingErrors: false,
  scoutingErrors: "",
  comments: "",
};
// the MODE is the current page that the user is on
// the PHASE is the current phase of the match

// action.type is the type of action that is being dispatched
export const stateReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return { ...state, ...action.payload }; // handle the undo stuff later - if it don't work than thats my bad
    case "TOGGLE":
      return { ...state, [action.payload]: !state[action.payload] };
    case "RESET":
      // do other stuff to the initial state based on settings here
      // e.g. increase match number by one, save scouter name, etc.
      console.log(getSettings());
      console.log(typeof state.matchNumber);
      return {
        ...initialState,
        matchNumber:
          typeof state.matchNumber === "number" && action.increaseMatch
            ? state.matchNumber + 1
            : initialState.matchNumber,
        scouterName: state.scouterName,
        scouterID: state.scouterID,
        role: state.role,
        matchLevel: state.matchLevel,
        alliance: state.alliance,
        scoutingType: state.scoutingType,
      };
    case "NEXT_MODE":
      // do stuff to the state based on the current mode
      // e.g. if mode is Configure, change to Scout
      // but if the scouting type is qualitative, change to Qualitative

      // check the current modes that we care about
      const modes =
        state.scoutingType === "match"
          ? ["Configure", "Scout", "Review", "ScanData"]
          : state.scoutingType === "qualitative"
          ? ["Configure", "Qualitative", "Review", "ScanData"]
          : ["you fucked up"];
      return {
        ...state,
        mode: modes[(modes.indexOf(state.mode) + 1) % modes.length],
      };
    case "SET_PHASE":
      // set our phase to be the phase specified
      return { ...state, phase: action.phase };
    case "SET_IN_QUAL":
      // set the team in the qualitative team array at the index specified
      return {
        ...state,
        qualitativeTeams: state.qualitativeTeams.map((team, index) =>
          index === action.index ? { ...team, ...action.payload } : team
        ),
      };
    default:
      return state;
  }
};
