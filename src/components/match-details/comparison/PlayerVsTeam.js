import React, { useState } from "react";
import styles from "./PlayerVsTeam.module.css";
import PvTTeamSelector from "./PvTTeamSelector";
import PvTPlayersListGroup from "./PvTPlayersListGroup";

const PlayerVsTeam = (props) => {
  const [selectedTeam, setSelectedTeam] = useState(0);
  return (
    <>
      <div className={styles.page}>
        <div className={styles.main}>
          <PvTTeamSelector
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
            teamAName={props?.teamAName}
            teamBName={props?.teamBName}
          />

          <PvTPlayersListGroup
            selectedTeam={selectedTeam}
            teamName={selectedTeam == 0 ? props?.teamAName : props?.teamBName}
            playerListC={props?.playersListC}
            handlePlayerComparisonActive={props?.handlePlayerComparisonActive}
            handleComparisonTypeChange={props?.handleComparisonTypeChange}
            handlePvtPlayerSelect={props?.handlePvtPlayerSelect}
          />
        </div>
      </div>
    </>
  );
};

export default PlayerVsTeam;
