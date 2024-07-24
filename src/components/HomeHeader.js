import React from "react";
import styles from "../app/home.module.css";
// import { CgMenuLeftAlt } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";

const HomeHeader = ({ active }) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headertop}>
          <Link href="/" className={styles.logo}>
            {/* <Image src="/static/logo.svg" alt="" height={30} width={100} /> */}
          </Link>
          <div className={styles.socialmedia}>
            <div className={styles.tooltip}>
              <Link href="#">
                <Image
                  src="/static/Language.svg"
                  alt=""
                  height={10}
                  width={10}
                />
              </Link>
              <span className={styles.tooltiptext}>Language</span>
            </div>
            <div className={styles.tooltip}>
              <Link href="#">
                <Image
                  src="/static/Notification.svg"
                  alt=""
                  height={10}
                  width={10}
                />
              </Link>
              <span className={styles.tooltiptext}>Notification</span>
            </div>
            <div className={styles.tooltip}>
              <Link href="#">
                <Image
                  src="/static/Profile.svg"
                  alt=""
                  height={10}
                  width={10}
                />
              </Link>
              <span className={styles.tooltiptext}>Profile</span>
            </div>
          </div>
        </div>
        <div className={styles.headerbottom}>
          <div className={active === "live" ? styles.active : styles.nonactive}>
            <Link href="/">Live/Upcoming</Link>
            <div
              className={
                active === "live" ? styles.activeline : styles.nonactiveline
              }
            />
          </div>
          <div
            className={
              active === "completed" ? styles.active : styles.nonactive
            }
          >
            <Link href="/completed">Completed</Link>
            <div
              className={
                active === "completed"
                  ? styles.activeline
                  : styles.nonactiveline
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
