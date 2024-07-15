import Image from "next/image";
import React from "react";
import styles from "./scorecard.module.css";

const ScoreCard = ({ scoreCardData }) => {
  return (
    <>
      <div className={styles.container1}>
        {scoreCardData?.response?.innings?.map((inning, index) => {
          return (
            <>
              <div key={index} className={styles.card1}>
                <div className={styles.content1}>
                  <div className={styles.dropdown}>
                    <h2 className={styles.title2}>{inning?.short_name}</h2>
                    <Image
                      height={20}
                      width={20}
                      src="/static/Next.svg"
                      alt=""
                    />
                  </div>
                  <table className={styles.scorecard}>
                    <thead className={styles.header2}>
                      <tr>
                        <th>BATSMEN</th>
                        <th>R</th>
                        <th>B</th>
                        <th>4s</th>
                        <th>6s</th>
                        <th>S/R</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inning?.batsmen?.map((player, index) => {
                        return (
                          <>
                            <tr className={styles.player}>
                              <td>
                                {player?.name}
                                <br />
                                <span className={styles.details}>
                                  {player?.how_out}
                                </span>
                              </td>
                              <td className={styles.score}>{player?.runs}</td>
                              <td>{player?.balls_faced}</td>
                              <td>{player?.fours}</td>
                              <td>{player?.sixes}</td>
                              <td>{player?.strike_rate}</td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className={styles.Extra}>
                    <p className={styles.bold}>Extras</p>
                    <span>
                      <p>{inning?.extra_runs?.total}</p>
                      (b {inning?.extra_runs?.byes}, lb{" "}
                      {inning?.extra_runs?.legbyes}, nb{" "}
                      {inning?.extra_runs?.noballs}, w{" "}
                      {inning?.extra_runs?.wides})
                    </span>
                  </div>
                  {inning?.did_not_bat?.length > 0 && (
                    <div className={styles.Extra}>
                      <div>
                        <p className={styles.bold}>Yet To Bat</p>
                        <span>
                          {inning.did_not_bat.map((player, index) => (
                            <div key={index}>{player?.name},</div>
                          ))}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className={styles.Extra}>
                    <p className={styles.bold}>Fall of wickets</p>
                    <span>
                      {inning?.fows?.map((player, indedx) => {
                        return (
                          <>
                            <p>
                              {player?.runs}/{player?.balls}
                            </p>
                            ({player?.how_out}, {player?.overs_at_dismissal} ov)
                          </>
                        );
                      })}
                    </span>
                  </div>
                  <table className={styles.scorecard}>
                    <thead className={styles.header2}>
                      <tr>
                        <th>BOWLER</th>
                        <th>O</th>
                        <th>M</th>
                        <th>R</th>
                        <th>W</th>
                        <th>ECO</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inning?.bowlers?.map((player, index) => {
                        return (
                          <>
                            <tr key={index} className={styles.player}>
                              <td>{player?.name}</td>
                              <td>{player?.overs}</td>
                              <td>{player?.maidens}</td>
                              <td>{player?.runs_conceded}</td>
                              <td>{player?.wickets}</td>
                              <td>{player?.econ}</td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ScoreCard;
