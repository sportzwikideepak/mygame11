import React from "react";
import styles from "../../app/[match-details]/venue-overview/venueOverview.module.css";
import Image from "next/image";
import VenueLast10InningsInfo from "./VenueLast10InningsInfo";

const VenuePitchDetails = (props) => {
  return (
    <>
      <div className={styles.balancedpitch}>
        <h2 className={styles.pitchtext}>Balanced Pitch :-</h2>
        <p>Make even selection of batsman and bowlers</p>
        <div className={styles.container}>
          <div className={styles.balanceimg}>
            <Image
              height={20}
              width={20}
              src="/static/Pitch Image(Big).svg"
              alt="Cricket Pitch"
              className={`${styles.pitch} ${styles.image}`}
            />
          </div>
          <div className={styles.statistics}>
            <div className={styles.statitem}>
              <span>Avg first Inning Score</span>
              <span className={styles.score}>
                {props?.venueData?.avg_first_innings_score &&
                !isNaN(props?.venueData?.avg_first_innings_score)
                  ? parseFloat(
                      props?.venueData?.avg_first_innings_score
                    ).toFixed(1)
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
          {/* <VenueLast10InningsInfo /> */}
        </div>
      </div>
    </>
  );
};

export default VenuePitchDetails;
