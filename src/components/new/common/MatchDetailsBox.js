import Image from "next/image";
import React from "react";
import styles from "../../../app/[match-details]/matchDetails.module.css";

const MatchDetailsBox = ({ match_info }) => {
  return (
    <>
      <div className={styles.card1}>
        <div className={styles.cardHeader}>
          <Image
            height={20}
            width={20}
            src="/static/Match Details.svg"
            alt="match details icon"
            className={styles.icon}
          />
          <h2>MATCH DETAILS</h2>
        </div>
        <div className={styles.infoGroup}>
          <div className={styles.info}>
            <span className={styles.set}>Format</span>
            <span className={styles.set1}>
              {match_info?.format_str?.toUpperCase()}
            </span>
          </div>
          <div className={styles.info}>
            <span className={styles.set}>Series</span>
            <span className={styles.set1}>
              {match_info?.competition?.title},{" "}
              {match_info?.competition?.season}
            </span>
          </div>
          <div className={styles.info}>
            <span className={styles.set}>Match No.</span>
            <span className={styles.set1}>
              Match {match_info?.match_number}
            </span>
          </div>
          <div className={styles.info}>
            <span className={styles.set}>Venue</span>
            <span className={styles.set1}>
              {match_info?.venue?.name}, {match_info?.venue?.location}{" "}
              {match_info?.venue?.country}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchDetailsBox;
