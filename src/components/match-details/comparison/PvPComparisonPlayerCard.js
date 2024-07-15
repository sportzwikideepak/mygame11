import React from "react";
import styles from "./PlayersComparisonFinalMain.module.css";
import Image from "next/image";

const PvPComparisonPlayerCard = (props) => {
  // console.log(props?.playerDetails?.playerId, "80h4f0pih8gn0ph0");
  // console.log(props?.playersList?.teama?.squads, "39j02nhpihn");

  const isPlayerInTeamA = props?.playersList?.teama?.squads?.filter(
    (item) => item?.player_id == props?.playerDetails?.playerId
  );

  const isPlayerInTeamB = props?.playersList?.teamb?.squads?.filter(
    (item) => item?.player_id == props?.playerDetails?.playerId
  );

  // console.log("inTeamA: ", isPlayerInTeamA);
  // console.log("inTeamB: ", isPlayerInTeamB);
  // console.log(props?.teamAName, "8hin043iphnepibnp0");
  // console.log(
  //   props?.playerDetails?.matches?.[0]?.PlayerName,
  //   "80h4f0pih8gn0ph0"
  // );

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardheader}>
          <div className={styles.profileinfo}>
            <div
              onClick={() =>
                props?.handlePlayerSelect(props?.playerDetails?.playerId)
              }
              className={`${styles.exitcard} cursor-pointer`}
            >
              <Image height={20} width={20} src="/static/Exit.svg" alt="" />
            </div>
            <Image
              height={20}
              width={20}
              src="/static/Player.svg"
              alt="Player Avatar"
              className={styles.avatar}
            />
            <div className={styles.info}>
              <div className={styles.name}>
                {props?.playerDetails?.matches?.[0]?.PlayerName}
                <span>
                  (
                  {isPlayerInTeamA?.length > 0
                    ? props?.teamAName
                    : isPlayerInTeamB?.length > 0
                    ? props?.teamBName
                    : null}
                  )
                </span>
              </div>
              <div className={styles.salary}>
                Sal ₹{props?.playerDetails?.matches?.[0]?.LastMatchRating}
              </div>
            </div>
          </div>
          <button className={styles.closebutton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={styles.icon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className={styles.role}>
          {props?.playerDetails?.matches?.[0]?.playing_role}
        </div>
        <ul className={styles.stats}>
          <li className={styles.color}>
            {new Date(
              props?.playerDetails?.matches?.[
                props?.playerDetails?.matches?.length - 1
              ]?.MatchDate
            ).toLocaleDateString()}
            -
            {new Date(
              props?.playerDetails?.matches?.[0]?.MatchDate
            ).toLocaleDateString()}
          </li>
          <li>
            {props?.playerDetails?.matches
              ?.reduce((acc, curr) => acc + curr?.LastMatchPoints || 0, 0)
              .toFixed(1)}
          </li>
          <li className={styles.color}>
            {(
              props?.playerDetails?.matches?.reduce(
                (acc, curr) => acc + curr?.LastMatchPoints || 0,
                0
              ) / props?.playerDetails?.matches?.length
            ).toFixed(1)}
          </li>
          {/* <li>remove</li> */}
          <li>
            {(
              props?.playerDetails?.matches?.reduce(
                (acc, curr) => acc + curr?.TeamPosition || 0,
                0
              ) / props?.playerDetails?.matches?.length
            ).toFixed(1)}
          </li>
          {/* <li>remove</li> */}
          <li className={styles.color}>
            {props?.playerDetails?.matches
              ?.reduce((acc, curr) => acc + (curr?.RunsScored || 0), 0)
              .toFixed()}
          </li>
          <li>
            {props?.playerDetails?.matches
              ?.reduce((acc, curr) => acc + (curr?.Hundreds || 0), 0)
              .toFixed()}
          </li>
          <li className={styles.color}>
            {props?.playerDetails?.matches
              ?.reduce((acc, curr) => acc + (curr?.Fifties || 0), 0)
              .toFixed()}
          </li>
          <li>
            {(
              props?.playerDetails?.matches?.reduce(
                (acc, curr) => acc + curr?.StrikeRate || 0,
                0
              ) / props?.playerDetails?.matches?.length || 1
            ).toFixed(1)}
          </li>
          <li className={styles.color}>
            {props?.playerDetails?.matches
              ?.reduce((acc, curr) => {
                return Math.max(acc, curr?.RunsScored || 0);
              }, 0)
              .toFixed()}
          </li>
          <li>
            {props?.playerDetails?.matches
              ?.reduce((acc, curr) => acc + (curr?.WicketsTaken || 0), 0)
              .toFixed()}
          </li>
          <li className={styles.color}>
            {props?.playerDetails?.matches
              ?.reduce((acc, curr) => {
                const economyRate = parseFloat(curr?.EconomyRate);
                return (
                  acc +
                  (Number.isFinite(economyRate)
                    ? parseFloat(economyRate.toFixed(1))
                    : 0)
                );
              }, 0)
              .toFixed(1)}
          </li>

          <li>
            {props?.playerDetails?.matches
              ?.reduce((acc, curr) => acc + (curr?.Catches || 0), 0)
              .toFixed()}
          </li>
          <li className={styles.color}>
            {props?.playerDetails?.matches
              ?.reduce((acc, curr) => acc + (curr?.Stumpings || 0), 0)
              .toFixed()}
          </li>
        </ul>
      </div>
    </>
  );
};

export default PvPComparisonPlayerCard;
