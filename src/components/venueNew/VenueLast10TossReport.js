import React from "react";
import styles from "../../app/[match-details]/venue-overview/last-10-matches/lastMatches.module.css";
import Image from "next/image";
import Link from "next/link";

const VenueLast10TossReport = (props) => {
  // console.log(props?.data?.[0]?.top_players, "43h0ph3pth04gp");
  return (
    <>
      <div className={styles.Livematchtab}>
        <div className={styles.teams}>
          <div className={styles.team}>
            <Image
              height={20}
              width={20}
              src={props?.matchDetails?.[0]?.response?.teama?.logo_url}
              alt=""
            />
            {props?.matchDetails?.[0]?.response?.teama?.short_name}
          </div>
          <div className={styles.matchdetails}>
            <div className={styles.whichmatch}>
              {props?.matchDetails?.[0]?.response?.competition?.abbr}
            </div>
            <div className={styles.livetext}>
              {props?.matchDetails?.[0]?.response?.status_note}
            </div>
          </div>
          <div className={styles.team}>
            <Image
              height={20}
              width={20}
              src={props?.matchDetails?.[0]?.response?.teamb?.logo_url}
              alt=""
            />
            {props?.matchDetails?.[0]?.response?.teamb?.short_name}
          </div>
        </div>
        <div className={styles.infocontainer}>
          {/* <div className={styles.Decision}>Decision after winning the toss</div> */}
          {props?.data?.[0]?.top_players?.map((player, index) => {
            return (
              <div key={index} className={styles.statblock}>
                <div className={styles.statdetail}>
                  <span>
                    <b>{player?.player_name} </b>({player?.player_role} -
                    {player?.team_name})
                  </span>
                  <span className={styles.winchasing}>
                    {player?.fantasy_points} pts
                  </span>
                </div>
                <div className={styles.progressbar}>
                  <div
                    className={styles.progress1}
                    style={{
                      width: `${((player?.fantasy_points ?? 20) / 400) * 100}%`,
                    }}
                  />
                </div>
              </div>
            );
          })}
          <div className={styles.hint}>
            M - <span>Matches,</span> Pts - <span>points</span>
          </div>
        </div>
        <div className={styles.playing11announced}>
          {/* <div className={styles.liveline} />
          <div className={styles.livecenter}>
            <Link
              href={`/${props?.currentPath}/venue-overview/team-a/match-overview-${props?.match_id}-${props?.venue_id}`}
              className={styles.GenerateLineups}
            >
              Match report
            </Link>
          </div>
          <div className={styles.liveline} /> */}
        </div>
      </div>
    </>
  );
};

export default VenueLast10TossReport;
