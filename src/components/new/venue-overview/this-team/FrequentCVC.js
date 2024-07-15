import Image from "next/image";
import React from "react";

const FrequentCVC = ({ topPlayers }) => {
  return (
    <>
      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">
            Frequent captain and vice captain appearances on this venue
          </h4>
          <p className="text-gray-500 text-xs">
            According to last 5 years data
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
          {/* <div className="tabs flex flex-wrap gap-5 relative mb-5">
            <button className="pb-2 border-b-2 text-white text-xs font-semibold">
              Top Players
            </button>
            <button className="pb-2 border-b-2 text-white text-xs font-semibold">
              Batting First
            </button>
            <button className="pb-2 border-b-2 text-white text-xs font-semibold">
              Chasing
            </button>
          </div> */}
          <div className="relative">
            <div className="flex flex-col gap-5 mb-5">
              {topPlayers?.slice(0, 10)?.map((player) => {
                return (
                  <>
                    <div className="progress-item">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white text-sm font-semibold block">
                          {player?.short_name} ({player?.playing_role} -{" "}
                          {player?.short_team_name})
                        </span>
                        <span className="text-white text-sm font-semibold block">
                          {player?.total_fantasy_points} pts -{" "}
                          {player?.matches_played} M
                        </span>
                      </div>
                      <div className="bg-white rounded-full flex">
                        <div
                          className="bg-red-700 h-0.5"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <p className="text-white text-xs">T - Times, pts - Points</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrequentCVC;
