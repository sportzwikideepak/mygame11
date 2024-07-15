"use client";
import React, { useState } from "react";
import styles from "../../app/[match-details]/squad/compare/[comparePlayerIds]/comparePlayer.module.css";
import BattingStatsVs from "./BattingStatsVs";
import BowllingStatsVs from "./BowllingStatsVs";
import Image from "next/image";

const CompareTwoMain = ({
  player1data,
  player2data,
  player1Batting,
  player2Batting,
  player1Ball,
  player2Ball,
  // nameTeamA,
  // nameTeamB,
  player1vsTeam,
  player2vsTeam,
}) => {
  const [playType, setPlayType] = useState("batting");
  console.log(player1vsTeam, "932hg0c9ehiboi80");
  // console.log(player2Batting, "932hg903h2ibp0hoi80");
  return (
    <>
      <div className={styles.Compareimages}>
        <div className={styles.firstplayer}>
          {/* <a href="compare/">
            <Image
              height={20}
              width={20}
              src="/static/cross.svg"
              alt=""
              className={styles.cross1}
            />
          </a> */}
          <Image
            className={styles.profileIc}
            src="/static/profile_png.png"
            height={40}
            width={40}
            alt=""
          />
          <span>{player1data?.player?.title}</span>
          {/* <div className={styles.Team}>{nameTeamA}</div> */}
        </div>
        <div className={styles.vs}>vs</div>
        <div className={styles.firstplayer}>
          {/* <a href="compare/">
            <Image
              height={20}
              width={20}
              src="/static/cross.svg"
              alt=""
              className={styles.cross2}
            />
          </a> */}
          <Image
            className={styles.profileIc}
            src="/static/profile_png.png"
            height={40}
            width={40}
            alt=""
          />
          <span>{player2data?.player?.title}</span>
          {/* <div className={styles.Team}>{nameTeamB}</div> */}
        </div>
      </div>
      <div className={styles.Choose}>
        <div
          onClick={() => setPlayType("batting")}
          className={playType == "batting" ? styles.Active : styles.nonactive}
        >
          Batting
        </div>
        <div
          onClick={() => setPlayType("bowling")}
          className={playType == "bowling" ? styles.Active : styles.nonactive}
        >
          Bowling
        </div>
      </div>
      {playType == "batting" ? (
        <BattingStatsVs
          player1Batting={player1Batting}
          player2Batting={player2Batting}
        />
      ) : (
        <BowllingStatsVs player1Ball={player1Ball} player2Ball={player2Ball} />
      )}

      {/* <div className={styles.trends}>
        <span className={styles.winningaftertoss}>Stats by Team :-</span>
        <div className={styles.smalltwo}>
          <span className={styles.Tosstrendstextsmall}>vs ENG</span>
          <span className={styles.Tosstrendstextsmall}>vs ENG</span>
        </div>
        <div className={styles.compback}>
          <div className={styles.leftbatting}>
            <span className={styles.leftbatting1}>55</span>
            <span className={styles.leftbatting3}>Matches</span>
            <span className={styles.leftbatting2}>10</span>
          </div>
          <div className={styles.battingline}>
            <div className={styles.battinglineleft} />
            <div className={styles.battinglineright} />
          </div>
          <div className={styles.leftbatting}>
            <span className={styles.leftbatting1}>55</span>
            <span className={styles.leftbatting3}>Matches</span>
            <span className={styles.leftbatting2}>10</span>
          </div>
          <div className={styles.battingline}>
            <div className={styles.battinglineleft} />
            <div className={styles.battinglineright} />
          </div>
          <div className={styles.leftbatting}>
            <span className={styles.leftbatting1}>55</span>
            <span className={styles.leftbatting3}>Matches</span>
            <span className={styles.leftbatting2}>10</span>
          </div>
          <div className={styles.battingline}>
            <div className={styles.battinglineleft} />
            <div className={styles.battinglineright} />
          </div>
          <div className={styles.leftbatting}>
            <span className={styles.leftbatting1}>55</span>
            <span className={styles.leftbatting3}>Matches</span>
            <span className={styles.leftbatting2}>10</span>
          </div>
          <div className={styles.battingline}>
            <div className={styles.battinglineleft} />
            <div className={styles.battinglineright} />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CompareTwoMain;
