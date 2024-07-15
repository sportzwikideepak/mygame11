import Image from "next/image";
import React from "react";
import menuItems from "../../../seeds/analyticsMenuItems.json";
import styles from "./dataAnalytice.module.css";

const MenuDataAnalytics = () => {
  return (
    <>
      <div className={styles.dataAnalytics}>
        {menuItems?.map((tab, index) => {
          return (
            <div key={index} className={styles.contentContainer}>
              <a href={tab?.href} className={styles.item}>
                <Image
                  height={20}
                  width={20}
                  src={tab?.iconUrl}
                  alt={tab?.alt}
                  className={styles.icon}
                />
                <span className={styles.text}>{tab.title}</span>
                <Image
                  height={20}
                  width={20}
                  src="/static/Linkenter.svg"
                  alt=""
                  className={styles.arrow1}
                />
              </a>
            </div>
          );
        })}
        {/* <div className={styles.contentContainer}>
          <a href="#" className={styles.item}>
            <Image
              height={20}
              width={20}
              src="/static/Stats Plaground Icon.svg"
              alt="icon"
              className={styles.icon}
            />
            <span className={styles.text}>Stats Playground</span>
            <Image
              height={20}
              width={20}
              src="/static/Linkenter.svg"
              alt=""
              className={styles.arrow1}
            />
          </a>
        </div>
        <div className={styles.contentContainer}>
          <a href="#" className={styles.item}>
            <Image
              height={20}
              width={20}
              src="/static/Cheat sheet Icon.svg"
              alt="icon"
              className={styles.icon}
            />
            <span className={styles.text}>Cheat Sheet</span>
            <Image
              height={20}
              width={20}
              src="/static/Linkenter.svg"
              alt=""
              className={styles.arrow1}
            />
          </a>
        </div>
        <div className={styles.contentContainer}>
          <a href="#" className={styles.item}>
            <Image
              height={20}
              width={20}
              src="/static/PL Power Ranking Icon.svg"
              alt="icon"
              className={styles.icon}
            />
            <span className={styles.text}>PL Power Ranking</span>
            <Image
              height={20}
              width={20}
              src="/static/Linkenter.svg"
              alt=""
              className={styles.arrow1}
            />
          </a>
        </div>
        <div className={styles.contentContainer}>
          <a href="#" className={styles.item}>
            <Image
              height={20}
              width={20}
              src="/static/Venue & Pitch Report Icon.svg"
              alt="icon"
              className={styles.icon}
            />
            <span className={styles.text}>Venue &amp; Pitch Report</span>
            <Image
              height={20}
              width={20}
              src="/static/Linkenter.svg"
              alt=""
              className={styles.arrow1}
            />
          </a>
        </div>
        <div className={styles.contentContainer}>
          <a href="#" className={styles.item}>
            <Image
              height={20}
              width={20}
              src="/static/Batting Order Icon.svg"
              alt="icon"
              className={styles.icon}
            />
            <span className={styles.text}>
              Batting Order, Powerplay &amp; Death Bowling
            </span>
            <Image
              height={20}
              width={20}
              src="/static/Linkenter.svg"
              alt=""
              className={styles.arrow1}
            />
          </a>
        </div>
        <div className={styles.contentContainer}>
          <a href="#" className={styles.item}>
            <Image
              height={20}
              width={20}
              src="/static/Team H2H Icon.svg"
              alt="icon"
              className={styles.icon}
            />
            <span className={styles.text}>Team H2H</span>
            <Image
              height={20}
              width={20}
              src="/static/Linkenter.svg"
              alt=""
              className={styles.arrow1}
            />
          </a>
        </div>
        <div className={styles.contentContainer}>
          <a href="#" className={styles.item}>
            <Image
              height={20}
              width={20}
              src="/static/All Player Overview Icon.svg"
              alt="icon"
              className={styles.icon}
            />
            <span className={styles.text}>All Player Overview</span>
            <Image
              height={20}
              width={20}
              src="/static/Linkenter.svg"
              alt=""
              className={styles.arrow1}
            />
          </a>
        </div>
        <div className={styles.contentContainer}>
          <a href="#" className={styles.item}>
            <Image
              height={20}
              width={20}
              src="/static/Bowlwer Corner Icon.svg"
              alt="icon"
              className={styles.icon}
            />
            <span className={styles.text}>Bowler Corner</span>
            <Image
              height={20}
              width={20}
              src="/static/Linkenter.svg"
              alt=""
              className={styles.arrow1}
            />
          </a>
        </div>
        <div className={styles.contentContainer}>
          <a href="#" className={styles.item}>
            <Image
              height={20}
              width={20}
              src="/static/Team Stats Icon.svg"
              alt="icon"
              className={styles.icon}
            />
            <span className={styles.text}>Team Stats</span>
            <Image
              height={20}
              width={20}
              src="/static/Linkenter.svg"
              alt=""
              className={styles.arrow1}
            />
          </a>
        </div>
        <div className={styles.contentContainer}>
          <a href="#" className={styles.item}>
            <Image
              height={20}
              width={20}
              src="/static/Statistics Icon.svg"
              alt="icon"
              className={styles.icon}
            />
            <span className={styles.text}>Statistics</span>
            <Image
              height={20}
              width={20}
              src="/static/Linkenter.svg"
              alt=""
              className={styles.arrow1}
            />
          </a>
        </div> */}
      </div>
    </>
  );
};

export default MenuDataAnalytics;
