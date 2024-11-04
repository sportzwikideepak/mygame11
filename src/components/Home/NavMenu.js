import React from "react";
import styles from "./NavMenu.module.css";
import Image from "next/image";

const NavMenu = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexcolumn}>
          {/* <Image
            height={20}
            width={20}
            src="/static/Profile.svg"
            alt="Profile Image"
            className={`${styles.profile} ${styles.image}`}
          /> */}
          <div className={styles.profilename}>
            <Image
              height={20}
              width={20}
              src="/static/Profile Name Icon.svg"
              alt=""
            />
            <h2 className={styles.heading}>sportzwiki</h2>
          </div>
          <div className={styles.profilename}>
            <Image
              height={20}
              width={20}
              src="/static/Profile No. Icon.svg"
              alt=""
            />
            <p className={styles.paragraph}>83993*****</p>
          </div>
        </div>
        <div className={styles.linkcontainer}>
          <a href="#" className={styles.link}>
            HOME
          </a>
          <a href="#" className={styles.link}>
            MY SUBSCRIPTION
          </a>
          <a href="#" className={styles.link}>
            MY WALLET
          </a>
          <a href="#" className={styles.link}>
            ABOUT US
          </a>
          <a href="#" className={styles.link}>
            CONTACT - SUPPORT
          </a>
          <a href="#" className={styles.link}>
            PRIVACY POLICY
          </a>
          <a href="#" className={styles.link}>
            TERMS OF USE
          </a>
          <a href="#" className={styles.link}>
            BILLING &amp; SUBSCRIPTIONS
          </a>
        </div>
        <div className={styles.flexcolumn}>
          <select className={styles.dropdown}>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
          <button className={styles.button}>
            <Image
              height={20}
              width={20}
              src="/static/Logout Icon.svg"
              alt=""
            />
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
