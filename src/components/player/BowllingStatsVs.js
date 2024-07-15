import React from "react";
import styles from "../../app/[match-details]/squad/compare/[comparePlayerIds]/comparePlayer.module.css";

const BowllingStatsVs = ({ player1Ball, player2Ball }) => {
  // console.log(player1Ball, "111222932hg0i3fhoc9ehiboi80");
  return (
    <>
      <div className={styles.compback}>
        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Ball?.matches}</span>
          <span className={styles.leftbatting3}>Matches</span>
          <span className={styles.leftbatting2}>{player2Ball?.matches}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>
        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Ball?.innings}</span>
          <span className={styles.leftbatting3}>Innings</span>
          <span className={styles.leftbatting2}>{player2Ball?.innings}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>
        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Ball?.balls}</span>
          <span className={styles.leftbatting3}>Balls</span>
          <span className={styles.leftbatting2}>{player2Ball?.balls}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>
        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Ball?.overs}</span>
          <span className={styles.leftbatting3}>Overs</span>
          <span className={styles.leftbatting2}>{player2Ball?.overs}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>
        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Ball?.runs}</span>
          <span className={styles.leftbatting3}>Runs</span>
          <span className={styles.leftbatting2}>{player2Ball?.runs}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>
        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Ball?.wickets}</span>
          <span className={styles.leftbatting3}>Wickets</span>
          <span className={styles.leftbatting2}>{player2Ball?.wickets}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>
        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Ball?.wicket4i}</span>
          <span className={styles.leftbatting3}>Wickets 4 I</span>
          <span className={styles.leftbatting2}>{player2Ball?.wicket4i}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>
        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Ball?.wicket5i}</span>
          <span className={styles.leftbatting3}>Wickets 5 i</span>
          <span className={styles.leftbatting2}>{player2Ball?.wicket5i}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>

        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Ball?.wicket10m}</span>
          <span className={styles.leftbatting3}>Wickets 10 M</span>
          <span className={styles.leftbatting2}>{player2Ball?.wicket10m}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>

        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>{player1Ball?.hattrick}</span>
          <span className={styles.leftbatting3}>Hattrick</span>
          <span className={styles.leftbatting2}>{player2Ball?.hattrick}</span>
        </div>
        <div className={styles.battingline}>
          <div className={styles.battinglineleft} />
          <div className={styles.battinglineright} />
        </div>

        <div className={styles.leftbatting}>
          <span className={styles.leftbatting1}>
            {player1Ball?.expenseive_over_runs}
          </span>
          <span className={styles.leftbatting3}>Expensive over runs</span>
          <span className={styles.leftbatting2}>
            {player2Ball?.expenseive_over_runs}
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

export default BowllingStatsVs;
