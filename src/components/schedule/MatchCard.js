import Image from "next/image";
import React from "react";
import styles from "./scheduleMain.module.css";
import Link from "next/link";
import slugify from "slugify";

const MatchCard = ({ match }) => {
  // console.log(match, "89yhu4fihnfo");
  return (
    <>
      <Link
        href={`/${slugify(match?.short_title, {
          replacement: "-",
          remove: [/[\[\]\/wnd]+/g, ""],
          lower: true,
          strict: true,
        })}-${match?.match_id}`}
      >
        <div className={styles.card}>
          <p className={`${styles.status} ${styles.green}`}>
            {match?.status_str} <span>- {match?.competition?.title}</span>
          </p>
          <div className={styles.teaminfo}>
            <div className={styles.teamleft}>
              <Image
                height={20}
                width={20}
                src={match?.teama?.logo_url}
                alt="Flag"
                className={styles.teamicon}
              />
              <span className={`${styles.teamname} ${styles.bold}`}>
                {match?.teama?.short_name}
              </span>
            </div>
            <div className={styles.teamleft}>
              <span className={styles.details}>
                ({match?.teama?.overs || 0} ov){" "}
                <span className={styles.score}>{match?.teama?.scores}</span>
              </span>
            </div>
          </div>
          <div className={styles.teaminfo}>
            <div className={styles.teamleft}>
              <Image
                height={20}
                width={20}
                src={match?.teamb?.logo_url}
                alt="Flag"
                className={styles.teamicon}
              />
              <span className={`${styles.teamname} ${styles.bold}`}>
                {match?.teamb?.short_name}
              </span>
            </div>
            <div className={styles.teamleft}>
              <span className={styles.details}>
                ({match?.teamb?.overs || 0} ov){" "}
                <span className={styles.score}>{match?.teama?.scores}</span>
              </span>
            </div>
          </div>
          <div className={styles.line} />
          {/* <a href="#" className={styles.bottomtext}> */}
          <p>
            {match?.competition?.title} {match?.competition?.season}
          </p>
          {/* <Image height={20} width={20} src="/static/Series-enter.svg" alt="" /> */}
          {/* </a> */}
        </div>
      </Link>
    </>
  );
};

export default MatchCard;
