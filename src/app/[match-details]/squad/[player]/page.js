import React from "react";
import PlayerMain from "@/components/player/playerInfo/PlayerMain";

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;

const matchInfo = async (matchId) => {
  const res = await fetch(
    `${entity_base_url_v2}/matches/${matchId}/info?token=${entity_api_key}`
  );

  const data = await res.json();
  return data;
};

const playerInfo = async (playerId) => {
  const res = await fetch(
    `${entity_base_url_v2}/players/${playerId}/stats?token=${entity_api_key}`,
    { next: { revalidate: 10 } }
  );

  const data = await res.json();
  return data;
};

const fetchPlayerLastMatch = async (playerId) => {
  const res = await fetch(
    `https://rest.entitysport.com/v4/players/${playerId}/advancestats/?token=${entity_api_key}`,
    { next: { revalidate: 3000 } }
  );
  const lastMatchData = await res.json();
  return lastMatchData;
};

const page = async ({ params }) => {
  const match_id = params["match-details"]?.split("-")?.pop();

  const player_id = params?.player;

  const data = await playerInfo(player_id);
  const lastMatchesData = await fetchPlayerLastMatch(player_id);

  const match_Info = await matchInfo(match_id);

  return (
    <>
      <PlayerMain
        data={data}
        lastMatchesData={lastMatchesData?.response?.last10_matches}
        player_vs_team={lastMatchesData?.response?.player_vs_team}
        matchInfo={match_Info}
        team_a_id={match_Info?.response?.teama?.team_id}
        team_b_id={match_Info?.response?.teamb?.team_id}
      />
    </>
  );
};

export default page;
