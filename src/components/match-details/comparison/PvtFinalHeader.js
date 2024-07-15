import React from "react";
import styles from "./PlayerVsTeamFinal.module.css";
import Image from "next/image";

const PvtFinalHeader = (props) => {
  return (
    <>
      <div className={styles.navbar}>
        <button className={styles.backbutton}>
          <span className={styles.arrow}>
            <Image height={20} width={20} src="/static/Backbutton.svg" alt="" />
          </span>
        </button>
        <div className={styles.title}>{props?.short_title}</div>
        <div className={styles.placeholder} />
      </div>
    </>
  );
};

export default PvtFinalHeader;
