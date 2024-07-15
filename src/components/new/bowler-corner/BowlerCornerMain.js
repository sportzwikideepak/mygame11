"use client";
import Image from "next/image";
import React, { useState } from "react";
import PlayerVsPlayer from "../data-analytics/PlayerVsPlayer";

const parseFloatOrDash = (value) =>
  value ? parseFloat(value).toFixed(2) : "-";

const mapDataToTable = (data) => {
  return data.map((player) => ({
    name: `${player.first_name} ${player.last_name}`,
    bowlingStyle: player.bowling_style || "-",
    playingRole: player.playing_role || "-",
    teamName: player.team_name || "-",
    avgFpts: parseFloatOrDash(player.avg_fantasy_points),
    avgFptsBowlingFirst: parseFloatOrDash(player.avg_fp_bowling_first),
    avgFptsBowlingSecond: parseFloatOrDash(player.avg_fp_bowling_second),
    totalWickets: parseFloatOrDash(player.total_wickets),
    totalOvers: parseFloatOrDash(player.total_overs),
    avgFptsAtVenue: parseFloatOrDash(player.avg_fp_at_venue),
  }));
};

const BowlerCornerMain = ({
  data,
  top_players,
  lastMatchPlayerStats,
  fiveMatchPlayerStats,
  overallPlayersStats,
}) => {
  const [tab, setTab] = useState("tab1");
  const [bowlingStyle, setBowlingStyle] = useState("All");
  const [playingRole, setPlayingRole] = useState("All");
  const [teamName, setTeamName] = useState("All");

  const [showBowlingStyleDropdown, setShowBowlingStyleDropdown] =
    useState(false);
  const [showPlayingRoleDropdown, setShowPlayingRoleDropdown] = useState(false);
  const [showTeamNameDropdown, setShowTeamNameDropdown] = useState(false);

  const lastMatchTableData = mapDataToTable(lastMatchPlayerStats);
  const fiveMatchTableData = mapDataToTable(fiveMatchPlayerStats);
  const overallTableData = mapDataToTable(overallPlayersStats);

  const getActiveData = () => {
    let activeData = (() => {
      switch (tab) {
        case "tab1":
          return lastMatchTableData;
        case "tab2":
          return fiveMatchTableData;
        case "tab3":
          return overallTableData;
        default:
          return lastMatchTableData;
      }
    })();

    if (bowlingStyle !== "All") {
      activeData = activeData.filter(
        (player) => player.bowlingStyle === bowlingStyle
      );
    }
    if (playingRole !== "All") {
      activeData = activeData.filter(
        (player) => player.playingRole === playingRole
      );
    }
    if (teamName !== "All") {
      activeData = activeData.filter((player) => player.teamName === teamName);
    }
    return activeData;
  };

  const activeData = getActiveData();

  const uniqueBowlingStyles = [
    "All",
    ...new Set(
      [...lastMatchTableData, ...fiveMatchTableData, ...overallTableData].map(
        (player) => player.bowlingStyle
      )
    ),
  ];

  const uniquePlayingRoles = [
    "All",
    ...new Set(
      [...lastMatchTableData, ...fiveMatchTableData, ...overallTableData].map(
        (player) => player.playingRole
      )
    ),
  ];

  const uniqueTeamNames = [
    "All",
    ...new Set(
      [...lastMatchTableData, ...fiveMatchTableData, ...overallTableData].map(
        (player) => player.teamName
      )
    ),
  ];

  return (
    <>
      <main className="">
        <section className="py-6">
          <div className="container max-w-[1048px] mx-auto px-3">
            <div className="grid grid-cols-12 gap-4 2xl:gap-6">
              <div className="col-span-12">
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-4 text-center">
                    Data shown is based on the same format played from the team
                  </p>

                  <div className="bg-light-blue py-3 px-4 rounded-lg">
                    <div className="tabs-slider flex gap-3 mb-4 text-sm overflow-auto bg-light-primary justify-center rounded-full py-2 px-2">
                      <div className="tabs-item">
                        <button
                          className={`font-semibold rounded-full py-1 px-5 whitespace-nowrap w-full ${
                            tab === "tab1"
                              ? "bg-primary text-white"
                              : "text-primary bg-white"
                          }`}
                          onClick={() => setTab("tab1")}
                        >
                          Last Match
                        </button>
                      </div>
                      <div className="tabs-item">
                        <button
                          className={`font-semibold rounded-full py-1 px-5 whitespace-nowrap w-full ${
                            tab === "tab2"
                              ? "bg-primary text-white"
                              : "text-primary bg-white"
                          }`}
                          onClick={() => setTab("tab2")}
                        >
                          Last 10 Matches
                        </button>
                      </div>
                      <div className="tabs-item">
                        <button
                          className={`font-semibold rounded-full py-1 px-5 whitespace-nowrap w-full ${
                            tab === "tab3"
                              ? "bg-primary text-white"
                              : "text-primary bg-white"
                          }`}
                          onClick={() => setTab("tab3")}
                        >
                          This Series
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-1 gap-x-5 gap-y-6 mb-2">
                      <div className="col-span-1 relative">
                        <button
                          className="bg-white rounded-lg py-2 px-4 flex items-center justify-between gap-2 w-full relative"
                          onClick={() =>
                            setShowBowlingStyleDropdown(
                              !showBowlingStyleDropdown
                            )
                          }
                        >
                          <span className="floating-label text-xs text-gray-500 font-semibold absolute top-0 start-4 -translate-y-1/2">
                            Bowling Style
                          </span>
                          <span className="text-primary font-bold text-sm">
                            {bowlingStyle}
                          </span>
                          <div className="icon shrink-0 w-5 h-5 bg-white rounded-full grid place-content-center">
                            <Image
                              height={20}
                              width={20}
                              src="/static/icons/arrow-down.svg"
                              alt=""
                            />
                          </div>
                        </button>
                        {showBowlingStyleDropdown && (
                          <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md">
                            {uniqueBowlingStyles.map((style, index) => (
                              <div
                                key={index}
                                className="py-2 px-4 hover:bg-light-primary cursor-pointer"
                                onClick={() => {
                                  setBowlingStyle(style);
                                  setShowBowlingStyleDropdown(false);
                                }}
                              >
                                {style}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="col-span-1 relative">
                        <button
                          className="bg-white rounded-lg py-2 px-4 flex items-center justify-between gap-2 w-full relative"
                          onClick={() =>
                            setShowPlayingRoleDropdown(!showPlayingRoleDropdown)
                          }
                        >
                          <span className="floating-label text-xs text-gray-500 font-semibold absolute top-0 start-4 -translate-y-1/2">
                            Position
                          </span>
                          <span className="text-primary font-bold text-sm">
                            {playingRole}
                          </span>
                          <div className="icon shrink-0 w-5 h-5 bg-white rounded-full grid place-content-center">
                            <Image
                              height={20}
                              width={20}
                              src="/static/icons/arrow-down.svg"
                              alt=""
                            />
                          </div>
                        </button>
                        {showPlayingRoleDropdown && (
                          <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md">
                            {uniquePlayingRoles.map((role, index) => (
                              <div
                                key={index}
                                className="py-2 px-4 hover:bg-light-primary cursor-pointer"
                                onClick={() => {
                                  setPlayingRole(role);
                                  setShowPlayingRoleDropdown(false);
                                }}
                              >
                                {role}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="col-span-1 relative">
                        <button
                          className="bg-white rounded-lg py-2 px-4 flex items-center justify-between gap-2 w-full relative"
                          onClick={() =>
                            setShowTeamNameDropdown(!showTeamNameDropdown)
                          }
                        >
                          <span className="floating-label text-xs text-gray-500 font-semibold absolute top-0 start-4 -translate-y-1/2">
                            Teams
                          </span>
                          <span className="text-primary font-bold text-sm">
                            {teamName}
                          </span>
                          <div className="icon shrink-0 w-5 h-5 bg-white rounded-full grid place-content-center">
                            <Image
                              height={20}
                              width={20}
                              src="/static/icons/arrow-down.svg"
                              alt=""
                            />
                          </div>
                        </button>
                        {showTeamNameDropdown && (
                          <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md">
                            {uniqueTeamNames.map((team, index) => (
                              <div
                                key={index}
                                className="py-2 px-4 hover:bg-light-primary cursor-pointer"
                                onClick={() => {
                                  setTeamName(team);
                                  setShowTeamNameDropdown(false);
                                }}
                              >
                                {team}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="overflow-auto">
                      <table className="w-full border-collapse text-sm divide-y divide-gray-200 border border-gray-200 bg-white">
                        <thead>
                          <tr className="divide-x divide-gray-200">
                            <th className="text-start text-black py-3 px-3 bg-gray-50">
                              Players
                            </th>
                            <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                              Bowling Style
                            </th>
                            <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                              Avg. FPTS
                            </th>
                            <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                              Avg. FPTS Bowling 1st
                            </th>
                            <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                              Avg. FPTS Bowling 2nd
                            </th>
                            <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                              Total Wickets
                            </th>
                            <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                              Total Overs
                            </th>
                            <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                              Avg. FPTS at Venue
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {activeData.map((player, index) => (
                            <tr
                              className="divide-x divide-gray-200"
                              key={index}
                            >
                              <td className="py-3 px-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 rounded-full bg-yellow-500 shrink-0" />
                                  <p className="text-primary font-bold whitespace-nowrap">
                                    {player.name}
                                  </p>
                                </div>
                              </td>
                              <td className="text-center py-3 px-3 text-black font-semibold">
                                <h6 className="text-sm font-semibold text-primary">
                                  {player.bowlingStyle}
                                </h6>
                              </td>
                              <td className="text-center py-3 px-3 text-black font-semibold">
                                <h6 className="text-sm font-semibold text-primary">
                                  {player.avgFpts}
                                </h6>
                              </td>
                              <td className="text-center py-3 px-3 text-black font-semibold">
                                <h6 className="text-sm font-semibold text-primary">
                                  {player.avgFptsBowlingFirst}
                                </h6>
                              </td>
                              <td className="text-center py-3 px-3 text-black font-semibold">
                                <h6 className="text-sm font-semibold text-primary">
                                  {player.avgFptsBowlingSecond}
                                </h6>
                              </td>
                              <td className="text-center py-3 px-3 text-black font-semibold">
                                <h6 className="text-sm font-semibold text-primary">
                                  {player.totalWickets}
                                </h6>
                              </td>
                              <td className="text-center py-3 px-3 text-black font-semibold">
                                <h6 className="text-sm font-semibold text-primary">
                                  {player.totalOvers}
                                </h6>
                              </td>
                              <td className="text-center py-3 px-3 text-black font-semibold">
                                <h6 className="text-sm font-semibold text-primary">
                                  {player.avgFptsAtVenue}
                                </h6>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PlayerVsPlayer top_players={top_players} />
          </div>
        </section>
      </main>
    </>
  );
};

export default BowlerCornerMain;
