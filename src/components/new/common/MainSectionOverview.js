import React from "react";
import Image from "next/image";
import styles from "../../../app/[match-details]/matchDetails.module.css";
import FantasyVideo from "./FantasyVideo";
import MatchDetailsBox from "./MatchDetailsBox";
import TeamComparisonBox from "../overview/TeamComparisonBox";
import SuggestedPlayersBox from "../overview/SuggestedPlayersBox";
import DreamTeamBox from "../overview/DreamTeamBox";
import PlayerStatsBox from "../overview/PlayerStatsBox";
import WeatherNew from "./WeatherNew";

const MainSectionOverview = ({
  match_info,
  topPlayers,
  winning_chances,
  playerPPMDI,
  currentUrl,
}) => {
  return (
    <>
      {/* .........fantasy video......... */}
      <div className={styles.mainContent}>
        <FantasyVideo />
        <div className={styles.allContent}>
          <div className={styles.container1}>
            <MatchDetailsBox match_info={match_info} />
            <TeamComparisonBox
              match_info={match_info}
              winning_chances={winning_chances}
              currentUrl={currentUrl}
            />
            <SuggestedPlayersBox topPlayers={topPlayers} />
          </div>
          <div className={styles.container3}>
            {/* .........Right Side Content......... */}
            <div className={styles.card3}>
              <DreamTeamBox match_info={match_info} currentUrl={currentUrl} />
              <PlayerStatsBox playerPPMDI={playerPPMDI} />
              <WeatherNew weatherData={match_info?.weather} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSectionOverview;
