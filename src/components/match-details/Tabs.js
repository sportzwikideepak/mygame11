import React from "react";
import styles from "../../app/[match-details]/matchDetails.module.css";
import Link from "next/link";

const Tabs = (props) => {
  return (
    <>
      <div className={`${styles.buttoncontainer}`}>
        <Link href={`/${props?.currentPage}`}>
          <button
            className={`${
              props?.active == 0 ? styles.redbutton : styles.whitebutton
            }`}
          >
            Overview
          </button>
        </Link>
        <Link href={`/${props?.currentPage}/data-analytics`}>
          <button
            className={`${
              props?.active == 1 ? styles.redbutton : styles.whitebutton
            }`}
          >
            Data &amp; Analytics
          </button>
        </Link>
        <Link href={`/${props?.currentPage}/squads`}>
          <button
            className={`${
              props?.active == 2 ? styles.redbutton : styles.whitebutton
            }`}
          >
            Squad
          </button>
        </Link>
        <Link href={`/${props?.currentPage}/comparison`}>
          <button
            className={`${
              props?.active == 3 ? styles.redbutton : styles.whitebutton
            }`}
          >
            Comparison
          </button>
        </Link>
      </div>
    </>
  );
};

export default Tabs;
