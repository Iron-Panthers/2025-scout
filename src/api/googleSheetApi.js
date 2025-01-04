import { googleAPIConstants } from "../constants";

// This is a function that connects to a google app script
// It runs a function in the script that adds a the data to a google sheet
// The google sheet is defined by the user
// If multiple requests are made at the same time, they will be added to the sheet in order but they will not override eachother (i.e. once they reach the google server they will be processed sequentially)
export const submitToGoogleSheet = async (data) => {
  const { scriptURL, sheetName, colNumber } = googleAPIConstants;
  const sheetURL =
    "https://docs.google.com/spreadsheets/d/18aaCpi5fXiX6brnfSokG2z294Vt7ImoQWLaaExzSLJE/edit";

  try {
    const response = await fetch(
      scriptURL +
        `?csvData=${data}&sheetURL=${sheetURL}&sheetName=${sheetName}&colNumber=${colNumber}`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    throw error;
  }
};
