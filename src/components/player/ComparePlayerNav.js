import React from "react";
import styles from "../../app/[match-details]/squad/compare/compare.module.css";

const ComparePlayerNav = ({ handlePlayerTypeChange, playerType }) => {
  return (
    <>
      <div className={styles.Destinationtab}>
        <div
          onClick={() => handlePlayerTypeChange("wk")}
          className={playerType == "wk" ? styles.activetab : styles.nonactive}
        >
          <span>Wicket Keepers</span>
        </div>
        <div
          onClick={() => handlePlayerTypeChange("bat")}
          className={playerType == "bat" ? styles.activetab : styles.nonactive}
        >
          <span>Batters</span>
        </div>
        <div
          onClick={() => handlePlayerTypeChange("all")}
          className={playerType == "all" ? styles.activetab : styles.nonactive}
        >
          <span>All Rounders</span>
        </div>
        <div
          onClick={() => handlePlayerTypeChange("bowl")}
          className={playerType == "bowl" ? styles.activetab : styles.nonactive}
        >
          <span>Bowler</span>
        </div>
      </div>
    </>
  );
};

export default ComparePlayerNav;
