import React from "react";
import styles from "../../app/[match-details]/venue-overview/venueOverview.module.css";

const VenueStatsProgress = (props) => {
  return (
    <>
      <div className={styles.statblock}>
        <div className={styles.statdetail}>
          <span>{props?.textLeft}</span>
          <span>{props?.textRight}</span>
        </div>
        <div className={styles.progressbar}>
          <div
            className={styles.progress}
            style={{ width: `${props?.percentLeft}%` }}
          />
        </div>
        <div className={styles.percentage}>
          <span>{props?.percentLeft}%</span>
          <span>{props?.percentRight}%</span>
        </div>
      </div>
    </>
  );
};

export default VenueStatsProgress;
