"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../../app/[match-details]/matchDetails.module.css";

const TeamComparisonBox = ({ winning_chances, match_info, currentUrl }) => {
  const [recentFormTeamA, setRecentFormTeamA] = useState([]);
  const [recentFormTeamB, setRecentFormTeamB] = useState([]);

  const team1WinPercentage = parseFloat(
    winning_chances?.[0]?.win_percentage
  )?.toFixed(2) || 40;
  const team2WinPercentage = parseFloat(
    winning_chances?.[1]?.win_percentage
  )?.toFixed(2) || 60;

  const fetchRecentForm = async (teamId, setRecentForm) => {
    try {
      console.log(`Fetching recent form for team ID: ${teamId}`);
      const response = await fetch(`https://hammerhead-app-jkdit.ondigitalocean.app/recent-form/${teamId}`);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(`Fetched data for team ID ${teamId}:`, data);
      setRecentForm(data.map(match => match.result));
    } catch (error) {
      console.error("Error fetching recent form:", error);
    }
  };

  useEffect(() => {
    if (match_info?.teama?.team_id) {
      fetchRecentForm(match_info.teama.team_id, setRecentFormTeamA);
    } else {
      console.log("Team A ID is missing:", match_info?.teama);
    }
    if (match_info?.teamb?.team_id) {
      fetchRecentForm(match_info.teamb.team_id, setRecentFormTeamB);
    } else {
      console.log("Team B ID is missing:", match_info?.teamb);
    }
  }, [match_info]);

  const renderRecentForm = (recentForm) => {
    if (!recentForm || recentForm.length === 0) {
      return <span>No recent form data available</span>;
    }
    return recentForm.map((result, index) => (
      <span
        key={index}
        className={`${styles.badge} ${
          result === "W" ? styles.win : styles.loss
        }`}
      >
        {result}
      </span>
    ));
  };

  return (
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
              {team1WinPercentage}%
            </span>
            <span className={styles.statsText}>Win Probability</span>
            <span className={styles.statsText}>
              {team2WinPercentage}%
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
              {renderRecentForm(recentFormTeamA)}
            </div>
          </div>
          <span className={styles.recent}>Recent Form</span>
          <div className={styles.team}>
            <span>
              {winning_chances?.[1]?.wins}/
              {winning_chances?.[1]?.total_matches}
            </span>
            <div className={styles.results}>
              {renderRecentForm(recentFormTeamB)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamComparisonBox;
