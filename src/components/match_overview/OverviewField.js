"use client";
import React, { useState } from "react";
import styles from "../../app/[match-details]/match-overview/matchOverview.module.css";
import Image from "next/image";

const OverviewField = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const match = props?.FantasyOverview?.filter(
    (match) => match?.match_id == props?.matchId
  );

  const battingPlayers = match?.[0]?.dreamTeam?.filter((player) => {
    return player?.playing_role == "bat";
  });

  const bowlingPlayers = match?.[0]?.dreamTeam?.filter(
    (player) => player?.playing_role == "bowl"
  );

  const allRounderPlayers = match?.[0]?.dreamTeam?.filter(
    (player) => player?.playing_role == "all"
  );

  const WicketPlayers = match?.[0]?.dreamTeam?.filter(
    (player) => player?.playing_role == "wk"
  );

  // console.log(battingPlayers, "battingPlayersbattingPlayers");

  const handlePointsTypeChange = (tabNo) => {
    // alert(tabNo);
    setActiveTab(tabNo);
  };

  return (
    <>
      <div className={styles.teamhead}>
        <span>Dream Team</span>
        <div className={styles.Dreampoints}>
          <span>
            {match?.[0]?.dreamTeam?.reduce(
              (acc, curr) => acc + parseInt(curr.points),
              0
            )}{" "}
          </span>
          Dream team PTS
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.salarytab}>
          <div
            style={{ cursor: "pointer" }}
            className={activeTab == 0 ? styles.active : ""}
          >
            <span
              onClick={() => handlePointsTypeChange(0)}
              className={activeTab == 1 ? styles.nonactive : ""}
            >
              Salary
            </span>
            <div
              className={activeTab == 0 ? styles.line : `${styles.line} hidden`}
            />
          </div>
          <div
            style={{ cursor: "pointer" }}
            className={activeTab == 1 ? styles.active : ""}
          >
            <span
              onClick={() => handlePointsTypeChange(1)}
              className={activeTab == 0 ? styles.nonactive : ""}
            >
              Fantasy points
            </span>
            <div
              className={activeTab == 1 ? styles.line : `${styles.line} hidden`}
            />
          </div>
        </div>
        <div className={styles.gridcontainer}>
          {/* WICKET-KEEPERS */}
          <div className={styles.playergroup}>
            <h3 className={styles.grouptitle}>WICKET-KEEPERS</h3>
            <div className={`${styles.players} ${styles.flexcontainer}`}>
              {/* Player Card */}
              {WicketPlayers?.map((player, index) => {
                return (
                  <div key={index} className={styles.playercard}>
                    <Image
                      height={20}
                      width={20}
                      src="/static/player profile.svg"
                      alt="Player"
                      className={styles.playerimg}
                    />
                    <div className={styles.playerinfo}>
                      <div className={styles.infoname}>
                        {player?.player_short_name}
                      </div>
                      <div className={styles.inforate}>
                        {player?.team_short_name} |{" "}
                        {activeTab == 0
                          ? player?.player_rating
                          : player?.points}
                      </div>
                    </div>
                    {player?.designation && (
                      <div className={styles.cpt}>
                        {player?.designation
                          ? player.designation?.charAt(0)
                          : ""}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {/* BATSMEN */}
          <div className={styles.playergroup}>
            <h3 className={styles.grouptitle}>BATSMEN</h3>
            <div className={`${styles.players} ${styles.flexcontainer}`}>
              {/* Player Card */}
              {battingPlayers?.map((player, index) => {
                return (
                  <div key={index} className={styles.playercard}>
                    {player?.designation && (
                      <div className={styles.cpt}>
                        {player?.designation
                          ? player.designation?.charAt(0)
                          : ""}
                      </div>
                    )}
                    <Image
                      height={20}
                      width={20}
                      src="/static/player profile.svg"
                      alt="Player"
                      className={styles.playerimg}
                    />
                    <div className={styles.playerinfo}>
                      <div className={styles.infoname}>
                        {player?.player_short_name}
                      </div>
                      <div className={styles.inforate}>
                        {player?.team_short_name} |{" "}
                        {activeTab == 0
                          ? player?.player_rating
                          : player?.points}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* ALL-ROUNDER */}
          <div className={styles.playergroup}>
            <h3 className={styles.grouptitle}>ALL-ROUNDER</h3>
            <div className={`${styles.players} ${styles.flexcontainer}`}>
              {/* Player Card */}
              {allRounderPlayers?.map((player, index) => {
                return (
                  <div key={index} className={styles.playercard}>
                    {player?.designation && (
                      <div className={styles.cpt}>
                        {player?.designation
                          ? player.designation?.charAt(0)
                          : ""}
                      </div>
                    )}
                    <Image
                      height={20}
                      width={20}
                      src="/static/player profile.svg"
                      alt="Player"
                      className={styles.playerimg}
                    />
                    <div className={styles.playerinfo}>
                      <div className={styles.infoname}>
                        {player?.player_short_name}
                      </div>
                      <div className={styles.inforate}>
                        {player?.team_short_name} |{" "}
                        {activeTab == 0
                          ? player?.player_rating
                          : player?.points}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* BOWLERS*/}
          <div className={styles.playergroup}>
            <h3 className={styles.grouptitle}>BOWLERS</h3>
            <div className={`${styles.players} ${styles.flexcontainer}`}>
              {/* Player Card */}
              {bowlingPlayers?.map((player, index) => {
                return (
                  <div key={index} className={styles.playercard}>
                    {player?.designation && (
                      <div className={styles.cpt}>
                        {player?.designation
                          ? player.designation?.charAt(0)
                          : ""}
                      </div>
                    )}
                    <Image
                      height={20}
                      width={20}
                      src="/static/player profile.svg"
                      alt="Player"
                      className={styles.playerimg}
                    />
                    <div className={styles.playerinfo}>
                      <div className={styles.infoname}>
                        {player?.player_short_name}
                      </div>
                      <div className={styles.inforate}>
                        {player?.team_short_name} |{" "}
                        {activeTab == 0
                          ? player?.player_rating
                          : player?.points}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewField;
