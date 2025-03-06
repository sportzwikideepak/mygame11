"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const DataMain = ({ matchId }) => {
  const [fantasyData, setFantasyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch fantasy points data from API
  useEffect(() => {
    const fetchFantasyPoints = async () => {
      try {
        const response = await fetch(
          `https://hammerhead-app-jkdit.ondigitalocean.app/api/fantasy-points/${matchId}`
        );
        const result = await response.json();

        if (result.status === "ok") {
          setFantasyData(result.response);
        } else {
          setError("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching fantasy points:", error);
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchFantasyPoints();
  }, [matchId]);

  // Filtering for sections
  const topPlayers = fantasyData.slice(0, 10); // Top 10 players
  const bottomPlayers = fantasyData.slice(-3); // Bottom 3 players
  const teamRankA = fantasyData.filter((player) => player.team_id === 19); // Team A players
  const teamRankB = fantasyData.filter((player) => player.team_id === 13); // Team B players

  // Loading and Error Handling
  if (loading) {
    return (
      <div className="text-center text-gray-500">
        <p>Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  // Main Component UI
  return (
    <div className="space-y-8">
      {/* Top Players Section */}
      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">Top Players</h4>
          <p className="text-gray-500 text-xs">
            Top players based on fantasy points earned in the last 2 matches
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
            {topPlayers.map((player, index) => (
              <div key={index} className="progress-item">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white text-sm font-semibold block">
                    {`${player.player_name} (${player.team_name})`}
                  </span>
                  <span className="text-white text-sm font-semibold block">
                    {`${player.total_fantasy_points} pts - ${player.num_matches} M`}
                  </span>
                </div>
                <div className="bg-white rounded-full flex">
                  <div
                    className="bg-red-700 h-0.5"
                    style={{
                      width: `${(player.total_fantasy_points / 1000) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white text-xs">M - Matches, pts - Points</p>
        </div>
      </div>

      {/* Bottom 3 Players Section */}
      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">Bottom 3 Players</h4>
          <p className="text-gray-500 text-xs">
            Players who performed below their potential in the last 2 matches
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
            {bottomPlayers.map((player, index) => (
              <div key={index} className="progress-item">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white text-sm font-semibold block">
                    {player.player_name}
                  </span>
                  <span className="text-white text-sm font-semibold block">
                    {`${player.total_fantasy_points} pts`}
                  </span>
                </div>
                <div className="bg-white rounded-full flex">
                  <div
                    className="bg-red-700 h-0.5"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team A Rank Section */}
      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">Team A Rank</h4>
          <p className="text-gray-500 text-xs">
            Top players from Team A based on fantasy points earned
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
            {teamRankA.map((player, index) => (
              <div key={index} className="progress-item">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white text-sm font-semibold block">
                    {player.player_name}
                  </span>
                  <span className="text-white text-sm font-semibold block">
                    {`${player.total_fantasy_points} pts - ${player.num_matches} M`}
                  </span>
                </div>
                <div className="bg-white rounded-full flex">
                  <div
                    className="bg-red-700 h-0.5"
                    style={{
                      width: `${(player.total_fantasy_points / 1000) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team B Rank Section */}
      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">Team B Rank</h4>
          <p className="text-gray-500 text-xs">
            Top players from Team B based on fantasy points earned
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
            {teamRankB.map((player, index) => (
              <div key={index} className="progress-item">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white text-sm font-semibold block">
                    {player.player_name}
                  </span>
                  <span className="text-white text-sm font-semibold block">
                    {`${player.total_fantasy_points} pts - ${player.num_matches} M`}
                  </span>
                </div>
                <div className="bg-white rounded-full flex">
                  <div
                    className="bg-red-700 h-0.5"
                    style={{
                      width: `${(player.total_fantasy_points / 1000) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataMain;
