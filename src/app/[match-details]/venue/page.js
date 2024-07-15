import React from "react";
import styles from "./venue.module.css";
import VenueHead from "@/components/venue/VenueHead";
import BalancedPitch from "@/components/venue/BalancedPitch";
import TossTrends from "../../../components/venue/TossTrends";
import BattingPreffered from "../../../components/venue/BattingPreffered";
import RecentMatches from "../../../components/venue/RecentMatches";
import TopPlayers from "../../../components/venue/TopPlayers";
import { Suspense } from "react";

// const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;

const fetchTopPlayers = async (match_id) => {
  try {
    const res = await fetch(
      `https://hammerhead-app-jkdit.ondigitalocean.app/api/player-stats?matchId=${match_id}`
    );
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const fetchVenueDetails = async (match_id) => {
  const res = await fetch(
    `https://rest.entitysport.com/v4/matches/${match_id}/advance?token=${entity_api_key}`,
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

  const data = await fetchVenueDetails(match_id);
  const stats = data?.response?.items?.venue_stats;

  const topPlayers = await fetchTopPlayers(match_id);

  // console.log(
  //   data?.response?.items?.venue_stats?.average_score_for_venue,
  //   "ihng04ipgn409n0"
  // );

  const avg_wickets =
    data?.response?.items?.venue_stats?.average_score_for_venue.reduce(
      (acc, curr) => {
        return acc + Number(curr?.avgwickets || 0);
      },
      0
    ) / data?.response?.items?.venue_stats?.average_score_for_venue.length || 1;

  // console.log(
  //   data.response?.items?.teama_vs_teamb_last10_match_same_venue,
  //   "9hfb83o9h3g0ibo"
  // );

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <VenueHead
          team_a_name={data?.response?.items?.info?.teama?.name}
          team_b_name={data?.response?.items?.info?.teamb?.name}
          team_a_logo={data?.response?.items?.info?.teama?.logo_url}
          team_b_logo={data?.response?.items?.info?.teamb?.logo_url}
          match_time={data?.response?.items?.info?.timestamp_start}
        />
      </Suspense>
      {/* ..........venue & pitch report.......... */}
      <div className={styles.Venuepitchreport}>
        <BalancedPitch
          avg_first_inning_score={
            data?.response?.items?.venue_stats?.average_score_for_venue?.[0]
              ?.avgstrike
          }
          avg_wickets={avg_wickets}
        />
        {/* ..........Tosstrends.......... */}
        <div className={styles.Tosstrends}>
          <TossTrends
            stats={stats}
            chooseBatting={stats.team_toss_win_choose_batting}
            firstBattingWon={stats.team_toss_win_choose_batting_match_won}
            teama_vs_teamb_last10_match_same_venue={
              data.response?.items?.teama_vs_teamb_last10_match_same_venue
            }
          />
          <BattingPreffered
            chooseBatting={stats.team_toss_win_choose_batting}
            firstBattingWon={stats.first_batting_match_won}
          />
          <RecentMatches
            teama_vs_teamb_last10_match_same_venue={
              data.response?.items?.teama_vs_teamb_last10_match_same_venue
            }
          />
          <Suspense fallback={<p>Loading...</p>}>
            <TopPlayers topPlayers={topPlayers} />
          </Suspense>
        </div>
      </div>
      {/* Old code */}
      {/* <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Venue Statistics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-semibold text-xl mb-4">Toss Decision Stats</h2>
            <p>
              <strong>Choose Batting:</strong>{" "}
              {stats.team_toss_win_choose_batting}%
            </p>
            <p>
              <strong>Choose Fielding:</strong>{" "}
              {stats.team_toss_win_choose_fieldeding}%
            </p>
            <p>
              <strong>Batting Match Won:</strong>{" "}
              {stats.team_toss_win_choose_batting_match_won}%
            </p>
            <p>
              <strong>Fielding Match Won:</strong>{" "}
              {stats.team_toss_win_choose_fielding_match_won}%
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-semibold text-xl mb-4">
              Match Outcome Based on First Action
            </h2>
            <p>
              <strong>First Batting Won:</strong>{" "}
              {stats.first_batting_match_won}%
            </p>
            <p>
              <strong>First Bowling Won:</strong>{" "}
              {stats.first_bowling_match_won}%
            </p>
          </div>
        </div>

        <h2 className="font-semibold text-xl mt-8 mb-4">
          Average Score for First Inning
        </h2>
        <div className="space-y-4">
          {stats.average_score_for_venue
            .filter((inning) => inning.inningnumber === "1") // Filter for only the first inning
            .map((inning, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold">{`Inning ${inning.inningnumber}`}</h3>
                <p>
                  <strong>Average Runs:</strong> {inning.avgruns}
                </p>
                <p>
                  <strong>Average Wickets:</strong> {inning.avgwickets}
                </p>
                <p>
                  <strong>Average Strike Rate:</strong> {inning.avgstrike}
                </p>
              </div>
            ))}
        </div>
      </div>

      <h2>Chasing is preferred</h2> */}
      {/* old jufh903jk */}
      {/* <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="font-bold text-3xl text-center mb-6">
          {data?.response?.items?.info?.title}
        </h1>
        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <p className="text-lg">
            <strong>Venue:</strong> {data?.response?.items?.info?.venue?.name}
          </p>
          <p className="text-lg">
            <strong>Location:</strong>{" "}
            {data?.response?.items?.info?.venue?.location}
          </p>
          <p className="text-lg">
            <strong>Toss:</strong> {data?.response?.items?.info?.toss?.text}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Team 1</h2>
          {data?.response?.items?.player_batting_stats_on_venue.team1.map(
            (player) => (
              <div
                key={player.batsman_id}
                className="bg-white shadow-lg rounded-lg p-6 mb-4"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {player.batsman_title}
                </h3>
                <p>
                  <strong>Innings:</strong> {player.innings}
                </p>
                <p>
                  <strong>Not Out:</strong> {player.notout}
                </p>
                <p>
                  <strong>Runs:</strong> {player.runs}
                </p>
                <p>
                  <strong>Balls:</strong> {player.balls}
                </p>
                <p>
                  <strong>100s:</strong> {player.run100}, <strong>50s:</strong>{" "}
                  {player.run50}, <strong>4s:</strong> {player.run4},{" "}
                  <strong>6s:</strong> {player.run6}
                </p>
                <p>
                  <strong>Catches/Stumpings:</strong> Catches: {player.catches},
                  Stumpings: {player.stumpings}
                </p>
                <p>
                  <strong>Strike Rate:</strong> {player.strike}
                </p>
                <p>
                  <strong>Average:</strong> {player.average || "N/A"}
                </p>
                <p>
                  <strong>Highest Score:</strong> {player.highest}
                </p>
              </div>
            )
          )}

          <h2 className="text-2xl font-bold mb-4">Team 2</h2>
          {data?.response?.items?.player_batting_stats_on_venue.team2.map(
            (player) => (
              <div
                key={player.batsman_id}
                className="bg-white shadow-lg rounded-lg p-6 mb-4"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {player.batsman_title}
                </h3>
                <p>
                  <strong>Innings:</strong> {player.innings}
                </p>
                <p>
                  <strong>Not Out:</strong> {player.notout}
                </p>
                <p>
                  <strong>Runs:</strong> {player.runs}
                </p>
                <p>
                  <strong>Balls:</strong> {player.balls}
                </p>
                <p>
                  <strong>100s:</strong> {player.run100}, <strong>50s:</strong>{" "}
                  {player.run50}, <strong>4s:</strong> {player.run4},{" "}
                  <strong>6s:</strong> {player.run6}
                </p>
                <p>
                  <strong>Catches/Stumpings:</strong> Catches: {player.catches},
                  Stumpings: {player.stumpings}
                </p>
                <p>
                  <strong>Strike Rate:</strong> {player.strike}
                </p>
                <p>
                  <strong>Average:</strong> {player.average || "N/A"}
                </p>
                <p>
                  <strong>Highest Score:</strong> {player.highest}
                </p>
              </div>
            )
          )}
        </div>
      </div> */}
    </>
  );
};

export default page;
