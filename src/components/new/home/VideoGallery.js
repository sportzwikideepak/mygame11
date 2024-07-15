import Image from "next/image";
import React from "react";
import styles from "../../../app/home.module.css";

const VideoGallery = ({ title }) => {
  return (
    <>
      <div className={styles.container1}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <a href="#" className={styles.viewall}>
            View All →
          </a>
        </div>
        <div className={styles.cardcontainer}>
          <a href="#" className={styles.card1}>
            <Image
              height={20}
              width={20}
              src="static/Tournament-Shorts.svg"
              alt="Tour 1"
              className={styles.cardimage}
            />
            <h3 className="text-black">Indian Premier League 2024</h3>
            <p>12 Apr - 25 Jun</p>
          </a>
          <a href="#" className={styles.card1}>
            <Image
              height={20}
              width={20}
              src="static/Tournament-Shorts.svg"
              alt="Tour 1"
              className={styles.cardimage}
            />
            <h3 className="text-black">Indian Premier League 2024</h3>
            <p>12 Apr - 25 Jun</p>
          </a>
          <a href="#" className={styles.card1}>
            <Image
              height={20}
              width={20}
              src="static/Tournament-Shorts.svg"
              alt="Tour 1"
              className={styles.cardimage}
            />
            <h3 className="text-black">Indian Premier League 2024</h3>
            <p>12 Apr - 25 Jun</p>
          </a>
          <a href="#" className={styles.card1}>
            <Image
              height={20}
              width={20}
              src="static/Tournament-Shorts.svg"
              alt="Tour 1"
              className={styles.cardimage}
            />
            <h3 className="text-black">Indian Premier League 2024</h3>
            <p>12 Apr - 25 Jun</p>
          </a>
          <a href="#" className={styles.card1}>
            <Image
              height={20}
              width={20}
              src="static/Tournament-Shorts.svg"
              alt="Tour 1"
              className={styles.cardimage}
            />
            <h3 className="text-black">Indian Premier League 2024</h3>
            <p>12 Apr - 25 Jun</p>
          </a>
          <a href="#" className={styles.card1}>
            <Image
              height={20}
              width={20}
              src="static/Tournament-Shorts.svg"
              alt="Tour 1"
              className={styles.cardimage}
            />
            <h3 className="text-black">Indian Premier League 2024</h3>
            <p>12 Apr - 25 Jun</p>
          </a>
          <a href="#" className={styles.card1}>
            <Image
              height={20}
              width={20}
              src="static/Tournament-Shorts.svg"
              alt="Tour 1"
              className={styles.cardimage}
            />
            <h3 className="text-black">Indian Premier League 2024</h3>
            <p>12 Apr - 25 Jun</p>
          </a>
          <a href="#" className={styles.card1}>
            <Image
              height={20}
              width={20}
              src="static/Tournament-Shorts.svg"
              alt="Tour 1"
              className={styles.cardimage}
            />
            <h3 className="text-black">Indian Premier League 2024</h3>
            <p>12 Apr - 25 Jun</p>
          </a>
          <a href="#" className={styles.card1}>
            <Image
              height={20}
              width={20}
              src="static/Tournament-Shorts.svg"
              alt="Tour 1"
              className={styles.cardimage}
            />
            <h3 className="text-black">Indian Premier League 2024</h3>
            <p>12 Apr - 25 Jun</p>
          </a>
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

export default VideoGallery;
