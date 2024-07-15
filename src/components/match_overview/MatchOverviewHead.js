import React from "react";
import styles from "../../app/[match-details]/match-overview/matchOverview.module.css";
import Image from "next/image";
import Link from "next/link";

const MatchOverviewHead = (props) => {
  return (
    <>
      <div className={styles.navbar}>
        <Link href={"/"}>
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
        <div className={styles.title}>Match Report</div>
        <div className={styles.placeholder} />
      </div>
    </>
  );
};

export default MatchOverviewHead;
