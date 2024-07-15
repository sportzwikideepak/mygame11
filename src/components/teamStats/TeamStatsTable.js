import React from "react";
import styles from "../../app/[match-details]/team-stats/teamStats.module.css";

const shortTeamName = (teamName) => {
  const name = teamName.split(" ")?.map((item) => item?.charAt(0));
  return name.join("")?.toUpperCase() || "";
};

const TeamStatsTable = (props) => {
  //   console.log(shortTeamName("kolkata knight riders", "389hfn9b"));
  return (
    <>
      <div className={styles.tablecontainer}>
        <table className={styles.customtable}>
          <thead className={styles.tablehead}>
            <tr>
              <th scope="col" className={styles.tableheader}>
                Player
              </th>
              <th scope="col" className={styles.tableheader}>
                Team
              </th>
              <th scope="col" className={styles.tableheader}>
                Position
              </th>
              <th scope="col" className={styles.tableheader}>
                Salary
              </th>
              <th scope="col" className={styles.tableheader}>
                Fantsy Points
              </th>
              {/* <th scope="col" className={styles.tableheader}>
                No. of Points
              </th> */}
              <th scope="col" className={styles.tableheader}>
                Runs
              </th>
              <th scope="col" className={styles.tableheader}>
                100s
              </th>
              <th scope="col" className={styles.tableheader}>
                50s
              </th>
              <th scope="col" className={styles.tableheader}>
                6s
              </th>
              <th scope="col" className={styles.tableheader}>
                4s
              </th>
              <th scope="col" className={styles.tableheader}>
                Wkts
              </th>
              {/* <th scope="col" className={styles.tableheader}>
                Bowled
              </th>
              <th scope="col" className={styles.tableheader}>
                LBW
              </th> */}
              <th scope="col" className={styles.tableheader}>
                Catches
              </th>
              <th scope="col" className={styles.tableheader}>
                Madien ov
              </th>
              {/* <th scope="col" className={styles.tableheader}>
                Run out c
              </th>
              <th scope="col" className={styles.tableheader}>
                Run out t
              </th>
              <th scope="col" className={styles.tableheader}>
                Stumping
              </th>
              <th scope="col" className={styles.tableheader}>
                Avg Eco
              </th>
              <th scope="col" className={styles.tableheader}>
                Avg Sr
              </th> */}
            </tr>
          </thead>
          <tbody>
            {props?.data?.player_stats?.map((player, index) => {
              return (
                <tr key={index} className={styles.tablerow}>
                  <th scope="row" className={styles.rowheader1}>
                    <div className={styles.circle} />
                    {player?.player_name}
                  </th>
                  <td className={styles.tablecell}>
                    {shortTeamName(player?.team_name)}
                  </td>
                  <td className={styles.tablecell}>{player?.position}</td>
                  <td className={styles.tablecell}>{player?.salary}</td>
                  <td className={styles.tablecell}>{player?.fantasy_points}</td>
                  {/* <td className={styles.tablecell}>11</td> */}
                  <td className={styles.tablecell}>{player?.runs}</td>
                  <td className={styles.tablecell}>{player?.century}</td>
                  <td className={styles.tablecell}>{player?.half_century}</td>
                  <td className={styles.tablecell}>{player?.sixes}</td>
                  <td className={styles.tablecell}>{player?.fours}</td>
                  <td className={styles.tablecell}>{player?.wickets}</td>
                  {/* <td className={styles.tablecell}>113.5</td>
                  <td className={styles.tablecell}>18.7</td> */}
                  <td className={styles.tablecell}>{player?.catches}</td>
                  <td className={styles.tablecell}>{player?.maiden_overs}</td>
                  {/* <td className={styles.tablecell}>12</td>
                  <td className={styles.tablecell}>12</td>
                  <td className={styles.tablecell}>113.5</td>
                  <td className={styles.tablecell}>18.7</td>
                  <td className={styles.tablecell}>1</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TeamStatsTable;
