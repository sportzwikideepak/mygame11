import React from "react";
import Image from "next/image";
import styles from "../../app/[match-details]/head-to-head/head-to-head.module.css";
import Link from "next/link";

const Head = (props) => {
  return (
    <>
      <div className={styles.navbar}>
        <Link href={`/${props.currentPath}`}>
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
          Team H2H
          <span>{props?.match_short_title}</span>
        </div>
        <div className={styles.placeholder} />
      </div>
    </>
  );
};

export default Head;
