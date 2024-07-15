import React from "react";
import styles from "../../app/[match-details]/tvt/teamvsteam.module.css";

const MatchFormatSelect = ({ handleSelectedFormatChange, selectedFormat }) => {
  return (
    <>
      <div className={styles.formattype}>
        <div className={styles.formettext}>Format type</div>
        <div className={styles.season}>
          <div
            onClick={() => handleSelectedFormatChange("test")}
            className={
              selectedFormat == "test"
                ? styles.activetest
                : styles.nonactivetest
            }
          >
            TEST
          </div>
          <div
            onClick={() => handleSelectedFormatChange("odi")}
            className={
              selectedFormat == "odi" ? styles.activetest : styles.nonactivetest
            }
          >
            ODI
          </div>
          <div
            onClick={() => handleSelectedFormatChange("t20")}
            className={
              selectedFormat == "t20" ? styles.activetest : styles.nonactivetest
            }
          >
            T20
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchFormatSelect;
