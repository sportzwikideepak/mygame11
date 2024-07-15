import React from "react";
import styles from "../matchDetails.module.css";
import Image from "next/image";
import CheatHead from "@/components/cheat-sheet/CheatHead";
import CheatNav from "@/components/cheat-sheet/CheatNav";
import CheatDataVisual from "@/components/cheat-sheet/CheatDataVisual";
import HeadNav from "@/components/new/common/HeadNav";
import SuggestedPlayersBox from "@/components/new/overview/SuggestedPlayersBox";
import DreamTeamBox from "@/components/new/overview/DreamTeamBox";
import PlayerStatsBox from "@/components/new/overview/PlayerStatsBox";
import PlayerVsPlayer from "@/components/new/data-analytics/PlayerVsPlayer";
import DataMain from "@/components/new/cheat-sheet/DataMain";
const LOCAL_SW_API_BASE_URL = process.env.LOCAL_SW_API_BASE_URL;
const entity_api_key = process.env.ENTITY_TOKEN;
const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;

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

const fetchTopPlayers = async (teamIdA, teamIdB) => {
  try {
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

const fetchDreamTeamStats = async (teamA, teamB) => {
  // console.log(
  //   `${LOCAL_SW_API_BASE_URL}/dream-team-stats/${teamA}/${teamB}`,
  //   "i4ghnikgnhoi"
  // );
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/dream-team-stats/${teamA}/${teamB}`,
      { next: { revalidate: 10 } }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "#78ghrfeuoe894");
    return [];
  }
};

const fetchMatchStats = async (teamA, teamB) => {
  // console.log(`${LOCAL_SW_API_BASE_URL}/match-stats/teams/${teamA}/${teamB}`);

  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/match-stats/teams/${teamA}/${teamB}`,
      { next: { revalidate: 10 } }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "#78ghrfeuoe894");
    return [];
  }
};

const fetchMatchDetails = async (match_id) => {
  const res = await fetch(
    `${entity_base_url_v2}/matches/${match_id}/info?token=${entity_api_key}`,
    { next: { revalidate: 3000 } }
  );

  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const currentPath = params["match-details"];

  const matchDetails = await fetchMatchDetails(match_id);

  const matchStats = await fetchMatchStats(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  const dreamTeamStats = await fetchDreamTeamStats(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  // console.log(matchStats, "i5mg4iovj5rg");

  const teams = Array.from(
    new Set(
      matchStats?.last_five_matches?.players.map((player) => player?.team_name)
    )
  );

  let teamPlayersA;
  let teamPlayersB;

  if (teams?.length >= 2) {
    teamPlayersA = matchStats?.last_five_matches?.players?.filter((player) => {
      return player?.team_name === teams[0];
    });

    teamPlayersB = matchStats?.last_five_matches?.players?.filter((player) => {
      return player?.team_name === teams[1];
    });
  }

  // console.log(teamPlayersB, "4ihn4oienhi4egn");

  const topPlayers = await fetchTopPlayers(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  const playerPPMDI = await teamPlayerDtPPM(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  return (
    <>
      <HeadNav title={matchDetails?.response?.title} prevUrl={`/`} />
      <div className={styles.mainContent}>
        <div className={`${styles.allContent} mt-2`}>
          <div className={`${styles.container1} mt-2`}>
            <DataMain
              matchStats={matchStats}
              dreamTeamStats={dreamTeamStats}
              teamPlayersA={teamPlayersA?.slice(0, 5)}
              teamPlayersB={teamPlayersB?.slice(0, 5)}
              bottom3={matchStats?.last_five_matches?.players.slice(-3)}
            />
          </div>
          <div className={styles.container3}>
            <div className={styles.card3}>
              <DreamTeamBox
                match_info={matchDetails?.response}
                currentUrl={currentPath}
              />
              <PlayerStatsBox playerPPMDI={playerPPMDI} />
            </div>
          </div>
        </div>
        <PlayerVsPlayer top_players={topPlayers} />
      </div>

      {/* Old code */}
      {/* <div style={{ marginBottom: "70px" }} className={styles.page}>
        <div className={styles.main}>
          <CheatHead
            match_short_title={matchDetails?.response?.short_title}
            currentPath={currentPath}
          />

          {matchStats?.length > 0 || matchStats?.last_five_matches ? (
            <>
              <CheatNav active={1} currentPath={currentPath} />
              <CheatDataVisual
                heading="Total Fantasy Points :-"
                subHeading="Top players on the basis of fantasy points earned in the 5 matches played by the team"
                showMetricInfo={true}
                showSubTabs={false}
                showMainTab={true}
                teamNameA={matchDetails?.response?.teama?.short_name}
                teamNameB={matchDetails?.response?.teamb?.short_name}
                data={matchStats?.last_five_matches?.players.slice(0, 5)}
              />

              <CheatDataVisual
                heading="AVG Fantasy Points :-"
                subHeading="Top players on the basis of fantasy points earned in the last 5 matches"
                showMetricInfo={false}
                showSubTabs={false}
                showMainTab={false}
                teamNameA={matchDetails?.response?.teama?.short_name}
                teamNameB={matchDetails?.response?.teamb?.short_name}
                data={matchStats?.last_five_matches?.players.slice(0, 5)}
                type="avg"
              />

              <CheatDataVisual
                heading="Part of ONCRIC :-"
                subHeading="Players frequently featuring in DreamTeams"
                showMetricInfo={false}
                showSubTabs={false}
                showMainTab={false}
                teamNameA={matchDetails?.response?.teama?.short_name}
                teamNameB={matchDetails?.response?.teamb?.short_name}
                data={dreamTeamStats?.dream_team_stats?.last_five_matches?.slice(
                  0,
                  5
                )}
                type="playerTime"
              />

              <CheatDataVisual
                heading={`Team Rank (${teams[0]}) :-`}
                subHeading="Top players from each team based on fantasy points earned in the last 5 matches "
                showMetricInfo={false}
                showSubTabs={false}
                showMainTab={false}
                teamNameA={matchDetails?.response?.teama?.short_name}
                teamNameB={matchDetails?.response?.teamb?.short_name}
                data={teamPlayersA?.slice(0, 5)}
              />

              <CheatDataVisual
                heading={`Team Rank (${teams[1]}) :-`}
                subHeading="Top players from each team based on fantasy points earned in the last 5 matches "
                showMetricInfo={false}
                showSubTabs={false}
                showMainTab={false}
                teamNameA={matchDetails?.response?.teama?.short_name}
                teamNameB={matchDetails?.response?.teamb?.short_name}
                data={teamPlayersB?.slice(0, 5)}
              />

              <CheatDataVisual
                heading="Bottom 3 Players :-"
                subHeading="Players who performed below their potential in the last 5 matches "
                showMetricInfo={true}
                showSubTabs={false}
                showMainTab={true}
                teamNameA={matchDetails?.response?.teama?.short_name}
                teamNameB={matchDetails?.response?.teamb?.short_name}
                data={matchStats?.last_five_matches?.players.slice(-3)}
              />
            </>
          ) : (
            <>
              <p class="text-2xl md:text-4xl lg:text-5xl font-semibold text-blue-800 text-center my-8">
                No Data to show yet, as no match might have happened as of now
              </p>
              <p class="text-xl md:text-2xl lg:text-3xl text-green-800 text-center my-8">
                Please visit later or check out other matches
              </p>
            </>
          )}
        </div>
      </div> */}
    </>
  );
};

export default page;
