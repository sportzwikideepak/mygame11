import seedrandom from "seedrandom";

const buildFantasyTeams = (
  stats,
  allPlayers,
  teamNames,
  numTeams = 15, // Number of teams to return
  maxPoints = 100,
  wkCount,
  batCount,
  arCount,
  bowCount,
  poolSize = 700, // Increased pool size for more diverse teams
  seed = "default_seed" // Seed for reproducibility
) => {
  const rng = seedrandom(seed);

  const ROLES = { BAT: "bat", BOWL: "bowl", ALL: "all", WK: "wk" };
  const MAX_PLAYERS_PER_TEAM = 3;
  const TEAM_SIZE = 11;

  // Helper function to shuffle an array using seedrandom
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Map player IDs to their teams
  const playerTeams = allPlayers.reduce((acc, player) => {
    acc[player.pid] = player.team_id;
    return acc;
  }, {});

  // Function to calculate player score based on advanced metrics
  const calculatePlayerScore = (player) => {
    const rating = player?.player?.fantasy_player_rating || 0;
    const recentMatches = player.last10_matches?.batting || [];

    const batting =
      player.batting?.t20 || player.batting?.odi || player.batting?.test || {};
    const bowling =
      player.bowling?.t20 || player.bowling?.odi || player.bowling?.test || {};

    const recentBattingScore =
      recentMatches.reduce((sum, match) => sum + (match.runs || 0), 0) /
        recentMatches.length || 0;
    const recentBowlingScore =
      recentMatches.reduce((sum, match) => sum + (match.wickets || 0), 0) /
        recentMatches.length || 0;

    const battingScore =
      ((batting.average || 0) * (batting.strike || 0)) / 10000;
    const bowlingScore = bowling.econ
      ? (bowling.average || 0) / bowling.econ / 10
      : 0;
    const recentBattingNormalized = recentBattingScore / 50;
    const recentBowlingNormalized = recentBowlingScore / 5;
    const recentPerformance = rating >= 7 ? 1.5 : 1; // Boost for players with higher fantasy rating

    return (
      (battingScore * 0.5 +
        bowlingScore * 0.5 +
        recentBattingNormalized * 0.25 +
        recentBowlingNormalized * 0.25) *
      recentPerformance
    );
  };

  // Calculate scores and sort players
  const scoredPlayers = stats
    .map((player) => ({
      ...player,
      score: calculatePlayerScore(player),
      teamName: teamNames[playerTeams[player?.player?.pid]] || "-", // Ensure team name is assigned
    }))
    .sort((a, b) => b.score - a.score); // Sort by score

  const generateTeam = (availablePlayers) => {
    // Ensure at least one player from each role
    const roleCategories = {
      [ROLES.BAT]: [],
      [ROLES.BOWL]: [],
      [ROLES.ALL]: [],
      [ROLES.WK]: [],
    };
    availablePlayers.forEach((player) => {
      const role = player.player.playing_role;
      if (roleCategories[role]) {
        roleCategories[role].push(player);
      }
    });

    console.log("Role categories:", roleCategories);

    // Ensure at least one player from each role if the count is zero
    const ensureAtLeastOne = (role, count) => {
      if (count === 0 && roleCategories[role].length > 0) {
        return 1;
      }
      return count;
    };

    wkCount = ensureAtLeastOne(ROLES.WK, parseInt(wkCount, 10));
    batCount = ensureAtLeastOne(ROLES.BAT, parseInt(batCount, 10));
    arCount = ensureAtLeastOne(ROLES.ALL, parseInt(arCount, 10));
    bowCount = ensureAtLeastOne(ROLES.BOWL, parseInt(bowCount, 10));

    console.log("Counts after ensuring at least one:", {
      wkCount,
      batCount,
      arCount,
      bowCount,
    });

    // Select top players from each role based on the counts provided
    const guaranteedPlayers = [];
    const roleCounts = {
      [ROLES.BAT]: batCount,
      [ROLES.BOWL]: bowCount,
      [ROLES.ALL]: arCount,
      [ROLES.WK]: wkCount,
    };
    Object.keys(roleCategories).forEach((role) => {
      if (roleCategories[role].length > 0) {
        guaranteedPlayers.push(
          ...roleCategories[role].slice(0, roleCounts[role])
        );
      }
    });

    console.log("Guaranteed players:", guaranteedPlayers);

    // Remove guaranteed players from the availablePlayers list
    const remainingPlayers = availablePlayers.filter(
      (player) =>
        !guaranteedPlayers.some((gp) => gp.player.pid === player.player.pid)
    );

    // Ensure balanced team from multiple teams and roles within the budget
    const team = [...guaranteedPlayers];
    const teamCount = {};
    const roleCount = {
      [ROLES.BAT]: 0,
      [ROLES.BOWL]: 0,
      [ROLES.ALL]: 0,
      [ROLES.WK]: 0,
    };

    guaranteedPlayers.forEach((player) => {
      const role = player.player.playing_role;
      roleCount[role]++;
      const teamName = player.teamName;
      teamCount[teamName] = (teamCount[teamName] || 0) + 1;
    });

    console.log("Initial team:", team);

    for (const player of remainingPlayers) {
      const teamName = player.teamName;
      const role = player.player.playing_role;

      if (
        (teamCount[teamName] || 0) < MAX_PLAYERS_PER_TEAM &&
        roleCount[role] < roleCounts[role] &&
        !team.some((p) => p.player.pid === player.player.pid)
      ) {
        team.push(player);
        teamCount[teamName] = (teamCount[teamName] || 0) + 1;
        roleCount[role]++;
      }

      if (team.length === TEAM_SIZE) {
        break;
      }
    }

    // If less than 11 players are selected, fill the remaining spots without team restriction
    if (team.length < TEAM_SIZE) {
      for (const player of remainingPlayers) {
        if (!team.some((p) => p.player.pid === player.player.pid)) {
          team.push(player);
        }
        if (team.length === TEAM_SIZE) {
          break;
        }
      }
    }

    console.log("Final team:", team);

    const totalPointsUsed = team.reduce(
      (sum, player) => sum + (player.player.fantasy_player_rating || 0),
      0
    );

    const totalScore = team.reduce((sum, player) => sum + player.score, 0);

    // Generate a caption for the team based on total score
    const caption = `ov. points: ${totalScore.toFixed(2)}`;

    // Explicitly show roles in the final team
    const finalTeamWithRoles = team.map((player) => ({
      ...player,
      role: player.player.playing_role,
    }));

    console.log("Final team with roles:", finalTeamWithRoles);

    return { team: finalTeamWithRoles, totalPointsUsed, caption };
  };

  // Generate a larger pool of teams
  const teams = [];
  for (let i = 0; i < poolSize; i++) {
    const availablePlayers = shuffleArray([...scoredPlayers]); // Shuffle players before generating a team
    const { team, totalPointsUsed, caption } = generateTeam(availablePlayers);
    if (team.length === TEAM_SIZE) {
      teams.push({
        team,
        totalPointsUsed,
        totalScore: team.reduce((sum, player) => sum + player.score, 0), // Calculate team total score
        caption,
      });
    }
  }

  // Sort teams by total score
  teams.sort((a, b) => b.totalScore - a.totalScore);

  // Select and return top 15 teams
  const uniqueTeams = [];
  const teamSignatures = new Set();

  for (const { team, totalPointsUsed, caption } of teams) {
    const signature = team
      .map((player) => player.player.pid)
      .sort()
      .join("-");
    if (!teamSignatures.has(signature)) {
      uniqueTeams.push({ team, totalPointsUsed, caption });
      teamSignatures.add(signature);
    }
    if (uniqueTeams.length >= numTeams) break;
  }

  // Sort the unique teams by total points used
  uniqueTeams.sort((a, b) => b.totalPointsUsed - a.totalPointsUsed);

  return uniqueTeams;
};

export default buildFantasyTeams;
