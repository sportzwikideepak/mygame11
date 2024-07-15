"use client";
import React, { useState } from "react";
import styles from "../../app/[match-details]/match-overview/matchOverview.module.css";

const OverviewProgressColor = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  const match = props?.FantasyOverview?.filter(
    (match) => match?.match_id == props?.matchId
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const totalPoints = match?.[0]?.fantasyPoints
    ?.slice(0, 5)
    ?.reduce(
      (acc, curr) =>
        acc +
        parseInt(activeTab === 0 ? curr?.points : curr?.player_rating, 10),
      0
    );

  return (
    <>
      <div className={styles.tossrends}>
        <h2 className={styles.tossrendstext}>Top Player :-</h2>
      </div>
      <div style={{ marginBottom: "70px" }} className={styles.infocontainer}>
        <div className={styles.topplayer}>
          <div
            onClick={() => handleTabChange(0)}
            className={styles.titlecontainer1}
          >
            <span className={activeTab == 0 ? styles.title1 : ""}>
              Fantasy Points
            </span>
            {activeTab == 0 && <div className={styles.underline} />}
          </div>
          <div
            onClick={() => handleTabChange(1)}
            className={styles.titlecontainer1}
          >
            <span className={activeTab == 1 ? styles.title1 : ""}>Value</span>
            {activeTab == 1 && <div className={styles.underline} />}
          </div>
          {/* <span>Value</span> */}
        </div>
        {match?.[0]?.fantasyPoints?.slice(0, 5)?.map((item, index) => {
          return (
            <div key={index} className={styles.statblock}>
              <div className={styles.statdetail}>
                <span>
                  <b>{item?.player_short_name} </b>( (
                  {item?.playing_role?.toUpperCase()} - {item?.team_short_name})
                </span>
                <span className={styles.winchasing}>
                  {activeTab == 0 ? item?.points : item?.player_rating}
                </span>
              </div>
              <div className={styles.progressbar}>
                <div
                  className={styles.progress1}
                  style={{
                    width: `${
                      ((activeTab === 0 ? item?.points : item?.player_rating) /
                        totalPoints) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OverviewProgressColor;
