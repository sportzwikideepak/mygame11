import React from "react";
import styles from "../../app/[match-details]/venue-overview/venueOverview.module.css";
import VenueStatsProgressSingleValue from "./VenueStatsProgressSingleValue";

const calculatePercent = (value, totalValue) => {
  if (totalValue && !isNaN(value) && !isNaN(totalValue) && totalValue !== 0) {
    return ((parseFloat(value) / parseFloat(totalValue)) * 100).toFixed(1);
  } else {
    return null;
  }
};

const VenueBattingFirstPreferred = ({ venueTrends }) => {
  return (
    <>
      <div className={styles.tossrends}>
        <h2 className={styles.tossrendstext}>Batting first is preferred :-</h2>
        <p className={styles.venueinfo}>
          Pick more players from the team batting first
        </p>
      </div>
      <div className={styles.infocontainer}>
        <div className={styles.Decision}>Decision after winning the toss</div>

        <VenueStatsProgressSingleValue
          text="Choose to bat first"
          percentValue={calculatePercent(
            venueTrends?.wins_batting_first_after_winning_toss,
            venueTrends?.total_matches
          )}
        />
        <VenueStatsProgressSingleValue
          text="Win batting first"
          percentValue={calculatePercent(
            venueTrends?.wins_bowling_first_after_winning_toss,
            venueTrends?.total_matches
          )}
        />
      </div>
    </>
  );
};

export default VenueBattingFirstPreferred;
