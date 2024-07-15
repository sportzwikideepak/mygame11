import React from "react";

const InRecentMatchTable = ({ venueStats }) => {
  return (
    <>
      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">In Recent Matches</h4>
          <p className="text-gray-500 text-xs">
            At this venue in the last {venueStats.total_matches} matches
          </p>
        </div>

        <div className="bg-light-blue p-4 rounded-lg">
          <div className="grid grid-cols-12 gap-6">
            <div className="progress-item col-span-12">
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-500 text-xs font-semibold block">
                  Total Matches
                </span>
                <span className="text-black text-xs font-semibold block">
                  {venueStats.total_matches}
                </span>
              </div>
              <div className="bg-white rounded-full flex">
                <div
                  className="bg-brand-red h-0.5"
                  style={{ width: `${(venueStats.total_matches / 5) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="progress-item col-span-12">
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-500 text-xs font-semibold block">
                  Batting First
                </span>
                <span className="text-black text-xs font-semibold block">
                  {venueStats.wins_batting_first} win in{" "}
                  {venueStats.matches_batted_first} matches
                </span>
              </div>
              <div className="bg-white rounded-full flex">
                <div
                  className="bg-brand-red h-0.5"
                  style={{
                    width: `${
                      (venueStats.wins_batting_first /
                        venueStats.matches_batted_first) *
                        100 || 0
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="progress-item col-span-12">
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-500 text-xs font-semibold block">
                  Chasing
                </span>
                <span className="text-black text-xs font-semibold block">
                  {venueStats.wins_chasing} win in {venueStats.matches_chased}{" "}
                  matches
                </span>
              </div>
              <div className="bg-white rounded-full flex">
                <div
                  className="bg-brand-red h-0.5"
                  style={{
                    width: `${
                      (venueStats.wins_chasing / venueStats.matches_chased) *
                        100 || 0
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InRecentMatchTable;
