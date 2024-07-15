import React from "react";
import styles from "../../app/[match-details]/matchDetails.module.css";

const MatchDetails = (props) => {
  return (
    <>
      <div className={`${styles.matchdet}`}>Match Details</div>
      <div className={`${styles.matchdetails}`}>
        <div className={`${styles.detail}`}>
          <span>Format</span>
          <span>{props?.format?.toUpperCase()}</span>
        </div>
        <div className={`${styles.detail}`}>
          <span>Series</span>
          <span>{props?.series}</span>
        </div>
        <div className={`${styles.detail}`}>
          <span>Match No</span>
          <span>Match {props?.match_no}</span>
        </div>
        <div className={`${styles.detail}`}>
          <span>Venue</span>
          <span>{props?.venue}</span>
        </div>
      </div>
    </>
  );
};

export default MatchDetails;
