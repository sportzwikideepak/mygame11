import React from "react";
import styles from "./teamComparison.module.css";
import Image from "next/image";
import TeamComparisonTable from "./TeamComparisonTable";
import TeamMatches from "./TeamMatches";

const TeamComparisonMain = ({
  winning_chances,
  match_info,
  headToHeadData,
  recentMatches,
  matchStats,
  tvtBattingFirst,
  tvtBowlingFirst,
}) => {
  const team1WinPercentage = parseFloat(
    winning_chances?.[0]?.win_percentage
  )?.toFixed(2);
  const team2WinPercentage = parseFloat(
    winning_chances?.[1]?.win_percentage
  )?.toFixed(2);

  const getProgressBarWidth = (wins, matches) =>
    `${Math.floor((wins / matches) * 100)}%`;

  return (
    <>
      <div className={styles.container4}>
        {/* .........Who Will Win......... */}
        <div className={styles.subCard}>
          <div className={styles.info}>
            <div className={styles.team}>
              <span className={`${styles.teamBadge} ${styles.csk}`}>
                {match_info?.teama?.short_name}
              </span>
            </div>
            <div className={styles.team}>
              <span className={`${styles.teamBadge} ${styles.mi}`}>
                {match_info?.teamb?.short_name}
              </span>
            </div>
          </div>
          <div className={styles.container2}>
            <div className={styles.statistics}>
              <span className={styles.statsText}>
                {team1WinPercentage || 40}%
              </span>
              <span className={styles.statsText}>Win Probability</span>
              <span className={styles.statsText}>
                {team2WinPercentage || 60}%
              </span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={`${styles.progress} ${styles.yellow}`}
                style={{ width: `${team1WinPercentage || 40}%` }}
              />
              <div
                className={`${styles.progress} ${styles.blue}`}
                style={{ width: `${team2WinPercentage || 60}%` }}
              />
            </div>
          </div>
        </div>
        <TeamComparisonTable
          headToHeadData={headToHeadData}
          match_info={match_info}
        />
        {/* .........Recent Form......... */}
        <TeamMatches recentMatches={recentMatches} />

        <div className={styles.container6}>
          <h2 className={styles.title2}>Team Attributes</h2>
          <p className={styles.subtitle}>
            Based on T20 matches played in the last 5 years
          </p>
          <div className={styles.card5}>
            {matchStats.map((team) => (
              <div key={team.team_name} className={`${styles.cardInner} mb-4`}>
                <div className={styles.cardContent}>
                  <div className={styles.winner}>
                    <div className={styles.cardImage}>
                      <Image
                        height={20}
                        width={20}
                        src="/static/Winner.svg"
                        alt="Trophy"
                      />
                    </div>
                    <div>
                      <div className={styles.cardTitle}>Matches Played</div>
                      <div className={styles.matchCount}>
                        {team.total_matches}
                      </div>
                    </div>
                  </div>
                  <div className={styles.matchStats}>
                    <div className={styles.stat1}>
                      <span>{team.team_name} Won</span>
                      <span>{team.total_wins}</span>
                    </div>
                    <div className={styles.progressBar1}>
                      <div
                        className={styles.progress1}
                        style={{
                          width: getProgressBarWidth(
                            team.total_wins,
                            team.total_matches
                          ),
                        }}
                      />
                    </div>
                    <div className={styles.stat1}>
                      <span>{team.team_name} Lost</span>
                      <span>{team.total_matches - team.total_wins}</span>
                    </div>
                    <div className={styles.progressBar1}>
                      <div
                        className={styles.progress1}
                        style={{
                          width: getProgressBarWidth(
                            team.total_matches - team.total_wins,
                            team.total_matches
                          ),
                        }}
                      />
                    </div>
                    <div className={styles.stat1}>
                      <span>No Result</span>
                      <span>0</span>
                    </div>
                    <div className={styles.progressBar1}>
                      <div
                        className={styles.progress1}
                        style={{ width: "0%" }}
                      />
                    </div>
                    <div className={styles.stat1}>
                      <span>Average Runs</span>
                      <span>{team.avg_runs}</span>
                    </div>
                    <div className={styles.stat1}>
                      <span>Max Runs</span>
                      <span>{team.max_runs}</span>
                    </div>
                    <div className={styles.stat1}>
                      <span>Min Runs</span>
                      <span>{team.min_runs}</span>
                    </div>
                  </div>
                </div>
                {/* <br /> */}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.container6}>
          <h2 className={styles.title2}>Matches Against Each Other</h2>
          <p className={styles.subtitle}>All T20 matches in the last 5 years</p>
          <div className={styles.card7}>
            <div className={styles.header7}>
              <div className={styles.team7}>
                {/* <Image
                  height={20}
                  width={20}
                  src="/static/Team1.svg"
                  alt="CSK Flag"
                  className={styles.teamFlag}
                /> */}
                <span className={styles.teamName3}>
                  {tvtBowlingFirst.length > 0
                    ? tvtBowlingFirst[0].team_name
                    : ""}
                </span>
              </div>
              <div className={styles.versus}>vs</div>
              <div className={styles.team7}>
                <span className={styles.teamName3}>
                  {tvtBowlingFirst.length > 1
                    ? tvtBowlingFirst[1].team_name
                    : ""}
                </span>
                {/* <Image
                  height={20}
                  width={20}
                  src="/static/Team2.svg"
                  alt="MI Flag"
                  className={styles.teamFlag}
                /> */}
              </div>
            </div>
            <div className={styles.scores}>
              <div className={styles.matchesContent}>
                <div className={styles.score}>
                  {tvtBowlingFirst.reduce(
                    (sum, team) => sum + team.total_matches,
                    0
                  )}
                </div>
                <div className={styles.label}>(Matches)</div>
              </div>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat7}>
                <div className={styles.statTitle}>Batting 1st Wins</div>
                <div className={styles.allItem}>
                  {tvtBowlingFirst.map((team) => (
                    <div key={team.team_id} className={styles.progressContent}>
                      <div className={styles.statItem}>
                        <span className={styles.statTeam}>
                          {team.team_name}
                        </span>
                        <span className={styles.statValue}>
                          {Math.floor((team.wins / team.total_matches) * 100)}%
                        </span>
                      </div>
                      <div className={styles.progressBar7}>
                        <div
                          className={styles.progress7}
                          style={{
                            width: getProgressBarWidth(
                              team.wins,
                              team.total_matches
                            ),
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.stat7}>
                <div className={styles.statTitle}>Batting 2nd Wins</div>
                <div className={styles.allItem}>
                  {tvtBattingFirst.map((team) => (
                    <div key={team.team_id} className={styles.progressContent}>
                      <div className={styles.statItem}>
                        <span className={styles.statTeam}>
                          {team.team_name}
                        </span>
                        <span className={styles.statValue}>
                          {Math.floor((team.wins / team.total_matches) * 100)}%
                        </span>
                      </div>
                      <div className={styles.progressBar7}>
                        <div
                          className={styles.progress7}
                          style={{
                            width: getProgressBarWidth(
                              team.wins,
                              team.total_matches
                            ),
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamComparisonMain;
