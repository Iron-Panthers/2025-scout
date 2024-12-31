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
  { value: "blueQualitative", label: "Blue Qualitative" },
  { value: "red1", label: "Red 1" },
  { value: "red2", label: "Red 2" },
  { value: "red3", label: "Red 3" },
  { value: "redQualitative", label: "Red Qualitative" },
];

const matchTypes = [
  { value: "practice", label: "Practice" },
  { value: "qualification", label: "Qualification" },
  { value: "semifinals", label: "Semifinals" },
  { value: "finals", label: "Finals" },
];

const reviewToggles = [
  { key: "defense", label: "Defense" },
  { key: "robotProblems", label: "Robot Problems" },
  { key: "hasScoutingErrors", label: "Scouting Errors" },
];

export { modes, roles, matchTypes, reviewToggles };
