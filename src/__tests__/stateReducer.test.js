import { initialState, stateReducer } from "../state/stateReducer";

describe("SET", () => {
  it("should set the state", () => {
    const initialState = {
      defense: false,
    };
    const action = { type: "SET", payload: { defense: true } };
    const newState = stateReducer(initialState, action);
    expect(newState.defense).toBe(true);
  });
});

describe("RESET", () => {
  it("should reset the state", () => {
    let newState = initialState;
    newState.defense = true;
    const action = { type: "RESET" };
    newState = stateReducer(newState, action);
    expect(newState).toEqual(initialState);
  });
});

describe("NEXT_MODE", () => {
  it("should change the mode in match scout", () => {
    const initialState = {
      mode: "Configure",
      scoutingType: "match",
    };
    const action = { type: "NEXT_MODE" };
    const newState = stateReducer(initialState, action);
    expect(newState.mode).toBe("Scout");
  });
  it("should change the mode in qualitative scout", () => {
    const initialState = {
      mode: "ConfigureQualitative",
      scoutingType: "qualitative",
    };
    const action = { type: "NEXT_MODE" };
    const newState = stateReducer(initialState, action);
    expect(newState.mode).toBe("Qualitative");
  });
});

describe("SET_PHASE", () => {
  it("should set the phase", () => {
    const initialState = {
      phase: "auto",
    };
    const action = { type: "SET_PHASE", phase: "teleop" };
    const newState = stateReducer(initialState, action);
    expect(newState.phase).toBe("teleop");
  });
});
