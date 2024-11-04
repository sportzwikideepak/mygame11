"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Use next/navigation for App Router
import styles from "./LiveSection.module.css";
import Nav from "../common/Nav";

const menu_items = [
  { id: 0, name: "Overview", url: "/" },
  { id: 1, name: "Data & Analytics", url: "data-analytics" },
  { id: 2, name: "Scorecard", url: "scorecard" },
  { id: 3, name: "Squad", url: "squads" },
  { id: 4, name: "Comparison", url: "comparison" },
  { id: 5, name: "Key Insight", url: "key-insight" },
  { id: 6, name: "PL Labs", url: "pl-labs" },
  { id: 7, name: "Custom team", url: "custom-team" },
];

const LiveSection = ({ match_info, active, currentUrl }) => {
  const router = useRouter();

  const handleRedirect = (url) => {
    router.push(url);
  };

  return (
    <>
      <div className={styles.live1}>
        <div className={styles.container}>
          <div className={styles.liveMain}>
            <div className={styles.card}>
              <div className={styles.header1}>
                <span className={styles.live}>{match_info?.status_str}</span>
                <span className={styles.league}>
                  - {match_info?.competition?.title}
                </span>
              </div>
              <div className={styles.matchDetails}>
                <div className={styles.teamInfo}>
                  <Image
                    height={20}
                    width={20}
                    src={match_info?.teama?.logo_url}
                    alt="team1"
                    className={styles.teamIcon}
                  />
                  <span className={styles.teamName}>
                    {match_info?.teama?.name}
                  </span>
                </div>
                <div className={styles.scoreDetails}>
                  <span className={styles.overs}>
                    ({match_info?.teama?.overs} ov)
                  </span>
                  <span className={styles.score}>
                    {match_info?.teama?.scores}
                  </span>
                </div>
              </div>
              <div className={styles.matchDetails}>
                <div className={styles.teamInfo}>
                  <Image
                    height={20}
                    width={20}
                    src={match_info?.teamb?.logo_url}
                    alt="team2"
                    className={styles.teamIcon}
                  />
                  <span className={styles.teamName}>
                    {match_info?.teamb?.name}
                  </span>
                </div>
                <div className={styles.scoreDetails}>
                  <span className={styles.overs}>
                    ({match_info?.teamb?.overs} ov)
                  </span>
                  <span className={styles.score}>
                    {match_info?.teamb?.scores}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.poll}>
              <div className={styles.question}>
                <Image
                  height={20}
                  width={20}
                  src="/static/Winimogi.svg"
                  alt="emoji"
                  className={styles.emoji}
                />
                <span className={styles.pollText}>WHO WILL WIN?</span>
              </div>
              <div className={styles.buttons}>
                <button
                  className={styles.voteButton}
                  onClick={() =>
                    handleRedirect(`/team/${match_info?.teama?.short_name}`)
                  }
                >
                  {match_info?.teama?.short_name}
                </button>
                <button
                  className={styles.voteButton}
                  onClick={() =>
                    handleRedirect(`/team/${match_info?.teamb?.short_name}`)
                  }
                >
                  {match_info?.teamb?.short_name}
                </button>
              </div>
            </div>
            <div className={styles.poll}>
              <div className={styles.question}>
                <Image
                  height={20}
                  width={20}
                  src="/static/Winimogi.svg"
                  alt="emoji"
                  className={styles.emoji}
                />
                <span
                  className={styles.pollText}
                  onClick={() => handleRedirect("/key-prediction")}
                  style={{ cursor: "pointer" }}
                >
                  KEY PREDICTION IN TWO MINUTES
                </span>
              </div>
            </div>
          </div>
        </div>
        <Nav menu={menu_items} active={active} currentUrl={currentUrl} />
      </div>
    </>
  );
};

export default LiveSection;
