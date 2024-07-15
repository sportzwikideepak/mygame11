import React from "react";
import TeamLineUpMain from "@/components/custom-team/TeamLineUpMain";

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;

const fetchPlaying11 = async (matchId) => {
  try {
    const res = await fetch(
      `${entity_base_url_v2}/matches/${matchId}/squads?token=${entity_api_key}`
    );
    if (!res.ok) {
      throw new Error(`Error fetching playing 11: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const fetchPlaying11Main = async (matchId) => {
  try {
    const res = await fetch(
      `${entity_base_url_v2}/matches/${matchId}/newpoint2?token=${entity_api_key}`
    );
    if (!res.ok) {
      throw new Error(`Error fetching playing 11 main: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const fetchMatchInfo = async (matchId) => {
  try {
    const response = await fetch(
      `${entity_base_url_v2}/matches/${matchId}/info?token=${entity_api_key}`,
      { next: { revalidate: 30 } }
    );
    if (!response.ok) {
      throw new Error(`Error fetching match info: ${response.statusText}`);
    }
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const fetchPlayerStats = async (playerId) => {
  try {
    const response = await fetch(
      `${entity_base_url_v2}/players/${playerId}/stats?token=${entity_api_key}`,
      { next: { revalidate: 30 } }
    );
    if (!response.ok) {
      throw new Error(`Error fetching player stats: ${response.statusText}`);
    }
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getTeamNamesFromMatchInfo = (matchInfo) => {
  const teams = {};
  if (matchInfo && matchInfo.teama && matchInfo.teamb) {
    teams[matchInfo.teama.team_id] = matchInfo.teama.name;
    teams[matchInfo.teamb.team_id] = matchInfo.teamb.name;
  }
  return teams;
};

const page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  try {
    const matchInfo = await fetchMatchInfo(match_id);
    if (!matchInfo) {
      return <div>Error loading match info</div>;
    }

    const playing11 = await fetchPlaying11(match_id);
    if (!playing11) {
      return <div>Error loading playing 11</div>;
    }

    // console.log(playing11Enhanced, "playing11Enhancedplaying11Enhanced");

    const playing11Main = await fetchPlaying11Main(match_id);
    if (!playing11Main) {
      return <div>Error loading playing 11 main</div>;
    }

    const allPlayers = [
      ...playing11?.response?.teama?.squads,
      ...playing11?.response?.teamb?.squads,
    ];

    const statsPromises = allPlayers.map((player) =>
      fetchPlayerStats(player.player_id)
    );

    const stats = await Promise.all(statsPromises);
    if (stats.includes(null)) {
      return <div>Error loading player stats</div>;
    }

    const playing11Enhanced = [
      ...playing11?.response?.teama?.squads.map((player) => ({
        ...player,
        team_id: matchInfo.teama.team_id,
      })),
      ...playing11?.response?.teamb?.squads.map((player) => ({
        ...player,
        team_id: matchInfo.teamb.team_id,
      })),
    ];

    // console.log(
    //   playing11Main?.response?.points?.teama?.playing11,
    //   "playing11Mainplaying11Main"
    // );

    let playing11MainEnhanced = [];

    // console.log(
    //   playing11Main?.response?.points?.teama?.playing11?.length,
    //   "3ihorn"
    // );

    if (
      playing11Main?.response?.points?.teama?.playing11?.length &&
      playing11Main?.response?.points?.teamb?.playing11?.length
    ) {
      playing11MainEnhanced = [
        ...playing11Main?.response?.points?.teama?.playing11?.map((player) => ({
          ...player,
          team_id: matchInfo.teama.team_id,
        })),
        ...playing11Main?.response?.points?.teamb?.playing11?.map((player) => ({
          ...player,
          team_id: matchInfo.teamb.team_id,
        })),
      ];
    }
    const teamNames = getTeamNamesFromMatchInfo(matchInfo);

    // console.log(playing11MainEnhanced, "8ih4go39ij");

    return (
      <>
        <TeamLineUpMain
          playing11={playing11Enhanced}
          playing11Main={playing11MainEnhanced}
          teamNames={teamNames}
          stats={stats}
        />
      </>
    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
};

export default page;
