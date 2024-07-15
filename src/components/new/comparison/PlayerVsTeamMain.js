import React, { useState } from "react";
import PlayerVsTeamComparisonSelection from "./PlayerVsTeamComparisonSelection";
import PlayerVsTeamCompResult from "./PlayerVsTeamCompResult";

const PlayerVsTeamMain = ({
  selected_comparison_type,
  set_comparison_type_handler,
  player_list,
  data,
}) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [playerComparisonActive, setPlayerComparisonActive] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleSelectedPlayerAdd = (player) => {
    if (
      selectedPlayers.length > 0 &&
      selectedPlayers[0].player_id === player.player_id
    ) {
      setSelectedPlayers([]);
      setSelectedTeam(null);
    } else {
      const isPlayerInTeamA = player_list.response.teama.squads.some(
        (p) => p.player_id === player.player_id
      );

      const selectedPlayerTeam = isPlayerInTeamA ? data.teama : data.teamb;
      const oppositeTeam = isPlayerInTeamA ? data.teamb : data.teama;

      setSelectedPlayers([player]);
      setSelectedTeam(oppositeTeam);
    }
  };

  const handlePlayerComparisonActive = () => {
    setPlayerComparisonActive(true);
  };

  return (
    <>
      {!playerComparisonActive ? (
        <PlayerVsTeamComparisonSelection
          selected_comparison_type={selected_comparison_type}
          set_comparison_type_handler={set_comparison_type_handler}
          handlePlayerComparisonActive={handlePlayerComparisonActive}
          handleSelectedPlayerAdd={handleSelectedPlayerAdd}
          selectedPlayers={selectedPlayers}
          player_list={player_list}
          data={data}
          selectedTeam={selectedTeam}
        />
      ) : (
        <PlayerVsTeamCompResult
          selectedPlayers={selectedPlayers}
          data={data}
          selectedTeam={selectedTeam}
        />
      )}
    </>
  );
};

export default PlayerVsTeamMain;
