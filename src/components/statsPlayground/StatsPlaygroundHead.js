import React from "react";
import styles from "../../app/[match-details]/stats-playground/statsPlayground.module.css";
import Image from "next/image";
import Link from "next/link";

const StatsPlaygroundHead = (props) => {
  return (
    <>
      <div className={styles.navbar}>
        <Link href={`/${props?.currentPath}/data-analytics`}>
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
          Stats Playground
          <span>{props?.title}</span>
        </div>
        <div className={styles.placeholder} />
      </div>
    </>
  );
};

export default StatsPlaygroundHead;
