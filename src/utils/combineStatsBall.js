export default function combinedBowlingStats(bowlingData) {
  const combinedStats = {
    matches: 0,
    innings: 0,
    balls: 0,
    overs: 0, // Note: You'll need to calculate the total overs from balls outside of this function if required
    runs: 0,
    wickets: 0,
    wicket4i: 0,
    wicket5i: 0,
    wicket10m: 0,
    hattrick: 0,
    expensive_over_runs: 0,
  };

  // Formats to consider
  const formats = ["test", "odi", "t20i", "t20", "lista", "firstclass", "t10"];

  formats.forEach((format) => {
    const stats = bowlingData[format];
    if (stats) {
      combinedStats.matches += parseInt(stats.matches) || 0;
      combinedStats.innings += parseInt(stats.innings) || 0;
      combinedStats.balls += parseInt(stats.balls) || 0;
      combinedStats.runs += parseInt(stats.runs) || 0;
      combinedStats.wickets += parseInt(stats.wickets) || 0;
      combinedStats.wicket4i += parseInt(stats.wicket4i) || 0;
      combinedStats.wicket5i += parseInt(stats.wicket5i) || 0;
      combinedStats.wicket10m += parseInt(stats.wicket10m) || 0;
      combinedStats.hattrick += parseInt(stats.hattrick) || 0;
      combinedStats.expensive_over_runs +=
        parseInt(stats.expensive_over_runs) || 0;
    }
  });

  return combinedStats;
}

// Modified fetchPlayer function to use combinedBowlingStats
const fetchPlayer = async (playerId) => {
  const response = await fetch(
    `${entity_url_v2}/players/${playerId}/stats?token=${entity_api_key}`
  );
  const data = await response.json();

  // Use the combinedBowlingStats function to get combined stats
  const combinedStats = combinedBowlingStats(data?.data1?.response?.bowling);

  return combinedStats;
};
