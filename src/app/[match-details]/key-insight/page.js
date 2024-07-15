import HeadNav from "@/components/new/common/HeadNav";
import PlayerVsPlayer from "@/components/new/data-analytics/PlayerVsPlayer";
import PlayerStatsBox from "@/components/new/overview/PlayerStatsBox";
import ScoreCard from "@/components/new/scorecard/ScoreCard";
import DreamTeamNav from "@/components/new/venue-overview/dream-team/DreamTeamNav";
import MatchInfo from "@/components/new/venue-overview/dream-team/MatchInfo";
import React from "react";
import styles from "../matchDetails.module.css";
import KeyInsightMain from "@/components/new/key-insight/KeyInsightMain";
import WeatherNew from "@/components/new/common/WeatherNew";
const LOCAL_SW_API_BASE_URL = process.env.LOCAL_SW_API_BASE_URL;
const entity_api_key = process.env.ENTITY_TOKEN;
const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;

const fetchBattingOrder = async (teamIdA, teamIdB) => {
  try {
    // console.log(
    //   `${LOCAL_SW_API_BASE_URL}/player/batting-order?team1=${teamIdA}&team2=${teamIdB}`,
    //   "ighnoi5hg"
    // );
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/api/player/batting-order?team1=${teamIdA}&team2=${teamIdB}`
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "error occurred while fetching venue data #8h403np0vhn");
    return [];
  }
};

const getTopPlayers = async (venue_id, teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/top-players/venue/${venue_id}/teams/${teamIdA}/${teamIdB}`,
      {
        next: { revalidate: 300 },
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "error occurred while fetching venue data #8h403np0vhn");
    return [];
  }
};

const fetchTossTrends = async (venue_id) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/venue/${venue_id}/stats`,
      {
        next: { revalidate: 300 },
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "error occurred while fetching venue data #8h403np0vhn");
    return [];
  }
};

const fetchVenueDetails = async (venue_id) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/stats/venue/${venue_id}`,
      {
        next: { revalidate: 300 },
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "error occurred while fetching venue data #8h403np0vhn");
    return [];
  }
};

const fetchTopPowerPlayBatter = async (teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/top-powerplay-batters?team1=${teamIdA}&team2=${teamIdB}`
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "#94ghnoen ogbh4ob");
    return [];
  }
};

const fetchTopPowerPlayBowler = async (teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/top-powerplay-bowlers?team1=${teamIdA}&team2=${teamIdB}`
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "#94ghnoen ogbh4ob");
    return [];
  }
};

const fetchPlayerXFactor = async (teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/x-factor-players?team1=${teamIdA}&team2=${teamIdB}`
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "#94ghnoen ogbh4ob");
    return [];
  }
};

const fetchTeamWinningChances = async (teamIdA, teamIdB) => {
  try {
    // console.log(
    //   `${LOCAL_SW_API_BASE_URL}/teams/win-percentage/${teamIdA}/${teamIdB}`,
    //   "igjoighihng"
    // );
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/new/teams/win-percentage/${teamIdA}/${teamIdB}`,
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

  const winningChances = await fetchTeamWinningChances(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  const topPowerPlayBatter = await fetchTopPowerPlayBatter(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  const topPowerPlayBowler = await fetchTopPowerPlayBowler(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  const topPlayerXFactor = await fetchPlayerXFactor(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  const venue_id = matchDetails?.response?.venue?.venue_id;
  const venueData = await fetchVenueDetails(venue_id);
  const venueTrends = await fetchTossTrends(venue_id);

  const battingOrder = await fetchBattingOrder(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  // console.log(battingOrder, "battingOrderig4hioh4ghigo");

  const venueTopPlayers = await getTopPlayers(
    venue_id,
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  // console.log(venueTopPlayers, "venueData4eoji4egoij");

  // console.log(
  //   topPowerPlayBatter,
  //   "78igt",
  //   topPowerPlayBowler,
  //   "yfiyfikf",
  //   topPlayerXFactor,
  //   "yfiifyyfr8",
  //   "iogrjv5oi5gpo9"
  // );

  return (
    <>
      <HeadNav title={matchDetails?.response?.title} prevUrl={`/`} />
      <div className={styles.mainContent}>
        {/* <MatchInfo info={matchDetails?.response} /> */}
        <div className={`${styles.allContent} mt-2`}>
          <div className={`${styles.container1} mt-2`}>
            {/* <DreamTeamNav
              teamIdA={teamIdA}
              teamIdB={teamIdB}
              active={1}
              currentPath={currentPath}
            />
            <ScoreCard scorecardData={scorecard} /> */}
            <KeyInsightMain
              topPowerPlayBatter={topPowerPlayBatter}
              topPowerPlayBowler={topPowerPlayBowler}
              topPlayerXFactor={topPlayerXFactor}
              venueData={venueData}
              venueTrends={venueTrends}
              venueTopPlayers={venueTopPlayers}
              battingOrder={battingOrder}
            />
          </div>
          <div className={styles.container3}>
            <div className={styles.card3}>
              {/* <DreamTeamBox match_info={matchDetails?.response} /> */}
              <PlayerStatsBox playerPPMDI={playerPPMDI} />
              <WeatherNew weatherData={matchDetails?.response?.weather} />
            </div>
          </div>
        </div>
        <PlayerVsPlayer top_players={topPlayers} />
      </div>
    </>
  );
};

export default page;
