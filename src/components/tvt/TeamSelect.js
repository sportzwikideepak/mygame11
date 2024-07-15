import React from "react";
import styles from "../../app/[match-details]/tvt/teamvsteam.module.css";

const TeamSelect = ({
  handleSelectedTeamChange,
  nameTeamA,
  nameTeamB,
  selectedTeam,
}) => {
  return (
    <>
      <div className={styles.teamstab}>
        <div
          onClick={() => handleSelectedTeamChange(0)}
          className={
            selectedTeam == 0 ? styles.teamactive : styles.teamnonactive
          }
        >
          <img src="Upcoming/England Flag.svg" alt="" />
          <span>{nameTeamA}</span>
        </div>
        <div
          onClick={() => handleSelectedTeamChange(1)}
          className={
            selectedTeam == 1 ? styles.teamactive : styles.teamnonactive
          }
        >
          <img src="Upcoming/England Flag.svg" alt="" />
          <span>{nameTeamB}</span>
        </div>
      </div>
    </>
  );
};

export default TeamSelect;
