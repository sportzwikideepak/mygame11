import React from "react";
import styles from "../../app/[match-details]/matchDetails.module.css";
import Image from "next/image";
// import Link from "next/link";

const enhancePlayerDetails = (players, playerDetailsList) => {
  return players?.map((player) => {
    const details = playerDetailsList?.find(
      (item) => item?.pid == player?.player_id
    );
    if (details) {
      player.bowling_style = details.bowling_style;
      player.batting_style = details.batting_style;
    }
    return player;
  });
};

// Generate short team names
const shortFormGenerate = (name) => {
  if (name) {
    const words = name.split(" ").filter(Boolean);
    const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
    return initials;
  }
  return "";
};

// Filter players based on filter applied
function filterSquad(team, playerPosition, battingStyle, bowlingStyle) {
  if (!playerPosition && !battingStyle && !bowlingStyle) {
    return team || [];
  }

  const positionFilter = playerPosition.toLowerCase();
  const battingFilter = battingStyle.toLowerCase();
  const bowlingFilter = bowlingStyle.toLowerCase();

  return (
    team?.filter((player) => {
      const matchesPosition =
        positionFilter && player.role?.toLowerCase().includes(positionFilter);
      const matchesBatting =
        battingFilter &&
        player.batting_style?.toLowerCase().includes(battingFilter);
      const matchesBowling =
        bowlingFilter &&
        player.bowling_style?.toLowerCase().includes(bowlingFilter);

      return (
        (!positionFilter || matchesPosition) &&
        (!battingFilter || matchesBatting) &&
        (!bowlingFilter || matchesBowling)
      );
    }) || []
  );
}

const SquadsTable = (props) => {
  const squadA = enhancePlayerDetails(
    props?.squadTeamA,
    props?.playerListWithDetails
  );
  const squadB = enhancePlayerDetails(
    props?.squadTeamB,
    props?.playerListWithDetails
  );

  const filteredSquadA = filterSquad(
    squadA,
    props?.playerPosition,
    props?.battingStyle,
    props?.bowlingStyle
  );

  const filteredSquadB = filterSquad(
    squadB,
    props?.playerPosition,
    props?.battingStyle,
    props?.bowlingStyle
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header1}>
          <h2 className={styles.country}>{props?.teamAName}</h2>
          <h2 className={styles.country}>{props?.teamBName}</h2>
        </div>
        <div className={styles.playergrid}>
          <div className={styles.player1}>
            {filteredSquadA?.map((player) => {
              return (
                <div
                  key={player?.player_id}
                  // href="#"
                  className={styles.playercard}
                >
                  <Image
                    height={20}
                    width={20}
                    className={styles.playerimage}
                    src="/static/Player.svg"
                    alt="Player"
                  />
                  <div className={styles.playerinfo}>
                    <p className={styles.playerrole}>
                      {player?.role.toUpperCase()}
                    </p>
                    <p className={styles.playername}>
                      {player?.name}
                      <span>
                        (
                        {player?.role === "bowl"
                          ? shortFormGenerate(player?.bowling_style)
                          : shortFormGenerate(player?.batting_style)}
                        )
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.linecenter} />
          <div className={styles.player2}>
            {filteredSquadB?.map((player) => {
              return (
                <div
                  key={player?.player_id}
                  // href="#"
                  className={styles.playercard1}
                >
                  <div className={styles.playerinfo}>
                    <p className={styles.playerrole1}>
                      {player?.role.toUpperCase()}
                    </p>
                    <p className={styles.playername1}>
                      {player?.name}
                      <span>
                        (
                        {player?.role === "bowl"
                          ? shortFormGenerate(player?.bowling_style)
                          : shortFormGenerate(player?.batting_style)}
                        )
                      </span>
                    </p>
                  </div>
                  <Image
                    height={20}
                    width={20}
                    className={styles.playerimage}
                    src="/static/Player.svg"
                    alt="Player"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SquadsTable;
