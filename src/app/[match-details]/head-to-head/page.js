import React from "react";
import Image from "next/image";
import styles from "./head-to-head.module.css";
import H2HDetails from "@/components/h2h/H2HDetails";
import Link from "next/link";
import Head from "@/components/h2hNew/Head";
import OverviewMatchCard from "@/components/match_overview/OverviewMatchCard";
import HeadDataVisual from "@/components/h2hNew/HeadDataVisual";
import PlayerComparison from "@/components/match-details/PlayerComparison";
import HeadNav from "@/components/new/common/HeadNav";
import DataMain from "@/components/new/cheat-sheet/DataMain";
import DreamTeamBox from "@/components/new/overview/DreamTeamBox";
import PlayerStatsBox from "@/components/new/overview/PlayerStatsBox";
import PlayerVsPlayer from "@/components/new/data-analytics/PlayerVsPlayer";
const LOCAL_SW_API_BASE_URL = process.env.LOCAL_SW_API_BASE_URL;
const entity_base_url_v4 = process.env.ENTITY_BASE_URL_V4;

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;

const local_sw_api_url = process.env.LOCAL_SW_API_BASE_URL;

const fetchTopPlayers = async (teamIdA, teamIdB) => {
  try {
    console.log(`${local_sw_api_url}/top-players/${teamIdA}/${teamIdB}`);
    const res = await fetch(
      `${local_sw_api_url}/top-players/${teamIdA}/${teamIdB}`,
      {
        next: { revalidate: 300 },
      }
    );
    if (res?.ok) {
      const data = await res.json();
      return data;
    }
    return [];
  } catch (err) {
    console.log(err, "#493h0g4ubo");
    return [];
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

const h2hTeamVsTeamBattingFirst = async (team_id_a, team_id_b) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/api/match/stats/batting-first?team1Id=${team_id_a}&team2Id=${team_id_b}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "#3iu4hiohg4o3hit943");
  }
};

const h2hTeamVsTeamBowlingFirst = async (team_id_a, team_id_b) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/api/match/stats/bowling-first?team1Id=${team_id_a}&team2Id=${team_id_b}`
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
  const tvtBattingFirst = await h2hTeamVsTeamBattingFirst(teamIdA, teamIdB);
  const tvtBowlingFirst = await h2hTeamVsTeamBowlingFirst(teamIdA, teamIdB);
  const iplHeadToHeadData = await iplHeadToHead(teamIdA, teamIdB);

  const topPlayers = await fetchTopPlayers(teamIdA, teamIdB);

  // console.log(tvtHeadToHead, "uj93tfpomp09");

  return (
    <>
      <HeadNav title={matchDetails?.response?.title} prevUrl={`/`} />
      <div className={styles.mainContent}>
        <div className={`${styles.allContent} mt-2`}>
          <div className={`${styles.container1} mt-2`}>
            <DataMain
              matchStats={matchStats}
              dreamTeamStats={dreamTeamStats}
              teamPlayersA={teamPlayersA?.slice(0, 5)}
              teamPlayersB={teamPlayersB?.slice(0, 5)}
              bottom3={matchStats?.last_five_matches?.players.slice(-3)}
            />
          </div>
          <div className={styles.container3}>
            <div className={styles.card3}>
              <DreamTeamBox
                match_info={matchDetails?.response}
                currentUrl={currentPath}
              />
              <PlayerStatsBox playerPPMDI={playerPPMDI} />
            </div>
          </div>
        </div>
        <PlayerVsPlayer top_players={topPlayers} />
      </div>
    </>
  );
};

export default page;
