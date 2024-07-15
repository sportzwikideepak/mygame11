import React from "react";
import styles from "../../app/[match-details]/venue-overview/venueOverview.module.css";
import Link from "next/link";

const VenueNav = (props) => {
  return (
    <>
      <div className={styles.centeredcontent}>
        <div className={styles.buttongroup}>
          <Link href={`/${props?.currentPath}/venue-overview`}>
            <button
              className={
                props?.activeTab == 0
                  ? `${styles.buttonred}`
                  : styles.buttonwhite
              }
            >
              Overview
            </button>
          </Link>
          <Link href={`/${props?.currentPath}/venue-overview/last-10-matches`}>
            <button
              className={
                props?.activeTab == 1
                  ? `${styles.buttonred}`
                  : styles.buttonwhite
              }
            >
              LAST 10 T20 MATCH
            </button>
          </Link>
          <Link href={`/${props?.currentPath}/venue-overview/team-a`}>
            <button
              className={
                props?.activeTab == 2
                  ? `${styles.buttonred}`
                  : styles.buttonwhite
              }
            >
              {props?.teamNameA || "Team A"} (This Venue)
            </button>
          </Link>
          <Link href={`/${props?.currentPath}/venue-overview/team-b`}>
            <button
              className={
                props?.activeTab == 3
                  ? `${styles.buttonred}`
                  : styles.buttonwhite
              }
            >
              {props?.teamNameB || "Team B"} (This Venue)
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default VenueNav;
