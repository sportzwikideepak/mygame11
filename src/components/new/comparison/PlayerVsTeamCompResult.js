import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./PlayerVsTeamCompResult.module.css";

const fetchPlayerVsTeamData = async (player_id, team_id) => {
  console.log(`Fetching data for player ${player_id} against team ${team_id}`);
  const res = await fetch(
    `https://hammerhead-app-jkdit.ondigitalocean.app/player-vs-team-stats/${player_id}/${team_id}`
  );

  if (!res.ok) {
    console.error(`Failed to fetch data: ${res.statusText}`);
    return null;
  }

  const data = await res.json();
  console.log("Fetched data:", data);
  return data;
};

const PlayerVsTeamCompResult = ({ selectedPlayers, selectedTeam }) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [selectedType, setSelectedType] = useState("Batting");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchPlayerVsTeamData(
        selectedPlayers[0].player_id,
        selectedTeam.team_id
      );
      setFetchedData(data);
    };

    getData();
  }, [selectedPlayers, selectedTeam]);

  if (!fetchedData) {
    return <div>Loading...</div>;
  }

  const dataToDisplay =
    selectedType === "Batting"
      ? fetchedData.batting[0]
      : fetchedData.bowling[0];
  const defaultIfNull = (value) => (value !== null ? value : 0);

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
          <h2>{`${selectedPlayers[0].name} VS ${selectedTeam.short_name} COMPARISON`}</h2>
        </div>
        <div className={styles.comparisoncontainer}>
          <div className={styles.topcompare}>
            <div className={styles.playertab}>
              <div className={styles.player}>
                <Image
                  height={20}
                  width={20}
                  src="/static/Profile add.svg"
                  alt={selectedPlayers[0].name}
                  className={styles.playerimg}
                />
                <div className={styles.playedrdetails}>
                  <h3 className="text-white">{selectedPlayers[0].name}</h3>
                </div>
              </div>
              {/* <Image
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
                height={20}
                width={20}
                src="/static/Exit Icon.svg"
                alt=""
                className={styles.playerexit}
              /> */}
              <div className={styles.player}>
                <Image
                  height={80}
                  width={80}
                  src={selectedTeam?.logo_url}
                  alt={selectedTeam.name}
                  className={styles.playerimg}
                />
                <div className={`${styles.playerddetails} ${styles.textright}`}>
                  <h3>{selectedTeam.short_name}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6 mt-4">
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Matches", value: dataToDisplay.matches_played },
              { label: "Innings", value: dataToDisplay.matches_played },
              { label: "Runs", value: dataToDisplay.total_runs },
              { label: "Avg", value: dataToDisplay.average_runs },
              { label: "S/R", value: dataToDisplay.strike_rate },
              { label: "100s", value: dataToDisplay.total_hundreds },
              { label: "50s", value: dataToDisplay.total_fifties },
              { label: "HS", value: dataToDisplay.max_runs },
              { label: "Balls Faced", value: dataToDisplay.total_balls_faced },
              {
                label: "Overs Bowled",
                value: dataToDisplay.total_overs_bowled,
              },
              {
                label: "Runs Conceded",
                value: dataToDisplay.total_runs_conceded,
              },
              { label: "Wickets", value: dataToDisplay.total_wickets },
            ].map((stat, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg">
                <h3 className="font-semibold text-gray-700">{stat.label}</h3>
                <p className="text-xl font-bold text-gray-900">
                  {defaultIfNull(stat.value)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerVsTeamCompResult;
