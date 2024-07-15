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

const TvtMain = (props) => {
  const [selectedTeam, setSelectedTeam] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState("test");

  const handleSelectedTeamChange = (team) => {
    // alert(team);
    setSelectedTeam(team);
  };

  const handleSelectedFormatChange = (format) => {
    // alert(format, ": selected");
    setSelectedFormat(format);
  };

  const teamStatsA = [
    ...(props?.data?.response?.points?.teama?.playing11 ?? []),
    ...(props?.data?.response?.points?.teama?.substitute ?? []),
  ];

  const teamStatsB = [
    ...(props?.data?.response?.points?.teamb?.playing11 ?? []),
    ...(props?.data?.response?.points?.teamb?.substitute ?? []),
  ];

  // console.log(teamStats, "984gf92803t08hi");

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

          {/* <MatchFormatSelect
            handleSelectedFormatChange={handleSelectedFormatChange}
            selectedFormat={selectedFormat}
          /> */}

          {/* <Search /> */}
          <PlayerTableTvT
            data={selectedTeam === 0 ? teamStatsA : teamStatsB}
            selectedFormat={selectedFormat}
            nameTeamA={props?.nameTeamA}
            nameTeamB={props?.nameTeamB}
            selectedTeam={selectedTeam}
          />
          {/* <PlayerTableTvT /> */}

          <Bottomtvt />
        </div>
      </div>
    </>
  );
};

export default TvtMain;
