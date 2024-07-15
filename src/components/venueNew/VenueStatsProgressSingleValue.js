import React from "react";
import styles from "../../app/[match-details]/venue-overview/venueOverview.module.css";

const VenueStatsProgressSingleValue = (props) => {
  return (
    <>
      <div className={styles.statblock}>
        <div className={styles.statdetail}>
          <span>{props?.text}</span>
          <span className={styles.winchasing}>{`${props?.percentValue}`}%</span>
        </div>
        <div className={styles.progressbar}>
          <div
            className={styles.progress}
            style={{ width: `${props?.percentValue}%` }}
          />
        </div>
      </div>
    </>
  );
};

export default VenueStatsProgressSingleValue;
