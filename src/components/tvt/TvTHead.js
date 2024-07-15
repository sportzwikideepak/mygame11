import React from "react";
import styles from "../../app/[match-details]/tvt/teamvsteam.module.css";

const TvTHead = (props) => {
  console.log(props);
  return (
    <>
      <div className={styles.teamsection}>
        <div className={styles.istteam}>
          <img src="Upcoming/England Flag.svg" alt="" />
          <span>{props?.nameTeamA}</span>
        </div>
        <div className={styles.iindteam}>
          <img src="Upcoming/England Flag.svg" alt="" />
          <span>{props?.nameTeamB}</span>
        </div>
      </div>
      <div className={styles.date}>
        <span>{props?.matchStarts}</span>
      </div>
    </>
  );
};

export default TvTHead;
