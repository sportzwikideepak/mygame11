import React from "react";
import styles from "../../app/[match-details]/venue/venue.module.css";

const TopPlayers = ({ topPlayers }) => {
  topPlayers?.sort((a, b) => b.averagePoints - a.averagePoints);
  return (
    <>
      <span className={styles.balanced}>Top Players :-</span>
      <div className={styles.recentmatchcontent}>
        {topPlayers?.map((item) => {
          return (
            <div key={item?.playerId}>
              <div className={styles.playername}>
                <div className={styles.leftplayer}>
                  <span className={styles.leftplayer1}>{item?.playerName}</span>
                  <span className={styles.leftplayer2}>({item?.teamName})</span>
                </div>
                <div className={styles.Rightplayer}>
                  <span className={styles.leftplayer2}>
                    {item?.averagePoints} pts - {item?.matchesAtVenue} M
                  </span>
                </div>
              </div>
              <div className={styles.winningbatfirst}>
                {/* <div className={styles.winningbatfirst1} /> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopPlayers;
