import React from "react";
import styles from "../../../app/[match-details]/squad/[player]/playerInfo.module.css";

const PlayStylesSelectNav = ({ handlePlayTypeChange, playType }) => {
  return (
    <>
      <div className={styles.playerstyle}>
        <div
          onClick={() => handlePlayTypeChange("batting")}
          className={
            playType == "batting" ? styles.styleactive : styles.stylenonactive
          }
        >
          <span>Batting</span>
        </div>
        <div
          onClick={() => handlePlayTypeChange("bowling")}
          className={
            playType == "bowling" ? styles.styleactive : styles.stylenonactive
          }
        >
          <span>Bowling</span>
        </div>
      </div>
    </>
  );
};

export default PlayStylesSelectNav;
