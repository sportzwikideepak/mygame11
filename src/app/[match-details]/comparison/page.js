import React from "react";
import styles from "../matchDetails.module.css";
import HeadNav from "@/components/new/common/HeadNav";
import LiveSection from "@/components/new/overview/LiveSection";
import FantasyVideo from "@/components/new/common/FantasyVideo";
// import SquadList from "@/components/new/squads/SquadList";
import DreamTeamBox from "@/components/new/overview/DreamTeamBox";
import PlayerStatsBox from "@/components/new/overview/PlayerStatsBox";
import ComparisonMain from "@/components/new/comparison/ComparisonMain";
import WeatherNew from "@/components/new/common/WeatherNew";
const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;
const local_sw_api_url = process.env.LOCAL_SW_API_BASE_URL;

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

const fetchPlayersList = async (match_id) => {
  try {
    const res = await fetch(
      `${entity_base_url_v2}/matches/${match_id}/squads?token=${entity_api_key}`,
      { next: { revalidate: 300 } }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "error fetching players list #984hg0h0g");
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
    console.log(err, "error fetching match details #984hgoi40h0g");
    return [];
  }
};

const page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const currentUrl = params["match-details"];

  const data = await fetchMatchInfo(match_id);
  const playersList = await fetchPlayersList(match_id);

  const playerPPMDI = await teamPlayerDtPPM(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );

  // console.log(playersList, "playersListplayersList");

  return (
    <>
      <HeadNav title={data?.response?.title} prevUrl={`/`} />
      <LiveSection
        match_info={data?.response}
        active={4}
        currentUrl={params["match-details"]}
      />
      <div className={styles.mainContent}>
        <FantasyVideo />
        <div className={styles.allContent}>
          <div className={styles.container1}>
            {/* <SquadList playing_11={playing11} /> */}
            <ComparisonMain player_list={playersList} data={data?.response} />
          </div>
          <div className={styles.container3}>
            <div className={styles.card3}>
              <DreamTeamBox
                match_info={data?.response}
                currentUrl={currentUrl}
              />
              <PlayerStatsBox playerPPMDI={playerPPMDI} />
              <WeatherNew weatherData={data?.response?.weather} />
            </div>
          </div>
        </div>

        {/* <PlayerVsPlayer top_players={topPlayers} /> */}
      </div>
      {/* Old code */}
      {/* <ComparisonPageMain
        playersListC={playersList?.response}
        playersList={playersList?.response?.players}
        teamA={playersList?.response?.teama?.squads}
        teamB={playersList?.response?.teamb?.squads}
        teamAName={playersList?.response?.teams?.[0]?.abbr}
        teamBName={playersList?.response?.teams?.[1]?.abbr}
        short_title={data?.response?.short_title}
        status={data?.response?.status}
        currentPage={params["match-details"]}
        active={3}
      /> */}
    </>
  );
};

export default page;
