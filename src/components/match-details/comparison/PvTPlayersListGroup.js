import React from "react";
import styles from "./PlayerVsTeam.module.css";
import Image from "next/image";

const PvTPlayersListGroup = (props) => {
  const teamKey = props?.selectedTeam === 0 ? "teama" : "teamb";
  const teamSquads = props?.playerListC?.[teamKey]?.squads;

  if (!teamSquads) {
    return <p>No players found</p>;
  }

  // console.log(teamSquads, "8h24g0fih8n0phfn");

  return (
    <>
      <div className={styles.announcementcontent}>
        <div className={styles.lines1} />
        <div className={styles.announcement}>{props?.teamName} Squad</div>
        <div className={styles.lines1} />
      </div>
      {/* ...........User Card........... */}
      <div className={styles.container}>
        {teamSquads?.map((player, index) => {
          return (
            <div
              onClick={() => {
                props?.handlePlayerComparisonActive();
                props?.handleComparisonTypeChange("tvt");
                props?.handlePvtPlayerSelect(player?.player_id);
              }}
              key={index}
              className={`${styles.usercard} cursor-pointer`}
            >
              <Image
                height={20}
                width={20}
                className={styles.useravatar}
                src="/static/Player.svg"
                alt="User Avatar"
              />
              <div className={styles.userinfo}>
                <h2>{player?.name}</h2>
                <p>{props?.teamName}</p>
              </div>
              <div className={styles.statusicon}>
                <Image height={20} width={20} src="/static/VS.svg" alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PvTPlayersListGroup;
