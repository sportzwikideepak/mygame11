import Image from "next/image";
import React from "react";
import styles from "./squadList.module.css";

const SquadList = ({ playing_11 }) => {
  // console.log(playing_11?.response?.teama?.squads, "fekjnejnkjvbk");
  return (
    <>
      <div className={styles.container4}>
        {/* <div className={styles.controls}>
          <div className={styles.controlGroup}>
            <div className={styles.positionHead}>Position</div>
            <select id="position">
              <option>All</option>
            </select>
          </div>
          <div className={styles.controlGroup}>
            <div className={styles.positionHead}>Batting Style</div>
            <select id="battingStyle">
              <option>All</option>
            </select>
          </div>
          <div className={styles.controlGroup}>
            <div className={styles.positionHead}>Bowling Style</div>
            <select id="bowlingStyle">
              <option>All</option>
            </select>
          </div>
        </div> */}
        {/* <h5>Playing 11 for the match</h5> */}
        <div className={styles.matchInfo}>
          <div className={styles.team1}>
            <Image
              height={20}
              width={20}
              src={playing_11?.response?.teams?.[0]?.logo_url}
              alt="CSK"
              className={styles.team1Logo}
            />
            <span>{playing_11?.response?.teams?.[0]?.abbr}</span>
          </div>
          <span className={styles.versus}>vs</span>
          <div className={styles.team1}>
            <span>{playing_11?.response?.teams?.[1]?.abbr}</span>
            <Image
              height={20}
              width={20}
              src={playing_11?.response?.teams?.[1]?.logo_url}
              alt="MI"
              className={styles.team1Logo}
            />
          </div>
        </div>
        <div className={styles.playerContainer}>
          <ul className={styles.players}>
            {playing_11?.response?.teama?.squads?.map((player) => {
              return (
                <>
                  <a href>
                    <li>
                      <Image
                        height={20}
                        width={20}
                        src="/static/Profile.svg"
                        alt="Player"
                        className={styles.playerPhoto}
                      />
                      <div className={styles.details}>
                        <p>{player?.name}</p>
                        <span>{player?.role?.toUpperCase()}</span>
                      </div>
                    </li>
                  </a>
                </>
              );
            })}
          </ul>
          <div className={styles.line} />
          <ul className={styles.players1}>
            {playing_11?.response?.teamb?.squads?.map((player) => {
              return (
                <>
                  <a href="#">
                    <li>
                      <div className={styles.details}>
                        <p style={{ display: "flex", justifyContent: "end" }}>
                          {player?.name}
                        </p>
                        <span>{player?.role?.toUpperCase()}</span>
                      </div>
                      <Image
                        height={20}
                        width={20}
                        src="/static/Profile.svg"
                        alt="Player"
                        className={styles.playerPhoto1}
                      />
                    </li>
                  </a>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SquadList;
