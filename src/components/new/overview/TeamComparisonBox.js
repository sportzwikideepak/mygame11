import Image from "next/image";
import React from "react";
import styles from "../../../app/[match-details]/matchDetails.module.css";

const TeamComparisonBox = ({ winning_chances, match_info, currentUrl }) => {
  const team1WinPercentage = parseFloat(
    winning_chances?.[0]?.win_percentage
  )?.toFixed(2);
  const team2WinPercentage = parseFloat(
    winning_chances?.[1]?.win_percentage
  )?.toFixed(2);

  return (
    <>
      <div className={styles.card1}>
        <div className={styles.cardHeader}>
          <Image
            height={20}
            width={20}
            src="/static/Team Comparision.svg"
            alt="team comparison icon"
            className={styles.icon}
          />
          <h2>TEAM COMPARISON</h2>
          <a href={`/${currentUrl}/team-comparison`} className={styles.link}>
            View All →
          </a>
        </div>
        <div className={styles.subCard}>
          <div className={styles.info}>
            <div className={styles.team}>
              <span className={`${styles.teamBadge} ${styles.csk}`}>
                {match_info?.teama?.short_name}
              </span>
            </div>
            <div className={styles.team}>
              <span className={`${styles.teamBadge} ${styles.mi}`}>
                {match_info?.teamb?.short_name}
              </span>
            </div>
          </div>
          <div className={styles.container2}>
            <div className={styles.statistics}>
              <span className={styles.statsText}>
                {team1WinPercentage || 40}%
              </span>
              <span className={styles.statsText}>Win Probability</span>
              <span className={styles.statsText}>
                {team2WinPercentage || 60}%
              </span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={`${styles.progress} ${styles.yellow}`}
                style={{ width: `${team1WinPercentage}%` }}
              />
              <div
                className={`${styles.progress} ${styles.blue}`}
                style={{ width: `${team2WinPercentage}%` }}
              />
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.team}>
              <span>
                {winning_chances?.[0]?.wins}/
                {winning_chances?.[0]?.total_matches}
              </span>
              <div className={styles.results}>
                <span className={`${styles.badge} ${styles.loss}`}>L</span>
                <span className={`${styles.badge} ${styles.loss}`}>L</span>
                <span className={`${styles.badge} ${styles.win}`}>W</span>
                <span className={`${styles.badge} ${styles.win}`}>W</span>
                <span className={`${styles.badge} ${styles.win}`}>W</span>
              </div>
            </div>
            <span className={styles.recent}>Recent Form</span>
            <div className={styles.team}>
              <span>
                {winning_chances?.[1]?.wins}/
                {winning_chances?.[1]?.total_matches}
              </span>
              <div className={styles.results}>
                <span className={`${styles.badge} ${styles.loss}`}>L</span>
                <span className={`${styles.badge} ${styles.loss}`}>L</span>
                <span className={`${styles.badge} ${styles.win}`}>W</span>
                <span className={`${styles.badge} ${styles.win}`}>W</span>
                <span className={`${styles.badge} ${styles.win}`}>W</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamComparisonBox;
