import React from "react";
import styles from "./PlayersComparisonFinalMain.module.css";

const PvPComaprisonType = (props) => {
  return (
    <>
      <div className={styles.buttoncontainer}>
        <div
          onClick={() => props?.setPageType("last")}
          className={styles.buttonwrapper}
        >
          <button
            className={`${styles.tabbutton} ${
              props?.pageType == "last" ? styles.active : ""
            }`}
          >
            Last Match
            {props?.pageType == "last" && <span className={styles.underline} />}
          </button>
        </div>
        <div
          onClick={() => props?.setPageType("last5")}
          className={styles.buttonwrapper}
        >
          <button
            className={`${styles.tabbutton} ${
              props?.pageType == "last5" ? styles.active : ""
            }`}
          >
            Last 5 Match
            {props?.pageType == "last5" && (
              <span className={styles.underline} />
            )}
          </button>
        </div>
        <div
          onClick={() => props?.setPageType("all")}
          className={styles.buttonwrapper}
        >
          <button
            className={`${styles.tabbutton} ${
              props?.pageType == "all" ? styles.active : ""
            }`}
          >
            Last Series
            {props?.pageType == "all" && <span className={styles.underline} />}
          </button>
        </div>
      </div>
    </>
  );
};

export default PvPComaprisonType;
