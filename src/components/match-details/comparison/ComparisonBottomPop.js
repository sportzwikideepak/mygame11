import React from "react";
import styles from "./ComparisonBottomPop.module.css";
import Image from "next/image";

const ComparisonBottomPop = (props) => {
  return (
    <>
      <div className={styles.flexcontainer}>
        <div className={styles.nonattend} />
        <div className={styles.nonattend} />
        {/* <div className={styles.abcd}></div>
        <div className={styles.abcd}></div> */}
        <div className={styles.bottomcon}>
          {props?.selectedPlayers?.map((item, index) => {
            return (
              <div key={index} className={styles.flexcol}>
                <Image
                  height={20}
                  width={20}
                  src="/static/Player.svg"
                  alt="Profile 1"
                  className={styles.profileimg}
                />
                <Image height={20} width={20} src="/static/VS.svg" alt="" />
              </div>
            );
          })}
        </div>
        {props?.selectedPlayers.length > 1 && (
          <button
            onClick={() => props?.handlePlayerComparisonActive()}
            className={styles.button}
          >
            Compare
          </button>
        )}
      </div>
    </>
  );
};

export default ComparisonBottomPop;
