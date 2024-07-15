import Image from "next/image";
import React from "react";
import styles from "../../../app/[match-details]/matchDetails.module.css";

const PlayerStatsBox = ({ playerPPMDI }) => {
  return (
    <>
      <div className={styles.stats}>
        <div className={styles.statsHeader}>
          <Image
            height={20}
            width={20}
            src="/static/Player Stats.svg"
            alt="stats"
            className={styles.icon}
          />
          <h3>PLAYER STATS</h3>
          {/* <a href="#" className={styles.link}>
            View All →
          </a> */}
        </div>
        <div className={styles.statsTable}>
          <table>
            <thead>
              <tr>
                <th>Players</th>
                <th>Match Played</th>
                <th>PPM</th>
                <th>DT%</th>
              </tr>
            </thead>
            <tbody>
              {playerPPMDI?.slice(0, 10).map((player, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {player?.first_name}
                      <br />
                      <span className={styles.role}>-</span>
                    </td>
                    <td>{player?.total_matches}</td>
                    <td>{Number(player?.points_per_match)?.toFixed()}</td>
                    <td>{Number(player?.dream_team_percentage)?.toFixed()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PlayerStatsBox;
