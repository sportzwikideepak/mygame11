import React from "react";
import styles from "../../app/[match-details]/matchDetails.module.css";
import Image from "next/image";
import Link from "next/link";

const AnalyticsTabCard = (props) => {
  return (
    <>
      <Link href={`${props?.href}`} className={styles.card}>
        <div className={styles.iconcontainer}>
          <Image
            height={20}
            width={20}
            src={props?.iconUrl}
            alt="Icon"
            className={styles.iconimage}
          />
        </div>
        <div className={styles.content}>
          <p className={styles.title}>{props?.title}</p>
          <p className={styles.description}>
            {props?.isSubTitleDynamic === false
              ? props?.subTitle
              : props?.venue}
          </p>
        </div>
        <div className={styles.arrow}>
          <Image height={20} width={20} src="/static/next.svg" alt="" />
        </div>
      </Link>
    </>
  );
};

export default AnalyticsTabCard;
