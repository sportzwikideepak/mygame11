import React from "react";
import styles from "../../app/[match-details]/venue/venue.module.css";

const BattingPreffered = ({ firstBattingWon }) => {
  return (
    <>
      <div className={styles.prefered}>
        <span className={styles.balanced}>Batting first is preferred :-</span>
        <span className={styles.balancedtext}>
          Pick more players from the team batting first
        </span>
        <div className={styles.preferedfirst}>
          <div className={styles.pickmoreplayer}>
            <span className={styles.battingfirst}>Winning batting first</span>
            <span className={styles.percentage1}>
              {firstBattingWon == "NAN"
                ? "No data available"
                : `${Number(firstBattingWon)?.toFixed(2)}%`}
            </span>
          </div>
          <div className={styles.winningbatfirst}>
            <div
              style={{ width: `${Number(firstBattingWon)?.toFixed(2)}%` }}
              className={styles.winningbatfirst1}
            />
          </div>
          <div className={styles.pickmoreplayer}>
            <span className={styles.battingfirst}>Wins while chasing</span>
            <span className={styles.percentage1}>
              {firstBattingWon == "NAN"
                ? "No data available"
                : `${100 - Number(firstBattingWon)?.toFixed(2)}%`}
            </span>
          </div>
          <div className={styles.winningbatfirst}>
            <div
              style={{ width: `${100 - Number(firstBattingWon)?.toFixed(2)}%` }}
              className={styles.winningbatfirst1}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BattingPreffered;
