export default function combineCricketStats(playerStats) {
  // Initialize an object to hold the combined stats
  const combinedStats = {
    matches: 0,
    innings: 0,
    notOut: 0,
    runs: 0,
    balls: 0,
    highestScore: "0",
    centuries: 0,
    halfCenturies: 0,
    fours: 0,
    sixes: 0,
    average: 0,
    strikeRate: 0,
    catches: 0,
    stumpings: 0,
  };

  // Helper function to update the highest score
  const updateHighestScore = (currentHighest, newScore) => {
    const currentHighestInt = parseInt(currentHighest, 10);
    const newScoreInt = parseInt(newScore, 10);
    return newScoreInt > currentHighestInt ? newScore : currentHighest;
  };

  // Loop through each format and aggregate the stats
  for (const format in playerStats.batting) {
    const formatStats = playerStats.batting[format];
    if (formatStats.matches) {
      // This check ensures the format has data
      combinedStats.matches += formatStats.matches;
      combinedStats.innings += formatStats.innings;
      combinedStats.notOut += formatStats.notout || 0; // Some stats might not be present
      combinedStats.runs += formatStats.runs;
      combinedStats.balls += formatStats.balls;
      combinedStats.highestScore = updateHighestScore(
        combinedStats.highestScore,
        formatStats.highest
      );
      combinedStats.centuries += formatStats.run100;
      combinedStats.halfCenturies += formatStats.run50;
      combinedStats.fours += formatStats.run4;
      combinedStats.sixes += formatStats.run6;
      combinedStats.catches += formatStats.catches;
      combinedStats.stumpings += formatStats.stumpings || 0;
    }
  }

  // Calculate the overall batting average and strike rate
  combinedStats.average = combinedStats.runs / combinedStats.innings;
  combinedStats.strikeRate = (combinedStats.runs / combinedStats.balls) * 100;

  // Round the calculated averages to two decimal places
  combinedStats.average = combinedStats.average.toFixed(2);
  combinedStats.strikeRate = combinedStats.strikeRate.toFixed(2);

  return combinedStats;
}

// const combinedData = combineCricketStats(playerData);
// console.log(combinedData);
