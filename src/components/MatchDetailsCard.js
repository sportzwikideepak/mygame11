import React from "react";
import styles from "../app/home.module.css";
import Image from "next/image";
import Link from "next/link";
import TimeRemaining from "@/utils/calcTimeRemaining";

const convertToIST = (startTime) => {
  // Convert UNIX timestamp to milliseconds
  const dateInMilliseconds = startTime * 1000;

  // Create a Date object from the milliseconds
  const date = new Date(dateInMilliseconds);

  // Calculate the IST offset in milliseconds (5.5 hours)
  const IST_OFFSET_MS = 330 * 60000; // 330 minutes to milliseconds

  // Adjust the date by the IST offset and the current timezone offset
  const istDate = new Date(
    date.getTime() + IST_OFFSET_MS - date.getTimezoneOffset() * 60000
  );

  // Define display options for the date
  const options = {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  // Format the date according to the options
  const formattedDate = istDate.toLocaleString("en-IN", options);

  return formattedDate;
};

const MatchDetailsCard = ({
  status,
  startTime,
  team_a_name,
  team_b_name,
  subtitle,
  format_str,
  short_title,
  season,
  status_str,
  match_id,
  team_a_logo,
  team_b_logo,
  showHeadTitle,
}) => {
  // console.log("Status:", status, "Team: ", team_a_name);
  const dateInMilliseconds = startTime * 1000;
  const date = new Date(dateInMilliseconds);
  const istDate = new Date(
    date.getTime() + (330 + date.getTimezoneOffset()) * 60000
  );

  const options = {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const formattedDate = istDate.toLocaleString("en-IN", options);

  return (
    <>
      <div className={styles.mathlive}>
        <div className={styles.Livematchtab}>
          {/* <Link href={`/${short_title}-${match_id}`}> */}
          {showHeadTitle && (
            <div className={styles.playing11announced}>
              <div className={styles.liveline} />
              <span style={{ color: status === 3 ? "#4caf4f" : "#e44f3b" }}>
                {status == 3
                  ? "Playing 11 announced"
                  : "Playing 11 not announced"}
              </span>
              <div className={styles.liveline} />
            </div>
          )}
          <div className={styles.teams}>
            <div className={styles.team}>
              <Image height={40} width={40} src={team_a_logo} alt="" />
              {team_a_name}
            </div>
            <div className={styles.matchdetails}>
              <div className={styles.whichmatch}>
                {format_str + " " + subtitle + ", " + season}
              </div>
              {showHeadTitle == true ? (
                <div className={styles.livetext}>
                  <span className={styles.livetext1}>
                    <TimeRemaining
                      status={status}
                      status_str={status_str}
                      istDate={istDate}
                    />
                  </span>
                  <div className={styles.Livepart} />
                  <span className={styles.datetext}>{formattedDate}</span>
                </div>
              ) : (
                <div className={styles.matchdetails}>
                  <div className={styles.livetext}>{status_str}</div>
                </div>
              )}
            </div>
            <div className={styles.team}>
              <Image height={40} width={40} src={team_b_logo} alt="" />
              {team_b_name}
            </div>
          </div>
          {/* </Link> */}
          <div className={styles.playing11announced}>
            <div className={styles.liveline} />
            <div className={styles.livecenter}>
              <Link
                href={`${
                  team_a_name.toLowerCase() === "tba"
                    ? "/"
                    : `/${short_title}-${match_id}`
                }`}
                className={
                  status == 3 || status == 2
                    ? styles.MatchPrediction
                    : styles.MatchPrediction1
                }
              >
                Match Prediction
              </Link>
              <Link
                href={`${
                  team_a_name.toLowerCase() === "tba"
                    ? "/"
                    : `/${short_title}-${match_id}`
                }`}
                className={
                  status === 3 || status === 2
                    ? styles.GenerateLineups
                    : styles.GenerateLineups1
                }
              >
                Generate Lineups
              </Link>
            </div>
            <div className={styles.liveline} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchDetailsCard;
