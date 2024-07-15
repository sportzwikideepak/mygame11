import StatsPlaygroundDataVisual from "@/components/statsPlayground/StatsPlaygroundDataVisual";
import StatsPlaygroundHead from "@/components/statsPlayground/StatsPlaygroundHead";
import React from "react";
import styles from "../../matchDetails.module.css";
import StatsPlaygroundDataMain from "@/components/statsPlayground/StatsPlaygroundDataMain";
import HeadNav from "@/components/new/common/HeadNav";
import DreamTeamNav from "@/components/new/venue-overview/dream-team/DreamTeamNav";
import PlayerStatsBox from "@/components/new/overview/PlayerStatsBox";
import PlayerVsPlayer from "@/components/new/data-analytics/PlayerVsPlayer";
const LOCAL_SW_API_BASE_URL = process.env.LOCAL_SW_API_BASE_URL;

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;

const fetchTopPlayers = async (teamIdA, teamIdB) => {
  try {
    // console.log(
    //   `${LOCAL_SW_API_BASE_URL}/new/top-players-stats/${teamIdA}/${teamIdB}`,
    //   "fhiohn4ivhgo"
    // );
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

const teamPlayerDtPPM = async (teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/new/teams/player-stats/${teamIdA}/${teamIdB}`,
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
  const res = await fetch(
    `${entity_base_url_v2}/matches/${match_id}/info?token=${entity_api_key}`
  );
  const data = await res.json();
  return data;
};

const fetchStatsPlaygroundData = async (statType, teamIdA, teamIdB) => {
  // console.log(
  //   `${LOCAL_SW_API_BASE_URL}/api/players/stats?statType=${statType}&teamId1=${teamIdA}&teamId2=${teamIdB}`
  // );
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/api/players/stats?statType=${statType}&teamId1=${teamIdA}&teamId2=${teamIdB}`,
      { next: { revalidate: 30 } }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "#489hgi4u3o9bgo");
  }
};

const page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const currentPath = params["match-details"];

  const matchInfo = await fetchMatchInfo(match_id);

  const teamIdA = matchInfo?.response?.teama?.team_id;
  const teamIdB = matchInfo?.response?.teamb?.team_id;

  const TotalFantasyPointsStats = await fetchStatsPlaygroundData(
    "TotalFantasyPoints",
    matchInfo?.response?.teama?.team_id,
    matchInfo?.response?.teamb?.team_id
  );

  // console.log(TotalFantasyPointsStats, "TotalFantasyPointsStats");

  const DreamTeamAppearancesStats = await fetchStatsPlaygroundData(
    "DreamTeamAppearances",
    matchInfo?.response?.teama?.team_id,
    matchInfo?.response?.teamb?.team_id
  );

  const WicketsTakenStats = await fetchStatsPlaygroundData(
    "WicketsTaken",
    matchInfo?.response?.teama?.team_id,
    matchInfo?.response?.teamb?.team_id
  );

  const RunsScoredStats = await fetchStatsPlaygroundData(
    "RunsScored",
    matchInfo?.response?.teama?.team_id,
    matchInfo?.response?.teamb?.team_id
  );

  const StrikeRateStats = await fetchStatsPlaygroundData(
    "StrikeRate",
    matchInfo?.response?.teama?.team_id,
    matchInfo?.response?.teamb?.team_id
  );

  const EconomyRateStats = await fetchStatsPlaygroundData(
    "EconomyRate",
    matchInfo?.response?.teama?.team_id,
    matchInfo?.response?.teamb?.team_id
  );

  const FieldingPointsStats = await fetchStatsPlaygroundData(
    "FieldingPoints",
    matchInfo?.response?.teama?.team_id,
    matchInfo?.response?.teamb?.team_id
  );

  const AverageFantasyPointsStats = await fetchStatsPlaygroundData(
    "AverageFantasyPoints",
    matchInfo?.response?.teama?.team_id,
    matchInfo?.response?.teamb?.team_id
  );

  const playerPPMDI = await teamPlayerDtPPM(
    matchInfo?.response?.teama?.team_id,
    matchInfo?.response?.teamb?.team_id
  );

  const topPlayers = await fetchTopPlayers(
    matchInfo?.response?.teama?.team_id,
    matchInfo?.response?.teamb?.team_id
  );

  // const currentPath = params["match-details"];

  return (
    <>
      <HeadNav
        title={`${matchInfo?.response?.title} (Stats-playground)`}
        prevUrl={`/`}
      />
      <div className={styles.mainContent}>
        <div className={`${styles.allContent} mt-2`}>
          <div className={`${styles.container1} mt-2`}>
            {/* <DreamTeamNav
              teamIdA={teamIdA}
              teamIdB={teamIdB}
              active={1}
              currentPath={currentPath}
            /> */}
            <StatsPlaygroundDataMain
              TotalFantasyPointsStats={TotalFantasyPointsStats}
              DreamTeamAppearancesStats={DreamTeamAppearancesStats}
              AverageFantasyPointsStats={AverageFantasyPointsStats}
              WicketsTakenStats={WicketsTakenStats}
              RunsScoredStats={RunsScoredStats}
              StrikeRateStats={StrikeRateStats}
              EconomyRateStats={EconomyRateStats}
              FieldingPointsStats={FieldingPointsStats}
            />
          </div>
          <div className={styles.container3}>
            <div className={styles.card3}>
              {/* <DreamTeamBox match_info={matchInfo?.response} /> */}
              <PlayerStatsBox playerPPMDI={playerPPMDI} />
            </div>
          </div>
        </div>
        <PlayerVsPlayer top_players={topPlayers} />
      </div>
      {/* <div className={styles.page}>
        <div style={{ paddingBottom: "70px" }} className={styles.main}>
          <StatsPlaygroundHead
            title={matchInfo?.response?.short_title}
            currentPath={currentPath}
          />
          <div className={styles.announcementcontent}>
            <div className={styles.lines} />
            <div className={styles.announcement}>
              Playing 11 is not announced
            </div>
            <div className={styles.lines} />
          </div>
          <div className={styles.infobox}>
            <p>
              Top players based in&nbsp;Total Fantasy Points&nbsp;from&nbsp;Last
              5 Matches&nbsp;played at&nbsp;All
              Venues&nbsp;when&nbsp;Considering Overall
              scenarios&nbsp;against&nbsp;Any Team
            </p>
          </div>

          <StatsPlaygroundDataMain
            TotalFantasyPointsStats={TotalFantasyPointsStats}
            DreamTeamAppearancesStats={DreamTeamAppearancesStats}
            AverageFantasyPointsStats={AverageFantasyPointsStats}
            WicketsTakenStats={WicketsTakenStats}
            RunsScoredStats={RunsScoredStats}
            StrikeRateStats={StrikeRateStats}
            EconomyRateStats={EconomyRateStats}
            FieldingPointsStats={FieldingPointsStats}
          />
        </div>
      </div> */}
    </>
  );
};

export default page;
