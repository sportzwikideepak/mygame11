import React, { useState, useEffect } from "react";
import styles from "./PlayersComparisonFinalMain.module.css";
import Image from "next/image";
import PvPHead from "./PvPHead";
import PvPComaprisonType from "./PvPComaprisonType";
import PvPLeftComparisonPanel from "./PvPLeftComparisonPanel";
import PvPComparisonPlayerCard from "./PvPComparisonPlayerCard";

const PlayersComparisonFinalMain = (props) => {
  const [playerData, setPlayerData] = useState([]);
  const [pageType, setPageType] = useState("last5");

  useEffect(() => {
    const fetchData = async (playerIds) => {
      try {
        const requests = playerIds.map((id) =>
          fetch(
            `https://hammerhead-app-jkdit.ondigitalocean.app/player-stats/${id}/${pageType}`
          )
            .then((res) => res.json())
            .then((data) => ({ playerId: id, matches: data }))
        );
        const results = await Promise.all(requests);
        setPlayerData(results);
      } catch (error) {
        console.error("Failed to fetch player data:", error);
      }
    };

    if (props?.selectedPlayers?.length > 0) {
      fetchData(props.selectedPlayers);
    }
  }, [props?.selectedPlayers, pageType]);

  // console.log(props?.selectedPlayers, "093h208ig");
  // console.log(playerData, "093h208ig");
  return (
    <>
      <div className={styles.page}>
        <div className={styles.main}>
          <PvPHead
            handlePlayerComparisonActive={props?.handlePlayerComparisonActive}
          />
          <PvPComaprisonType pageType={pageType} setPageType={setPageType} />
          <div className={styles.maincontent}>
            <PvPLeftComparisonPanel
              pageType={pageType}
              setPageType={setPageType}
            />
            <div className={styles.cardscroll}>
              {playerData?.map((player, index) => {
                return (
                  <PvPComparisonPlayerCard
                    playersList={props?.playersList}
                    key={index}
                    playerDetails={player}
                    teamA={props.teamA}
                    teamB={props.teamB}
                    teamAName={props?.teamAName}
                    teamBName={props?.teamBName}
                    handlePlayerSelect={props?.handlePlayerSelect}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.fix}>
          <div className={styles.inj}>
            FP - <span>fantasy points</span>
            TR - <span>Team rank</span>
            PR - <span>Position rank</span>R - <span>Runs</span>
            SR - <span>Strike rate</span>
            HS - <span>Highest score</span>W - <span>Wicket</span>C
            <span>Catches</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayersComparisonFinalMain;
