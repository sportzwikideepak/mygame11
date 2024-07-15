import React from "react";
import styles from "../../app/[match-details]/tvt/teamvsteam.module.css";
import Image from "next/image";

const PlayerTableTvT = (props) => {
  return (
    <>
      <div>
        <div className={styles.tablecontaner}>
          <table className={styles.tablecontent}>
            <thead>
              <tr>
                <th className={styles.tableheadplayer}>Player Name</th>
                {/* <th className={styles.tablehead}>
                  Team
                  <img src="/CricketaddictorDreamTeam/Filter.svg" alt="" />
                </th> */}
                <th className={styles.tablehead}>
                  Position
                  {/* <img src="/CricketaddictorDreamTeam/Filter.svg" alt="" /> */}
                </th>
                <th className={styles.tablehead}>
                  Salary
                  {/* <img src="/CricketaddictorDreamTeam/Filter.svg" alt="" /> */}
                </th>
                <th className={styles.tablehead}>
                  FPTS
                  {/* <img src="/CricketaddictorDreamTeam/Filter.svg" alt="" /> */}
                </th>
                <th className={styles.tablehead}>
                  Runs
                  {/* <img src="/CricketaddictorDreamTeam/Filter.svg" alt="" /> */}
                </th>
                <th className={styles.tablehead}>
                  100s
                  {/* <img src="/CricketaddictorDreamTeam/Filter.svg" alt="" /> */}
                </th>
                <th className={styles.tablehead}>
                  50s
                  {/* <img src="/CricketaddictorDreamTeam/Filter.svg" alt="" /> */}
                </th>
                <th className={styles.tablehead}>
                  30s
                  {/* <img src="/CricketaddictorDreamTeam/Filter.svg" alt="" /> */}
                </th>
                <th className={styles.tablehead}>
                  6s
                  {/* <img src="/CricketaddictorDreamTeam/Filter.svg" alt="" /> */}
                </th>
                <th className={styles.tablehead}>
                  4s
                  {/* <img src="/CricketaddictorDreamTeam/Filter.svg" alt="" /> */}
                </th>
                <th className={styles.tablehead}>
                  Wickets
                  {/* <img src="/CricketaddictorDreamTeam/Filter.svg" alt="" /> */}
                </th>
                <th className={styles.tablehead}>
                  Ducks
                  {/* <img src="/CricketaddictorDreamTeam/Filter.svg" alt="" /> */}
                </th>
                <th className={styles.tablehead}>
                  BB(LBW)
                  {/* <img src="/CricketaddictorDreamTeam/Filter.svg" alt="" /> */}
                </th>
                <th className={styles.tablehead}>
                  MOV
                  {/* <img src="/CricketaddictorDreamTeam/Filter.svg" alt="" /> */}
                </th>
                <th className={styles.tablehead}>
                  ROC
                  {/* <img src="/CricketaddictorDreamTeam/Filter.svg" alt="" /> */}
                </th>
                <th className={styles.tablehead}>
                  ROT
                  {/* <img src="/CricketaddictorDreamTeam/Filter.svg" alt="" /> */}
                </th>
                <th className={styles.tablehead}>
                  STMP
                  {/* <img src="/CricketaddictorDreamTeam/Filter.svg" alt="" /> */}
                </th>
              </tr>
            </thead>
            <tbody>
              {props?.data?.map((item) => {
                return (
                  <tr key={item?.pid}>
                    <td className={styles.tablebodyplayer}>{item?.name}</td>
                    {/* <td className={styles.tablebody}>
                      <img src="Upcoming/India Flag.svg" alt="" />
                      {props?.selectedTeam == 0 ? props?.nameTeamA : nameTeamB}
                    </td> */}
                    <td className={styles.tablebody}>{item?.role}</td>
                    <td className={styles.tablebody}>{item?.rating}</td>
                    <td className={styles.tablebody}>{item?.point}</td>
                    <td className={styles.tablebody}>{item?.run}</td>
                    <td className={styles.tablebody}>
                      {(item?.run / 100).toFixed()}
                    </td>
                    <td className={styles.tablebody}>{item?.fifty}</td>
                    <td className={styles.tablebody}>{item?.thirty}</td>
                    <td className={styles.tablebody}>{item?.six}</td>
                    <td className={styles.tablebody}>{item?.four}</td>
                    <td className={styles.tablebody}>{item?.wkts}</td>
                    <td className={styles.tablebody}>{item?.duck}</td>
                    <td className={styles.tablebody}>{item?.bonusbowedlbw}</td>
                    <td className={styles.tablebody}>{item?.maidenover}</td>
                    <td className={styles.tablebody}>{item?.runoutcatcher}</td>
                    <td className={styles.tablebody}>{item?.runoutthrower}</td>
                    <td className={styles.tablebody}>{item?.stumping}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* <div className={styles.bottom}>
          <div className={styles.bottomcontent}>
            <div className={styles.text}>
              <span className={styles.textbold}>SL - </span>
              <span className={styles.textlight}>Salary,</span>
            </div>
            <div className={styles.text}>
              <span className={styles.textbold}>FPTS - </span>
              <span className={styles.textlight}>Fantasy Points,</span>
            </div>
            <div className={styles.text}>
              <span className={styles.textbold}>STMP -</span>
              <span className={styles.textlight}>Stumpings,</span>
            </div>
            <div className={styles.text}>
              <span className={styles.textbold}>MOV - </span>
              <span className={styles.textlight}>Madien Overs,</span>
            </div>
            <div className={styles.text}>
              <span className={styles.textbold}>ROC - </span>
              <span className={styles.textlight}>Run Out Catch,</span>
            </div>
            <div className={styles.text}>
              <span className={styles.textbold}>ROT - </span>
              <span className={styles.textlight}>Run Out Throw,</span>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default PlayerTableTvT;
