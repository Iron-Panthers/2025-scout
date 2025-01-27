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
    "https://script.google.com/a/macros/coderedrobotics.com/s/AKfycbwAfIVWsunGlf3qTKATp-xsMe6InTJ4MSI8MDXznsbS1GPKMump9za5xT-ZuU5M-otMnQ/exec",
  sheetName: "Data Dump",
  colNumber: 1,
};

const editViewSections = [
  {
    label: "Configuration",
    fields: [
      { key: "team", label: "Team", label: "Team", type: "number" },
      { key: "matchNumber", label: "Match Number", type: "number" },
      {
        key: "matchLevel",
        label: "Match Level",
        type: "dropdown",
        options: matchLevels,
      },
      {
        key: "scoutingType",
        label: "Scouting Type",
        type: "dropdown",
        options: [
          { value: "match", label: "Match" },
          { value: "qualitative", label: "Qualitative" },
        ],
      },
      { key: "scouterName", label: "Scouter Name", type: "text" },
      { key: "scouterID", label: "Scouter ID", type: "number" },
      { key: "role", label: "Role", type: "dropdown", options: roles },
      {
        key: "alliance",
        label: "Alliance",
        type: "dropdown",
        options: [
          { value: "blue", label: "Blue" },
          { value: "red", label: "Red" },
        ],
      },
    ],
  },
  {
    label: "Match Scout",
    fields: [
      {
        key: "auto",
        label: "Auto",
        fields: [
          { key: "leave", label: "Leave", type: "checkbox" },
          { key: "coralScoredL1", label: "Coral Scored L1", type: "number" },
          { key: "coralScoredL2", label: "Coral Scored L2", type: "number" },
          { key: "coralScoredL3", label: "Coral Scored L3", type: "number" },
          { key: "coralScoredL4", label: "Coral Scored L4", type: "number" },
          { key: "algaeInNet", label: "Algae In Net", type: "number" },
          {
            key: "algaeInProcessor",
            label: "Algae In Processor",
            type: "number",
          },
          { key: "algaeRemoved", label: "Algae Removed", type: "number" },
        ],
      },
      {
        key: "teleop",
        label: "Teleop",
        fields: [
          { key: "coralScoredL1", label: "Coral Scored L1", type: "number" },
          { key: "coralScoredL2", label: "Coral Scored L2", type: "number" },
          { key: "coralScoredL3", label: "Coral Scored L3", type: "number" },
          { key: "coralScoredL4", label: "Coral Scored L4", type: "number" },
          { key: "algaeInNet", label: "Algae In Net", type: "number" },
          {
            key: "algaeInProcessor",
            label: "Algae In Processor",
            type: "number",
          },
          { key: "algaeRemoved", label: "Algae Removed", type: "number" },
        ],
      },
      {
        key: "endgame",
        label: "Endgame",
        fields: [
          { key: "park", label: "Park", type: "checkbox" },
          { key: "attemptedClimb", label: "Attempted Climb", type: "checkbox" },
          {
            key: "climbSuccessful",
            label: "Climb Successful",
            type: "checkbox",
          },
          {
            key: "climbingCage",
            label: "Climbing Cage",
            type: "dropdown",
            options: [
              { value: "shallow", label: "Shallow" },
              { value: "deep", label: "Deep" },
            ],
          },
          { key: "climbStartTime", label: "Climb Start Time", type: "time" },
        ],
      },
    ],
  },
];

export {
  modes,
  roles,
  matchLevels,
  reviewToggles,
  googleAPIConstants,
  editViewSections,
};
