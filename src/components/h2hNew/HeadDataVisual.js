import React from "react";
import styles from "../../app/[match-details]/head-to-head/head-to-head.module.css";

const HeadDataVisual = (props) => {
  return (
    <>
      <div className={styles.tossrends}>
        <h2 className={styles.tossrendstext}>{props?.title}</h2>
        <p className={styles.venueinfo}>{props?.subTitle}</p>
      </div>
      <div className={styles.statscontainer}>
        <div className={styles.statsrow}>
          <div className={styles.statsbarcontainer}>
            <div className={`${styles.progressbar} ${styles.yellowbar}`} />
            <span className={`${styles.label} ${styles.leftlabel}`}>
              {props?.data?.[0]?.wins || props?.data?.[0]?.total_wins}
            </span>
          </div>
          <div className={styles.labelcontainer}>Wins</div>
          <div className={styles.statsbarcontainer}>
            <div className={`${styles.progressbar} ${styles.bluebar}`} />
            <span className={`${styles.label} ${styles.rightlabel}`}>
              {props?.data?.[1]?.wins || props?.data?.[0]?.total_wins}
            </span>
          </div>
        </div>
        <div className={styles.statsrow}>
          <div className={styles.statsbarcontainer}>
            <div className={`${styles.progressbar} ${styles.yellowbar}`} />
            <span className={`${styles.label} ${styles.leftlabel}`}>
              {props?.data?.[0]?.avg_runs}
            </span>
          </div>
          <div className={styles.labelcontainer}>Avg Runs</div>
          <div className={styles.statsbarcontainer}>
            <div className={`${styles.progressbar} ${styles.bluebar}`} />
            <span className={`${styles.label} ${styles.rightlabel}`}>
              {props?.data?.[1]?.avg_runs}
            </span>
          </div>
        </div>
        <div className={styles.statsrow}>
          <div className={styles.statsbarcontainer}>
            <div className={`${styles.progressbar} ${styles.yellowbar}`} />
            <span className={`${styles.label} ${styles.leftlabel}`}>
              {props?.data?.[0]?.max_runs}
            </span>
          </div>
          <div className={styles.labelcontainer}>Max Runs</div>
          <div className={styles.statsbarcontainer}>
            <div className={`${styles.progressbar} ${styles.bluebar}`} />
            <span className={`${styles.label} ${styles.rightlabel}`}>
              {props?.data?.[1]?.max_runs}
            </span>
          </div>
        </div>
        <div className={styles.statsrow}>
          <div className={styles.statsbarcontainer}>
            <div className={`${styles.progressbar} ${styles.yellowbar}`} />
            <span className={`${styles.label} ${styles.leftlabel}`}>
              {props?.data?.[0]?.min_runs}
            </span>
          </div>
          <div className={styles.labelcontainer}>Min Runs</div>
          <div className={styles.statsbarcontainer}>
            <div className={`${styles.progressbar} ${styles.bluebar}`} />
            <span className={`${styles.label} ${styles.rightlabel}`}>
              {props?.data?.[1]?.min_runs}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadDataVisual;
