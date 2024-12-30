import { settingsReducer } from "../state/settingsReducer";

describe("settingsReducer", () => {
  // add settingsReducer tests here
  it("should toggle dark mode", () => {
    const initialState = {
      darkMode: false,
    };
    const action = { type: "TOGGLE_DARK_MODE" };
    const newState = settingsReducer(initialState, action);
    expect(newState.darkMode).toBe(true);
  });
});
