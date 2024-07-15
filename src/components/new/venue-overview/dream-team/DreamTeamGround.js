"use client";
import Image from "next/image";
import React, { useState } from "react";

const DreamTeamGround = ({ matchId, FantasyOverview, topPlayers }) => {
  const [activeTab, setActiveTab] = useState(0); // 0 for Salary, 1 for Fantasy Points

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const distributePlayers = (topPlayers) => {
    // Filter players by their roles
    const batters = topPlayers.filter(
      (player) => player.playing_role === "bat"
    );
    const bowlers = topPlayers.filter(
      (player) => player.playing_role === "bowl"
    );
    const allRounders = topPlayers.filter(
      (player) => player.playing_role === "all"
    );
    const wicketKeepers = topPlayers.filter(
      (player) => player.playing_role === "wk"
    );

    // Ensure each array has at least one player
    const finalBatters = batters.length
      ? batters.slice(0, 1)
      : [topPlayers.find((player) => player.playing_role !== "bat")];
    const finalBowlers = bowlers.length
      ? bowlers.slice(0, 1)
      : [topPlayers.find((player) => player.playing_role !== "bowl")];
    const finalAllRounders = allRounders.length
      ? allRounders.slice(0, 1)
      : [topPlayers.find((player) => player.playing_role !== "all")];
    const finalWicketKeepers = wicketKeepers.length
      ? wicketKeepers.slice(0, 1)
      : [topPlayers.find((player) => player.playing_role !== "wk")];

    // Combine arrays and ensure total players are 11
    let finalPlayers = [
      ...finalBatters,
      ...finalBowlers,
      ...finalAllRounders,
      ...finalWicketKeepers,
    ];

    // Add additional players from the remaining players to make up 11 players
    const remainingPlayers = topPlayers.filter(
      (player) => !finalPlayers.includes(player)
    );
    while (finalPlayers.length < 11) {
      finalPlayers.push(remainingPlayers.shift());
    }

    return finalPlayers.slice(0, 11);
  };

  let finalPlayers = distributePlayers(topPlayers);

  const renderPlayer = (player) => (
    <div key={player.player_id} className="player-block text-center relative">
      <Image
        className="md:w-20 w-14"
        src="/static/avatar.png"
        width={82}
        height={82}
        alt=""
      />
      <div className="text-primary font-semibold text-xs w-full bg-white mb-1 py-0.5">
        <span className="text-[10px] md:text-xs">{player.short_name}</span>
      </div>
      <p className="text-[10px] md:text-xs font-semibold text-white">
        {player?.short_team_name} |{" "}
        {activeTab === 0
          ? parseInt(player?.stats?.average_rating)
          : player?.total_fantasy_points}
      </p>
    </div>
  );

  return (
    <>
      <div className="bg-light-primary rounded-lg">
        <div className="text-center py-3">
          <h6 className="text-sm text-primary font-bold mb-1">Dream Team</h6>
          <p className="text-primary text-xs font-bold">
            <span className="text-brand-red text-sm">
              {finalPlayers.reduce(
                (total, player) =>
                  total + parseInt(player?.total_fantasy_points),
                0
              )}
            </span>{" "}
            Dream team PTS
          </p>
        </div>
        <div className="rounded-lg relative p-2 sm:p-6 overflow-hidden">
          <Image
            src="/static/ground-bg.svg"
            className="absolute w-full h-full start-0 top-0 object-cover"
            alt=""
            layout="fill"
          />
          <Image
            src="/static/pitch-center-circle.svg"
            className="w-7/12 opacity-50 pitch-circle absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2"
            alt=""
            layout="fill"
          />
          <div className="relative">
            <div className="text-center mb-6">
              <div className="tabs flex justify-center flex-wrap gap-5 relative mb-5">
                <button
                  className={`pb-2 border-b-2 text-xs font-semibold ${
                    activeTab === 0 ? "border-primary" : ""
                  }`}
                  onClick={() => handleTabChange(0)}
                >
                  Salary
                </button>
                <button
                  className={`pb-2 border-b-2 text-xs font-semibold ${
                    activeTab === 1 ? "border-primary" : ""
                  }`}
                  onClick={() => handleTabChange(1)}
                >
                  Fantasy Points
                </button>
              </div>
            </div>

            <div className="text-center">
              <h6 className="mb-4 font-bold text-white text-sm">
                WICKET-KEEPERS
              </h6>
              <div className="flex gap-2 justify-center mb-12">
                {finalPlayers
                  .filter((player) => player?.playing_role === "wk")
                  .map(renderPlayer)}
              </div>

              <div className="relative">
                <div className="pitch bg-[#B8AA48] w-[22%] h-[83%] absolute start-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg">
                  <Image
                    src="/static/pitch-lines-top.svg"
                    className="absolute w-full top-0 start-0"
                    alt=""
                    layout="fill"
                  />
                  <Image
                    src="/static/pitch-lines-bottom.svg"
                    className="absolute w-full bottom-0 start-0"
                    alt=""
                    layout="fill"
                  />
                </div>
                <div className="text-center relative">
                  <h6 className="mb-6 font-bold text-white text-sm">BATSMEN</h6>
                  <div className="flex gap-2 justify-around mb-12">
                    {finalPlayers
                      .filter((player) => player?.playing_role === "bat")
                      .map(renderPlayer)}
                  </div>
                </div>

                <div className="text-center relative">
                  <h6 className="mb-6 font-bold text-white text-sm">
                    ALL-ROUNDER
                  </h6>
                  <div className="flex gap-2 justify-around mb-12">
                    {finalPlayers
                      .filter((player) => player?.playing_role === "all")
                      .map(renderPlayer)}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h6 className="mb-3 font-bold text-white text-sm">BOWLERS</h6>
                <div className="flex gap-2 justify-around mb-5">
                  {finalPlayers
                    .filter((player) => player?.playing_role === "bowl")
                    .map(renderPlayer)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DreamTeamGround;
