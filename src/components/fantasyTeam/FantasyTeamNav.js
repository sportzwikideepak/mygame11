"use client";
import React, { useState } from "react";
import styles from "./FantasyTeamNav.module.css"; // Adjust the path as needed

const FantasyTeamNav = ({ teamA, teamB }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const changeTab = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  return (
    // <div className={styles.SquadMainTab}>
      <div className={styles.teamstab}>
        <div
          onClick={() => changeTab(0)}
          className={
            selectedTab === 0
              ? styles.Teamtableftactive
              : styles.Teamtableftnonactive
          }
        >
          <span>{teamA}</span>
        </div>
        <div
          onClick={() => changeTab(1)}
          className={
            selectedTab === 1
              ? styles.Teamtableftactive
              : styles.Teamtableftnonactive
          }
        >
          <span>{teamB}</span>
        </div>
      </div>
    // </div>
  );
};

export default FantasyTeamNav;
