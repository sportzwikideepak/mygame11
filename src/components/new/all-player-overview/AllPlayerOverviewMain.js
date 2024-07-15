"use client";
import Image from "next/image";
import React, { useState } from "react";
import PlayerVsPlayer from "../data-analytics/PlayerVsPlayer";

const parseIntOrDash = (value) => (value ? parseInt(value, 10) : "-");

const mapDataToTable = (data) => {
  return data.map((player) => ({
    name: `${player.first_name} ${player.last_name}`,
    avgFpts: parseIntOrDash(player.avg_fantasy_points),
    totalFpts: parseIntOrDash(player.total_fantasy_points),
    avgFptsVsOpposition: "-",
    avgFptsAtVenue: parseIntOrDash(player.avg_fp_bat_second),
    inDreamTeam: parseIntOrDash(player.in_dream_team),
    playerRank: parseIntOrDash(player.player_rank),
    playerBottomRank: parseIntOrDash(player.player_bottom_rank),
    avgPositionRank: parseIntOrDash(player.avg_position_rank),
    avgTeamRank: parseIntOrDash(player.avg_team_rank),
  }));
};

const AllPlayerOverviewMain = ({
  top_players,
  overallMatchData,
  lastFiveMatchData,
  lastMatchData,
}) => {
  const [activeTab, setActiveTab] = useState("Last Match");

  const lastMatchTableData = mapDataToTable(lastMatchData);
  const lastFiveMatchTableData = mapDataToTable(lastFiveMatchData);
  const overallMatchTableData = mapDataToTable(overallMatchData);

  const getActiveData = () => {
    switch (activeTab) {
      case "Last Match":
        return lastMatchTableData;
      case "Last 5 Matches":
        return lastFiveMatchTableData;
      case "Overall":
        return overallMatchTableData;
      default:
        return lastMatchTableData;
    }
  };

  const activeData = getActiveData();

  return (
    <section className="py-6">
      <div className="container max-w-[1048px] mx-auto px-3">
        <div className="grid grid-cols-12 gap-4 2xl:gap-6">
          <div className="col-span-12">
            <div>
              <p className="text-sm text-gray-500 font-semibold mb-4 text-center">
                Data shown is based on the same format played from the team
              </p>
              <div className="tabs-slider flex gap-3 mb-4 text-sm overflow-auto bg-light-primary rounded-full py-2 px-2">
                <div className="tabs-item">
                  <button
                    className={`font-semibold rounded-full py-1 px-5 whitespace-nowrap w-full ${
                      activeTab === "Last Match"
                        ? "bg-primary text-white"
                        : "text-primary bg-white"
                    }`}
                    onClick={() => setActiveTab("Last Match")}
                  >
                    Last Match
                  </button>
                </div>
                <div className="tabs-item">
                  <button
                    className={`font-semibold rounded-full py-1 px-5 whitespace-nowrap w-full ${
                      activeTab === "Last 5 Matches"
                        ? "bg-primary text-white"
                        : "text-primary bg-white"
                    }`}
                    onClick={() => setActiveTab("Last 5 Matches")}
                  >
                    Last 5 Matches
                  </button>
                </div>
                <div className="tabs-item">
                  <button
                    className={`font-semibold rounded-full py-1 px-5 whitespace-nowrap w-full ${
                      activeTab === "Overall"
                        ? "bg-primary text-white"
                        : "text-primary bg-white"
                    }`}
                    onClick={() => setActiveTab("Overall")}
                  >
                    Overall
                  </button>
                </div>
              </div>
              <div className="bg-light-blue py-3 px-4 rounded-lg">
                <div className="overflow-auto">
                  <table className="w-full border-collapse text-sm divide-y divide-gray-200 border border-gray-200 bg-white">
                    <thead>
                      <tr className="divide-x divide-gray-200">
                        <th className="text-start text-black py-3 px-3 bg-gray-50">
                          Players
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                          Total FPTS
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                          Avg. FPTS
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                          Avg. FPTS vs Opposition
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                          Avg. FPTS at Venue
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                          In Dream Team
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                          Player Rank
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                          Player Bottom Rank
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                          Avg. Position Rank
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                          Avg. Team Rank
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {activeData.map((player, index) => (
                        <tr className="divide-x divide-gray-200" key={index}>
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
                              {player.totalFpts}
                            </h6>
                          </td>
                          <td className="text-center py-3 px-3 text-black font-semibold">
                            <h6 className="text-sm font-semibold text-primary">
                              {player.avgFpts}
                            </h6>
                          </td>
                          <td className="text-center py-3 px-3 text-black font-semibold">
                            <h6 className="text-sm font-semibold text-primary">
                              {player.avgFptsVsOpposition}
                            </h6>
                          </td>
                          <td className="text-center py-3 px-3 text-black font-semibold">
                            <h6 className="text-sm font-semibold text-primary">
                              {player.avgFptsAtVenue}
                            </h6>
                          </td>
                          <td className="text-center py-3 px-3 text-black font-semibold">
                            <h6 className="text-sm font-semibold text-primary">
                              {player.inDreamTeam}
                            </h6>
                          </td>
                          <td className="text-center py-3 px-3 text-black font-semibold">
                            <h6 className="text-sm font-semibold text-primary">
                              {player.playerRank}
                            </h6>
                          </td>
                          <td className="text-center py-3 px-3 text-black font-semibold">
                            <h6 className="text-sm font-semibold text-primary">
                              {player.playerBottomRank}
                            </h6>
                          </td>
                          <td className="text-center py-3 px-3 text-black font-semibold">
                            <h6 className="text-sm font-semibold text-primary">
                              {player.avgPositionRank}
                            </h6>
                          </td>
                          <td className="text-center py-3 px-3 text-black font-semibold">
                            <h6 className="text-sm font-semibold text-primary">
                              {player.avgTeamRank}
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
  );
};

export default AllPlayerOverviewMain;
