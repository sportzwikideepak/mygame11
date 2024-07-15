import HeadNav from "@/components/new/common/HeadNav";
import PlayerVsPlayer from "@/components/new/data-analytics/PlayerVsPlayer";
import PlLabsMain from "@/components/new/pl-labs/PlLabsMain";
import React from "react";

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;
const LOCAL_SW_API_BASE_URL = process.env.LOCAL_SW_API_BASE_URL;

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

const page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const matchDetails = await fetchMatchInfo(match_id);

  const topPlayers = await fetchTopPlayers(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  return (
    <>
      <HeadNav
        title={`${matchDetails?.response?.title} (PL Labs)`}
        prevUrl={`/`}
      />
      <PlLabsMain
        top_players={topPlayers}
        currentUrl={params["match-details"]}
      />
    </>
  );
};

export default page;
