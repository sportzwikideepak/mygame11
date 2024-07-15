import React from "react";
import styles from "../cheatSheet.module.css";
import CheatHead from "@/components/cheat-sheet/CheatHead";
import CheatNav from "@/components/cheat-sheet/CheatNav";
import CheatDataVisual from "@/components/cheat-sheet/CheatDataVisual";
const LOCAL_SW_API_BASE_URL = process.env.LOCAL_SW_API_BASE_URL;
const entity_api_key = process.env.ENTITY_TOKEN;
const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;

const fetchDreamTeamStats = async (teamA, teamB) => {
  console.log(
    `${LOCAL_SW_API_BASE_URL}/dream-team-stats/${teamA}/${teamB}`,
    "3higuboih3uoh"
  );
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

  const teams = Array.from(
    new Set(matchStats?.last_match?.players.map((player) => player?.team_name))
  );

  let teamPlayersA;
  let teamPlayersB;

  if (teams?.length >= 2) {
    teamPlayersA = matchStats?.last_match?.players?.filter((player) => {
      return player?.team_name === teams[0];
    });

    teamPlayersB = matchStats?.last_match?.players?.filter((player) => {
      return player?.team_name === teams[1];
    });
  }

  return (
    <>
      <div style={{ marginBottom: "70px" }} className={styles.page}>
        <div className={styles.main}>
          <CheatHead
            match_short_title={matchDetails?.response?.short_title}
            currentPath={currentPath}
          />

          {matchStats?.length > 0 || matchStats?.last_match ? (
            <>
              <CheatNav active={0} currentPath={currentPath} />
              <CheatDataVisual
                heading="Total Fantasy Points :-"
                subHeading="Top players on the basis of fantasy points earned in the 5 matches played by the team"
                showMetricInfo={true}
                showSubTabs={false}
                showMainTab={true}
                teamNameA={matchDetails?.response?.teama?.short_name}
                teamNameB={matchDetails?.response?.teamb?.short_name}
                data={matchStats?.last_match?.players.slice(0, 5)}
              />

              <CheatDataVisual
                heading="AVG Fantasy Points :-"
                subHeading="Top players on the basis of fantasy points earned in the last 5 matches"
                showMetricInfo={false}
                showSubTabs={false}
                showMainTab={false}
                teamNameA={matchDetails?.response?.teama?.short_name}
                teamNameB={matchDetails?.response?.teamb?.short_name}
                data={matchStats?.last_match?.players.slice(0, 5)}
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
                data={dreamTeamStats?.dream_team_stats?.last_match?.slice(0, 5)}
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
                // type="playerTime"
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
                // type="playerTime"
              />

              <CheatDataVisual
                heading="Bottom 3 Players :-"
                subHeading="Players who performed below their potential in the last 5 matches "
                showMetricInfo={true}
                showSubTabs={false}
                showMainTab={true}
                teamNameA={matchDetails?.response?.teama?.short_name}
                teamNameB={matchDetails?.response?.teamb?.short_name}
                data={matchStats?.last_match?.players.slice(-3)}
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
      </div>
    </>
  );
};

export default page;
