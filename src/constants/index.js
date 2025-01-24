const modes = [
  "Configure",
  "Scout",
  "Review",
  "ScanData",
  "Settings",
  "Qualitative",
  "Edit",
];

const roles = [
  { value: "blue1", label: "Blue 1" },
  { value: "blue2", label: "Blue 2" },
  { value: "blue3", label: "Blue 3" },
  { value: "red1", label: "Red 1" },
  { value: "red2", label: "Red 2" },
  { value: "red3", label: "Red 3" },
];

const matchLevels = [
  { value: "practice", label: "Practice" },
  { value: "qualification", label: "Qualification" },
  { value: "semifinals", label: "Semifinals" },
  { value: "finals", label: "Finals" },
];

const reviewToggles = [
  { key: "robotProblems", label: "Robot Problems" },
  { key: "hasScoutingErrors", label: "Scouting Errors" },
];

const googleAPIConstants = {
  scriptURL:
    "https://script.google.com/macros/s/AKfycbzCgHhAONBzuULPxXG8oKCOAPp8mSf_YVUbuxKxWY_BAtp_Ed0DiERIVYnWv8rnIbYwMQ/exec",
  sheetName: "Bruce's New Tab",
  colNumber: 3,
};

export { modes, roles, matchLevels, reviewToggles, googleAPIConstants };
