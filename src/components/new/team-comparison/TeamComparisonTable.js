import Image from "next/image";
import React from "react";
import styles from "./teamComparison.module.css";

const TeamComparisonTable = ({ match_info, headToHeadData }) => {
  //   console.log(headToHeadData, "ihjg3o5ihn");
  const matchStats = headToHeadData[0];
  return (
    <>
      {/* <div className={styles.scroll}>
        <div className={styles.buttonContainer}>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>
            All Over
          </button>
          <button className={styles.btn}>Last Match</button>
          <button className={styles.btn}>Last 5 Match</button>
          <button className={styles.btn}>This Series</button>
          <button className={`${styles.btn} ${styles.btnIcon}`}>
            <Image height={20} width={20} src="/static/Filter.svg" alt="menu" />
          </button>
        </div>
      </div> */}
      {/* .........Player vs player comp......... */}
      <div className={styles.card}>
        <div className={styles.comparisonContainer}>
          <div className={styles.topCompare}>
            <div className={styles.playerTab}>
              <div className={styles.player}>
                <Image
                  height={40}
                  width={40}
                  src={match_info?.teama.logo_url}
                  alt=""
                  className={styles.playerImg}
                />
                <div className={styles.playerDetails}>
                  <h3>{match_info?.teama.name}</h3>
                </div>
              </div>
            </div>
            <div className={styles.matchType}>
              <Image
                height={20}
                width={20}
                src="/static/Compare icon.svg"
                alt="Crossed Swords"
                className={styles.matchIcon}
              />
            </div>
            <div className={styles.playerTab}>
              <div className={styles.player}>
                <Image
                  height={40}
                  width={40}
                  src={match_info?.teamb.logo_url}
                  alt=""
                  className={styles.playerImg}
                />
                <div className={`${styles.playerDetails} ${styles.textRight}`}>
                  <h3>{match_info?.teamb.name}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.stats1}>
          <table>
            <thead>
              <tr>
                <th>{matchStats.matches_played}</th>
                <th>Matches</th>
                <th>{matchStats.matches_played}</th>
              </tr>
              <tr>
                <th>{matchStats.team1_wins}</th>
                <th>Won by {match_info?.teama.name}</th>
                <th>{matchStats.team2_wins}</th>
              </tr>
              <tr>
                <th>{matchStats.team2_wins}</th>
                <th>Won by {match_info?.teamb.name}</th>
                <th>{matchStats.team1_wins}</th>
              </tr>
              <tr>
                <th>{matchStats.no_results}</th>
                <th>No Results</th>
                <th>{matchStats.no_results}</th>
              </tr>
              {/* Commented rows for properties not present in headToHeadData */}
              {/* <tr>
            <th>15</th>
            <th>Tied</th>
            <th >15</th>
          </tr>
          <tr>
            <th >15</th>
            <th>Drawn</th>
            <th>15</th>
          </tr>
          <tr>
            <th>15</th>
            <th>Highest Team Total</th>
            <th >15</th>
          </tr>
          <tr>
            <th >15</th>
            <th>Avg Runs</th>
            <th>15</th>
          </tr>
          <tr>
            <th>15</th>
            <th>Avg Wickets</th>
            <th >15</th>
          </tr> */}
            </thead>
          </table>
        </div>
      </div>
    </>
  );
};

export default TeamComparisonTable;
