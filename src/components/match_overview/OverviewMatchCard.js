import React from "react";
import styles from "../../app/[match-details]/match-overview/matchOverview.module.css";
import Image from "next/image";

const OverviewMatchCard = (props) => {
  return (
    <>
      <div className={styles.announcementcontent}>
        <div className={styles.lines1} />
        <div className={styles.announcement}>
          {new Date(props?.dateStart).toLocaleDateString("en-IN")}
          {/* Playing 11 not announced */}
        </div>
        <div className={styles.lines1} />
      </div>
      {/* ...........Match Cards........... */}
      <div className={styles.mathlive}>
        <div className={styles.Livematchtab}>
          <div className={styles.teams}>
            <div className={styles.team}>
              <Image
                height={20}
                width={20}
                src={props?.logoTeamA}
                alt={`${props?.teamNameA}`}
              />
              {props?.teamNameA}
            </div>
            <div className={styles.matchdetails}>
              <div className={styles.whichmatch}>{props?.matchTitle}</div>
              <div className={styles.livetext}>{props?.status}</div>
            </div>
            <div className={styles.team}>
              <Image
                height={20}
                width={20}
                src={props?.logoTeamB}
                alt={`${props?.teamNameB}`}
              />
              {props?.teamNameB}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewMatchCard;
