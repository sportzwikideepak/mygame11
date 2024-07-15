import React from "react";
import Image from "next/image";
import styles from "../../app/[match-details]/team-stats/teamStats.module.css";
import Link from "next/link";

const TeamStatsHeader = (props) => {
  return (
    <>
      <div className={styles.navbar}>
        <Link href={`/${props?.currentPath}/data-analytics`}>
          <button className={styles.backbutton}>
            <span className={styles.arrow}>
              <Image
                height={20}
                width={20}
                src="/static/Backbutton.svg"
                alt=""
              />
            </span>
          </button>
        </Link>
        <div className={styles.title}>
          Team Stats
          <span>{props?.title}</span>
        </div>
        <div className={styles.placeholder} />
      </div>
    </>
  );
};

export default TeamStatsHeader;
