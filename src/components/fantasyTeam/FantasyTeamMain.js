"use client";
import React from "react";
import styles from "../../app/[match-details]/fantasy-team/fantasyTeam.module.css";
import Link from "next/link";

const roleLabels = {
  bat: "Batsman",
  bowl: "Bowler",
  all: "All-Rounder",
  wk: "Wicket Keeper",
};

const FantasyTeamMain = ({ fantasyTeam }) => {
  if (!fantasyTeam.success) return <div>No fantasy team data available.</div>;

  const displayOrNA = (data) => (data !== undefined ? data : "N/A");

  const sortedPlayers = fantasyTeam.dreamTeam.sort(
    (a, b) => b.points - a.points
  );

  return (
    <>
      <div className={styles.FantasyTeamContainer}>
        <span className="text-center font-bold mb-2">
          Acc. to last 3 months data
        </span>
        <div className={styles.CaptainViceCaptainContainer}>
          {sortedPlayers
            .filter(
              (player) =>
                player.designation === "Captain" ||
                player.designation === "Vice-Captain"
            )
            .map((player) => (
              <div
                key={player.pid}
                className={`${styles.CaptainViceCaptainInfo} flex flex-col`}
              >
                <span className={styles.CaptainViceCaptainRole}>
                  {player.designation}:
                </span>
                <span className={styles.CaptainViceCaptainName}>
                  {player.name}
                </span>
                <span className={styles.TeamName}>
                  ({displayOrNA(player.teamName)})
                </span>
              </div>
            ))}
        </div>
        {/* Removed role grouping, directly mapping sorted players */}
        {sortedPlayers.map((player) => (
          <div key={player.pid} className={styles.PlayerContainer}>
            <div className={styles.PlayerLeft}>
              <div className={styles.Image}></div>
              <div className={styles.ImageRight}>
                <span className={styles.PlayerName}>{player.name}</span>
                {player.designation && (
                  <span
                    className={styles.Designation}
                  >{`(${player.designation})`}</span>
                )}
                <span className={styles.TeamName}>
                  ({displayOrNA(player.teamName)})
                </span>
              </div>
            </div>
            <div className={`${styles.PlayerRight} flex flex-col`}>
              <span className={styles.AdditionalData}>
                Total Points: {displayOrNA(player.points)}
              </span>
              <span>(last 5 matches*)</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FantasyTeamMain;
