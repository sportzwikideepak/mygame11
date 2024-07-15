import React from "react";
import styles from "../../app/[match-details]/venue/venue.module.css";

const TossTrends = ({
  firstBattingWon,
  chooseBatting,
  teama_vs_teamb_last10_match_same_venue,
  stats,
}) => {
  let winsAfterToss = 0;
  let totalTossWins = teama_vs_teamb_last10_match_same_venue.length; // Assuming all teama_vs_teamb_last10_match_same_venue include a toss win.

  teama_vs_teamb_last10_match_same_venue.forEach((match) => {
    if (match.winning_team_id === match.toss.winner) {
      winsAfterToss++;
    }
  });

  const winPercentageAfterWinningToss =
    totalTossWins > 0 ? (winsAfterToss / totalTossWins) * 100 : 0;

  console.log(typeof firstBattingWon, "ioh893foibi", firstBattingWon);

  return (
    <>
      <span className={styles.Tosstrendstext}>Toss Trends :-</span>
      <span className={styles.Tosstrendstextsmall}>As this venue</span>
      <div className={styles.winningtoss}>
        <span className={styles.winningtossafter}>
          Decision after winning the toss
        </span>
        <div className={styles.battingchoose}>
          <div className={styles.leftbatting}>
            <span className={styles.leftbatting1}>Choose to Bat First</span>
            <span className={styles.leftbatting2}>Choose to Chase</span>
          </div>
          <div className={styles.battingline}>
            <div
              style={{ width: `${Number(chooseBatting).toFixed()}%` }}
              className={styles.battinglineleft}
            />
            <div
              style={{ width: `${100 - Number(chooseBatting).toFixed()}%` }}
              className={styles.battinglineright}
            />
          </div>
          <div className={styles.percentage}>
            <span>
              {Number(chooseBatting) === "NAN"
                ? "No data yet"
                : `${Number(chooseBatting).toFixed()}%`}
            </span>
            <span>
              {Number(chooseBatting).toFixed() === "NAN"
                ? "No Data yet"
                : `${100 - Number(chooseBatting).toFixed()}%`}
            </span>
          </div>
          <div className={styles.leftbatting}>
            <span className={styles.leftbatting1}>Win Batting First</span>
            <span className={styles.leftbatting2}>Wins Chasing</span>
          </div>
          <div className={styles.battingline}>
            <div
              style={{ width: `${Number(firstBattingWon).toFixed(2)}%` }}
              className={styles.battinglineleft}
            />
            <div
              style={{ width: `${100 - Number(firstBattingWon).toFixed(2)}%` }}
              className={styles.battinglineright}
            />
          </div>
          <div className={styles.percentage}>
            <span>
              {firstBattingWon == "NAN"
                ? "No data available"
                : `${Number(firstBattingWon).toFixed()}%`}
            </span>
            <span>
              {firstBattingWon == "NAN"
                ? "No data available"
                : `${100 - Number(firstBattingWon).toFixed()}%`}
            </span>
          </div>
          <span className={styles.winningaftertoss}>
            Wins after winning toss{" "}
          </span>
          {/* <span className={styles.Tosstrendstextsmall}>3/10 matches</span> */}
          <div className={styles.leftbatting}>
            <span className={styles.leftbatting1}>Win</span>
            <span className={styles.leftbatting2}>Loss</span>
          </div>
          <div className={styles.battingline}>
            <div
              style={{
                width: `${Number(winPercentageAfterWinningToss).toFixed()}%`,
              }}
              className={styles.battinglineleft}
            />
            <div
              style={{
                width: `${
                  100 - Number(winPercentageAfterWinningToss).toFixed()
                }%`,
              }}
              className={styles.battinglineright}
            />
          </div>
          <div className={styles.percentage}>
            <span>{winPercentageAfterWinningToss.toFixed(2)}%</span>
            <span>{(100 - winPercentageAfterWinningToss).toFixed(2)}%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TossTrends;
