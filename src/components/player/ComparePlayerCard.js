import React from "react";
import styles from "../../app/[match-details]/squad/compare/compare.module.css";
import Image from "next/image";

const ComparePlayerCard = ({ name, teamName, isSelected }) => {
  return (
    <>
      <div className={styles.Profile1}>
        <div
          className={
            isSelected
              ? `${styles.playercontent} border-2 border-black cursor-pointer`
              : `${styles.playercontent} cursor-pointer`
          }
        >
          <div className={styles.imagecontent}>
            <Image
              src="/static/profile_png.png"
              height={20}
              width={20}
              alt=""
            />
            <div className={styles.information}>
              <span className={styles.nameinfo}>{name}</span>
              <span className={styles.team}>{teamName}</span>
            </div>
          </div>
          <div className={styles.line} />
          <div className={styles.vs}>
            <Image
              src="/static/playercomparision.svg"
              alt=""
              className={styles.vsimage}
              height={20}
              width={20}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparePlayerCard;
