import React from "react";
import styles from "./PlayersComparisonFinalMain.module.css";
import Image from "next/image";

const PvPLeftComparisonPanel = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div style={{ marginTop: "203px" }} className="hidde">
          {/* <button className={`${styles.button} ${styles.red}`}>Batting</button>
        <button className={`${styles.button} ${styles.border}`}>Bowling</button>
        <button
          className={`${styles.button} ${styles.border} ${styles.withicon}`}
        >
          ODI
          <span className={styles.icon}>
            <Image height={20} width={20} src="/static/dropdown.svg" alt="" />
          </span>
        </button> */}
        </div>
        <div className={styles.listcontainer}>
          <ul className={styles.statlist}>
            <li title="Last Played Match">Last Played</li>
            <li title="Total Fantasy Points">Total FP</li>
            <li title="Average Fantasy Points">Avg FP</li>
            {/* <li title="Value">Value</li> */}
            <li title="Average Team Rank">Avg TR</li>
            {/* <li title="Average Position Rank">Avg PR</li> */}
            <li title="Total Runs">Total R</li>
            <li title="100's">100&apos;s</li>
            <li title="50's">50&apos;s</li>
            <li title="Strike Rate">SR</li>
            <li title="Highest Score">HS</li>
            <li title="Total Wickets">Total W</li>
            <li title="Economy Rate">ECO</li>
            <li title="Total Catches">Total C</li>
            <li title="Total Stumping">Total S</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PvPLeftComparisonPanel;
