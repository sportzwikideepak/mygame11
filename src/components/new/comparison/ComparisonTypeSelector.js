import Image from "next/image";
import React from "react";
import styles from "./comparision.module.css";

const Icon = ({ state }) => {
  return (
    <>
      {state == true ? (
        <Image
          height={20}
          width={20}
          src="/static/player vs player comp.svg"
          alt="icon"
          className={styles.icon}
        />
      ) : (
        <Image
          height={20}
          width={20}
          src="/static/Player vs Player not selesct.svg"
          alt="icon"
          className={styles.icon}
        />
      )}
    </>
  );
};

const ComparisonTypeSelector = ({
  selected_comparison_type,
  set_comparison_type_handler,
}) => {
  return (
    <>
      <div className={styles.buttoncontainer2}>
        <button
          onClick={() => set_comparison_type_handler(0)}
          className={
            selected_comparison_type == 0
              ? `${styles.button1} ${styles.red}`
              : `${styles.button} ${styles.zinc}`
          }
        >
          <Icon state={selected_comparison_type == 0 ? true : false} />
          <span className={styles.fulltext}>Player vs Player Comparison</span>
          <span className={styles.shorttext}>P v P Comp.</span>
        </button>
        <button
          onClick={() => set_comparison_type_handler(1)}
          className={
            selected_comparison_type == 1
              ? `${styles.button1} ${styles.red}`
              : `${styles.button} ${styles.zinc}`
          }
        >
          <Icon state={selected_comparison_type == 1 ? true : false} />
          <span className={styles.fulltext}>Player vs Team Comparison</span>
          <span className={styles.shorttext}>P v T Comp.</span>
        </button>
      </div>
    </>
  );
};

export default ComparisonTypeSelector;
