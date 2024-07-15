import React from "react";
import styles from "../../../app/[match-details]/squad/[player]/playerInfo.module.css";

const PlayerInfoTypeSelector = ({ handleMatchTypeSelectChange }) => {
  return (
    <>
      <select
        onChange={handleMatchTypeSelectChange}
        className={styles.Destination}
      >
        <option value="odi">ODI</option>
        <option value="test">TEST</option>
        <option value="t20i">T20</option>
        {/* <option value="lista">List A</option> */}
        {/* <option value="odi">First class</option> */}
        {/* <option value="t10">T10</option> */}
      </select>
    </>
  );
};

export default PlayerInfoTypeSelector;
