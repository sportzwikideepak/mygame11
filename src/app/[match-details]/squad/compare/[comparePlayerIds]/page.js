import React from "react";
import CompareTwoMain from "@/components/player/CompareTwoMain";
import combineCricketStats from "@/utils/combineStatsBat";
import combineBowlingStats from "@/utils/combineStatsBall";
const entity_api_key = process.env.ENTITY_TOKEN;
const entity_url_v2 = process.env.ENTITY_BASE_URL_V2;

const fetchAdvancedStats = async (player1, player2) => {
  const fetchData = async (player_id) => {
    const res = await fetch(
      `https://rest.entitysport.com/v4/players/${player_id}/advancestats/?token=${entity_api_key}`
    );
    const data = await res.json();
    return data;
  };

  const [data1, data2] = await Promise.all([
    fetchData(player1),
    fetchData(player2),
  ]);

  return { data1, data2 };
};

const fetchMatchInfo = async (match_id) => {
  const res = await fetch(
    `${entity_url_v2}/matches/${match_id}/info?token=${entity_api_key}`
  );

  const data = await res.json();
  return data;
};

const fetchPlayerVsPlayer = async (player1, player2) => {
  const fetchPlayer = async (playerId) => {
    const response = await fetch(
      `${entity_url_v2}/players/${playerId}/stats?token=${entity_api_key}`
    );
    return response.json();
  };

  const [data1, data2] = await Promise.all([
    fetchPlayer(player1),
    fetchPlayer(player2),
  ]);

  return { data1, data2 };
};

const page = async ({ params }) => {
  const [player1, player2] = params?.comparePlayerIds?.split("-");

  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const data = await fetchPlayerVsPlayer(player1, player2);
  const player1Batting = combineCricketStats(data?.data1?.response);
  const player2Batting = combineCricketStats(data?.data2?.response);

  const player1Ball = combineBowlingStats(data?.data1?.response?.bowling);
  const player2Ball = combineBowlingStats(data?.data2?.response?.bowling);

  const advPlayerData = await fetchAdvancedStats(player1, player2);

  return (
    <>
      <CompareTwoMain
        player1data={data?.data1?.response}
        player2data={data?.data2?.response}
        player1Batting={player1Batting}
        player2Batting={player2Batting}
        player1Ball={player1Ball}
        player2Ball={player2Ball}
        // nameTeamA={nameTeamA}
        // nameTeamB={nameTeamB}
        player1vsTeam={advPlayerData?.data1?.response?.player_vs_team}
        player2vsTeam={advPlayerData?.data2?.response?.player_vs_team}
      />
    </>
  );
};

export default page;
