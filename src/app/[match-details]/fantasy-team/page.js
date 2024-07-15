import React from "react";
import styles from "./fantasyTeam.module.css";
import FantasyTeamMain from "@/components/fantasyTeam/FantasyTeamMain";
import FantasyPast from "@/components/fantasyTeam/FantasyPast";

const api_v2_entity = process.env.ENTITY_BASE_URL_V2;
const api_v2_token = process.env.ENTITY_TOKEN;

const fetchPlayerInfo = async (player_id) => {
  const res = await fetch(
    `${api_v2_entity}/players/${player_id}?token=${api_v2_token}`,
    { next: { revalidate: 0 } }
  );
  const data = await res.json();
  return data;
};

const fetchLastMatchesPoints = async (matchId) => {
  const res = await fetch(
    `https://hammerhead-app-jkdit.ondigitalocean.app/match/${matchId}/last-match-stats`,
    { next: { revalidate: 0 } }
  );
  const data = await res.json();
  return data;
};

async function enrichAppearanceTeam(matchId) {
  let appearanceRating = await fetchLastMatchesPoints(matchId);

  if (!appearanceRating || appearanceRating.length === 0) {
    console.log("No player data found");
    return;
  }

  const playerInfoPromises = appearanceRating.map(async (player) => {
    // Fetch basic player info
    const playerInfo = await fetchPlayerInfo(player.playerId);

    // Fetch additional data from the new API
    const response = await fetch(
      `https://hammerhead-app-jkdit.ondigitalocean.app/mydb/dream-team/player/${player.playerId}`
    );
    const additionalPlayerData = await response.json();

    // Combine the existing player data with the new data
    return { ...player, playerInfo, additionalPlayerData };
  });

  const enrichedAppearanceRating = await Promise.all(playerInfoPromises);

  return enrichedAppearanceRating;
}

const fetchFantasyTeam = async (match_id) => {
  const res = await fetch(
    `https://hammerhead-app-jkdit.ondigitalocean.app/fetchDreamTeam?matchId=${match_id}`,
    { next: { revalidate: 0 } }
  );

  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const fantasyTeam = await fetchFantasyTeam(match_id);

  const appearanceData = await enrichAppearanceTeam(match_id);

  console.log(appearanceData, "4g08ib3-9i");

  return (
    <>
      {fantasyTeam?.dreamTeam?.length ? (
        <FantasyTeamMain fantasyTeam={fantasyTeam} />
      ) : (
        <FantasyPast appearanceData={appearanceData} />
      )}
    </>
  );
};

export default page;
