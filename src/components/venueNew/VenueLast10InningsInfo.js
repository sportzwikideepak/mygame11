import React from "react";
import styles from "../../app/[match-details]/venue-overview/last-10-matches/lastMatches.module.css";

const VenueLast10InningsInfo = (props) => {
  return (
    <>
      <div className={styles.statistics}>
        <div className={styles.statitem}>
          <span>Avg first Inning Score</span>
          <span className={styles.score}>
            {props?.venueData?.avg_first_innings_score &&
            !isNaN(props?.venueData?.avg_first_innings_score)
              ? parseFloat(props?.venueData?.avg_first_innings_score).toFixed(1)
              : "No data available"}
          </span>
        </div>
        <div className={styles.statitem}>
          <span>Avg Wickets lost per inning</span>
          <span className={styles.score}>
            {props?.venueData?.avg_wickets &&
            !isNaN(props?.venueData?.avg_wickets)
              ? parseFloat(props?.venueData?.avg_wickets).toFixed(1)
              : "No data available"}
          </span>
        </div>
      </div>
    </>
  );
};

export default VenueLast10InningsInfo;
