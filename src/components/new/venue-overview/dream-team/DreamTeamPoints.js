import Image from "next/image";
import React from "react";

const DreamTeamPoints = (FantasyOverview, matchId) => {
  return (
    <>
      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">
            Dream Team Points Breakdown
          </h4>
          <p className="text-gray-500 text-xs">
            Breakdown of fantasy points into batting, bowling and fielding
            points for players appearing in the dream team of the last played at
            this venue
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
                  257 PTS
                </span>
              </div>
              <div className="bg-white rounded-full flex">
                <div
                  className="bg-brand-red h-0.5"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="progress-item">
              <div className="flex justify-between items-center mb-1">
                <span className="text-white text-sm font-semibold block">
                  Bowling
                </span>
                <span className="text-white text-sm font-semibold block">
                  39 PTS
                </span>
              </div>
              <div className="bg-white rounded-full flex">
                <div
                  className="bg-brand-red h-0.5"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="progress-item">
              <div className="flex justify-between items-center mb-1">
                <span className="text-white text-sm font-semibold block">
                  Wicket - Keeper
                </span>
                <span className="text-white text-sm font-semibold block">
                  15 PTS
                </span>
              </div>
              <div className="bg-white rounded-full flex">
                <div
                  className="bg-brand-red h-0.5"
                  style={{ width: "70%" }}
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

export default DreamTeamPoints;
