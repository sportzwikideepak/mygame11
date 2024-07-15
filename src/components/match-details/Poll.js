import React from "react";
import styles from "../../app/[match-details]/matchDetails.module.css";

const Poll = (props) => {
  return (
    <>
      <div className={`${styles.allpoll}`}>
        <div className={`${styles.pollcontainer}`}>
          <div className={`${styles.header1}`}>
            <h2 className={`${styles.question}`}>Who will win?</h2>
            <span className={`${styles.votes}`}>Total Votes 2,234</span>
          </div>
          <div className={`${styles.options}`}>
            <button className={`${styles.option}`}>{props?.team_a_name}</button>
            <button className={`${styles.option}`}>{props?.team_b_name}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Poll;
