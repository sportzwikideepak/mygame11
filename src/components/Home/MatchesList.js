import React from "react";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
import styles from "../../app/home.module.css";

const MatchesList = ({ title, matches, activeTab }) => {
  const formatDate = (dateString, showTime) => {
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      ...(showTime && {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    };
    return new Date(dateString).toLocaleString("en-GB", options);
  };

  return (
    <div className={styles.matchesList}>
      {matches?.map((match) => (
        <Link
          key={match.match_id}
          href={slugify(
            `${
              match.teama.short_name.toLowerCase() === "tba"
                ? "/"
                : `/${match.competition.abbr}-${match.match_id}`
            }`,
            {
              replacement: "-",
              remove: [/[\[\]\/wnd]+/g, ""],
              lower: true,
              strict: true,
            }
          )}
          className={styles.match}
        >
          <div className={styles.matchInfo}>
            <div className={styles.team}>
              <Image
                src={match.teama.logo_url}
                alt={`${match.teama.short_name} logo`}
                width={50}
                height={50}
                className={styles.teamLogo}
              />
              {activeTab !== "upcoming" && (
                <span className={styles.teamScore}>{match.teama.scores_full}</span>
              )}
            </div>
            <span className={styles.vs}>vs</span>
            <div className={styles.team}>
              <Image
                src={match.teamb.logo_url}
                alt={`${match.teamb.short_name} logo`}
                width={50}
                height={50}
                className={styles.teamLogo}
              />
              {activeTab !== "upcoming" && (
                <span className={styles.teamScore}>{match.teamb.scores_full}</span>
              )}
            </div>
          </div>
          <div className={styles.matchDetails}>
            {activeTab === "upcoming" ? (
              <span>{formatDate(match.date_start, true)}</span>
            ) : null}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MatchesList;
