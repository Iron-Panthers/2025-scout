import { getSettings } from "./settingsReducer";
import { csvApi } from "../../package.json";

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
  matchLevel: "qualification", // practice, qualification, semifinals, finals
  scoutingType: "match", // match, qualitative
  scouterName: "", // e.g. "Bruce 'the skibidi' Peters"
  scouterID: "", // e.g. "123456"
  role: "blue1", // blue1, blue2, blue3, blueQualitative, red1, red2, red3, redQualitative
  alliance: "blue", // blue, red

  // match scout state
  phase: "auto", // auto, teleop, endgame
  auto: {
    leave: false, // did the robot leave the starting zone
    coralScoredL1: 0, // number of level 1 corals scored
    coralScoredL2: 0, // number of level 2 corals scored
    coralScoredL3: 0, // number of level 3 corals scored
    coralScoredL4: 0, // number of level 4 corals scored
    algaeInNet: 0, // number of algae scored in the net
    algaeInProcessor: 0, // number of algae scored in the processor
    algaeRemoved: 0, // number of algae removed from the reef
  }, // auto phase data
  teleop: {
    coralScoredL1: 0, // number of level 1 corals scored
    coralScoredL2: 0, // number of level 2 corals scored
    coralScoredL3: 0, // number of level 3 corals scored
    coralScoredL4: 0, // number of level 4 corals scored
    algaeInNet: 0, // number of algae scored in the net
    algaeInProcessor: 0, // number of algae scored in the processor
    algaeRemoved: 0, // number of algae removed from the reef
  }, // teleop phase data
  endgame: {
    park: false, // did the robot park
    attemptedClimb: false, // did the robot attempt to climb
    climbSuccessful: undefined, // did the robot successfully climb
    climbingCage: undefined, // did the robot climb the cage if so which? (shallow, deep)
    climbStartTime: undefined, // time the robot started climbing
  }, // endgame phase data

  // qualitative scout state
  qualitativeTeams: [
    { ...qualitativeTeam },
    { ...qualitativeTeam },
    { ...qualitativeTeam },
  ], // qualitative data for the teams - should be an array of three objects

  // review state
  defense: 2, // slider 1,2,3 for defense quality
  robotProblems: false,
  hasScoutingErrors: false,
  scoutingErrors: "",
  comments: "",

  history: [], // add history array to store previous states
};
// the MODE is the current page that the user is on
// the PHASE is the current phase of the match

// action.type is the type of action that is being dispatched
export const stateReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return {
        ...state,
        history: [...state.history, state],
        ...action.payload,
      };
    case "TOGGLE":
      return {
        ...state,
        history: [...state.history, state],
        [action.payload]: !state[action.payload],
      };
    case "RESET":
      // do other stuff to the initial state based on settings here
      // e.g. increase match number by one, save scouter name, etc.
      return {
        ...initialState,
        history: [...state.history, state],
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
          ? ["Configure", "Qualitative", "ScanData"]
          : ["you fucked up"];
      return {
        ...state,
        history: [...state.history, state],
        mode: modes[(modes.indexOf(state.mode) + 1) % modes.length],
      };
    case "SET_PHASE":
      // set our phase to be the phase specified
      return {
        ...state,
        history: [...state.history, state],
        phase: action.phase,
      };
    case "SET_IN_QUAL":
      // set the team in the qualitative team array at the index specified
      return {
        ...state,
        history: [...state.history, state],
        qualitativeTeams: state.qualitativeTeams.map((team, index) =>
          index === action.index ? { ...team, ...action.payload } : team
        ),
      };
    case "SET_IN_PHASE":
      // set the phase data at the phase specified
      return {
        ...state,
        history: [...state.history, state],
        [action.phase]: { ...state[action.phase], ...action.payload },
      };
    case "INCREMENT_IN_PHASE":
      // set the phase data at the phase specified
      return {
        ...state,
        history: [...state.history, state],
        [action.phase]: {
          ...state[action.phase],
          [action.key]: state[action.phase][action.key] + 1,
        },
      };
    case "TOGGLE_IN_PHASE":
      // toggle the phase data at the phase specified
      return {
        ...state,
        history: [...state.history, state],
        [action.phase]: {
          ...state[action.phase],
          [action.key]: !state[action.phase][action.key],
        },
      };
    case "UNDO":
      // undo the last action
      if (state.history.length === 0) return state;
      const previousState = state.history[state.history.length - 1];
      return { ...previousState, history: state.history.slice(0, -1) };
    default:
      return state;
  }
};
