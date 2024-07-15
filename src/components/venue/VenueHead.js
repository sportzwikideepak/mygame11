import React from "react";
import styles from "../../app/[match-details]/venue/venue.module.css";
import Image from "next/image";

const VenueHead = ({
  team_a_name,
  team_b_name,
  team_a_logo,
  team_b_logo,
  match_time,
}) => {
  const time = new Date(match_time * 1000).toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
    // timeZoneName: "short",
  });
  return (
    <>
      <div className={styles.Teamscard}>
        <div className={styles.firstteam}>
          <Image height={20} width={20} src={team_a_logo} alt="" />
          <span>{team_a_name}</span>
        </div>
        <div className={styles.secondteam}>
          <Image height={20} width={20} src={team_b_logo} alt="" />
          <span>{team_b_name}</span>
        </div>
      </div>
      <span className={styles.Date}>{time}</span>
    </>
  );
};

export default VenueHead;
