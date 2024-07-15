import React from "react";
import styles from "../../app/[match-details]/matchDetails.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = (props) => {
  return (
    <>
      <div className={`${styles.header}`}>
        <Link href={"/"}>
          <button className={`${styles.backbutton}`}>
            <Image height={20} width={20} src="/static/Backbutton.svg" alt="" />
          </button>
        </Link>
        <h1 className={`${styles.matchtitle}`}>{props?.short_title}</h1>
        <div className={`${styles.placeholder}`} />
      </div>
      <div className={`${styles.announcementcontent}`}>
        <div className={`${styles.lines}`} />
        <div className={`${styles.announcement}`}>
          {props?.status === 3
            ? "Playing 11 is not announced"
            : "Playing 11 announced"}
        </div>
        <div className={`${styles.lines}`} />
      </div>
    </>
  );
};

export default Header;
