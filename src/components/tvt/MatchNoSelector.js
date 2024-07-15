import React from "react";
import styles from "../../app/[match-details]/tvt/teamvsteam.module.css";

const MatchNoSelector = () => {
  return (
    <>
      <span className={styles.mstats}>No. of matches stats</span>
      <select className={styles.dropdown}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </>
  );
};

export default MatchNoSelector;
