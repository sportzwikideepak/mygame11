import Image from "next/image";
import React from "react";
import styles from "../../../app/[match-details]/matchDetails.module.css";
import Link from "next/link";

const DreamTeamBox = ({ match_info, currentUrl = "" }) => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.header3}>
          <Image
            height={20}
            width={20}
            src="/static/Dream Team.svg"
            alt="trophy"
            className={styles.icon}
          />
          <h2>DREAM TEAM</h2>
        </div>
        <div className={styles.card4}>
          <div className={styles.header1}>
            <span className={styles.live}>{match_info?.status_str}</span>
            <span className={styles.league}>
              - {match_info?.competition?.title}{" "}
              {match_info?.competition?.season}
            </span>
          </div>
          <div className={styles.liveAction}>
            <div className={styles.liveLeft}>
              <div className={styles.matchDetails1}>
                <div className={styles.teamInfo}>
                  <Image
                    height={20}
                    width={20}
                    src={match_info?.teama?.logo_url}
                    alt="team1"
                    className={styles.teamIcon}
                  />
                  <span className={styles.teamName}>
                    {match_info?.teama?.short_name}
                  </span>
                </div>
              </div>
              <div className={styles.matchDetails1}>
                <div className={styles.teamInfo}>
                  <Image
                    height={20}
                    width={20}
                    src={match_info?.teamb?.logo_url}
                    alt="team2"
                    className={styles.teamIcon}
                  />
                  <span className={styles.teamName}>
                    {match_info?.teamb?.short_name}
                  </span>
                </div>
              </div>
            </div>
            <Link href={`/${currentUrl}/venue-overview/dream-team`}>
              <button className={styles.teamButton}>Dream Team</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DreamTeamBox;
