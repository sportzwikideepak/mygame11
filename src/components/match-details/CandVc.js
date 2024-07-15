import React from "react";
import styles from "../../app/[match-details]/matchDetails.module.css";
import Image from "next/image";

const CandVc = (props) => {
  return (
    <>
      <div className={`${styles.suggest}`}>Suggested C &amp; VC</div>
      <div className={`${styles.cardcontainer}`}>
        {props?.topCapndVc?.map((player, index) => {
          return (
            <div key={index} className={`${styles.playercard}`}>
              <Image
                height={20}
                width={20}
                src="/static/player.png"
                alt="Player Image"
                className={`${styles.playerimage}`}
              />
              <div className={`${styles.playerinfo}`}>
                <div className={`${styles.playername}`}>
                  {player?.short_name}
                </div>
                <div className={`${styles.playerrole}`}>
                  {player?.short_team_name}/{player?.playing_role.toUpperCase()}
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className={`${styles.playercard}`}>
          <Image
            height={20}
            width={20}
            src="/static/player.png"
            alt="Player Image"
            className={`${styles.playerimage}`}
          />
          <div className={`${styles.playerinfo}`}>
            <div className={`${styles.playername}`}>KL Rahul</div>
            <div className={`${styles.playerrole}`}>IND/AR</div>
          </div>
        </div>
        <div className={`${styles.playercard}`}>
          <Image
            height={20}
            width={20}
            src="/static/player.png"
            alt="Player Image"
            className={`${styles.playerimage}`}
          />
          <div className={`${styles.playerinfo}`}>
            <div className={`${styles.playername}`}>KL Rahul</div>
            <div className={`${styles.playerrole}`}>IND/BOW</div>
          </div>
        </div>
        <div className={`${styles.playercard}`}>
          <Image
            height={20}
            width={20}
            src="/static/player.png"
            alt="Player Image"
            className={`${styles.playerimage}`}
          />
          <div className={`${styles.playerinfo}`}>
            <div className={`${styles.playername}`}>KL Rahul</div>
            <div className={`${styles.playerrole}`}>IND/AR</div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CandVc;
