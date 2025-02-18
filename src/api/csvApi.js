import { json2csv } from "json-2-csv";
import { csvApi } from "../../package.json";
// convert to csv here

// This is intended to be a failsafe and added layer of abstraction between our state and what ends up going into the csv
// If I'm stupid and accidentally mess up the state last minute (maybe change the position of a key or something), this will make it so that 'hopefully' it shouldn't effect our csv output
export const filterState = (state) => {
  const isQualitative = state.scoutingType === "qualitative";

  // things we want in both modes
  const both = {
    csvVersion: csvApi,
    scouterName: state.scouterName,
    scouterID: state.scouterID,
    role: state.role,
    alliance: state.alliance,
    team: state.team,
    matchNumber: state.matchNumber,
    matchLevel: state.matchLevel,
  };

  const qualitative = {
    ...flattenQualState(state.qualitativeTeams),
  };

  const match = {
    auto: state.auto,
    teleop: state.teleop,
    endgame: state.endgame,
    defense: state.defense,
    robotProblems: state.robotProblems,
    hasScoutingErrors: state.hasScoutingErrors,
    scoutingErrors: state.scoutingErrors,
    comments: state.comments,
  };

  return {
    ...both,
    ...(isQualitative ? qualitative : match),
  };
};

const flattenQualState = (state) => {
  return Object.entries(state).reduce((obj, [key, val]) => {
    if (Array.isArray(val)) {
      return val.reduce((obj, val, i) => {
        obj = {
          ...obj,
          ...flattenQualState({ [`${key}-${i}`]: val }),
        };
        return obj;
      }, obj);
    } else if (typeof val === "object" && val !== null) {
      Object.entries(val).forEach(([key2, val2]) => {
        obj[`${key}-${key2}`] = val2;
      });
    } else {
      obj[key] = val;
    }
    return obj;
  }, {});
};

// flatten all objects in the state - we don't really need arrays i think
export const flattenState = (state) => {
  return Object.entries(state).reduce((obj, [key, val]) => {
    if (Array.isArray(val)) {
      const stringified = val.map((val) => JSON.stringify(val));
      obj[key] = stringified;
    } else if (typeof val === "object" && val !== null) {
      Object.entries(val).forEach(([key2, val2]) => {
        obj[`${key}-${key2}`] = val2;
      });
    } else {
      obj[key] = val;
    }
    return obj;
  }, {});
};

export const stateToCsv = (state) => {
  const filtered = filterState(state);
  const flattened = flattenState(filtered);

  console.log("Keys for Rain (HI RAIN!!!)", Object.keys(flattened));

  const csv = json2csv(flattened, { prependHeader: false });
  return csv;
};

export const castType = (string) => {
  if (isFinite(string) && !isNaN(parseFloat(string)))
    return Number.parseFloat(string);
  if (string === "true") return true;
  if (string === "false") return false;

  return string;
};

/** shallow iteration over an object, to cast types into their respective values if applicable or leave them as strings */
export const castTypes = (object) => {
  return Object.entries(object).reduce((obj, [key, value]) => {
    obj[key] = castType(value);

    return obj;
  }, {});
};
