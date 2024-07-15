import React from "react";
import styles from "../../app/[match-details]/venue/venue.module.css";
import Image from "next/image";

const BalancedPitch = ({ avg_first_inning_score, avg_wickets }) => {
  // console.log(avg_wickets, "4ig0n0pin430gpn0p");
  return (
    <>
      <div className={styles.balancedpitch}>
        <span className={styles.balanced}>Balanced Pitch :-</span>
        <span className={styles.balancedtext}>
          Make even selection of batsman and bowlers
        </span>
        <div className={styles.Pitch}>
          <Image height={30} width={100} src="/static/pitch.svg" alt="" />
        </div>
        <div className={styles.firstinng}>
          <span className={styles.firstinngleft}>Avg first Inning Score</span>
          <span className={styles.firstinngright}>
            {Number(avg_first_inning_score)?.toFixed(2)}
          </span>
        </div>
        <div className={styles.firstinng}>
          <span className={styles.firstinngleft}>
            Avg Wickets lost per inning
          </span>
          <span className={styles.firstinngright}>
            {Number(avg_wickets)?.toFixed(2)}
          </span>
        </div>
      </div>
    </>
  );
};

export default BalancedPitch;
