import React from "react";
import styles from "./MatchTypeTab.module.css";

const MatchTypeTab = () => {
  return (
    <>
      <div className="btns flex justify-around">
        <div
          className={`${styles.btn} w-fit text-center font-bold py-2 ${styles.btnSelected}`}
        >
          Live/Upcoming
        </div>
        <div className={`${styles.btn} w-fit text-center font-bold py-2`}>
          Finished
        </div>
      </div>
    </>
  );
};

export default MatchTypeTab;
