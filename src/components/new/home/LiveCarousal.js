"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../../app/home.module.css";
import Link from "next/link";
import slugify from "slugify";

const LiveCarousal = ({ data, completed_matches }) => {
  const [activeMenu, setActiveMenu] = useState(0);

  const handleActiveMenuChange = (state) => {
    setActiveMenu(state);
  };

  const matches = activeMenu === 0 ? data : completed_matches?.response?.items;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.buttonssection}>
          <div className={styles.buttongroup}>
            <button
              onClick={() => handleActiveMenuChange(0)}
              className={
                activeMenu == 0
                  ? `${styles.button} ${styles.active}`
                  : styles.buttonnotactive
              }
            >
              Live/upcoming
            </button>
            <button
              onClick={() => handleActiveMenuChange(1)}
              className={
                activeMenu == 1
                  ? `${styles.button} ${styles.active}`
                  : styles.buttonnotactive
              }
            >
              Completed
            </button>
          </div>
          <a href="/schedule" className={styles.link}>
            View All →
          </a>
        </div>
        <div className={styles.cardscontainer}>
          {matches?.map((match) => {
            // console.log(match?.competition, "match?.teamamatch?.teama");
            return (
              <Link
                key={match?.match_id}
                href={slugify(
                  `${
                    match?.teama?.short_name?.toLowerCase() === "tba"
                      ? "/"
                      : `/${match?.competition?.abbr}-${match?.match_id}`
                  }`,
                  {
                    replacement: "-",
                    remove: [/[\[\]\/wnd]+/g, ""],
                    lower: true,
                    strict: true,
                  }
                )}
                className={styles.card}
              >
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
                      <span className={styles.score}>
                        {match?.teama?.scores}
                      </span>
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
                      <span className={styles.score}>
                        {match?.teamb?.scores}
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={styles.navigation}>
          <button className={styles.navbutton}>
            <Image height={20} width={20} src="/static/Previous.svg" alt="" />
          </button>
          <button className={styles.navbutton}>
            <Image height={20} width={20} src="/static/next_btn.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default LiveCarousal;
