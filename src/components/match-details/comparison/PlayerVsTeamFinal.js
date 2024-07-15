import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./PlayerVsTeamFinal.module.css";
import PvtFinalHeader from "./PvtFinalHeader";
import PvtFinalPlayingType from "./PvtFinalPlayingType";
import { internalVariables } from "@/utils/variablesInternal";

const PlayerVsTeamFinal = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [pvtData, setPvtData] = useState();

  const handleSelectedTabChange = (tabNo) => {
    setSelectedTab(tabNo);
  };

  // console.log(props?.selectedPlayerPvt, "selectedPlayerPvtselectedPlayerPvt");
  // console.log(props?.playersListC, "hfi3playersListC");

  const isPlayerInTeamA = props?.playersListC?.teama?.squads?.filter(
    (player) => player?.player_id == props?.selectedPlayerPvt
  );

  const isPlayerInTeamB = props?.playersListC?.teamb?.squads?.filter(
    (player) => player?.player_id == props?.selectedPlayerPvt
  );

  useEffect(() => {
    const fetchData = async (player_id) => {
      try {
        const res = await fetch(
          `${internalVariables?.url_v4}/players/${player_id}/advancestats/?token=${internalVariables?.token}`
        );
        const data = await res.json();
        setPvtData(data);
      } catch (err) {
        console.log("error fetching data #olie4h943");
        return [];
      }
    };

    fetchData(props?.selectedPlayerPvt);
  }, []);

  console.log(pvtData, "83h9r0ph3r0pni");

  return (
    <>
      <div className={styles.page}>
        <div className={styles.main}>
          {/* ...........navbar........... */}
          <PvtFinalHeader short_title={props?.short_title} />
          <div className={styles.maincontent}>
            {/* ...........player left........... */}
            <PvtFinalPlayingType
              selectedTab={selectedTab}
              handleSelectedTabChange={handleSelectedTabChange}
            />
            {/* ...........Player Profile Card........... */}
            <div className={styles.sticky}>
              <div className={styles.cardscroll}>
                <div className={styles.card}>
                  <div className={styles.cardheader}>
                    <div className={styles.profileinfo}>
                      <Image
                        height={20}
                        width={20}
                        src="/static/Player.svg"
                        alt="Player Avatar"
                        className={styles.avatar}
                      />
                    </div>
                    <button
                      className={`${styles.button} ${styles.borders} ${styles.withicon}`}
                    >
                      J Bairstow
                      <span className={styles.icon}>
                        <Image
                          height={20}
                          width={20}
                          src="/static/dropdown.svg"
                          alt=""
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardheader}>
                    <div className={styles.profileinfo}>
                      <Image
                        height={20}
                        width={20}
                        src="/static/Team.svg"
                        alt="Player Avatar"
                        className={styles.avatar}
                      />
                    </div>
                    <button
                      className={`${styles.button} ${styles.borders} ${styles.withicon}`}
                    >
                      ENG
                      <span className={styles.icon}>
                        <Image
                          height={20}
                          width={20}
                          src="/static/dropdown.svg"
                          alt=""
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* ...........Table........... */}
            <div className={styles.container1}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Innings</th>
                    <th>Both</th>
                    <th>1st</th>
                    <th>2nd</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.tdleft}>Matches</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>Innings</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>Not Out</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>Runs</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>Highest Score</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>Average</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>Balls Faced</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>Strike Rate</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>20&apos;s</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>30&apos;s</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>50&apos;s</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>100&apos;s</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>200&apos;s</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>90&apos;s</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>
              {/* ...........Out Type........... */}
              <div className={styles.Outtype}>Out Type</div>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <td className={styles.tdleft}>Matches</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>Innings</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>Average</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>Balls Faced</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>90&apos;s</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>
              {/* ...........Wicket Taker(Left Arm)........... */}
              <div className={styles.Outtype}>Wicket Taker(Left Arm)</div>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <td className={styles.tdleft}>Matches</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>Innings</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>Average</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>Balls Faced</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>90&apos;s</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>
              {/* ...........Wicket Taker(Right Arm)........... */}
              <div className={styles.Outtype}>Wicket Taker(Left Arm)</div>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <td className={styles.tdleft}>Matches</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>Innings</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>Average</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>Balls Faced</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className={styles.tdleft}>90&apos;s</td>
                    <td>33</td>
                    <td>1</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerVsTeamFinal;
