import React from "react";
import styles from "../../app/[match-details]/head-to-head/head-to-head.module.css";
import Image from "next/image";

const Head = ({ logoTeamA, logoTeamB, nameTeamA, nameTeamB }) => {
  return (
    <>
      <div className={styles.H2Hhead}>
        <div className={styles.headcontent}>
          <Image height={50} width={50} src={logoTeamA} alt="" />
          <span>VS</span>
          <Image height={50} width={50} src={logoTeamB} alt="" />
        </div>
        <div className={styles.Teamtab}>
          <div className={styles.LeftTeam}>
            <Image height={15} width={15} src={logoTeamA} alt="" />
            <span>{nameTeamA}</span>
          </div>
          <div className={styles.rightTeam}>
            <Image height={15} width={15} src={logoTeamB} alt="" />
            <span>{nameTeamB}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
