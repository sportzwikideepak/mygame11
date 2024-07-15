"use client";
import React, { useState } from "react";
import styles from "../../app/[match-details]/venue-overview/team-a/venueThisTeam.module.css";

const VenueStatsBox = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className={styles.infocontainer}>
        {props?.topPlayers?.map((player, index) => {
          return (
            <div key={index} className={styles.statblock}>
              <div className={styles.statdetail}>
                <span>
                  <b>{player?.player_name} </b>({player?.playing_role} -{" "}
                  {player?.team_name})
                </span>
                <span className={styles.winchasing}>
                  {player?.total_fantasy_points} pts - {player?.match_count} M
                </span>
              </div>
              <div className={styles.progressbar}>
                <div
                  className={styles.progress1}
                  style={{
                    width: `${(player?.total_fantasy_points / 500) * 100}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
        <div className={styles.hint}>
          M - <span>Matches,</span> Pts - <span>points</span>
        </div>
      </div>
    </>
  );
};

export default VenueStatsBox;
