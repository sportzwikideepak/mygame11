"use client";
import React from "react";
import styles from "./PlayersComparisonFinalMain.module.css";
import Image from "next/image";

const PvPHead = (props) => {
  return (
    <>
      <div className={styles.navbar}>
        <button
          // onClick={() => props?.handlePlayerComparisonActive()}
          className={styles.backbutton}
        >
          <span className={styles.arrow}>
            <Image
              onClick={(e) => props?.handlePlayerComparisonActive(e)}
              height={20}
              width={20}
              src="/static/Backbutton.svg"
              alt=""
            />
          </span>
        </button>
        <div className={styles.title}>ENG vs GM</div>
        <div className={styles.placeholder} />
      </div>
    </>
  );
};

export default PvPHead;
