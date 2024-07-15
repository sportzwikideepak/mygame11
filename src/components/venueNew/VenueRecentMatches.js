import React from "react";
import styles from "../../app/[match-details]/venue-overview/venueOverview.module.css";
import VenueStatInfoBox from "./VenueStatInfoBox";

const VenueRecentMatches = () => {
  return (
    <>
      <div className={styles.tossrends}>
        <h2 className={styles.tossrendstext}>In recent matches :-</h2>
        <p className={styles.venueinfo}>At this venue in the last 4 matches</p>
      </div>
      <div className={styles.battingpre}>
        <VenueStatInfoBox text="Last 4 matches" value={""} />
        <VenueStatInfoBox text="Batting first" value={""} />
        <VenueStatInfoBox text="Chasing" value={""} />
        {/* <div className={styles.statitem}>
          <span>Batting First</span>
          <span className={styles.score}>2 Win in 2 matches</span>
        </div>
        <div className={styles.statitem}>
          <span>Chasing</span>
          <span className={styles.score}>2 Win in 2 matches</span>
        </div> */}
      </div>
    </>
  );
};

export default VenueRecentMatches;
