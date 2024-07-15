import Image from "next/image";
import React from "react";

const TotalFantasyPointsTable = ({ topPlayers }) => {
  const renderPlayer = (player, index) => (
    <div key={index} className="progress-item">
      <div className="flex justify-between items-center mb-1">
        <span className="text-white text-sm font-semibold block">
          {player.short_name} ({player.playing_role.toUpperCase()} -{" "}
          {player.short_team_name})
        </span>
        <span className="text-white text-sm font-semibold block">
          {player.total_fantasy_points} pts - {player.stats.matches_played} M
        </span>
      </div>
      <div className="bg-white rounded-full flex">
        <div
          className="bg-red-700 h-0.5"
          style={{
            width: `${
              (player.total_fantasy_points /
                Math.max(...topPlayers.map((p) => p.total_fantasy_points))) *
              100
            }%`,
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">
            Total Fantasy Points
          </h4>
          <p className="text-gray-500 text-xs">
            Top players on the basis of fantasy points earned in the 5 matches
            played by the team
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
            {topPlayers.map((player, index) => renderPlayer(player, index))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalFantasyPointsTable;
