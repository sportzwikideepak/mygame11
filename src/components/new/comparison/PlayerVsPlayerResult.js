import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./PlayerVsPlayerResult.module.css";

const fetchPlayerStats = async (player_id) => {
  const res = await fetch(
    `https://hammerhead-app-jkdit.ondigitalocean.app/player-stats/${player_id}`
  );
  const data = await res.json();
  return data;
};

const PlayerVsPlayerResult = ({
  data,
  selectedPlayers,
  handlePlayerComparisonActive,
}) => {
  const [playerStats, setPlayerStats] = useState([]);
  const [selectedStatType, setSelectedStatType] = useState("batting");

  useEffect(() => {
    const fetchData = async () => {
      const playerDataPromises = selectedPlayers.map((player) =>
        fetchPlayerStats(player?.player_id)
      );

      const playerStats = await Promise.all(playerDataPromises);
      setPlayerStats(playerStats);
    };

    fetchData();
  }, [selectedPlayers]);

  const renderStatsRow = (statName, statKey) => (
    <tr key={statKey}>
      <th>{playerStats[0]?.[selectedStatType][0]?.[statKey] || "-"}</th>
      <th>{statName}</th>
      <th style={{ color: "#e4453b" }}>
        {playerStats[1]?.[selectedStatType][0]?.[statKey] || "-"}
      </th>
    </tr>
  );

  const battingStatsToRender = [
    { name: "Matches", key: "matches_played" },
    { name: "Innings", key: "total_innings" },
    { name: "Runs Scored", key: "total_runs" },
    { name: "Balls Faced", key: "total_balls_faced" },
    { name: "Highest Score", key: "max_runs" },
    { name: "Bat Avg", key: "average_runs" },
    { name: "Not Outs", key: "total_not_outs" },
    { name: "Bat SR", key: "strike_rate" },
    { name: "100s", key: "total_hundreds" },
    { name: "50s", key: "total_fifties" },
    { name: "4s", key: "total_fours" },
    { name: "6s", key: "total_sixes" },
  ];

  const bowlingStatsToRender = [
    { name: "Matches", key: "matches_played" },
    { name: "Innings", key: "total_innings" },
    { name: "Overs Bowled", key: "total_overs_bowled" },
    { name: "Runs Conceded", key: "total_runs_conceded" },
    { name: "Wickets", key: "total_wickets" },
    { name: "Bowl Avg", key: "average_wickets" },
    { name: "Best Figures", key: "best_figures" },
    { name: "Economy", key: "economy_rate" },
    { name: "5-Wicket Hauls", key: "total_five_wicket_hauls" },
    { name: "10-Wicket Hauls", key: "total_ten_wicket_hauls" },
  ];

  const statsToRender =
    selectedStatType === "batting"
      ? battingStatsToRender
      : bowlingStatsToRender;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.header5}>
          <Image
            height={20}
            width={20}
            src="/static/Player vs player comp icon.svg"
            alt=""
          />
          <h2>
            {selectedPlayers?.[0]?.name} VS {selectedPlayers?.[1]?.name}
          </h2>
        </div>
        <div className={styles.comparisoncontainer}>
          <div className={styles.topcompare}>
            <div className={styles.playertab}>
              <div className={styles.player}>
                <Image
                  height={20}
                  width={20}
                  src="/static/Profile add.svg"
                  alt=""
                  className={styles.playerimg}
                />
                <div className={styles.playerdetails}>
                  <h3>{selectedPlayers?.[0]?.name}</h3>
                </div>
              </div>
              {/* <Image
                onClick={() => handlePlayerComparisonActive()}
                height={20}
                width={20}
                src="/static/Exit Icon.svg"
                alt=""
                className={styles.playerexit}
              /> */}
            </div>
            <div className={styles.matchtype}>
              <Image
                height={20}
                width={20}
                src="/static/Compare icon.svg"
                alt="Crossed Swords"
                className={styles.matchicon}
              />
            </div>
            <div className={styles.playertab}>
              {/* <Image
                onClick={() => handlePlayerComparisonActive()}
                height={20}
                width={20}
                src="/static/Exit Icon.svg"
                alt=""
                className={styles.playerexit}
              /> */}
              <div className={styles.player}>
                <Image
                  height={20}
                  width={20}
                  src="/static/Profile add.svg"
                  alt=""
                  className={styles.playerimg}
                />
                <div className={`${styles.playerdetails} ${styles.textright}`}>
                  <h3>{selectedPlayers?.[1]?.name}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottomselector}>
            <div className={styles.selectors}>
              <div className={styles.leftteam}>
                <Image
                  height={20}
                  width={20}
                  src={data?.teama?.logo_url}
                  alt=""
                />
                <p>{data?.teama?.short_name}</p>
              </div>
              <select>
                {/* <option>Test</option> */}
                {/* <option>ODI</option> */}
                <option>T20</option>
              </select>
              <select onChange={(e) => setSelectedStatType(e.target.value)}>
                <option value="batting">Batting</option>
                <option value="bowling">Bowling</option>
              </select>
              <div className={styles.leftteam}>
                <Image
                  height={20}
                  width={20}
                  src={data?.teamb?.logo_url}
                  alt=""
                />
                <p>{data?.teamb?.short_name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.stats1}>
          <table>
            <thead>
              {statsToRender.map((stat) => renderStatsRow(stat.name, stat.key))}
            </thead>
          </table>
        </div>
      </div>
    </>
  );
};

export default PlayerVsPlayerResult;
