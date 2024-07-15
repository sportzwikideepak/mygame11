import React from "react";
import styles from "../../app/[match-details]/tvt/teamvsteam.module.css";
import Image from "next/image";

const Bottomtvt = () => {
  return (
    <>
      <div className={styles.bottom}>
        <div className={styles.bottomcontent}>
          <div className={styles.text}>
            <span className={styles.textbold}>SL - </span>
            <span className={styles.textlight}>Salary,</span>
          </div>
          <div className={styles.text}>
            <span className={styles.textbold}>FPTS - </span>
            <span className={styles.textlight}>Fantasy Points,</span>
          </div>
          <div className={styles.text}>
            <span className={styles.textbold}>STMP -</span>
            <span className={styles.textlight}>Stumpings,</span>
          </div>
          <div className={styles.text}>
            <span className={styles.textbold}>MOV - </span>
            <span className={styles.textlight}>Madien Overs,</span>
          </div>
          <div className={styles.text}>
            <span className={styles.textbold}>ROC - </span>
            <span className={styles.textlight}>Run Out Catch,</span>
          </div>
          <div className={styles.text}>
            <span className={styles.textbold}>ROT - </span>
            <span className={styles.textlight}>Run Out Throw,</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottomtvt;
