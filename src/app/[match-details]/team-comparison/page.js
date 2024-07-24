import React from "react";
import styles from "../matchDetails.module.css";
import HeadNav from "@/components/new/common/HeadNav";
import LiveSection from "@/components/new/overview/LiveSection";
import ScoreCard from "@/components/new/scorecard/ScoreCard";
import DreamTeamBox from "@/components/new/overview/DreamTeamBox";
import PlayerStatsBox from "@/components/new/overview/PlayerStatsBox";
import SuggestedPlayersBox from "@/components/new/overview/SuggestedPlayersBox";
import MatchDetailsBox from "@/components/new/common/MatchDetailsBox";
import TeamComparisonBox from "@/components/new/overview/TeamComparisonBox";
import PlayerVsPlayer from "@/components/new/data-analytics/PlayerVsPlayer";
import TeamComparisonMain from "@/components/new/team-comparison/TeamComparisonMain";

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;

const local_sw_api_url = process.env.LOCAL_SW_API_BASE_URL;

const fetchMatchStats = async (teamAId, teamBId) => {
  const res = await fetch(
    `${local_sw_api_url}/api/match/stats?team1Id=${teamAId}&team2Id=${teamBId}`
  );

  const data = await res.json();

  return data;
};

const h2hTeamVsTeamBattingFirst = async (team_id_a, team_id_b) => {
  try {
    const res = await fetch(
      `${local_sw_api_url}/api/match/stats/batting-first?team1Id=${team_id_a}&team2Id=${team_id_b}`
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
      `${local_sw_api_url}/api/match/stats/bowling-first?team1Id=${team_id_a}&team2Id=${team_id_b}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "#3iu4hiohg4o3hit943");
  }
};

const fetchTeamRecentMatches = async (series_id) => {
  console
    .log
    // `${entity_base_url_v2}/competitions/${series_id}/matches?token=${entity_api_key}&status=2`
    ();
  const res = await fetch(
    `${entity_base_url_v2}/competitions/${series_id}/matches?token=${entity_api_key}`
  );

  const data = await res.json();

  return data;
};

const fetchTeamHeadToHead = async (teamIdA, teamIdB) => {
  const res = await fetch(
    `${local_sw_api_url}/head-to-head/${teamIdA}/${teamIdB}`
  );

  const data = await res.json();

  return data;
};

const teamPlayerDtPPM = async (teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `${local_sw_api_url}/new/teams/player-stats/${teamIdA}/${teamIdB}`,
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

const fetchTeamWinningChances = async (teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `${local_sw_api_url}/new/teams/win-percentage/${teamIdA}/${teamIdB}`,
      {
        next: { revalidate: 300 },
      }
    );
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    return [];
  } catch (err) {
    console.log(err, "#493h0g4ubo");
  }
};

const fetchTopPlayers = async (teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `${local_sw_api_url}/new/top-players-stats/${teamIdA}/${teamIdB}`,
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

const fetchPreviousTeamMatches = async (matchId) => {
  try {
    const res = await fetch(`${local_sw_api_url}/team-matches/${matchId}`, {
      next: { revalidate: 300 },
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    return [];
  } catch (err) {
    console.log(err, "Error fetching previous matches #9rg2fbo9g");
  }
};

const fetchMatchInfo = async (match_id) => {
  try {
    const res = await fetch(
      `${entity_base_url_v2}/matches/${match_id}/info?token=${entity_api_key}`,
      { next: { revalidate: 10 } }
    );
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const data = await fetchMatchInfo(match_id);

  const recentMatches = await fetchTeamRecentMatches(
    data?.response?.competition?.cid
  );

  const matchStats = await fetchMatchStats(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );

  const tvtBattingFirst = await h2hTeamVsTeamBattingFirst(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );

  const tvtBowlingFirst = await h2hTeamVsTeamBowlingFirst(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );
  // console.log(recentMatches?.response, "3ihronbfigu");

  const headToHeadData = await fetchTeamHeadToHead(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );

  const previousMatches1 = await fetchPreviousTeamMatches(
    data?.response?.teama?.team_id
  );

  const previousMatches2 = await fetchPreviousTeamMatches(
    data?.response?.teamb?.team_id
  );

  const topPlayers = await fetchTopPlayers(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );

  const topCapndVc =
    topPlayers
      ?.sort((a, b) => b?.total_fantasy_points - a?.total_fantasy_points)
      .slice(0, 4) || [];

  const winningChances = await fetchTeamWinningChances(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );

  const playerPPMDI = await teamPlayerDtPPM(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );

  return (
    <>
      <HeadNav title={data?.response?.title} prevUrl={`/`} />
      <div className={styles.mainContent}>
        <div className={styles.allContent}>
          <div className={styles.container1}>
            <TeamComparisonMain
              match_info={data?.response}
              winning_chances={winningChances}
              headToHeadData={headToHeadData}
              recentMatches={recentMatches}
              matchStats={matchStats}
              tvtBattingFirst={tvtBattingFirst}
              tvtBowlingFirst={tvtBowlingFirst}
            />
          </div>
          <div className={styles.container3}>
            {/* .........Right Side Content......... */}
            <div className={styles.card3}>
              <DreamTeamBox
                match_info={data?.response}
                currentUrl={params["match-details"]}
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
