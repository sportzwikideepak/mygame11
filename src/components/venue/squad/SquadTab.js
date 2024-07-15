import React from "react";
import styles from "./Squad.module.css";
import Image from "next/image";

const SquadTab = (props) => {
  return (
    <>
      {/* <div className={styles.SquadMainTab}> */}
        <div className={styles.teamstab}>
          <div
            onClick={() => props?.changeTab(0)}
            className={
              props?.selectedTab == 0
                ? `${styles.Teamtableftactive}`
                : `${styles.Teamtableftnonactive}`
            }
          >
            <Image height={15} width={15} src={props?.logoTeamA} alt="" />
            <span>{props?.nameTeamA}</span>
          </div>
          <div
            onClick={() => props?.changeTab(1)}
            className={
              props?.selectedTab == 1
                ? `${styles.Teamtableftactive}`
                : `${styles.Teamtableftnonactive}`
            }
          >
            <Image height={15} width={15} src={props?.logoTeamB} alt="" />
            <span>{props?.nameTeamB}</span>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default SquadTab;
