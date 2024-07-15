import React from "react";
import styles from "../../app/[match-details]/venue-overview/venueOverview.module.css";

const VenueStatInfoBox = () => {
  return (
    <>
      <div className={styles.statitem}>
        <span>Last 4 Mathes</span>
        <span className={styles.score}>4 Wins</span>
      </div>
    </>
  );
};

export default VenueStatInfoBox;
