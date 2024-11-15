"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

const KeyInsight = () => {
  const searchParams = useSearchParams();
  const matchId = searchParams.get("match_id");
  const [matchData, setMatchData] = useState(null);
  console.log(matchData, "weatherreport");
  const [teamData, setTeamData] = useState([]); // Separate state for teams data

  const [winningChances, setWinningChances] = useState(null);
  const [groundConditions, setGroundConditions] = useState(null);
  const [venueStats, setVenueStats] = useState(null);
  const [tossDecisionStats, setTossDecisionStats] = useState(null);
  const [activeTab, setActiveTab] = useState(0); // Track active tab
  const [topFormPlayers, setTopFormPlayers] = useState([]); // State for top form players
  console.log(topFormPlayers,"topformplayers")
  

  const LOCAL_SW_API_BASE_URL =
    "https://hammerhead-app-jkdit.ondigitalocean.app";

  // Function to fetch top players in form
  const fetchTopFormPlayers = async (matchId) => {
    try {
      const response = await axios.get(
        `https://hammerhead-app-jkdit.ondigitalocean.app/api/fantasy-points/${matchId}`
      );
      const playersData = response.data.response;
      setTopFormPlayers(playersData);
    } catch (error) {
      console.error("Error fetching top form players:", error);
    }
  };

  useEffect(() => {
    if (matchId) {
      fetchTopFormPlayers(matchId); // Fetch top form players when match ID is available
    }
  }, [matchId]);







  const fetchVenueStats = async (venueId) => {
    try {
      const response = await fetch(
        `https://hammerhead-app-jkdit.ondigitalocean.app/venue-stats-last-five/${venueId}`
      );
      const data = await response.json();
      setVenueStats(data);
    } catch (error) {
      console.error("Error fetching venue stats:", error);
    }
  };

  const fetchTossDecisionStats = async (venueId) => {
    try {
      const response = await fetch(
        `https://hammerhead-app-jkdit.ondigitalocean.app/venue/${venueId}/stats/all`
      );
      const data = await response.json();
      setTossDecisionStats(data);
    } catch (error) {
      console.error("Error fetching toss decision stats:", error);
    }
  };

  const fetchMatchData = async (matchId, setMatchData) => {
    try {
      const response = await fetch(
        `https://rest.entitysport.com/v2/matches/${matchId}/info?token=73d62591af4b3ccb51986ff5f8af5676`
      );
      const data = await response.json();
      setMatchData(data.response);

      const winningChancesData = await fetchTeamWinningChances(
        data.response.teama.team_id,
        data.response.teamb.team_id
      );
      setWinningChances(winningChancesData);

      if (data.response.venue?.venue_id) {
        fetchVenueStats(data.response.venue.venue_id);
      }

      if (data.response.venue?.venue_id) {
        //     fetchTossDecisionStats(venueId);

        fetchTossDecisionStats(data.response.venue.venue_id);
      }
    } catch (error) {
      console.error("Error fetching match data:", error);
    }
  };
  const fetchTeamWinningChances = async (teamIdA, teamIdB) => {
    try {
      const res = await fetch(
        `${LOCAL_SW_API_BASE_URL}/new/teams/win-percentage/${teamIdA}/${teamIdB}`,
        { next: { revalidate: 300 } }
      );

      if (res.ok) {
        const data = await res.json();
        console.log("Fetched winning chances data:", data); // Log to verify data structure
        return data;
      } else {
        console.error("Error fetching winning chances: Status not OK");
        return [];
      }
    } catch (err) {
      console.error("Error fetching winning chances:", err);
    }
  };

  const fetchGroundConditions = async (venueId) => {
    try {
      const response = await fetch(
        `${LOCAL_SW_API_BASE_URL}/venue/conditions/${venueId}`
      );
      const data = await response.json();
      setGroundConditions(data);
    } catch (error) {
      console.error("Error fetching ground conditions:", error);
    }
  };

  const fetchMatchData1 = async (matchId) => {
    console.log("fetchMatchData1 function called with matchId:", matchId);
    if (!matchId) {
      console.error(
        "fetchMatchData1 was called with an invalid matchId:",
        matchId
      );
      return;
    }

    try {
      const response = await axios.get(
        `${LOCAL_SW_API_BASE_URL}/matchdream/${matchId}`
      );
      console.log("Response received from matchdream API:", response.data);
      setTeamData(response.data.teams || []);
    } catch (error) {
      console.error("Error fetching match data from matchdream API:", error);
    }
  };

  useEffect(() => {
    if (matchId) {
      fetchMatchData1(matchId); // Only call if matchId exists
    } else {
      console.warn("No matchId found in URL search parameters");
    }
  }, [matchId]);

  useEffect(() => {
    if (matchId) {
      fetchMatchData(matchId, setMatchData);
    }
  }, [matchId]);

  useEffect(() => {
    if (matchData?.venue?.venue_id) {
      fetchGroundConditions(matchData.venue.venue_id);
    }
  }, [matchData]);

  // useEffect(() => {
  //   if (matchData?.venue?.venue_id) {
  //     fetchTossDecisionStats(venueId);
  //   }
  // }, [matchData]);

  const winsBattingFirstPercentage = venueStats
    ? (venueStats.wins_batting_first / venueStats.total_matches) * 100
    : 0;
  const winsChasingPercentage = venueStats
    ? (venueStats.wins_chasing / venueStats.total_matches) * 100
    : 0;

  const choseToBatPercentage = tossDecisionStats
    ? (tossDecisionStats.chose_to_bat_first / tossDecisionStats.total_matches) *
      100
    : 0;
  const choseToBowlPercentage = tossDecisionStats
    ? (tossDecisionStats.chose_to_bowl_first /
        tossDecisionStats.total_matches) *
      100
    : 0;

  const openTab = (index) => {
    setActiveTab(index);
  };


  const topTwoPlayers = [...topFormPlayers]
    .sort((a, b) => b.total_fantasy_points - a.total_fantasy_points)
    .slice(0, 2);
  return (
    <>
      <div className="bg-[#0A1A4B] flex items-center justify-center w-full px-4 py-5">
        <div className="w-full max-w-[550px] mx-auto flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg">
                <Image
                  alt={`Flag of ${matchData?.teama?.name}`}
                  src={matchData?.teama?.logo_url}
                  width={48} // Specify the actual width of the image
                  height={48} // Specify the actual height of the image
                  className="w-12 h-12"
                />
              </div>
              <span className="text-white mt-2">
                {matchData?.teama?.short_name}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg">
                <Image
                  alt={`Flag of ${matchData?.teamb?.name}`}
                  src={matchData?.teamb?.logo_url}
                  width={48} // Specify the actual width of the image
                  height={48} // Specify the actual height of the image
                  className="w-12 h-12"
                />
              </div>
              <span className="text-white mt-2">
                {matchData?.teamb?.short_name}
              </span>
            </div>
          </div>
          <div className="text-center text-white">
            <div className="text-lg font-semibold mb-2">
              {new Date(matchData?.date_start_ist).toLocaleString()}
            </div>
            <div className="mt-2 text-sm flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
              <span>• {matchData?.venue.name}</span>
              <span>• {matchData?.competition.title}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container mx-auto"
        style={{ maxWidth: "1012px", padding: 0 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-0 md:mt-4">
          <div className="sm:bg-white p-4 rounded-lg col-span-2">
            <h1
              className="text-2xl font-bold mb-4"
              style={{ fontWeight: 600, lineHeight: "2.25rem" }}
            >
              {matchData?.teama?.short_name} vs {matchData?.teamb?.short_name}{" "}
              Dream11 Team Prediction Today Match | Best Fantasy Tips | Dream11
              Team Prediction For {matchData?.competition?.title} | Fantasy
              Cricket Tips
            </h1>

            {/* WIN PROBABILITY */}
            <div className="max-w-4xl mx-auto mb-4">
              <div className="flex gap-2">
                <div>
                  <h1
                    className="text-lg font-bold w-full whitespace-nowrap"
                    style={{ fontWeight: 700 }}
                  >
                    WIN PROBABILITY
                  </h1>
                </div>
                <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
              </div>
              {winningChances ? (
                <div className="relative flex space-x-4 w-full justify-center mt-4">
                  {/* <div className="absolute left-0">
                  <Image
                    // className="rounded-full w-10 h-10"
                    width={48} // Specify the actual width of the image
                    height={48} //
                    src="Images/Team1_flag.svg"
                    alt=""
                  />
                </div>
                <div className="absolute right-0">
                  <Image
                    // className="rounded-full w-10 h-10"
                    width={48} // Specify the actual width of the image
                    height={48} //
                    src="Images/Team2_flag.svg"
                    alt=""
                  />
                </div> */}

                  <div className="flex items-center space-x-2 w-full">
                    <div className="bg-red-600 text-white text-center py-2 px-4 rounded w-full">
                      {winningChances.find(
                        (team) =>
                          team.team_id === matchData.teama.team_id.toString()
                      )?.win_percentage
                        ? `${
                            winningChances.find(
                              (team) =>
                                team.team_id ===
                                matchData.teama.team_id.toString()
                            ).win_percentage
                          }%`
                        : "No match data for this team"}
                    </div>
                  </div>

                  {/* <div className="flex items-center space-x-2 w-full">
                  <div className="bg-gray-800 text-white text-center py-2 px-4 rounded w-full">
                  </div>
                </div> */}

                  <div className="flex items-center space-x-2 w-full">
                    <div className="bg-blue-600 text-white text-center py-2 px-4 rounded w-full mr-4">
                      {winningChances.find(
                        (team) =>
                          team.team_id === matchData.teamb.team_id.toString()
                      )?.win_percentage
                        ? `${
                            winningChances.find(
                              (team) =>
                                team.team_id ===
                                matchData.teamb.team_id.toString()
                            ).win_percentage
                          }%`
                        : "No match data for this team"}
                    </div>
                  </div>
                </div>
              ) : (
                <p>Loading winning chances...</p>
              )}
            </div>

            {groundConditions ? (
              <div className="max-w-4xl mx-auto mb-4">
                <div className="flex gap-2">
                  <div>
                    <h1
                      className="text-lg font-bold w-full whitespace-nowrap"
                      style={{ fontWeight: 700 }}
                    >
                      GROUND CONDITIONS
                    </h1>
                    <p className="text-gray-600 text-sm font-medium leading-6 whitespace-nowrap">
                      (LAST 5 T20’S)
                    </p>
                  </div>
                  <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 md:flex md:flex-nowrap">
                  <div className="bg-white custom-shadow rounded-lg p-4 text-center flex-1 min-w-[80px]">
                    <p className="text-lg font-bold leading-6">
                      {groundConditions.avgScore}
                    </p>
                    <p className="text-gray-600">Avg. Score</p>
                  </div>
                  <div className="bg-white custom-shadow rounded-lg p-4 text-center flex-1 min-w-[80px]">
                    <p className="text-lg font-bold leading-6">
                      {groundConditions.avgWickets}
                    </p>
                    <p className="text-gray-600">Avg. Wkts</p>
                  </div>
                  <div className="bg-white custom-shadow rounded-lg p-4 text-center flex-1 min-w-[80px]">
                    <p className="text-lg font-bold leading-6">
                      {groundConditions.scoreBelow140}
                    </p>
                    <p className="text-gray-600">&lt;140</p>
                  </div>
                  <div className="bg-white custom-shadow rounded-lg p-4 text-center flex-1 min-w-[80px]">
                    <p className="text-lg font-bold leading-6">2</p>
                    <p className="text-gray-600">
                      {groundConditions.score140To180}
                    </p>
                  </div>
                  <div className="bg-white custom-shadow rounded-lg p-4 text-center flex-1 min-w-[80px]">
                    <p className="text-lg font-bold leading-6">
                      {groundConditions.scoreAbove180}
                    </p>
                    <p className="text-gray-600">180+</p>
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading ground conditions...</p>
            )}

            <div className="max-w-4xl mx-auto mb-4">
              <div className="flex gap-2">
                <div>
                  <h1
                    className="text-lg font-bold w-full whitespace-nowrap"
                    style={{ fontWeight: 700 }}
                  >
                    WEATHER REPORT
                  </h1>
                </div>
                <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
              </div>
              <div
                className="bg-white rounded-lg p-4 flex items-center space-x-4 w-full max-w-4xl border mt-4"
                style={{ borderColor: "#E9ECEF" }}
              >
                <Image
                  className="w-24 h-24"
                  height="100"
                  src="Images/Weather.svg"
                  alt=""
                  width="100"
                />
                <div className="max-w-4xl mx-auto mb-4 bg-white p-4 rounded-lg">
                  <h1 className="text-lg font-bold mb-2">WEATHER REPORT</h1>
                  <p>{matchData?.weather?.weather_desc}</p>
                  <p>Temperature: {matchData?.weather?.temp}°C</p>
                  <p>Humidity: {matchData?.weather?.humidity}%</p>
                  <p>Wind Speed: {matchData?.weather?.wind_speed} m/s</p>
                </div>
              </div>
              {/* TOSS TRENDS */}
              <div className="max-w-4xl mx-auto mb-4">
                <div className="flex gap-2">
                  <div>
                    <h1
                      className="text-lg font-bold w-full whitespace-nowrap"
                      style={{ fontWeight: 700 }}
                    >
                      TOSS TRENDS
                    </h1>
                    <p className="text-gray-600 text-sm font-medium leading-6 whitespace-nowrap">
                      (At this venue)
                    </p>
                  </div>
                  <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
                </div>
                <div className="w-full mt-3">
                  <h1
                    className="text-base font-semibold leading-6 tracking-normal text-left"
                    style={{ fontVariationSettings: "'opsz' auto" }}
                  >
                    DECISION AFTER WINNING THE TOSS
                  </h1>
                </div>
                <div className="w-full max-w-4xl mt-3">
                  {/* First Progress Bar */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-black font-medium text-sm leading-6">
                      Choose to Bat First
                    </span>
                    <span className="text-black font-medium text-sm leading-6">
                      Choose to Chase
                    </span>
                  </div>
                  <div className="relative w-full h-10 bg-gray-800 rounded-full overflow-hidden mb-8">
                    <div
                      className="absolute left-0 top-0 h-full bg-gray-400 rounded-full"
                      style={{ width: `${choseToBatPercentage}%` }}
                    >
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-medium text-sm leading-6">
                        {choseToBatPercentage.toFixed(0)}%
                      </span>
                    </div>
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-medium text-sm leading-6">
                      {choseToBowlPercentage.toFixed(0)}%
                    </span>
                  </div>

                  {/* Second Progress Bar */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-black font-medium text-sm leading-6">
                      Wins Batting First
                    </span>
                    <span className="text-black font-medium text-sm leading-6">
                      Wins Chasing
                    </span>
                  </div>
                  <div className="relative w-full h-10 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-gray-400 rounded-full"
                      style={{ width: `${winsBattingFirstPercentage}%` }}
                    >
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-medium text-sm leading-6">
                        {winsBattingFirstPercentage.toFixed(0)}%
                      </span>
                    </div>
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-medium text-sm leading-6">
                      {winsChasingPercentage.toFixed(0)}%
                    </span>
                  </div>
                </div>

                <div className="w-full mt-4">
                  <h1
                    className="text-base font-semibold leading-6 tracking-normal text-left"
                    style={{ fontVariationSettings: "'opsz' auto" }}
                  >
                    WINS AFTER WINNING TOSS
                  </h1>
                </div>
                <div className="mt-4 flex flex-wrap md:flex-nowrap gap-4">
                  <div className="bg-white custom-shadow rounded-lg p-4 text-center flex-1 min-w-[50px]">
                    <p className="text-lg font-bold leading-6">40%</p>
                    <p className="text-gray-600">Win</p>
                  </div>
                  <div className="bg-white custom-shadow rounded-lg p-4 text-center flex-1 min-w-[50px]">
                    <p className="text-lg font-bold leading-6">60%</p>
                    <p className="text-gray-600">Loss</p>
                  </div>
                </div>
              </div>
              <div className="max-w-4xl mx-auto mb-4">
                <div className="flex gap-2">
                  {/* <div>
                    <h1
                      className="text-lg font-bold w-full whitespace-nowrap"
                      style={{ fontWeight: 700 }}
                    >
                      PITCH TRENDS
                    </h1>
                  </div> */}
                  <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
                </div>
                {/* <div className="w-full mt-3">
                  <h1
                    className="text-base font-semibold leading-6 tracking-normal text-left"
                    style={{ fontVariationSettings: "'opsz' auto" }}
                  >
                    Batting vs Bowling
                  </h1>
                </div> */}
                <div className="w-full max-w-4xl mt-3">
                  {/* First Progress Bar */}
                  {/* <div className="flex justify-between items-center mb-2">
                    <span className="text-black font-medium text-sm leading-6">
                      Batting Fpts
                    </span>
                    <span className="text-black font-medium text-sm leading-6">
                      Bowling Fpts
                    </span>
                  </div> */}
                  {/* <div className="relative w-full h-10 bg-gray-800 rounded-full overflow-hidden mb-3">
                    <div
                      className="absolute left-0 top-0 h-full bg-gray-400 rounded-full"
                      style={{ width: "0%" }}
                    >
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-medium text-sm leading-6">
                        0%
                      </span>
                    </div>
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-medium text-sm leading-6">
                      100%
                    </span>
                  </div> */}
                  {/* <div className="w-full mt-3">
                    <h1
                      className="text-base font-semibold leading-6 tracking-normal text-left mb-3"
                      style={{ fontVariationSettings: "'opsz' auto" }}
                    >
                      Pace vs Spin
                    </h1>
                  </div> */}
                  {/* Second Progress Bar */}
                  {/* <div className="flex justify-between items-center mb-2">
                    <span className="text-black font-medium text-sm leading-6">
                      Pace FPts
                    </span>
                    <span className="text-black font-medium text-sm leading-6">
                      Spin FPts
                    </span> */}
                  {/* </div> */}
                  <div className="relative w-full h-10 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-gray-400 rounded-full"
                      style={{ width: "60%" }}
                    >
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-medium text-sm leading-6">
                        60%
                      </span>
                    </div>
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-medium text-sm leading-6">
                      100%
                    </span>
                  </div>
                </div>

                {/* SUGGESTED PLAYERS */}
                <div className="max-w-4xl mx-auto mb-4">
  <div className="flex gap-2">
    <div>
      <h1 className="text-lg font-bold w-full whitespace-nowrap">
        SUGGESTED PLAYERS
      </h1>
    </div>
    <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
  </div>
  <div className="flex space-x-4 w-full max-w-screen-lg mt-3">
    {/* Suggested Players Cards */}
    {topTwoPlayers.map((player, index) => (
      <div key={index} className="bg-white rounded-lg custom-shadow p-4 flex flex-col items-center w-full">
        <div className="bg-[#EEEEF0] rounded-full p-2 w-[144px] flex justify-center items-center mb-2">
          <Image
            className="h-7 w-12"
            height="50"
            width="50"
            src={`Images/${index === 0 ? 'team1_jerrcy.svg' : 'team2_jeErcy.svg'}`}
            alt={`${player.team_name} Jersey`}
          />
        </div>
        <div className="text-center">
          <p className="text-[16px] font-semibold leading-[16px] text-center tracking-normal mb-2">
            {player.player_name}
          </p>
          <p className="text-gray-600 text-[14px] font-normal leading-[20px] text-center tracking-normal">
            {player.playing_role.toUpperCase()} | {player.team_name || "N/A"}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


                {/* PLAYER IN TOP FORM */}
                <div className="max-w-4xl mx-auto mb-4">
      <div className="flex gap-2">
        <div>
          <h1 className="text-lg font-bold w-full whitespace-nowrap">
            PLAYER IN TOP FORM
          </h1>
          <p className="text-gray-600 text-sm font-medium leading-6 whitespace-nowrap">
            (LAST 2 T20’S)
          </p>
        </div>
        <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
      </div>

      <div className="space-y-3 w-full mt-3">
        {topTwoPlayers.map((player, index) => (
          <div
            key={index}
            className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow"
          >
            <div className="flex items-center">
              <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
              <Image
          className="h-7 w-7"
          height={50}
          width={50}
          src={`Images/${index === 0 ? 'team1_jerrcy.svg' : 'team2_jeErcy.svg'}`}
          alt={`${player.team_name} Jersey`}
        />
              </div>
              <div className="ml-4">
                <div className="text-lg font-bold">{player.player_name}</div>
                <div className="text-gray-500">
                  {player.playing_role.toUpperCase()} | {player.team_name || "N/A"}
                </div>
              </div>
            </div>
            <div className="text-lg font-bold">{player.total_fantasy_points} fpts</div>
          </div>
        ))}
      </div>
    </div>
              </div>
              {/* TOP PERFORMERS AT THIS VENUE */}
              <div className="max-w-4xl mx-auto mb-4">
                <div className="flex gap-2">
                  <div>
                    <h1
                      className="text-lg font-bold w-full whitespace-nowrap"
                      style={{ fontWeight: 700 }}
                    >
                      TOP PERFORMERS AT THIS VENUE
                    </h1>
                    <p className="text-gray-600 text-sm font-medium leading-6 whitespace-nowrap">
                      (LAST 5 T20’S)
                    </p>
                  </div>
                  <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
                </div>
                <div className="space-y-3 w-full mt-3">
                  <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow">
                    <div className="flex items-center">
                      <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
                        <Image
                          className="h-7 w-7"
                          height="50"
                          src="Images/team1_jerrcy.svg"
                          alt=""
                          width="50"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-bold">R Sharma</div>
                        <div className="text-gray-500">WK | ENG</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold">80 fpts</div>
                  </div>
                  <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow mt-0">
                    <div className="flex items-center">
                      <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
                        <Image
                          className="h-7 w-7"
                          height="50"
                          src="Images/team2_jeercy.svg"
                          alt=""
                          width="50"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-bold">V Kohli</div>
                        <div className="text-gray-500">WK | ENG</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold">75 fpts</div>
                  </div>
                </div>
              </div>
              {/* POWER PLAYS (BATTERS) */}
              {/* <div className="max-w-4xl mx-auto mb-4">
                <div className="flex gap-2">
                  <div>
                    <h1
                      className="text-lg font-bold w-full whitespace-nowrap"
                      style={{ fontWeight: 700 }}
                    >
                      POWER PLAYS (BATTERS)
                    </h1>
                  </div>
                  <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
                </div>
                <div className="space-y-3 w-full mt-3">
                  <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow">
                    <div className="flex items-center">
                      <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
                        <Image
                          className="h-7 w-7"
                          height="50"
                          src="Images/team1_jerrcy.svg"
                          alt=""
                          width="50"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-bold">R Sharma</div>
                        <div className="text-gray-500">WK | ENG</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold">80 fpts</div>
                  </div>
                  <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow mt-0">
                    <div className="flex items-center">
                      <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
                        <Image
                          className="h-7 w-7"
                          height="50"
                          src="Images/team2_jeercy.svg"
                          alt=""
                          width="50"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-bold">V Kohli</div>
                        <div className="text-gray-500">WK | ENG</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold">75 fpts</div>
                  </div>
                </div>
              </div> */}
              {/* POWER PLAYS (BOWLERS) */}
              {/* <div className="max-w-4xl mx-auto mb-4">
                <div className="flex gap-2">
                  <div>
                    <h1
                      className="text-lg font-bold w-full whitespace-nowrap"
                      style={{ fontWeight: 700 }}
                    >
                      POWER PLAYS (BOWLERS)
                    </h1>
                  </div>
                  <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
                </div>
                <div className="space-y-3 w-full mt-3">
                  <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow">
                    <div className="flex items-center">
                      <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
                        <Image
                          className="h-7 w-7"
                          height="50"
                          src="Images/team1_jerrcy.svg"
                          alt=""
                          width="50"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-bold">R Sharma</div>
                        <div className="text-gray-500">WK | ENG</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold">80 fpts</div>
                  </div>
                  <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow mt-0">
                    <div className="flex items-center">
                      <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
                        <Image
                          className="h-7 w-7"
                          height="50"
                          src="Images/team2_jeercy.svg"
                          alt=""
                          width="50"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-bold">V Kohli</div>
                        <div className="text-gray-500">WK | ENG</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold">75 fpts</div>
                  </div>
                </div>
              </div> */}
              {/* DEATH OVERS (BOWLERS) */}
              {/* <div className="max-w-4xl mx-auto mb-4">
                <div className="flex gap-2">
                  <div>
                    <h1
                      className="text-lg font-bold w-full whitespace-nowrap"
                      style={{ fontWeight: 700 }}
                    >
                      DEATH OVERS (BOWLERS)
                    </h1>
                  </div>
                  <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
                </div>
                <div className="space-y-3 w-full mt-3">
                  <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow">
                    <div className="flex items-center">
                      <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
                        <Image
                          className="h-7 w-7"
                          height="50"
                          src="Images/team1_jerrcy.svg"
                          alt=""
                          width="50"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-bold">R Sharma</div>
                        <div className="text-gray-500">WK | ENG</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold">80 fpts</div>
                  </div>
                  <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow mt-0">
                    <div className="flex items-center">
                      <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
                        <Image
                          className="h-7 w-7"
                          height="50"
                          src="Images/team2_jeercy.svg"
                          alt=""
                          width="50"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-bold">V Kohli</div>
                        <div className="text-gray-500">WK | ENG</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold">75 fpts</div>
                  </div>
                </div>
              </div> */}

              <div className="max-w-4xl mx-auto">
                <div className="flex gap-2 mb-5">
                  <h1 className="text-lg font-bold">CHOOSE TEAM</h1>
                  <div className="border-t border-dotted w-full mt-auto"></div>
                </div>

                {/* Dynamic Team Tabs */}
                <div className="flex space-x-4 mb-6 mt-4">
                  {teamData.map((team, index) => (
                    <button
                      key={index}
                      onClick={() => openTab(index)}
                      className={`tab-button ${
                        activeTab === index
                          ? "bg-[#394150] text-white"
                          : "bg-gray-100 text-gray-500"
                      } font-semibold py-2 px-4 rounded-full w-full md:w-auto`}
                    >
                      {team.teamName}
                    </button>
                  ))}
                </div>

                {/* Team Details */}
                {teamData.map((team, index) => (
                  <div
                    key={index}
                    className={`tab-content ${
                      activeTab === index ? "block" : "hidden"
                    }`}
                  >
                    <ul className="list-disc pl-6 space-y-4">
                      <li>
                        <span className="font-bold">Keeper</span> –{" "}
                        {team.keepers.map((keeper) => keeper.label).join(", ")}
                      </li>
                      <li>
                        <span className="font-bold">Batsmen</span> –{" "}
                        {team.batsmen
                          .map((batsman) => batsman.label)
                          .join(", ")}
                      </li>
                      <li>
                        <span className="font-bold">All-rounders</span> –{" "}
                        {team.allrounders.map((all) => all.label).join(", ")}
                      </li>
                      <li>
                        <span className="font-bold">Bowlers</span> –{" "}
                        {team.bowlers.map((bowler) => bowler.label).join(", ")}
                      </li>
                    </ul>

                    {/* Background Section */}
                    <div
                      className="bg-cover bg-center bg-no-repeat p-2 md:p-8 rounded-lg mt-3"
                      style={{
                        backgroundImage: "url('Images/Dream_back.svg')",
                      }}
                    >
                      <div className="grid grid-cols-5 gap-4 text-center place-content-center">
                        <div className="col-span-5 text-center mb-10">
                          <h2 className="text-white font-bold mb-4">
                            WICKET-KEEPERS
                          </h2>
                          {team.keepers.map((keeper, i) => (
                            <div
                              key={i}
                              className="relative inline-block  mx-2"
                            >
                              <Image
                                className="mx-auto"
                                height="100"
                                width="100"
                                src="/Images/Player_pro.svg"
                                alt={keeper.label}
                              />
                              <div className="bg-blue-100 text-black font-bold truncate max-w-[100px] mx-auto px-2 rounded">
                                {keeper.label}
                              </div>
                              <div className="text-white">
                                {keeper.rating} cr
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Batsmen */}
                        <div className="col-span-5 text-center mb-10">
                          <h2 className="text-white font-bold mb-4">BATSMEN</h2>
                          {team.batsmen.map((batsman, i) => (
                            <div
                              key={i}
                              className="relative inline-block text-center mx-2"
                            >
                              <Image
                                className="mx-auto"
                                height={100}
                                width={100}
                                src="/Images/Player_pro.svg"
                                alt={batsman.label}
                              />
                              <div className="bg-blue-100 text-black font-bold truncate max-w-[100px] mx-auto px-2 rounded">
                                {batsman.label}
                              </div>
                              <div className="text-white">
                                {batsman.rating} cr
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* All-Rounders */}
                        <div className="col-span-5 text-center mb-10">
                          <h2 className="text-white font-bold mb-4">
                            ALL-ROUNDERS
                          </h2>
                          {team.allrounders.map((allrounder, i) => (
                            <div
                              key={i}
                              className="relative inline-block  mx-2"
                            >
                              <Image
                                className="mx-auto"
                                height={100}
                                width={100}
                                src="/Images/Player_pro.svg"
                                alt={allrounder.label}
                              />
                              <div className="bg-blue-100 text-black font-bold truncate max-w-[100px] mx-auto px-2 rounded">
                                {allrounder.label}
                              </div>
                              <div className="text-white">
                                {allrounder.rating} cr
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="col-span-5 text-center mb-10">
                          <h2 className="text-white font-bold mb-4">BOWLERS</h2>
                          {team.bowlers.map((bowler, i) => (
                            <div
                              key={i}
                              className="relative inline-block  mx-2"
                            >
                              <Image
                                className="mx-auto"
                                height={100}
                                width={100}
                                src="/Images/Player_pro.svg"
                                alt={bowler.label}
                              />
                              <div className="bg-blue-100 text-black font-bold truncate max-w-[100px] mx-auto px-2 rounded">
                                {bowler.label}
                              </div>
                              <div className="text-white">
                                {bowler.rating} cr
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Render similar sections for All-rounders and Bowlers */}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Disclaimer */}
                <div className="w-full mx-auto p-4 bg-[#F8F9FD] rounded-lg">
                  <div className="flex items-center mb-2 text-black">
                    <i className="fas fa-exclamation-triangle text-black text-xl mr-2"></i>
                    <h2 className="font-bold text-lg">Disclaimer</h2>
                  </div>
                  <hr className="border-gray-300 mb-2" />
                  <p className="text-gray-700">
                    This team is based on the understanding, analysis, and
                    instinct of the author. While selecting your team, consider
                    the points mentioned and make your own decision.
                  </p>
                </div>

                {/* <div className="bg-white p-4 rounded-lg">
                  <h2 className="font-bold mb-4 text-xl">
                    Top Dream11 Team Prediction
                  </h2>
                  <ul className="list-disc list-outside text-custom-gray text-base font-medium leading-7 tracking-normal pl-4">
                    <li className="clickable mb-2 font-bold">
                      Bangladesh tour of India, IND vs BAN Playing 11, Dream
                    </li>
                    <li className="clickable mb-2 font-bold">
                      Bangladesh tour of India, IND vs BAN Playing 11, Dream
                    </li>
                    <li className="clickable mb-2 font-bold">
                      Bangladesh tour of India, IND vs BAN Playing 11, Dream
                    </li>
                    <li className="clickable mb-2 font-bold">
                      Bangladesh tour of India, IND vs BAN Playing 11, Dream
                    </li>
                    <li className="clickable mb-2 font-bold">
                      Bangladesh tour of India, IND vs BAN Playing 11, Dream
                    </li>
                    <li className="clickable mb-2 font-bold">
                      Bangladesh tour of India, IND vs BAN Playing 11, Dream
                    </li>
                    <li className="clickable mb-2 font-bold">
                      Bangladesh tour of India, IND vs BAN Playing 11, Dream
                    </li>
                    <li className="clickable mb-2 font-bold">
                      Bangladesh tour of India, IND vs BAN Playing 11, Dream
                    </li>
                    <li className="clickable mb-2 font-bold">
                      Bangladesh tour of India, IND vs BAN Playing 11, Dream
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <script>
        {`
        function openTab(evt, tabName) {
          var i, tabcontent, tabbuttons;
          tabcontent = document.getElementsByClassName("tab-content");
          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.add("hidden");
          }
          tabbuttons = document.getElementsByClassName("tab-button");
          for (i = 0; i < tabbuttons.length; i++) {
            tabbuttons[i].className = "tab-button bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded-full focus:outline-none w-full md:w-auto";
          }
          document.getElementById(tabName).classList.remove("hidden");
          evt.currentTarget.className = "tab-button bg-[#394150] text-white font-semibold py-2 px-4 rounded-full focus:outline-none w-full md:w-auto";
        }
        `}
      </script>
    </>
  );
};

export default KeyInsight;
