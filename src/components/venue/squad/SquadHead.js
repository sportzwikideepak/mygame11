import React from "react";
import styles from "./Squad.module.css";
import Image from "next/image";

const SquadHead = (props) => {
  return (
    <>
      <div className={styles.head}>
        <div className={styles.Teamscard}>
          <div className={styles.firstteam}>
            <Image height={20} width={20} src={props?.logoTeamA} alt="" />
            <span>{props?.nameTeamA}</span>
          </div>
          <div className={styles.secondteam}>
            <Image height={20} width={20} src={props?.logoTeamB} alt="" />
            <span>{props?.nameTeamB}</span>
          </div>
        </div>
        <span className={styles.Squadtext}>Squads</span>
        <div className={styles.Playing11}>
          <div className={styles.playing11dot} />
          {props?.isTeamAnnounced ? (
            <span>Playing 11 announced</span>
          ) : (
            <span>Playing 11 is not announced</span>
          )}
        </div>
      </div>
    </>
  );
};

export default SquadHead;
