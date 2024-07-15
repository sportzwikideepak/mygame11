import React from "react";
import styles from "./PlayerVsTeam.module.css";

const PvTTeamSelector = (props) => {
  return (
    <>
      <div className={styles.buttoncontainer1}>
        <button
          onClick={() => props?.setSelectedTeam(0)}
          className={`${styles.button} ${
            props?.selectedTeam === 0 ? styles.red : styles.zinc
          }`}
        >
          {props?.teamAName}
        </button>
        <button
          onClick={() => props?.setSelectedTeam(1)}
          className={`${styles.button} ${
            props?.selectedTeam === 1 ? styles.red : styles.zinc
          }`}
        >
          {props?.teamBName}
        </button>
      </div>
    </>
  );
};

export default PvTTeamSelector;
