"use client";
import React, { useState, useEffect } from "react";
import TeamLineupSelectTeam from "./TeamLineupSelectTeam";
import TeamLineupResult from "./TeamLineupResult";
import { useSearchParams } from "next/navigation";
import buildFantasyTeams from "@/utils/buildFantasyTeams";

const TeamLineUpMain = ({ playing11, playing11Main, teamNames, stats }) => {
  const [showResult, setShowResult] = useState(false);

  const searchParams = useSearchParams();

  const matchId = searchParams.get("match-id");
  const teamBasis = searchParams.get("team-basis");
  const platform = searchParams.get("platform");
  const teamCount = searchParams.get("team-count");
  const wkCount = searchParams.get("wk-count");
  const batCount = searchParams.get("bat-count");
  const arCount = searchParams.get("ar-count");
  const bowCount = searchParams.get("bow-count");
  const teamType = searchParams.get("team-type");

  const teamProps = {
    matchId,
    teamBasis,
    platform,
    teamCount,
    wkCount,
    batCount,
    arCount,
    bowCount,
    teamType,
  };

  const [selectedTeam, setSelectedTeam] = useState([]);

  useEffect(() => {
    const isPlaying11Announced = playing11Main && playing11Main.length > 0;
    const team = isPlaying11Announced ? [...playing11Main] : [...playing11];
    const enhancedTeam = team.map((player) => {
      const playerStats = stats?.find(
        (item) => parseInt(item?.player?.pid) === parseInt(player?.pid)
      );
      console.log("Player ID:", player?.pid);
      console.log("Found Player Stats:", playerStats);
      return {
        ...player,
        player_stats: playerStats,
      };
    });
    setSelectedTeam(enhancedTeam);
  }, [playing11, playing11Main, stats]);

  const teams = buildFantasyTeams(
    stats,
    selectedTeam,
    teamNames,
    teamCount,
    100,
    wkCount,
    batCount,
    arCount,
    bowCount
  );

  //   console.log(teamNames, "teamNames");
  //   console.log(teams, "teams");

  return (
    <>
      {showResult ? (
        <TeamLineupResult
          {...teamProps}
          playing11={playing11}
          playing11Main={playing11Main}
          teamNames={teamNames}
          stats={stats}
          setSelectedTeam={setSelectedTeam}
          selectedTeam={selectedTeam}
          teams={teams}
        />
      ) : (
        <TeamLineupSelectTeam
          {...teamProps}
          playing11={playing11}
          playing11Main={playing11Main}
          teamNames={teamNames}
          stats={stats}
          setSelectedTeam={setSelectedTeam}
          selectedTeam={selectedTeam}
          setShowResult={setShowResult}
        />
      )}
    </>
  );
};

export default TeamLineUpMain;
