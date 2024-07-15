import React from "react";
import styles from "../../app/[match-details]/venue-overview/venueOverview.module.css";

const VenueInfoBox = () => {
  return (
    <>
      <div className={styles.infobox}>
        <p>
          T20&nbsp;on this venue over the last 6 months. Points are displayed
          only for batting &amp; bowling efforts, fielding related points are
          not calculated.
        </p>
      </div>
    </>
  );
};

export default VenueInfoBox;
