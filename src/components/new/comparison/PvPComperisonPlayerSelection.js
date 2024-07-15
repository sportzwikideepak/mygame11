import React from "react";
import PlayerCard from "../common/PlayerCard";
import ComparisonTypeSelector from "./ComparisonTypeSelector";
import SelectedPlayerCard from "./SelectedPlayerCard";
import NonSelectedPlayerCard from "./NonSelectedPlayerCard";
import Image from "next/image";
import styles from "./comparision.module.css";

const ShowPlayerSelectionCard = ({
  selected_player_array,
  handlePlayerComparisonActive,
}) => {
  let res = [];

  selected_player_array?.forEach(
    (player, arr_len = selected_player_array.length) => {
      res.push(
        <SelectedPlayerCard
          key={player.player_id}
          name={player.name}
          arr_len={arr_len}
          handlePlayerComparisonActive={handlePlayerComparisonActive}
        />
      );
    }
  );

  while (res.length < 2) {
    res.push(<NonSelectedPlayerCard key={res.length} />);
  }

  return <>{res}</>;
};

const PvPComperisonPlayerSelection = ({
  data,
  player_list,
  selected_comparison_type,
  set_comparison_type_handler,
  selectedPlayers,
  handleSelectedPlayerAdd,
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
            <ShowPlayerSelectionCard
              selected_player_array={selectedPlayers}
              handlePlayerComparisonActive={handlePlayerComparisonActive}
            />
          </div>
        </div>
        <div className={styles.matchinfo}>
          <div className={styles.team1}>
            <Image
              height={20}
              width={20}
              src={data?.teama?.logo_url}
              alt="CSK"
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
              alt="MI"
              className={styles.team1logo}
            />
          </div>
        </div>
        <div className={styles.Allplayers}>
          <div className={styles.Firstplayers}>
            {player_list?.response?.teama?.squads?.map((player, index) => {
              return (
                <>
                  <PlayerCard
                    handler={handleSelectedPlayerAdd}
                    key={index}
                    align="right"
                    player_data={player}
                    selected={selectedPlayers.some(
                      (item) => item?.player_id === player?.player_id
                    )}
                  />
                </>
              );
            })}
          </div>
          <div className={styles.line} />
          <div className={styles.secondplayers}>
            {player_list?.response?.teamb?.squads?.map((player, index) => {
              return (
                <>
                  <PlayerCard
                    handler={handleSelectedPlayerAdd}
                    key={index}
                    align="left"
                    player_data={player}
                    selected={selectedPlayers.some(
                      (item) => item?.player_id === player?.player_id
                    )}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PvPComperisonPlayerSelection;
