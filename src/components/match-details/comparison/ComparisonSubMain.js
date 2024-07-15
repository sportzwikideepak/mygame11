import React, { useState } from "react";
import ComparisonTab from "./ComparisonTab";
import ComparisonPlayersGroup from "./ComparisonPlayersGroup";
import ComparisonBottomPop from "./ComparisonBottomPop";
import PlayerVsTeam from "./PlayerVsTeam";

const ComparisonSubMain = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [pvtFinalActive, setPvtFinalActive] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePvtActive = () => {
    setPvtFinalActive((prevState) => !prevState);
  };

  const playerTypes = Array.from(
    new Set(props?.playersList?.map((player) => player?.playing_role))
  );

  return (
    <>
      <ComparisonTab handleTabChange={handleTabChange} activeTab={activeTab} />

      {activeTab === 0 ? (
        <>
          <div className="PvP mb-52">
            {playerTypes?.map((item, index) => {
              return (
                <ComparisonPlayersGroup
                  key={index}
                  itemType={item}
                  playersListC={props?.playersListC}
                  playersList={props?.playersList}
                  teamAName={props?.teamAName}
                  teamBName={props?.teamBName}
                  teamA={props?.teamA}
                  teamB={props?.teamB}
                  handlePlayerSelect={props?.handlePlayerSelect}
                />
              );
            })}
          </div>
          {props?.selectedPlayers.length > 0 && (
            <ComparisonBottomPop
              handlePlayerComparisonActive={props?.handlePlayerComparisonActive}
              selectedPlayers={props?.selectedPlayers}
            />
          )}
        </>
      ) : (
        <div className="PvT">
          <PlayerVsTeam
            playersListC={props?.playersListC}
            teamAName={props?.teamAName}
            teamBName={props?.teamBName}
            teamA={props?.teamA}
            teamB={props?.teamB}
            handlePlayerComparisonActive={props?.handlePlayerComparisonActive}
            handleComparisonTypeChange={props?.handleComparisonTypeChange}
            handlePvtPlayerSelect={props?.handlePvtPlayerSelect}
          />
        </div>
      )}
    </>
  );
};

export default ComparisonSubMain;
