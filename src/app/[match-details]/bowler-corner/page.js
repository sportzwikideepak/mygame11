// "use client";
import BowlerCornerMain from "@/components/new/bowler-corner/BowlerCornerMain";
import HeadNav from "@/components/new/common/HeadNav";
import React from "react";

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;
const LOCAL_SW_API_BASE_URL = process.env.LOCAL_SW_API_BASE_URL;

const fetchLastMatchBowlerStats = async (teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `https://hammerhead-app-jkdit.ondigitalocean.app/bowler-stats-last-match?team1=${teamIdA}&team2=${teamIdB}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const fetchLast5MatchesBowlerStats = async (teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `https://hammerhead-app-jkdit.ondigitalocean.app/bowler-stats-last-5-matches?team1=${teamIdA}&team2=${teamIdB}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const fetchOverallBowlerStats = async (teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `https://hammerhead-app-jkdit.ondigitalocean.app/bowler-stats-overall?team1=${teamIdA}&team2=${teamIdB}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const fetchTopPlayers = async (teamIdA, teamIdB) => {
  try {
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

const Page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const matchDetails = await fetchMatchInfo(match_id);

  const topPlayers = await fetchTopPlayers(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  const lastMatchPlayerStats = await fetchLastMatchBowlerStats(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );
  const fiveMatchPlayerStats = await fetchLast5MatchesBowlerStats(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  const overallPlayersStats = await fetchOverallBowlerStats(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  return (
    <>
      <HeadNav
        title={`${matchDetails?.response?.title} (Bowler Corner)`}
        prevUrl={`/`}
      />
      <BowlerCornerMain
        data={matchDetails}
        top_players={topPlayers}
        lastMatchPlayerStats={lastMatchPlayerStats}
        fiveMatchPlayerStats={fiveMatchPlayerStats}
        overallPlayersStats={overallPlayersStats}
      />
    </>
  );
};

export default Page;
