"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./dataAnalytice.module.css";

const PlayerVsPlayer = ({ top_players }) => {
  const [showFull, setShowFull] = useState(false);

  const toggleView = () => {
    setShowFull(!showFull);
  };

  return (
    <>
      <div className={styles.contentBox}>
        <div className={styles.statsHeader}>
          <div className={styles.statsHead}>
            <Image
              height={74}
              width={74}
              src="/static/Player Stats.svg"
              alt="stats"
              className={styles.icon}
            />
          </div>
          <h2>TOP PLAYER COMPARISON</h2>
          <a href="#" className={styles.link}>
            View All →
          </a>
        </div>
        <div className={styles.compareAll}>
          {top_players
            .slice(0, 8)
            ?.sort((a, b) => b?.total_fantasy_points - a?.total_fantasy_points)
            ?.reduce((acc, player, index, array) => {
              if (index % 2 === 0 && array[index + 1]) {
                acc.push(
                  <div className={styles.playerCards}>
                    <div className={styles.playerCard}>
                      <div className={styles.compPlayer}>
                        <div className={styles.playerImage1}>
                          <Image
                            height={74}
                            width={74}
                            src="/static/Player Comp.svg"
                            alt="Player Image"
                          />
                          <h3 className={styles.h3}>
                            {array[index].short_name}
                          </h3>
                        </div>
                        <div className={styles.playerImage1}>
                          <Image
                            height={74}
                            width={74}
                            src="/static/Player Comp.svg"
                            alt="Player Image"
                          />
                          <h3 className={styles.h3}>
                            {array[index + 1].short_name}
                          </h3>
                        </div>
                      </div>
                      <div className={styles.playerStats}>
                        <div className={styles.statRow}>
                          <span>{array[index].stats?.matches_played}</span>
                          <span className={styles.heading}>Matches</span>
                          <span>{array[index + 1].stats?.matches_played}</span>
                        </div>
                        <div className={styles.statRow}>
                          <span>{array[index].stats?.total_points}</span>
                          <span className={styles.heading}>Points</span>
                          <span className={styles.texdtRed}>
                            {array[index + 1].stats?.total_points}
                          </span>
                        </div>
                        <div className={styles.statRow}>
                          <span className={styles.textdRed}>
                            {Number(
                              array?.[index]?.stats?.average_runs
                            )?.toFixed(0)}
                          </span>
                          <span className={styles.heading}>Avg Runs</span>
                          <span>
                            {Number(
                              array?.[index + 1]?.stats?.average_runs
                            )?.toFixed(0)}
                          </span>
                        </div>

                        {showFull && (
                          <>
                            <div className={styles.statRow}>
                              <span>{array[index].stats?.max_runs}</span>
                              <span className={styles.heading}>Max Runs</span>
                              <span>{array[index + 1].stats?.max_runs}</span>
                            </div>
                            <div className={styles.statRow}>
                              <span>
                                {array[index].stats?.total_balls_faced}
                              </span>
                              <span className={styles.heading}>
                                Balls Faced
                              </span>
                              <span>
                                {array[index + 1].stats?.total_balls_faced}
                              </span>
                            </div>
                            <div className={styles.statRow}>
                              <span>
                                {Number(
                                  array?.[index]?.stats?.strike_rate
                                )?.toFixed(2)}
                              </span>
                              <span className={styles.heading}>
                                Strike Rate
                              </span>
                              <span>
                                {Number(
                                  array?.[index + 1]?.stats?.strike_rate
                                )?.toFixed(2)}
                              </span>
                            </div>
                            <div className={styles.statRow}>
                              <span>{array[index].stats?.total_catches}</span>
                              <span className={styles.heading}>Catches</span>
                              <span>
                                {array[index + 1].stats?.total_catches}
                              </span>
                            </div>
                            <div className={styles.statRow}>
                              <span>{array[index].stats?.total_runouts}</span>
                              <span className={styles.heading}>Runouts</span>
                              <span>
                                {array[index + 1].stats?.total_runouts}
                              </span>
                            </div>
                            <div className={styles.statRow}>
                              <span>{array[index].stats?.total_stumpings}</span>
                              <span className={styles.heading}>Stumpings</span>
                              <span>
                                {array[index + 1].stats?.total_stumpings}
                              </span>
                            </div>
                          </>
                        )}
                        <div className={styles.fullView}>
                          <a onClick={toggleView}>
                            {showFull ? "View Less" : "View Full"} →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return acc;
            }, [])}
        </div>
        <div className={styles.navigation}>
          <button className={styles.navButton}>
            <Image height={30} width={30} src="/static/Previous.svg" alt="" />
          </button>
          <button className={styles.navButton}>
            <Image height={30} width={30} src="/static/Next.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default PlayerVsPlayer;
