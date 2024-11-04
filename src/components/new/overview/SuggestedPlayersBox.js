import Image from "next/image";
import React from "react";
import styles from "../../../app/[match-details]/matchDetails.module.css";

const SuggestedPlayersBox = ({ topPlayers }) => {
  console.log(topPlayers,"topplyers")
  return (
    <>
      <div className={styles.card1}>
        <div className={styles.cardHeader}>
          <Image
            height={20}
            width={20}
            src="/static/Suggested c vs vc.svg"
            alt="suggested C & VC icon"
            className={styles.icon}
          />
          <h2>SUGGESTED C & VC</h2>
        </div>
        <div className={styles.playerContainer}>
          {topPlayers?.slice(0, 4)?.map((player) => {
            return (
              <>
                <div className={styles.player}>
                  {/* <Image
                    height={20}
                    width={20}
                    // src="/static/Profile.svg"
                    alt="Player 1"
                    className={styles.playerImage}
                  /> */}
                  <div className={styles.playerText}>{player?.short_name}</div>
                  <div className={styles.playerInfo}>
                    {player?.short_team_name}/
                    {player?.playing_role?.toUpperCase()}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SuggestedPlayersBox;
