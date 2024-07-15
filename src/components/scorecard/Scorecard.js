import React from "react";
import Image from "next/image";
import styles from "../../app/[match-details]/venue-overview/team-a/[match-overview]/scorecard/scorecard.module.css";

const Scorecard = ({ data }) => {
  //   console.log(data, "94hni0hne0o");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.dropdown}>
          <h2 className={styles.sectionheading}>{data?.name}</h2>
          <Image height={20} width={20} src="/static/dropdown.svg" alt="" />
        </div>
        <div className={styles.section}>
          <table className={styles.statstable}>
            <thead>
              <tr className={styles.tableheader}>
                <th className={styles.textleft}>Batter</th>
                <th className={styles.textright}>R</th>
                <th className={styles.textright}>B</th>
                <th className={styles.textright}>4s</th>
                <th className={styles.textright}>6s</th>
                <th className={styles.textright}>SR</th>
              </tr>
            </thead>
            <tbody>
              {data?.batsmen?.map((player, index) => {
                return (
                  <tr key={index}>
                    <td className={styles.cell1}>
                      {player?.name}
                      <span className={styles.details1}>{player?.how_out}</span>
                    </td>
                    <td className={`${styles.cell} ${styles.textright1}`}>
                      {player?.runs}
                    </td>
                    <td className={`${styles.cell} ${styles.textright1}`}>
                      {player?.balls_faced}
                    </td>
                    <td className={`${styles.cell} ${styles.textright1}`}>
                      {player?.fours}
                    </td>
                    <td className={`${styles.cell} ${styles.textright1}`}>
                      {player?.sixes}
                    </td>
                    <td className={`${styles.cell} ${styles.textright1}`}>
                      {player?.strike_rate}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.section1}>
          <h3 className={styles.subheading}>Extras</h3>
          <p className={styles.details}>
            <span>Extras</span>
            {data?.extra_runs?.total} (b {data?.extra_runs?.byes}, lb{" "}
            {data?.extra_runs?.legbyes}, w {data?.extra_runs?.wides}, nb
            {data?.extra_runs?.noballs}, p {data?.extra_runs?.penalty})
          </p>
        </div>
        <div className={styles.section1}>
          <div className={styles.details}>
            <div className={styles.subheading}>Did Not Bat :-</div>{" "}
            {data?.did_not_bat?.map((player, index) => (
              <div
                key={index}
                style={{ display: "inline", marginRight: "2px" }}
              >
                {player?.name},
              </div>
            ))}
          </div>
        </div>
        <div className={styles.section1}>
          <p className={styles.details}>
            <span>Fall of Wickets :-</span>
            <span className={styles.subheading}>
              {data?.fows?.map((player, index) => {
                return (
                  <div
                    style={{ display: "inline", marginRight: "2px" }}
                    key={index}
                  >
                    <p style={{ display: "inline", marginRight: "2px" }}>
                      {player?.name}, {parseInt(player?.bowls || 0) / 6}
                    </p>
                  </div>
                );
              })}
            </span>
          </p>
        </div>
        <div className={styles.section2}>
          <table className={styles.statstable}>
            <thead>
              <tr className={styles.tableheader}>
                <th className={styles.textleft}>Bowler</th>
                <th className={styles.textright}>O</th>
                <th className={styles.textright}>R</th>
                <th className={styles.textright}>W</th>
                <th className={styles.textright}>Econ</th>
                <th className={styles.textright}>Maidens</th>
              </tr>
            </thead>
            <tbody>
              {data?.bowlers?.map((player, index) => {
                return (
                  <tr key={index}>
                    <td className={styles.cell1}>{player?.name}</td>
                    <td className={`${styles.cell} ${styles.textright1}`}>
                      {player?.overs}
                    </td>
                    <td className={`${styles.cell} ${styles.textright1}`}>
                      {player?.runs_conceded}
                    </td>
                    <td className={`${styles.cell} ${styles.textright1}`}>
                      {player?.wickets}
                    </td>
                    <td className={`${styles.cell} ${styles.textright1}`}>
                      {player?.econ}
                    </td>
                    <td className={`${styles.cell} ${styles.textright1}`}>
                      {player?.maidens}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Scorecard;
