"use client";
import React, { useState } from "react";
import SquadsFilter from "./SquadsFilter";
import SquadsTable from "./SquadsTable";

// shortFormGenerate("left hand ball");

const SquadsListMain = (props) => {
  const [state, setState] = useState({
    playerPosition: "",
    battingStyle: "",
    bowlingStyle: "",
  });

  // console.log(state, "904jhngb40uj");

  const handlePlayFilterChange = (filterType, filterApplied) => {
    setState((prevState) => ({
      ...prevState,
      playerPosition: "",
      battingStyle: "",
      bowlingStyle: "",
      [filterType]: filterApplied,
    }));
  };

  const extractUniqueAttributes = (players, attribute) => {
    return Array.from(
      new Set(
        players
          .map((player) => player[attribute])
          .filter((attr) => attr && attr !== "")
      )
    );
  };

  const playingPositions = extractUniqueAttributes(
    [...(props?.playerListWithDetails || [])],
    "playing_role"
  );
  const playingBattingStyles = extractUniqueAttributes(
    [...(props?.playerListWithDetails || [])],
    "batting_style"
  );
  const playingBowlingStyles = extractUniqueAttributes(
    [...(props?.playerListWithDetails || [])],
    "bowling_style"
  );

  return (
    <>
      <SquadsFilter
        handlePlayFilterChange={handlePlayFilterChange}
        playingPositions={playingPositions}
        playingBattingStyles={playingBattingStyles}
        playingBowlingStyles={playingBowlingStyles}
      />
      <SquadsTable
        squadTeamA={props?.squadTeamA}
        squadTeamB={props?.squadTeamB}
        currentPage={props?.currentPage}
        teamAName={props?.teamAName}
        teamBName={props?.teamBName}
        playerListWithDetails={props?.playerListWithDetails}
        playerPosition={state?.playerPosition}
        battingStyle={state?.battingStyle}
        bowlingStyle={state?.bowlingStyle}
      />
    </>
  );
};

export default SquadsListMain;
