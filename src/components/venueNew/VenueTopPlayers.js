import React from "react";
import styles from "../../app/[match-details]/venue-overview/venueOverview.module.css";

const VenueTopPlayers = ({ venueTopPlayers }) => {
  return (
    <>
      <div className={styles.tossrends}>
        <h2 className={styles.tossrendstext}>Top Players on this venue :-</h2>
        <p className={styles.venueinfo}>According to IPL 2024</p>
      </div>
      <div className={styles.infocontainer}>
        <div className={styles.Decision}>Decision after winning the toss</div>
        {venueTopPlayers?.map((player) => {
          return (
            <div key={player?.player_id} className={styles.statblock}>
              <div className={styles.statdetail}>
                <span>
                  <b>{player?.player_name} </b>({player?.playing_role} -
                  {player?.team_name})
                </span>
                <span className={styles.winchasing}>
                  {player?.total_fantasy_points} Pts - {player?.match_count} M
                </span>
              </div>
              <div className={styles.progressbar}>
                <div
                  className={styles.progress1}
                  style={{
                    width: `${(player?.total_fantasy_points / 500) * 100}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
        <div className={styles.hint}>
          Pts - <span>Points,</span> M - <span>Matches</span>
        </div>
      </div>
    </>
  );
};

export default VenueTopPlayers;
