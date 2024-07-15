import React from "react";
import styles from "../../app/[match-details]/squad/compare/[comparePlayerIds]/comparePlayer.module.css";

const BattingStatsVs = ({ player1Batting, player2Batting }) => {
//   console.log(player1Batting, "932hg0i3fhoc9ehiboi80");
  return (
    <>
      <div className={styles.compback}>
        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Batting?.matches}</span>
          <span className={styles.leftbatting3}>Matches</span>
          <span className={styles.leftbatting2}>{player2Batting?.matches}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>
        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Batting?.innings}</span>
          <span className={styles.leftbatting3}>Innings</span>
          <span className={styles.leftbatting2}>{player1Batting?.innings}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>
        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Batting?.notOut}</span>
          <span className={styles.leftbatting3}>Not out</span>
          <span className={styles.leftbatting2}>{player2Batting?.notOut}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>
        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Batting?.runs}</span>
          <span className={styles.leftbatting3}>Runs</span>
          <span className={styles.leftbatting2}>{player1Batting?.runs}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>
        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Batting?.balls}</span>
          <span className={styles.leftbatting3}>Balls</span>
          <span className={styles.leftbatting2}>{player1Batting?.balls}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>
        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>
            {player1Batting?.highestScore}
          </span>
          <span className={styles.leftbatting3}>Highest score</span>
          <span className={styles.leftbatting2}>
            {player1Batting?.highestScore}
          </span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>
        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>
            {player1Batting?.centuries}
          </span>
          <span className={styles.leftbatting3}>Centuries</span>
          <span className={styles.leftbatting2}>
            {player1Batting?.centuries}
          </span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>
        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>
            {player1Batting?.halfCenturies}
          </span>
          <span className={styles.leftbatting3}>Half centuries</span>
          <span className={styles.leftbatting2}>
            {player1Batting?.halfCenturies}
          </span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>

        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Batting?.fours}</span>
          <span className={styles.leftbatting3}>Fours</span>
          <span className={styles.leftbatting2}>{player1Batting?.fours}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>

        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Batting?.sixes}</span>
          <span className={styles.leftbatting3}>Sixes</span>
          <span className={styles.leftbatting2}>{player1Batting?.sixes}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>

        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Batting?.average}</span>
          <span className={styles.leftbatting3}>Average</span>
          <span className={styles.leftbatting2}>{player1Batting?.average}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>

        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>
            {player1Batting?.strikeRate}
          </span>
          <span className={styles.leftbatting3}>Strike rate</span>
          <span className={styles.leftbatting2}>
            {player1Batting?.strikeRate}
          </span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>

        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Batting?.catches}</span>
          <span className={styles.leftbatting3}>Catches</span>
          <span className={styles.leftbatting2}>{player1Batting?.catches}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>

        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>
            {player1Batting?.stumpings}
          </span>
          <span className={styles.leftbatting3}>Stumping</span>
          <span className={styles.leftbatting2}>
            {player1Batting?.stumpings}
          </span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>
      </div>
    </>
  );
};

export default BattingStatsVs;
