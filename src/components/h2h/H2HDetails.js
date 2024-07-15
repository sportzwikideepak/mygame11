import React from "react";
import styles from "../../app/[match-details]/head-to-head/head-to-head.module.css";

const H2HDetails = ({
  totalMatchesPlayed,
  totalMatchesCancelled,
  totalMatchesDrawn,
  team1Wins,
  team2Wins,
  team1Losses,
  team2Losses,
  team1WinningPercentage,
  team2WinningPercentage,
  matchCancelledPercentage,
}) => {
  return (
    <>
      <div className={styles.H2Hcontent}>
        <div className={styles.contenthead}>
          <span className={styles.head1}>{totalMatchesPlayed}</span>
          <span className={styles.head2}>Match Played</span>
          <span className={styles.head3}>{totalMatchesPlayed}</span>
        </div>
        <div className={styles.contnetbottom} />
        <div className={styles.contenthead}>
          <span className={styles.head1}>{totalMatchesCancelled}</span>
          <span className={styles.head2}>Match Cancelled</span>
          <span className={styles.head3}>{totalMatchesCancelled}</span>
        </div>
        <div className={styles.contnetbottom} />
        <div className={styles.contenthead}>
          <span className={styles.head1}>{totalMatchesDrawn}</span>
          <span className={styles.head2}>Match Drawn</span>
          <span className={styles.head3}>{totalMatchesDrawn}</span>
        </div>
        <div className={styles.contnetbottom} />
        <div className={styles.contenthead}>
          <span className={styles.head1}>{team1Wins}</span>
          <span className={styles.head2}>Match Won</span>
          <span className={styles.head3}>{team2Wins}</span>
        </div>
        <div className={styles.contnetbottom} />
        <div className={styles.contenthead}>
          <span className={styles.head1}>{team1Losses}</span>
          <span className={styles.head2}>Match Loss</span>
          <span className={styles.head3}>{team2Losses}</span>
        </div>
        <div className={styles.contnetbottom} />

        <div className={styles.contenthead}>
          <span className={styles.head1}>{team1WinningPercentage}</span>
          <span className={styles.head2}>Winning Percentage</span>
          <span className={styles.head3}>{team2WinningPercentage}</span>
        </div>
        <div className={styles.contnetbottom} />

        <div className={styles.contenthead}>
          <span className={styles.head1}>{matchCancelledPercentage}</span>
          <span className={styles.head2}>Match cancelled %</span>
          <span className={styles.head3}>{matchCancelledPercentage}</span>
        </div>
        <div className={styles.contnetbottom} />
      </div>
    </>
  );
};

export default H2HDetails;
