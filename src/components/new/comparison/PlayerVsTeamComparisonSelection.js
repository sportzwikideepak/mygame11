import React from "react";
import styles from "./PlayerVsTeamMain.module.css";
import ComparisonTypeSelector from "./ComparisonTypeSelector";
import NonSelectedPlayerCard from "./NonSelectedPlayerCard";
import PvTcomparisonTeamDefault from "./PvTcomparisonTeamDefault";
import PlayerCard from "../common/PlayerCard";
import Image from "next/image";
import SelectedPlayerCard from "./SelectedPlayerCard"; // Ensure this import is correct

const PlayerVsTeamComparisonSelection = ({
  selected_comparison_type,
  set_comparison_type_handler,
  handleSelectedPlayerAdd,
  selectedPlayers,
  player_list,
  data,
  selectedTeam,
  handlePlayerComparisonActive,
}) => {
  return (
    <>
      <div className={styles.container4}>
        <div className={styles.container5}>
          <ComparisonTypeSelector
            selected_comparison_type={selected_comparison_type}
            set_comparison_type_handler={set_comparison_type_handler}
          />
          <div className={styles.cardcontainer}>
            {selectedPlayers.length ? (
              <SelectedPlayerCard
                key={selectedPlayers[0].player_id}
                name={selectedPlayers[0].name}
                arr_len={selectedPlayers.length}
                handlePlayerComparisonActive={handlePlayerComparisonActive}
              />
            ) : (
              <NonSelectedPlayerCard />
            )}
            <PvTcomparisonTeamDefault selectedTeam={selectedTeam} />
          </div>
        </div>

        <div className={styles.matchinfo}>
          <div className={styles.team1}>
            <Image
              height={20}
              width={20}
              src={data?.teama?.logo_url}
              alt="Team A"
              className={styles.team1logo}
            />
            <span>{data?.teama?.short_name}</span>
          </div>
          <span className={styles.versus}>vs</span>
          <div className={styles.team1}>
            <span>{data?.teamb?.short_name}</span>
            <Image
              height={20}
              width={20}
              src={data?.teamb?.logo_url}
              alt="Team B"
              className={styles.team1logo}
            />
          </div>
        </div>
        <div className={styles.Allplayers}>
          <div className={styles.Firstplayers}>
            {player_list?.response?.teama?.squads?.map((player, index) => (
              <PlayerCard
                handler={handleSelectedPlayerAdd}
                key={index}
                align="right"
                player_data={player}
                selected={selectedPlayers.some(
                  (item) => item?.player_id === player?.player_id
                )}
              />
            ))}
          </div>
          <div className={styles.line} />
          <div className={styles.secondplayers}>
            {player_list?.response?.teamb?.squads?.map((player, index) => (
              <PlayerCard
                handler={handleSelectedPlayerAdd}
                key={index}
                align="left"
                player_data={player}
                selected={selectedPlayers.some(
                  (item) => item?.player_id === player?.player_id
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerVsTeamComparisonSelection;
