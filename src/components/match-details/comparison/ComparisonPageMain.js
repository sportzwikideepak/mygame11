"use client";
import React, { useState, useEffect } from "react";
import ComparisonSubMain from "./ComparisonSubMain";
import PlayersComparisonFinalMain from "./PlayersComparisonFinalMain";
import Header from "../Header";
import Tabs from "../Tabs";
import Styles from "../../../app/[match-details]/comparison/comparision.module.css";
import PlayerVsTeamFinal from "./PlayerVsTeamFinal";
import { useSearchParams } from "next/navigation";

const ComparisonPageMain = (props) => {
  const searchParams = useSearchParams();

  const player1 = searchParams.get("player1");
  const player2 = searchParams.get("player2");

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const [playerComparisonTabActive, setPlayerComparisonTabActive] =
    useState(false);

  const [selectedPlayerPvt, setSelectedPlayerPvt] = useState();

  const [comparisonType, setComparisonType] = useState("pvp");

  const handlePlayerComparisonActive = (e) => {
    setPlayerComparisonTabActive((prevState) => !prevState);
  };

  const handlePvtPlayerSelect = (playerId) => {
    setSelectedPlayerPvt(playerId);
  };

  const handleComparisonTypeChange = (type) => {
    setComparisonType(type);
  };

  const handlePlayerSelect = (player_id) => {
    if (selectedPlayers.includes(player_id)) {
      setSelectedPlayers(selectedPlayers.filter((id) => id !== player_id));
    } else {
      setSelectedPlayers([...selectedPlayers, player_id]);
    }
  };

  // console.log(player1, "-", player2, "430hin0pin4hg0pihn");
  useEffect(() => {
    if (player1 && player2) {
      setSelectedPlayers([player1, player2]);
      setPlayerComparisonTabActive(true);
    }
  }, [player1, player2]);

  return (
    <>
      {playerComparisonTabActive ? (
        comparisonType == "pvp" ? (
          <PlayersComparisonFinalMain
            selectedPlayers={selectedPlayers}
            handlePlayerComparisonActive={handlePlayerComparisonActive}
            playersList={props?.playersListC}
            teamAName={props?.teamAName}
            teamBName={props?.teamBName}
            teamA={props.teamA}
            teamB={props.teamB}
            handlePlayerSelect={handlePlayerSelect}
            short_title={props?.short_title}
          />
        ) : (
          <PlayerVsTeamFinal
            handlePlayerComparisonActive={handlePlayerComparisonActive}
            handleComparisonTypeChange={handleComparisonTypeChange}
            short_title={props?.short_title}
            selectedPlayerPvt={selectedPlayerPvt}
            playersListC={props?.playersListC}
          />
        )
      ) : (
        <>
          <div className={Styles.page}>
            <div className={Styles.main}>
              <div className={Styles.headall}>
                <Header
                  short_title={props?.short_title}
                  status={props?.status}
                />
                <Tabs currentPage={props?.currentPage} active={props?.active} />
              </div>
              <ComparisonSubMain
                playersListC={props?.playersListC}
                playersList={props.playersList}
                teamA={props.teamA}
                teamB={props.teamB}
                teamAName={props?.teamAName}
                teamBName={props?.teamBName}
                handlePlayerComparisonActive={handlePlayerComparisonActive}
                selectedPlayers={selectedPlayers}
                handlePlayerSelect={handlePlayerSelect}
                handleComparisonTypeChange={handleComparisonTypeChange}
                handlePvtPlayerSelect={handlePvtPlayerSelect}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ComparisonPageMain;
