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

  // Sort matches by start date in ascending order
  const sortedMatches = matches.sort(
    (a, b) => new Date(a.date_start) - new Date(b.date_start)
  );

  return (
    <div className={styles.matchesList}>
      {sortedMatches.map((match) => (
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
          {/* Competition name (top-left) and category (top-right) */}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",height:"30px",marginBottom:"10px"}} className={styles.matchHeader}>
            <div style={{fontSize:"10px"}} className={styles.competitionTitle}>
              {match.competition.title}
            </div>
            <div className={styles.matchCategory}>
              {match.competition.category}
            </div>
          </div>

          <div className={styles.matchInfo}>
            <div className={styles.team}>
              <Image
                src={match.teama.logo_url}
                alt={`${match.teama.name} logo`}
                width={50}
                height={50}
                className={styles.teamLogo}
              />
              <div>
                <span className={styles.teamName}>{match.teama.name}</span>
              </div>
              {activeTab !== "upcoming" && (
                <div>
                  <span className={styles.teamScore}>
                    {match.teama.scores_full}
                  </span>
                </div>
              )}
            </div>
            <span className={styles.vs}>vs</span>
            <div className={styles.team}>
              <Image
                src={match.teamb.logo_url}
                alt={`${match.teamb.name} logo`}
                width={50}
                height={50}
                className={styles.teamLogo}
              />
              <div>
                <span className={styles.teamName}>{match.teamb.name}</span>
              </div>
              {activeTab !== "upcoming" && (
                <div>
                  <span className={styles.teamScore}>
                    {match.teamb.scores_full}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className={styles.matchName}>
            <h4>{match.title}</h4> {/* Match title */}
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
