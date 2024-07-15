// "use client";
import React, { useState } from "react";
import PvPComperisonPlayerSelection from "./PvPComperisonPlayerSelection";
import PlayerVsPlayerResult from "./PlayerVsPlayerResult";

const PlayerVsPlayerMain = ({
  selected_comparison_type,
  set_comparison_type_handler,
  player_list,
  data,
}) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [playerComparisonActive, setPlayerComparisonActive] = useState(false);

  const handleSelectedPlayerAdd = (player) => {
    if (selectedPlayers.length >= 2) {
      if (selectedPlayers.some((p) => p.player_id === player.player_id)) {
        setSelectedPlayers(
          selectedPlayers.filter((p) => p.player_id !== player.player_id)
        );
      }
    } else if (selectedPlayers.some((p) => p.player_id === player.player_id)) {
      setSelectedPlayers(
        selectedPlayers.filter((p) => p.player_id !== player.player_id)
      );
    } else {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const handlePlayerComparisonActive = () => {
    setPlayerComparisonActive(true);
  };

  return (
    <>
      {playerComparisonActive === false ? (
        <PvPComperisonPlayerSelection
          data={data}
          player_list={player_list}
          selected_comparison_type={selected_comparison_type}
          set_comparison_type_handler={set_comparison_type_handler}
          selectedPlayers={selectedPlayers}
          handleSelectedPlayerAdd={handleSelectedPlayerAdd}
          handlePlayerComparisonActive={handlePlayerComparisonActive}
        />
      ) : (
        <PlayerVsPlayerResult
          data={data}
          selectedPlayers={selectedPlayers}
          handlePlayerComparisonActive={handlePlayerComparisonActive}
        />
      )}
    </>
  );
};

export default PlayerVsPlayerMain;
