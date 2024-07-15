import Image from "next/image";
import React from "react";
import styles from "./teamComparison.module.css";

const TeamMatches = ({ recentMatches }) => {
  return (
    <>
      <div className={styles.container6}>
        <h2 className={styles.title2}>Recent Matches</h2>
        <p className={styles.subtitle}>Last 5 matches of competition</p>
        {/* .........Recent Matches......... */}
        {recentMatches?.response?.items?.slice(0, 5)?.map((item) => {
          return (
            <>
              <div className={styles.container7}>
                <div className={styles.card8}>
                  <div className={styles.matchInfo1}>
                    {new Date(item?.date_start).toDateString()}{" "}
                    {item?.competition?.title}
                  </div>
                  <div className={styles.cardHeader1}>
                    <div className={styles.team7}>
                      <Image
                        height={20}
                        width={20}
                        src={item?.teama?.logo_url}
                        alt=""
                        className={styles.teamFlag}
                      />
                      <span className={styles.teamName7}>
                        {item?.teama?.short_name}
                      </span>
                    </div>
                    <div className={styles.team7}>
                      <span className={styles.teamName7}>
                        {item?.teamb?.short_name}
                      </span>
                      <Image
                        height={20}
                        width={20}
                        src={item?.teamb?.logo_url}
                        alt=""
                        className={styles.teamFlag}
                      />
                    </div>
                  </div>
                  <div className={styles.scoreboard}>
                    <div className={styles.teamScore}>
                      <span className={styles.score7}>
                        {item?.teama?.scores}
                      </span>
                      <span className={styles.overs7}>
                        ({item?.teama?.overs} ov)
                      </span>
                    </div>
                    <div className={styles.vs}>vs</div>
                    <div className={styles.teamScore}>
                      <span className={styles.score7}>
                        {item?.teama?.scores}
                      </span>
                      <span className={styles.overs7}>
                        ({item?.teama?.overs} ov)
                      </span>
                    </div>
                  </div>
                  <div className={styles.result7}>{item?.status_note}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TeamMatches;
