import React from "react";
import styles from "./PlayerVsTeamFinal.module.css";

const PvtFinalPlayingType = (props) => {
  return (
    <>
      <div className={styles.container}>
        <button
          onClick={() => props?.handleSelectedTabChange(0)}
          className={`${styles.button} ${
            props?.selectedTab == 0 ? styles.red : styles.border
          }`}
        >
          Batting
        </button>
        <button
          onClick={() => props?.handleSelectedTabChange(1)}
          className={`${styles.button} ${
            props?.selectedTab == 1 ? styles.red : styles.border
          }`}
        >
          Bowling
        </button>
      </div>
    </>
  );
};

export default PvtFinalPlayingType;
