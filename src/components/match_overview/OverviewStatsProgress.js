import React from "react";
import styles from "../../app/[match-details]/match-overview/matchOverview.module.css";

const OverviewStatsProgress = (props) => {
  const match = props?.FantasyOverview?.filter(
    (match) => match?.match_id == props?.matchId
  );

  const battingPlayers = match?.[0]?.dreamTeam?.filter((player) => {
    return player?.playing_role == "bat";
  });

  const bowlingPlayers = match?.[0]?.dreamTeam?.filter(
    (player) => player?.playing_role == "bowl"
  );

  const allRounderPlayers = match?.[0]?.dreamTeam?.filter(
    (player) => player?.playing_role == "all"
  );

  const WicketPlayers = match?.[0]?.dreamTeam?.filter(
    (player) => player?.playing_role == "wk"
  );

  const battingFp = battingPlayers?.reduce((acc, curr) => acc + curr.points, 0);
  const bowlingFp = bowlingPlayers?.reduce((acc, curr) => acc + curr.points, 0);
  const allFp = allRounderPlayers?.reduce((acc, curr) => acc + curr.points, 0);
  const wicketFp = WicketPlayers?.reduce((acc, curr) => acc + curr.points, 0);

  const totalPoints = battingFp + bowlingFp + allFp + wicketFp;

  return (
    <>
      <div className={styles.tossrends}>
        <h2 className={styles.tossrendstext}>
          Fantasy points contribution by position in Dream Team :-
        </h2>
        <p className={styles.venueinfo}>
          Breakdown of fantasy points based on positions for players appearing
          in the Dream Team of the last&nbsp;played at this venue
        </p>
      </div>
      <div className={styles.infocontainer}>
        <div className={styles.statblock}>
          <div className={styles.statdetail}>
            <span>Batting</span>
            <span className={styles.winchasing}>{battingFp} PTS</span>
          </div>
          <div className={styles.progressbar}>
            <div
              className={styles.progress1}
              style={{
                width: `${(parseInt(battingFp || 10) / totalPoints) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className={styles.statblock}>
          <div className={styles.statdetail}>
            <span>Bowling</span>
            <span className={styles.winchasing}>{bowlingFp} PTS</span>
          </div>
          <div className={styles.progressbar}>
            <div
              className={styles.progress1}
              style={{
                width: `${(parseInt(bowlingFp || 10) / totalPoints) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className={styles.statblock}>
          <div className={styles.statdetail}>
            <span>Wicket-Keeper</span>
            <span className={styles.winchasing}>{wicketFp} PTS</span>
          </div>
          <div className={styles.progressbar}>
            <div
              className={styles.progress1}
              style={{
                width: `${(parseInt(wicketFp || 10) / totalPoints) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className={styles.statblock}>
          <div className={styles.statdetail}>
            <span>All-Rounder </span>
            <span className={styles.winchasing}>{allFp} PTS</span>
          </div>
          <div className={styles.progressbar}>
            <div
              className={styles.progress1}
              style={{
                width: `${(parseInt(allFp || 10) / totalPoints) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewStatsProgress;
