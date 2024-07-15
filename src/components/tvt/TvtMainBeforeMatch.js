"use client";
import React, { useState } from "react";
import styles from "../../app/[match-details]/tvt/teamvsteam.module.css";
import Image from "next/image";
import TvTHead from "./TvTHead";
import TeamSelect from "./TeamSelect";
import MatchFormatSelect from "./MatchFormatSelect";
import MatchNoSelector from "./MatchNoSelector";
import Search from "./Search";
import PlayerTableTvT from "./PlayerTableTvT";
import Bottomtvt from "./Bottomtvt";
import PlayerTableTvTBefore from "./PlayerTableTvTBefore";

const TvtMainBeforeMatch = (props) => {
  const [selectedTeam, setSelectedTeam] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState("test");

  const handleSelectedTeamChange = (team) => {
    setSelectedTeam(team);
  };

  const handleSelectedFormatChange = (format) => {
    // alert(format, ": selected");
    setSelectedFormat(format);
  };
  //   console.log(props?.playing11?.teama?.squads, "pugbiph0pig");

  const teamStatsA = [...props?.playing11?.teama?.squads];

  const teamStatsB = [...props?.playing11?.teamb?.squads];

  // console.log(teamStatsA, "984gf92803t08hi");

  return (
    <>
      <div>
        <TvTHead
          nameTeamA={props?.nameTeamA}
          nameTeamB={props?.nameTeamB}
          matchStarts={props?.matchStarts}
        />

        <div className={styles.teamstatsmain}>
          <TeamSelect
            nameTeamA={props?.nameTeamA}
            nameTeamB={props?.nameTeamB}
            handleSelectedTeamChange={handleSelectedTeamChange}
            selectedTeam={selectedTeam}
          />

          {/* <MatchNoSelector /> */}

          <MatchFormatSelect
            handleSelectedFormatChange={handleSelectedFormatChange}
            selectedFormat={selectedFormat}
          />

          {/* <Search /> */}
          <PlayerTableTvTBefore
            selectedFormat={selectedFormat}
            data={selectedTeam === 0 ? teamStatsA : teamStatsB}
            nameTeamA={props?.nameTeamA}
            nameTeamB={props?.nameTeamB}
          />
          {/* <PlayerTableTvT /> */}

          <Bottomtvt />
        </div>
      </div>
    </>
  );
};

export default TvtMainBeforeMatch;
