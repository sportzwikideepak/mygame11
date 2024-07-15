import React from "react";
import styles from "../../app/[match-details]/cheat-sheet/cheatSheet.module.css";

const CheatDataVisual = (props) => {
  //   console.log(props?.data, "8iyhg949gy8e0");
  return (
    <>
      <div className={styles.tossrends}>
        <h2 className={styles.tossrendstext}>{props?.heading}</h2>
        <p className={styles.venueinfo}>{props?.subHeading}</p>
      </div>
      <div className={styles.infocontainer}>
        {props?.showMainTab == true && (
          <div className={styles.topplayer}>
            <div className={styles.titlecontainer1}>
              <span className={styles.title1}>Over All</span>
              <div className={styles.underline} />
            </div>
          </div>
        )}
        {props?.showSubTabs == true && (
          <div className={styles.buttongroup1}>
            <button className={styles.buttonwhite}>WK</button>
            <button className={styles.buttonred}>BAT</button>
            <button className={styles.buttonwhite}>AR</button>
            <button className={styles.buttonwhite}>BOW</button>
          </div>
        )}
        {props?.data?.map((item, index) => {
          return (
            <div key={index} className={styles.statblock}>
              <div className={styles.statdetail}>
                <span>
                  <b>
                    {props?.type == "playerTime"
                      ? item?.first_name
                      : item?.player_name}{" "}
                  </b>{" "}
                  {props?.type !== "playerTime" && (
                    <span>({item?.team_name})</span>
                  )}
                </span>
                {props?.type !== "playerTime" && (
                  <span className={styles.winchasing}>
                    {props?.type == "avg"
                      ? item?.total_fantasy_points / item?.match_count
                      : item?.total_fantasy_points}{" "}
                    pts - {item?.match_count} M
                  </span>
                )}
                {props?.type == "playerTime" && (
                  <span className={styles.winchasing}>
                    {item?.occurrences} T
                  </span>
                )}
              </div>
              <div className={styles.progressbar}>
                <div className={styles.progress1} style={{ width: "60%" }} />
              </div>
            </div>
          );
        })}

        {props?.showMetricInfo == true && (
          <div className={styles.hint}>
            M - <span>Matches,</span> Pts - <span>points</span>
          </div>
        )}
      </div>
    </>
  );
};

export default CheatDataVisual;
