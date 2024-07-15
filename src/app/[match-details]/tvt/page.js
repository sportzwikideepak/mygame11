import React from "react";
import TvtMain from "@/components/tvt/TvtMain";
import TvtMainBeforeMatch from "@/components/tvt/TvtMainBeforeMatch";
const entity_api_key = process.env.ENTITY_TOKEN;
const entity_url_v2 = process.env.ENTITY_BASE_URL_V2;

const fetchData = async (match_id) => {
  const res = await fetch(
    `${entity_url_v2}/matches/${match_id}/newpoint2?token=${entity_api_key}`,
    { next: { revalidate: 3000 } }
  );

  const data = await res.json();
  return data;
};

const fetchPlaying11 = async (match_id) => {
  try {
    const res = await fetch(
      `${entity_url_v2}/matches/${match_id}/squads?token=${entity_api_key}`,
      { next: { revalidate: 10 } }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("error fetching playing 11", err);
    return [];
  }
};

const fetchPlayerStaticsById = async (player_id) => {
  try {
    const res = await fetch(
      `${entity_url_v2}/players/${player_id}/stats?token=${entity_api_key}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "player statics fetch failed");
    return null; // Return null for error handling
  }
};

const enrichedPlaying11WithStats = async (match_id) => {
  const playing11Response = await fetchPlaying11(match_id);

  // Assuming squads is an array of player objects as shown in your individual player object structure
  const enrichSquadWithStats = async (squads) => {
    return await Promise.all(
      squads.map(async (player) => {
        // if (player.playing11 === "true") {
        // Check if the player is in the playing 11
        const playerStats = await fetchPlayerStaticsById(player?.player_id);
        return { ...player, playerStats }; // Merge player stats into player object
        // } else {
        // return player; // Return player object as is if not in playing 11
        // }
      })
    );
  };

  // Enrich teama and teamb squads
  const enrichedTeamaSquads = await enrichSquadWithStats(
    playing11Response.response.teama.squads
  );
  const enrichedTeambSquads = await enrichSquadWithStats(
    playing11Response.response.teamb.squads
  );

  // Return enriched playing 11 data
  return {
    teama: { ...playing11Response.response.teama, squads: enrichedTeamaSquads },
    teamb: { ...playing11Response.response.teamb, squads: enrichedTeambSquads },
  };
};

const page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const data = await fetchData(match_id);
  const playing11 = await enrichedPlaying11WithStats(match_id);

  return (
    <>
      {data?.response?.points?.teama ? (
        <TvtMain
          data={data}
          nameTeamA={data?.response?.teama?.short_name}
          nameTeamB={data?.response?.teamb?.short_name}
          matchStarts={data?.response?.competition?.datestart}
        />
      ) : (
        <TvtMainBeforeMatch
          nameTeamA={data?.response?.teama?.short_name}
          nameTeamB={data?.response?.teamb?.short_name}
          matchStarts={data?.response?.competition?.datestart}
          playing11={playing11}
        />
      )}
    </>
  );
};

export default page;
