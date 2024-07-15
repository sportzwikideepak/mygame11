import React from "react";
import styles from "../../app/[match-details]/match-overview/matchOverview.module.css";
import Link from "next/link";

const OverviewNav = (props) => {
  // console.log(props?.currentPath, "892fhou9hg08");
  return (
    <>
      <div className={styles.centeredcontent}>
        <div className={styles.buttongroup}>
          <Link
            href={`/${props?.currentPath1}/venue-overview/${props?.currentTeam}/${props?.currentPath2}`}
          >
            <button
              className={
                props?.active == 0 ? styles.buttonred : styles.buttonwhite
              }
            >
              Overview
            </button>
          </Link>
          <Link
            href={`/${props?.currentPath1}/venue-overview/${props?.currentTeam}/${props?.currentPath2}/scorecard/`}
          >
            <button
              className={
                props?.active == 1 ? styles.buttonred : styles.buttonwhite
              }
            >
              Scorecard
            </button>
          </Link>
          <Link
            href={`/${props?.currentPath1}/venue-overview/${props?.currentTeam}/${props?.currentPath2}/fantasy/`}
          >
            <button
              className={
                props?.active == 2 ? styles.buttonred : styles.buttonwhite
              }
            >
              Fantasy
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OverviewNav;
