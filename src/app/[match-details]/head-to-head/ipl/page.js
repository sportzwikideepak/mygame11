import React from "react";
import Image from "next/image";
import styles from "../head-to-head.module.css";
import H2HDetails from "@/components/h2h/H2HDetails";
import Link from "next/link";
import Head from "@/components/h2hNew/Head";
import OverviewMatchCard from "@/components/match_overview/OverviewMatchCard";
import HeadDataVisual from "@/components/h2hNew/HeadDataVisual";
import PlayerStatsAccordion from "@/components/h2hNew/PlayerStat";
const LOCAL_SW_API_BASE_URL = process.env.LOCAL_SW_API_BASE_URL;

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_base_url_v4 = process.env.ENTITY_BASE_URL_V4;
const entity_api_key = process.env.ENTITY_TOKEN;

async function fetchPlayerStats(playerIds) {
  const fetchPromises = playerIds?.map((playerId) =>
    fetch(
      `${entity_base_url_v4}/players/${playerId}/advancestats/?token=${entity_api_key}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
  );

  try {
    const results = await Promise.all(fetchPromises);
    return results; // Returns an array of results for each player's stats
  } catch (error) {
    console.error("Failed to fetch player stats:", error);
    throw error; // Re-throws the error to be handled by the caller
  }
}

const fetchPlayerList = async (match_id) => {
  try {
    const res = await fetch(
      `${entity_base_url_v2}/matches/${match_id}/squads?token=${entity_api_key}`
    );
    const data = await res.json();
    return data?.response?.players;
  } catch (err) {
    console.log(err, console.log(err));
    return [];
  }
};

const h2hTeamVsTeam = async (team_id_a, team_id_b) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/api/match/stats/?team1Id=${team_id_a}&team2Id=${team_id_b}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "#3iu4hiohg4o3hit943");
  }
};

const iplHeadToHead = async (team_id_a, team_id_b) => {
  try {
    const res = await fetch(
      `${entity_base_url_v4}/teams/${team_id_a}/advance/${team_id_b}?token=${entity_api_key}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "#3iu4hiohg4o3hit943");
  }
};

const fetchMatchInfo = async (match_id) => {
  const res = await fetch(
    `${entity_base_url_v2}/matches/${match_id}/info?token=${entity_api_key}`
  );
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const currentPath = params["match-details"];

  const matchInfo = await fetchMatchInfo(match_id);
  const teamIdA = matchInfo?.response?.teama?.team_id;
  const teamIdB = matchInfo?.response?.teamb?.team_id;

  const tvtHeadToHead = await h2hTeamVsTeam(teamIdA, teamIdB);
  const iplHeadToHeadData = await iplHeadToHead(teamIdA, teamIdB);

  const playersData = await fetchPlayerList(match_id);
  const playerIds = playersData?.map((player) => player?.pid);

  const playerDatas = await fetchPlayerStats(playerIds);

  // console.log(playerDatas[0], "uj93tfpomp09");

  return (
    <>
      <div className={styles.page}>
        <div style={{ paddingBottom: "70px" }} className={styles.main}>
          {/* ...........navbar........... */}
          <Head
            match_short_title={matchInfo?.response?.short_title}
            match_venue={matchInfo?.response?.venue?.name}
            currentPath={currentPath}
          />

          <OverviewMatchCard
            matchTitle={matchInfo?.response?.competition?.abbr}
            status={
              matchInfo?.response?.status_note ||
              matchInfo?.response?.status_str
            }
            teamNameA={matchInfo?.response?.teamb.short_name}
            teamNameB={matchInfo?.response?.teama.short_name}
            logoTeamA={matchInfo?.response?.teamb.logo_url}
            logoTeamB={matchInfo?.response?.teama.logo_url}
            dateStart={matchInfo?.response?.date_start_ist}
          />

          <HeadDataVisual
            title="Overall Snapshot :-"
            subTitle="All Over Head-to-head team statistics"
            data={tvtHeadToHead}
          />

          <div className="ipl">
            <div className={styles.statscontainer}>
              <div className={styles.statsrow}>
                <div className={styles.statsbarcontainer}>
                  <div
                    className={`${styles.progressbar} ${styles.yellowbar}`}
                  />
                  <span className={`${styles.label} ${styles.leftlabel}`}>
                    {iplHeadToHeadData?.response?.items?.team1vsteam2totalmatch}
                  </span>
                </div>
                <div className={styles.labelcontainer}>Total Matches</div>
                <div className={styles.statsbarcontainer}>
                  <div className={`${styles.progressbar} ${styles.bluebar}`} />
                  <span className={`${styles.label} ${styles.rightlabel}`}>
                    {iplHeadToHeadData?.response?.items?.team1vsteam2totalmatch}
                  </span>
                </div>
              </div>
              <div className={styles.statsrow}>
                <div className={styles.statsbarcontainer}>
                  <div
                    className={`${styles.progressbar} ${styles.yellowbar}`}
                  />
                  <span className={`${styles.label} ${styles.leftlabel}`}>
                    {iplHeadToHeadData?.response?.items?.team1totalmatchwin}
                  </span>
                </div>
                <div className={styles.labelcontainer}>Wins</div>
                <div className={styles.statsbarcontainer}>
                  <div className={`${styles.progressbar} ${styles.bluebar}`} />
                  <span className={`${styles.label} ${styles.rightlabel}`}>
                    {iplHeadToHeadData?.response?.items?.team2totalmatchwin}
                  </span>
                </div>
              </div>
              <div className={styles.statsrow}>
                <div className={styles.statsbarcontainer}>
                  <div
                    className={`${styles.progressbar} ${styles.yellowbar}`}
                  />
                  <span className={`${styles.label} ${styles.leftlabel}`}>
                    {
                      iplHeadToHeadData?.response?.items
                        ?.team1vsteam2totalmatchcancelled
                    }
                  </span>
                </div>
                <div className={styles.labelcontainer}>Match Cancelled</div>
                <div className={styles.statsbarcontainer}>
                  <div className={`${styles.progressbar} ${styles.bluebar}`} />
                  <span className={`${styles.label} ${styles.rightlabel}`}>
                    {
                      iplHeadToHeadData?.response?.items
                        ?.team1vsteam2totalmatchcancelled
                    }
                  </span>
                </div>
              </div>
              <div className={styles.statsrow}>
                <div className={styles.statsbarcontainer}>
                  <div
                    className={`${styles.progressbar} ${styles.yellowbar}`}
                  />
                  <span className={`${styles.label} ${styles.leftlabel}`}>
                    {
                      iplHeadToHeadData?.response?.items
                        ?.team1vsteam2totalmatchdrawn
                    }
                  </span>
                </div>
                <div className={styles.labelcontainer}>Match Drawn</div>
                <div className={styles.statsbarcontainer}>
                  <div className={`${styles.progressbar} ${styles.bluebar}`} />
                  <span className={`${styles.label} ${styles.rightlabel}`}>
                    {
                      iplHeadToHeadData?.response?.items
                        ?.team1vsteam2totalmatchdrawn
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="playerData flex flex-col gap-1">
        {playerDatas?.map((item, index) => {
          return (
            <PlayerStatsAccordion
              key={index}
              name={item?.response?.player?.short_name}
              tournamentStats={item?.response?.tournamentstats}
            />
          );
        })}
      </div>
    </>
  );
};

export default page;
