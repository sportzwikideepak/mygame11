import React from "react";
import styles from "../../app/[match-details]/venue/venue.module.css";

const RecentMatches = ({ teama_vs_teamb_last10_match_same_venue }) => {
  let winsBattingFirst = 0;
  let winsChasing = 0;

  teama_vs_teamb_last10_match_same_venue.forEach((match) => {
    const { winning_team_id, toss } = match;
    const { winner, decision } = toss;

    if (winning_team_id === winner) {
      if (decision === 1) {
        winsBattingFirst++;
      } else {
        winsChasing++;
      }
    } else {
      if (decision === 1) {
        winsChasing++;
      } else {
        winsBattingFirst++;
      }
    }
  });

  // console.log(
  //   `Batting First Wins: ${winsBattingFirst}, Chasing Wins: ${winsChasing}`
  // );

  return (
    <>
      <div className={styles.balancedpitch}>
        <span className={styles.balanced}>In recent matches :-</span>
        <span className={styles.balancedtext}>
          At this venue in the last{" "}
          {teama_vs_teamb_last10_match_same_venue.length} matches
        </span>
        {/* <div className={styles.firstinng}>
          <span className={styles.firstinngleft}>
            Last {teama_vs_teamb_last10_match_same_venue.length} matches
          </span>
          <span className={styles.firstinngright}>4 Wins</span>
        </div> */}
        <div className={styles.firstinng}>
          <span className={styles.firstinngleft}>Batting First</span>
          <span className={styles.firstinngright}>
            {winsBattingFirst} win in{" "}
            {teama_vs_teamb_last10_match_same_venue.length} matches
          </span>
        </div>
        <div className={styles.firstinng}>
          <span className={styles.firstinngleft}>Chasing</span>
          <span className={styles.firstinngright}>
            {winsChasing} win in {teama_vs_teamb_last10_match_same_venue.length}{" "}
            matches
          </span>
        </div>
      </div>
    </>
  );
};

export default RecentMatches;
