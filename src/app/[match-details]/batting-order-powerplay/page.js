import BattingOrderPowerPlayLower from "@/components/new/batting-order-powerplay/BattingOrderPowerPlayLower";
import BattingOrderPowerPlayMain from "@/components/new/batting-order-powerplay/BattingOrderPowerPlayMain";
import PlayerVsPlayer from "@/components/new/data-analytics/PlayerVsPlayer";
import React from "react";

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;

const local_sw_api_url = process.env.LOCAL_SW_API_BASE_URL;

const fetchBattingOrderPowerPlay = async (teamId) => {
  try {
    const res = await fetch(
      `${local_sw_api_url}/teams/${teamId}/last5matches/battingorder`
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "#493948ughinjh0g4ubo");
    return [];
  }
};

const fetchTopDeathOver = async (teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `${local_sw_api_url}/top-death-over-bowlers?team1=${teamIdA}&team2=${teamIdB}`,
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

const fetchTopPowerPlayBatters = async (teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `${local_sw_api_url}/top-powerplay-batters/?team1=${teamIdA}&team2=${teamIdB}`,
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

const fetchTopPowerPlayBowlers = async (teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `${local_sw_api_url}/top-powerplay-bowlers/?team1=${teamIdA}&team2=${teamIdB}`,
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

  const topPlayers = await fetchTopPlayers(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );

  const playerPPMDI = await teamPlayerDtPPM(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );

  const powerPlayBatters = await fetchTopPowerPlayBatters(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );

  const powerPlayBowlers = await fetchTopPowerPlayBowlers(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );

  const topDeathOver = await fetchTopDeathOver(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );

  const teamBattingOrderA = await fetchBattingOrderPowerPlay(
    data?.response?.teama?.team_id
  );

  const teamBattingOrderB = await fetchBattingOrderPowerPlay(
    data?.response?.teamb?.team_id
  );

  return (
    <>
      <div className="flex flex-col">
        <BattingOrderPowerPlayMain
          teamBattingOrderA={teamBattingOrderA}
          teamBattingOrderB={teamBattingOrderB}
        />
        <BattingOrderPowerPlayLower
          match_info={data?.response}
          topPlayers={topPlayers}
          currentUrl={params["match-details"]}
          playerPPMDI={playerPPMDI}
          powerPlayBatters={powerPlayBatters}
          powerPlayBowlers={powerPlayBowlers}
          topDeathOver={topDeathOver}
          top_players={topPlayers}
          teamBattingOrderA={teamBattingOrderA}
          teamBattingOrderB={teamBattingOrderB}
        />
      </div>
    </>
  );
};

export default page;
