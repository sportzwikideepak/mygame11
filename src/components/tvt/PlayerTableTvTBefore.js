import React from "react";
import styles from "../../app/[match-details]/tvt/teamvsteam.module.css";

const PlayerTableTvTBefore = (props) => {
  return (
    <>
      <div>
        <div className={styles.tablecontaner}>
          <table className={styles.tablecontent}>
            <thead>
              <tr>
                <th className={styles.tableheadplayer}>Player Name</th>
                {/* <th className={styles.tablehead}>Team</th> */}
                <th className={styles.tablehead}>Role</th>
                <th className={styles.tablehead}>Matches</th>
                <th className={styles.tablehead}>Innings</th>
                <th className={styles.tablehead}>Not out</th>
                <th className={styles.tablehead}>Runs</th>
                <th className={styles.tablehead}>Balls</th>
                <th className={styles.tablehead}>Highest</th>
                <th className={styles.tablehead}>100s</th>
                <th className={styles.tablehead}>50s</th>
                <th className={styles.tablehead}>4s</th>
                <th className={styles.tablehead}>6s</th>
                <th className={styles.tablehead}>Average</th>
                <th className={styles.tablehead}>Strike</th>
                <th className={styles.tablehead}>Catches</th>
                <th className={styles.tablehead}>Stumpings</th>
                <th className={styles.tablehead}>Fastest 50 balls</th>
                <th className={styles.tablehead}>Fastest 100 balls</th>
              </tr>
            </thead>
            <tbody>
              {props?.data?.map((item) => {
                // console.log(item);
                return (
                  <tr key={item?.player_id}>
                    <td className={styles.tablebodyplayer}>{item?.name}</td>
                    {/* <td className={styles.tablebody}>
                      <img src="Upcoming/India Flag.svg" alt="" />
                      IND
                    </td> */}
                    <td className={styles.tablebody}>{item?.role}</td>
                    <td className={styles.tablebody}>
                      {item?.playerStats?.response?.batting?.[
                        props?.selectedFormat
                      ]?.matches || "-"}
                    </td>
                    <td className={styles.tablebody}>
                      {item?.playerStats?.response?.batting?.[
                        props?.selectedFormat
                      ]?.innings || "-"}
                    </td>
                    <td className={styles.tablebody}>
                      {item?.playerStats?.response?.batting?.[
                        props?.selectedFormat
                      ]?.notout || "-"}
                    </td>
                    <td className={styles.tablebody}>
                      {item?.playerStats?.response?.batting?.[
                        props?.selectedFormat
                      ]?.runs || "-"}
                    </td>
                    <td className={styles.tablebody}>
                      {item?.playerStats?.response?.batting?.[
                        props?.selectedFormat
                      ]?.balls || "-"}
                    </td>
                    <td className={styles.tablebody}>
                      {item?.playerStats?.response?.batting?.[
                        props?.selectedFormat
                      ]?.highest || "-"}
                    </td>
                    <td className={styles.tablebody}>
                      {item?.playerStats?.response?.batting?.[
                        props?.selectedFormat
                      ]?.run100 || "-"}
                    </td>
                    <td className={styles.tablebody}>
                      {item?.playerStats?.response?.batting?.[
                        props?.selectedFormat
                      ]?.run50 || "-"}
                    </td>
                    <td className={styles.tablebody}>
                      {item?.playerStats?.response?.batting?.[
                        props?.selectedFormat
                      ]?.run4 || "-"}
                    </td>
                    <td className={styles.tablebody}>
                      {item?.playerStats?.response?.batting?.[
                        props?.selectedFormat
                      ]?.run6 || "-"}
                    </td>
                    <td className={styles.tablebody}>
                      {item?.playerStats?.response?.batting?.[
                        props?.selectedFormat
                      ]?.average || "-"}
                    </td>
                    <td className={styles.tablebody}>
                      {item?.playerStats?.response?.batting?.[
                        props?.selectedFormat
                      ]?.strike || "-"}
                    </td>
                    <td className={styles.tablebody}>
                      {item?.playerStats?.response?.batting?.[
                        props?.selectedFormat
                      ]?.catches || "-"}
                    </td>
                    <td className={styles.tablebody}>
                      {item?.playerStats?.response?.batting?.[
                        props?.selectedFormat
                      ]?.stumpings || "-"}
                    </td>
                    <td className={styles.tablebody}>
                      {item?.playerStats?.response?.batting?.[
                        props?.selectedFormat
                      ]?.fastest50balls || "-"}
                    </td>
                    <td className={styles.tablebody}>
                      {item?.playerStats?.response?.batting?.[
                        props?.selectedFormat
                      ]?.fastest100balls || "-"}
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

export default PlayerTableTvTBefore;
