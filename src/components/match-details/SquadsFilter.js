import React from "react";
import styles from "../../app/[match-details]/matchDetails.module.css";
import Image from "next/image";

const SquadsFilter = (props) => {
  return (
    <>
      <div className={styles.flex}>
        <div className={styles.dropdowncontainer} tabIndex={0}>
          <span className={styles.dropdowntext}>Position</span>
          <Image
            height={20}
            width={20}
            src="/static/dropdown.svg"
            alt="Dropdown Icon"
          />
          <div className={styles.dropdowncontent}>
            {props?.playingPositions?.map((item, index) => {
              return (
                <div
                  className={styles.filterItem}
                  onClick={() =>
                    props?.handlePlayFilterChange("playerPosition", item)
                  }
                  key={index}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.dropdowncontainer} tabIndex={0}>
          <span className={styles.dropdowntext}>Batting style</span>
          <Image
            height={20}
            width={20}
            src="/static/dropdown.svg"
            alt="Dropdown Icon"
          />
          <div className={styles.dropdowncontent}>
            {props?.playingBattingStyles?.map((item, index) => {
              return (
                <div
                  className={styles.filterItem}
                  onClick={() =>
                    props?.handlePlayFilterChange("battingStyle", item)
                  }
                  key={index}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.dropdowncontainer} tabIndex={0}>
          <span className={styles.dropdowntext}>Bowling style</span>
          <Image
            height={20}
            width={20}
            src="/static/dropdown.svg"
            alt="Dropdown Icon"
          />
          <div className={styles.dropdowncontent}>
            {props?.playingBowlingStyles?.map((item, index) => {
              return (
                <div
                  className={styles.filterItem}
                  onClick={() =>
                    props?.handlePlayFilterChange("bowlingStyle", item)
                  }
                  key={index}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SquadsFilter;
