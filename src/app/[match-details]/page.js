import MatchDetailsBody from "@/components/MatchDetailsBody";
import MatchDetailsHead from "@/components/MatchDetailsHead";
import React from "react";
import styles from "./matchDetails.module.css";
import Image from "next/image";
import Header from "@/components/match-details/Header";
import Tabs from "@/components/match-details/Tabs";
import Poll from "@/components/match-details/Poll";
import MatchDetails from "@/components/match-details/MatchDetails";
import PerfTable from "@/components/match-details/PerfTable";
import CandVc from "@/components/match-details/CandVc";
import Weather from "@/components/match-details/Weather";
import PlayerComparison from "@/components/match-details/PlayerComparison";
import HeadNav from "@/components/new/common/HeadNav";
import LiveSection from "@/components/new/overview/LiveSection";
import MainSectionOverview from "@/components/new/common/MainSectionOverview";
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

  const previousMatches1 = await fetchPreviousTeamMatches(
    data?.response?.teama?.team_id
  );

  const previousMatches2 = await fetchPreviousTeamMatches(
    data?.response?.teamb?.team_id
  );

  const topPlayers = await fetchTopPlayers(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );

  const topCapndVc =
    topPlayers
      ?.sort((a, b) => b?.total_fantasy_points - a?.total_fantasy_points)
      .slice(0, 4) || [];

  const winningChances = await fetchTeamWinningChances(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );

  const playerPPMDI = await teamPlayerDtPPM(
    data?.response?.teama?.team_id,
    data?.response?.teamb?.team_id
  );

  // console.log(playerPPMDI, "hc3nochi9foh3go9lgh");

  return (
    <>
      <HeadNav title={data?.response?.title} prevUrl={`/`} />

      <LiveSection
        match_info={data?.response}
        active={0}
        currentUrl={params["match-details"]}
      />

      <MainSectionOverview
        match_info={data?.response}
        topPlayers={topPlayers}
        currentUrl={params["match-details"]}
        winning_chances={winningChances}
        playerPPMDI={playerPPMDI}
      />
      {/* Old 1 */}
      {/* <div style={{ marginBottom: "70px" }} className={`${styles.page}`}>
        <div className={`${styles.main}`}>
          <div className={`${styles.headall}`}>
            <Header
              short_title={data?.response?.title}
              status={data?.response?.status}
            />
            <Tabs currentPage={params["match-details"]} active={0} />
          </div>
          <Poll
            team_a_name={data?.response?.teama?.name}
            team_b_name={data?.response?.teamb?.name}
            team_a_id={data?.response?.teama?.team_id}
            team_b_id={data?.response?.teamb?.team_id}
          />
          <MatchDetails
            series={data?.response?.competition?.title}
            format={data?.response?.competition?.match_format}
            match_no={data?.response?.match_number}
            venue={`${data?.response?.venue?.name}, ${data?.response?.venue?.location}, ${data?.response?.venue?.country}`}
          />
          <div className={`${styles.performancecontainer}`}>
            <PerfTable
              team_a_id={data?.response?.teama?.team_id}
              team_b_id={data?.response?.teamb?.team_id}
              team_a_name={data?.response?.teama?.name}
              team_b_name={data?.response?.teamb?.name}
              team_a_logo={data?.response?.teama?.logo_url}
              team_b_logo={data?.response?.teamb?.logo_url}
              team_a_previous_matches={previousMatches1}
              team_b_previous_matches={previousMatches2}
            />
            {topCapndVc?.length > 0 && <CandVc topCapndVc={topCapndVc} />}
            <Weather
              weather={data?.response?.weather?.weather}
              weather_desc={data?.response?.weather?.weather_desc}
              temp={data?.response?.weather?.temp}
              humidity={data?.response?.weather?.humidity}
              visibility={data?.response?.weather?.visibility}
              wind_speed={data?.response?.weather?.wind_speed}
              clouds={data?.response?.weather?.clouds}
            />
            {topPlayers?.length > 0 && (
              <PlayerComparison
                currentPath={params["match-details"]}
                topPlayers={topPlayers}
              />
            )}
          </div>
        </div>
      </div> */}
      {/* Old 2 */}
      {/* <MatchDetailsHead
        match_id={match_id}
        match_url={params["match-details"]}
      />

      <p className="font-semibold text-center mt-4">Match Report</p>
      <MatchDetailsBody match_url={params["match-details"]} /> */}
    </>
  );
};

export default page;
