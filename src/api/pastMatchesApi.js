export const saveMatch = (matchData, dispatch) => {
  // Get past matches from local storage
  const matches = JSON.parse(localStorage.getItem("pastMatches")) || [];

  // Check if the match is already saved
  const isMatchSaved = matches.some((match) => match.id === matchData.id);
  if (isMatchSaved) {
    // If match is already saved, don't save it again
    return;
  }

  // Save match to local storage
  matches.push(matchData);
  localStorage.setItem("pastMatches", JSON.stringify(matches));
  console.log(matchData);
};

export const getPastMatches = () => {
  // Get past matches from local storage
  return JSON.parse(localStorage.getItem("pastMatches")) || [];
};
