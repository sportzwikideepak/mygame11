import React from "react";
import styles from "../../app/[match-details]/venue-overview/venueOverview.module.css";

const VenueCapVcHistory = ({ frquentCandVc }) => {
  return (
    <>
      <div className={styles.tossrends}>
        <h2 className={styles.tossrendstext}>
          Frequent caption and vice caption appearances on this venue :-
        </h2>
        <p className={styles.venueinfo}>According to IPL 2024</p>
      </div>
      <div className={styles.infocontainer}>
        <div className={styles.Decision}>Decision after winning the toss</div>
        {frquentCandVc?.slice(0, 10)?.map((player, index) => {
          return (
            <div key={index} className={styles.statblock}>
              <div className={styles.statdetail}>
                <span>
                  <b>{player?.first_name}</b>(Bow - IND)
                </span>
                <span className={styles.winchasing}>
                  {parseInt(player?.times_captain) +
                    parseInt(player?.times_vice_captain)}{" "}
                  T - {player?.match_count} M
                </span>
              </div>
              <div className={styles.progressbar}>
                <div
                  className={styles.progress1}
                  style={{
                    width: `${
                      ((parseInt(player?.times_captain) +
                        parseInt(player?.times_vice_captain)) /
                        player?.match_count) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
          );
        })}
        <div className={styles.hint}>
          T - <span>Time,</span> Pts - <span>points</span>
        </div>
      </div>
    </>
  );
};

export default VenueCapVcHistory;
