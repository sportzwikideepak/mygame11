import HeadNav from "@/components/new/common/HeadNav";
import PlayerVsPlayer from "@/components/new/data-analytics/PlayerVsPlayer";
import PlayerStatsBox from "@/components/new/overview/PlayerStatsBox";
import DreamTeamNav from "@/components/new/venue-overview/dream-team/DreamTeamNav";
import MatchInfo from "@/components/new/venue-overview/dream-team/MatchInfo";
import React from "react";
import styles from "../../../matchDetails.module.css";
import ScoreCard from "@/components/new/venue-overview/dream-team/ScoreCard";

const LOCAL_SW_API_BASE_URL = process.env.LOCAL_SW_API_BASE_URL;
const entity_api_key = process.env.ENTITY_TOKEN;
const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;

const fetchMatchScoreCard = async (match_id) => {
  //   console.log(
  //     `${entity_base_url_v2}/matches/${match_id}/scorecard?token=${entity_api_key}`,
  //     "3hfnouf3ol3fbgi"
  //   );
  try {
    const res = await fetch(
      `${entity_base_url_v2}/matches/${match_id}/scorecard?token=${entity_api_key}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "#hfib0pv40pi");
    return [];
  }
};

const fetchFantasyOverview = async (venue_id, team_id) => {
  try {
    // console.log(
    //   `${LOCAL_SW_API_BASE_URL}/venue/${venue_id}/team/${team_id}/match-details`,
    //   "hoi4hnolh"
    // );
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/venue/${venue_id}/team/${team_id}/match-details`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("#8943ythg40h034");
    return [];
  }
};

const fetchTopPlayers = async (teamIdA, teamIdB) => {
  try {
    // console.log(
    //   `${LOCAL_SW_API_BASE_URL}/new/top-players-stats/${teamIdA}/${teamIdB}`,
    //   "fhiohn4ivhgo"
    // );
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/new/top-players-stats/${teamIdA}/${teamIdB}`,
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

const teamPlayerDtPPM = async (teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/new/teams/player-stats/${teamIdA}/${teamIdB}`,
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

const fetchMatchDetails = async (match_id) => {
  const res = await fetch(
    `${entity_base_url_v2}/matches/${match_id}/info?token=${entity_api_key}`,
    { next: { revalidate: 3000 } }
  );

  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  // console.log(match_id, "match_id");

  const currentPath = params["match-details"];

  const matchDetails = await fetchMatchDetails(match_id);

  const teamIdA = matchDetails?.response?.teama?.team_id;
  const teamIdB = matchDetails?.response?.teamb?.team_id;

  const playerPPMDI = await teamPlayerDtPPM(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  const topPlayers = await fetchTopPlayers(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  const FantasyOverview = await fetchFantasyOverview(
    matchDetails?.response?.venue?.venue_id,
    matchDetails?.response?.teama?.team_id
  );

  const scorecard = await fetchMatchScoreCard(match_id);

  return (
    <>
      <HeadNav title={matchDetails?.response?.title} prevUrl={`/`} />
      <div className={styles.mainContent}>
        <MatchInfo info={matchDetails?.response} />
        <div className={`${styles.allContent} mt-2`}>
          <div className={`${styles.container1} mt-2`}>
            <DreamTeamNav
              teamIdA={teamIdA}
              teamIdB={teamIdB}
              active={1}
              currentPath={currentPath}
            />
            <ScoreCard scorecardData={scorecard} />
          </div>
          <div className={styles.container3}>
            <div className={styles.card3}>
              {/* <DreamTeamBox match_info={matchDetails?.response} /> */}
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
