import React from "react";
import styles from "../../app/[match-details]/venue-overview/venueOverview.module.css";
import VenueStatsProgress from "./VenueStatsProgress";

const calculatePercent = (value, totalValue) => {
  if (totalValue && !isNaN(value) && !isNaN(totalValue) && totalValue !== 0) {
    return ((parseFloat(value) / parseFloat(totalValue)) * 100).toFixed(1);
  } else {
    return null;
  }
};

const VenueTossTrend = ({ venueTrends }) => {
  return (
    <>
      <div className={styles.tossrends}>
        <h2 className={styles.tossrendstext}>Toss Trends :-</h2>
        <p className={styles.venueinfo}>As this venue</p>
      </div>
      <div className={styles.infocontainer}>
        <div className={styles.Decision}>Decision after winning the toss</div>
        <VenueStatsProgress
          textLeft="Choose to Bat First"
          textRight="Choose to Chase"
          percentLeft={calculatePercent(
            venueTrends?.chose_to_bat_first,
            venueTrends?.total_matches
          )}
          percentRight={calculatePercent(
            venueTrends?.chose_to_bowl_first,
            venueTrends?.total_matches
          )}
        />

        <VenueStatsProgress
          textLeft="Win Batting First"
          textRight="Win Chasing"
          percentLeft={calculatePercent(
            venueTrends?.wins_batting_first_after_winning_toss,
            venueTrends?.total_matches
          )}
          percentRight={calculatePercent(
            venueTrends?.wins_bowling_first_after_winning_toss,
            venueTrends?.total_matches
          )}
        />

        <div className={styles.Decision}>
          Wins after winning toss <span>3/10 matches</span>
        </div>
        <VenueStatsProgress
          textLeft="Win"
          textRight="Loss"
          percentLeft={calculatePercent(
            venueTrends?.wins_after_winning_toss,
            venueTrends?.total_matches
          )}
          percentRight={calculatePercent(
            venueTrends?.wins_after_losing_toss,
            venueTrends?.total_matches
          )}
        />
      </div>
    </>
  );
};

export default VenueTossTrend;
