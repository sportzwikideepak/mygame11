import React from "react";
import styles from "../../../app/[match-details]/comparison/comparision.module.css";

const ComparisonTab = (props) => {
  return (
    <>
      <div className={styles.headerbottom}>
        <div
          onClick={() => props?.handleTabChange(0)}
          className={props?.activeTab == 0 ? styles.active : styles.nonactive}
        >
          <div>Player vs Player Comparision</div>
          {props?.activeTab == 0 ? (
            <div className={styles.activeline} />
          ) : (
            <div className={styles.nonactiveline} />
          )}
        </div>
        {/* Enable later gaurav */}
        {/* <div
          onClick={() => props?.handleTabChange(1)}
          className={props?.activeTab == 1 ? styles.active : styles.nonactive}
        >
          <div>Player vs Team Comparision</div>
          {props?.activeTab == 1 ? (
            <div className={styles.activeline} />
          ) : (
            <div className={styles.nonactiveline} />
          )}
        </div> */}
      </div>
    </>
  );
};

export default ComparisonTab;
