import React from "react";
import styles from "../matchDetails.module.css";
import Header from "@/components/match-details/Header";
import Tabs from "@/components/match-details/Tabs";
import SquadsFilter from "@/components/match-details/SquadsFilter";
import SquadsTable from "@/components/match-details/SquadsTable";
import SquadsListMain from "@/components/match-details/SquadsListMain";
import HeadNav from "@/components/new/common/HeadNav";
import LiveSection from "@/components/new/overview/LiveSection";
import FantasyVideo from "@/components/new/common/FantasyVideo";
import SuggestedPlayersBox from "@/components/new/overview/SuggestedPlayersBox";
import MenuDataAnalytics from "@/components/new/data-analytics/MenuDataAnalytics";
import DreamTeamBox from "@/components/new/overview/DreamTeamBox";
import PlayerStatsBox from "@/components/new/overview/PlayerStatsBox";
import PlayerVsPlayer from "@/components/new/data-analytics/PlayerVsPlayer";
import SquadList from "@/components/new/squads/SquadList";
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

const fetchPlaying11 = async (matchId) => {
  try {
    const res = await fetch(
      `${entity_base_url_v2}/matches/${matchId}/squads?token=${entity_api_key}`,
      { next: { revalidate: 0 } }
    );
    const data = await res.json();
    return data;
  } catch (err) {}
};

const page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const data = await fetchMatchInfo(match_id);
  const playing11 = await fetchPlaying11(match_id);

  // console.log(playing11, "u49gheoguo");

  const topPlayers = await fetchTopPlayers(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );

  const playerPPMDI = await teamPlayerDtPPM(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );

  return (
    <>
      <HeadNav title={data?.response?.title} prevUrl={`/`} />
      <LiveSection
        match_info={data?.response}
        active={3}
        currentUrl={params["match-details"]}
      />
      <div className={styles.mainContent}>
        <FantasyVideo />
        <div className={styles.allContent}>
          <div className={styles.container1}>
            <SquadList playing_11={playing11} />
          </div>
          <div className={styles.container3}>
            <div className={styles.card3}>
              <DreamTeamBox
                match_info={data?.response}
                currentUrl={params["match-details"]}
              />
              <PlayerStatsBox playerPPMDI={playerPPMDI} />
              <WeatherNew weatherData={data?.response?.weather} />
            </div>
          </div>
        </div>
        <PlayerVsPlayer top_players={topPlayers} />
      </div>
    </>
  );
};

export default page;
