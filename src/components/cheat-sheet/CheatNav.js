import React from "react";
import styles from "../../app/[match-details]/cheat-sheet/cheatSheet.module.css";
import Link from "next/link";

const CheatNav = (props) => {
  return (
    <>
      <div className={styles.centeredcontent}>
        <div className={styles.buttongroup}>
          <Link href={`/${props.currentPath}/cheat-sheet/last-match`}>
            <button
              className={
                props?.active == 0 ? styles.buttonred : styles.buttonwhite
              }
            >
              Last Match
            </button>
          </Link>
          <Link href={`/${props.currentPath}/cheat-sheet`}>
            <button
              className={
                props?.active == 1 ? styles.buttonred : styles.buttonwhite
              }
            >
              Last 5 Match
            </button>
          </Link>
          <Link href={`/${props.currentPath}/cheat-sheet/overall`}>
            <button
              className={
                props?.active == 2 ? styles.buttonred : styles.buttonwhite
              }
            >
              Overall
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CheatNav;
