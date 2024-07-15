import React from "react";
import styles from "../../../app/[match-details]/comparison/comparision.module.css";
import Image from "next/image";

const ComparisonPlayersGroup = (props) => {
  const itemsTypeMap = {
    wk: "Wicket Keepers",
    bat: "Batsmen",
    bowl: "Bowlers",
    all: "All Rounders",
  };

  return (
    <>
      <div className={styles.announcementcontent}>
        <div className={styles.lines1} />
        <div className={styles.announcement}>
          {itemsTypeMap[props?.itemType]}
        </div>
        <div className={styles.lines1} />
      </div>

      <div className={styles.container}>
        {props.playersList.map((player, index) => {
          const isPlayerInTeamA = props?.playersListC?.teama?.squads?.filter(
            (item) => item?.player_id == player?.pid
          );

          const isPlayerInTeamB = props?.playersListC?.teamb?.squads?.filter(
            (item) => item?.player_id == player?.pid
          );
          return (
            props?.itemType === player?.playing_role && (
              <div
                onClick={() => props?.handlePlayerSelect(player?.pid)}
                key={player?.pid}
                className={styles.usercard}
              >
                <Image
                  height={20}
                  width={20}
                  className={styles.useravatar}
                  src="/static/Player.svg"
                  alt={player.title}
                />
                <div className={styles.userinfo}>
                  <h2>{player.title}</h2>
                  <p>
                    {isPlayerInTeamA?.length > 0
                      ? props?.teamAName
                      : isPlayerInTeamB?.length > 0
                      ? props?.teamBName
                      : null}
                  </p>
                </div>
                <div className={styles.statusicon}>
                  <Image height={20} width={20} src="/static/VS.svg" alt="" />
                </div>
              </div>
            )
          );
        })}
      </div>
    </>
  );
};

export default ComparisonPlayersGroup;
