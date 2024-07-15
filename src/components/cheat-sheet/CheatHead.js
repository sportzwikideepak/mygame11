import React from "react";
import Image from "next/image";
import styles from "../../app/[match-details]/cheat-sheet/cheatSheet.module.css";
import Link from "next/link";

const CheatHead = (props) => {
  return (
    <>
      <div className={styles.navbar}>
        <Link href={props?.currentPath}>
          <button className={styles.backbutton}>
            <span className={styles.arrow}>
              <Image
                height={20}
                width={20}
                src="/static/Backbutton.svg"
                alt=""
              />
            </span>
          </button>
        </Link>
        <div className={styles.title}>
          Cheat Sheet
          <span>{props?.match_short_title}</span>
        </div>
        <div className={styles.placeholder} />
      </div>
      {/* ...........Notification........... */}
      <div className={styles.announcementcontent}>
        {/* <div className={styles.lines} /> */}
        {/* <div className={styles.announcement}>Playing 11 is not announced</div> */}
        {/* <div className={styles.lines} /> */}
      </div>
    </>
  );
};

export default CheatHead;
