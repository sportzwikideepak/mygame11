"use client";
import Image from "next/image";
import React, { useState } from "react";

const DataMain = ({
  matchStats,
  dreamTeamStats,
  teamPlayersA,
  teamPlayersB,
  bottom3,
}) => {
  const calculateAveragePoints = (players) => {
    return players?.map((player) => ({
      ...player,
      avg_fantasy_points: player.match_count
        ? player.total_fantasy_points / player.match_count
        : 0,
    }));
  };

  const lastMatchPlayers = calculateAveragePoints(
    matchStats?.last_match?.players
  );
  const lastFiveMatchesPlayers = calculateAveragePoints(
    matchStats?.last_five_matches?.players
  );
  const allMatchesPlayers = calculateAveragePoints(
    matchStats?.all_matches?.players
  );

  const [activeTab, setActiveTab] = useState("Last 5 T20");

  const getPlayerData = () => {
    switch (activeTab) {
      case "Last 5 T20":
        return lastFiveMatchesPlayers;
      case "Last Match":
        return lastMatchPlayers;
      case "This Series":
        return allMatchesPlayers;
      default:
        return allMatchesPlayers;
    }
  };

  const players = getPlayerData();

  return (
    <>
      <div className="tabs-slider flex gap-3 mb-6 text-sm overflow-auto">
        {["Last 5 T20", "Last Match", "This Series"].map((tab) => (
          <div className="tabs-item w-auto" key={tab}>
            <button
              className={`border font-semibold rounded-full py-1 px-4 whitespace-nowrap ${
                activeTab === tab
                  ? "border-primary text-primary bg-[#0e1f49] text-white"
                  : "border-primary"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">Avg Fantasy Points</h4>
          <p className="text-gray-500 text-xs">
            Top players on the basis of fantasy points earn in the last 5
            matches
          </p>
        </div>
        <div className="bg-primary relative rounded-lg p-4 isolate">
          <Image
            src="/static/card-bg.png"
            layout="fill"
            objectFit="cover"
            className="start-0 top-0 absolute object-cover -z-10 pointer-events-none"
            alt=""
          />
          <div className="flex flex-col gap-5 mb-5">
            {players?.map((player, index) => (
              <div key={index} className="progress-item">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white text-sm font-semibold block">
                    {`${player.player_name.trim()} (${player.team_name})`}
                  </span>
                  <span className="text-white text-sm font-semibold block">
                    {`${player.avg_fantasy_points.toFixed(2)} pts - ${
                      player.match_count
                    } M`}
                  </span>
                </div>
                <div className="bg-white rounded-full flex">
                  <div
                    className="bg-red-700 h-0.5"
                    style={{
                      width: `${(player.avg_fantasy_points / 1000) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white text-xs">M - Matches, pts - Points</p>
        </div>
      </div>

      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">Avg Fantasy Points</h4>
          <p className="text-gray-500 text-xs">
            Top players on the basis of fantasy points earn in the last 5
            matches
          </p>
        </div>
        <div className="bg-primary relative rounded-lg p-4 isolate">
          <Image
            height={20}
            width={20}
            src="/static/card-bg.png"
            className="w-full h-full start-0 top-0 absolute object-cover -z-10 pointer-events-none"
            alt=""
          />
          <div className="flex flex-col gap-5 mb-5">
            {lastFiveMatchesPlayers?.map((item, index) => (
              <div key={index} className="progress-item">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white text-sm font-semibold block">
                    {`${item.player_name} (${item.team_name})`}
                  </span>
                  <span className="text-white text-sm font-semibold block">
                    {`${item.avg_fantasy_points.toFixed(2)} pts - ${
                      item.match_count
                    } M`}
                  </span>
                </div>
                <div className="bg-white rounded-full flex">
                  <div
                    className="bg-red-700 h-0.5"
                    style={{
                      width: `${(item.avg_fantasy_points / 1000) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white text-xs">M - Matches, pts - Points</p>
        </div>
      </div>

      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">
            Part Of Cricketaddictor
          </h4>
          <p className="text-gray-500 text-xs">
            Players frequently featuring in dream teams
          </p>
        </div>
        <div className="bg-primary relative rounded-lg p-4 isolate">
          <Image
            height={20}
            width={20}
            src="/static/card-bg.png"
            className="w-full h-full start-0 top-0 absolute object-cover -z-10 pointer-events-none"
            alt=""
          />
          <div className="flex flex-col gap-5 mb-5">
            {dreamTeamStats?.dream_team_stats?.last_five_matches.map(
              (player, index) => (
                <div key={index} className="progress-item">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white text-sm font-semibold block">
                      {player?.first_name}
                    </span>
                    <span className="text-white text-sm font-semibold block">
                      {player?.occurrences} T
                    </span>
                  </div>
                  <div className="bg-white rounded-full flex">
                    <div
                      className="bg-red-700 h-0.5"
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>
              )
            )}
          </div>
          <p className="text-white text-xs">T - Times</p>
        </div>
      </div>

      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">Team Rank A</h4>
          <p className="text-gray-500 text-xs">
            Top players from each team based on fantasy points earned in the
            last 5 matches
          </p>
        </div>
        <div className="bg-primary relative rounded-lg p-4 isolate">
          <Image
            height={20}
            width={20}
            src="/static/card-bg.png"
            className="w-full h-full start-0 top-0 absolute object-cover -z-10 pointer-events-none"
            alt=""
          />
          <div className="flex flex-col gap-5 mb-5">
            {teamPlayersA?.map((player, index) => (
              <div key={index} className="progress-item">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white text-sm font-semibold block">
                    {player?.player_name}
                  </span>
                  <span className="text-white text-sm font-semibold block">
                    {player?.total_fantasy_points} pts - {player?.match_count} M
                  </span>
                </div>
                <div className="bg-white rounded-full flex">
                  <div className="bg-red-700 h-0.5" style={{ width: "70%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">Team Rank B</h4>
          <p className="text-gray-500 text-xs">
            Top players from each team based on fantasy points earned in the
            last 5 matches
          </p>
        </div>
        <div className="bg-primary relative rounded-lg p-4 isolate">
          <Image
            height={20}
            width={20}
            src="/static/card-bg.png"
            className="w-full h-full start-0 top-0 absolute object-cover -z-10 pointer-events-none"
            alt=""
          />
          <div className="flex flex-col gap-5 mb-5">
            {teamPlayersB?.map((player, index) => (
              <div key={index} className="progress-item">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white text-sm font-semibold block">
                    {player?.player_name}
                  </span>
                  <span className="text-white text-sm font-semibold block">
                    {player?.total_fantasy_points} pts - {player?.match_count} M
                  </span>
                </div>
                <div className="bg-white rounded-full flex">
                  <div className="bg-red-700 h-0.5" style={{ width: "70%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">Bottom 3 Players</h4>
          <p className="text-gray-500 text-xs">
            Players who performed below their potential in the last 5 matches
          </p>
        </div>
        <div className="bg-primary relative rounded-lg p-4 isolate">
          <Image
            height={20}
            width={20}
            src="/static/card-bg.png"
            className="w-full h-full start-0 top-0 absolute object-cover -z-10 pointer-events-none"
            alt=""
          />
          <div className="relative">
            <div className="flex flex-col gap-5 mb-5">
              {bottom3?.map((player, index) => (
                <div key={index} className="progress-item">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white text-sm font-semibold block">
                      {player?.player_name}
                    </span>
                    <span className="text-white text-sm font-semibold block">
                      {player?.total_fantasy_points}
                    </span>
                  </div>
                  <div className="bg-white rounded-full flex">
                    <div
                      className="bg-red-700 h-0.5"
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataMain;
