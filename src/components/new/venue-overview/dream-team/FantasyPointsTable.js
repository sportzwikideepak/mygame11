import Image from "next/image";
import React from "react";

const FantasyPointsTable = ({ pointsByRole }) => {
  return (
    <>
      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">
            Fantasy points contribution by position in Dream Team
          </h4>
          <p className="text-gray-500 text-xs">
            Breakdown of fantasy points based on position for players appearing
            in the dream team of the last played at this venue
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
            <div className="progress-item">
              <div className="flex justify-between items-center mb-1">
                <span className="text-white text-sm font-semibold block">
                  Batting
                </span>
                <span className="text-white text-sm font-semibold block">
                  {pointsByRole.Batting} PTS
                </span>
              </div>
              <div className="bg-white rounded-full flex">
                <div
                  className="bg-brand-red h-0.5"
                  style={{ width: `${(pointsByRole.Batting / 257) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="progress-item">
              <div className="flex justify-between items-center mb-1">
                <span className="text-white text-sm font-semibold block">
                  Bowling
                </span>
                <span className="text-white text-sm font-semibold block">
                  {pointsByRole.Bowling} PTS
                </span>
              </div>
              <div className="bg-white rounded-full flex">
                <div
                  className="bg-brand-red h-0.5"
                  style={{ width: `${(pointsByRole.Bowling / 257) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="progress-item">
              <div className="flex justify-between items-center mb-1">
                <span className="text-white text-sm font-semibold block">
                  Wicket - Keeper
                </span>
                <span className="text-white text-sm font-semibold block">
                  {pointsByRole["Wicket-Keeper"]} PTS
                </span>
              </div>
              <div className="bg-white rounded-full flex">
                <div
                  className="bg-brand-red h-0.5"
                  style={{
                    width: `${(pointsByRole["Wicket-Keeper"] / 257) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="progress-item">
              <div className="flex justify-between items-center mb-1">
                <span className="text-white text-sm font-semibold block">
                  All - Rounder
                </span>
                <span className="text-white text-sm font-semibold block">
                  {pointsByRole["All-Rounder"]} PTS
                </span>
              </div>
              <div className="bg-white rounded-full flex">
                <div
                  className="bg-brand-red h-0.5"
                  style={{
                    width: `${(pointsByRole["All-Rounder"] / 257) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <p className="text-white text-xs">M - Matches, pts - Points</p>
        </div>
      </div>
    </>
  );
};

export default FantasyPointsTable;
