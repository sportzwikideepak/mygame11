import Image from "next/image";
import React from "react";
import styles from "./PlayerVsTeamMain.module.css";

const PvTcomparisonTeamDefault = ({ selectedTeam }) => {
  return (
    <>
      <div className={styles.cardcontent}>
        <div className={styles.card5}>
          <div className={styles.selectplayer}>
            <div className={styles.teamcard}>
              <div className={styles.container7}>
                <div className={styles.profile}>
                  <Image
                    height={80}
                    width={80}
                    src={selectedTeam?.logo_url}
                    alt="flag"
                    className={styles.profileimage}
                  />
                </div>
                <button
                  className={`${styles.butdton4} flex items-center justify-center bg-white px-2 rounded-xl`}
                >
                  <span>{selectedTeam?.short_name}</span>
                  {/* <svg
                    className={styles.icon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PvTcomparisonTeamDefault;
