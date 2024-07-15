import React from "react";

const TopStats = ({ venueData }) => {
  return (
    <>
      <div className="bg-white p-4 border border-gray-200 rounded-lg">
        <p className="text-gray-500 text-sm mb-5">
          T20 on this venue over the last 6 months. Points are displayed only
          for batting & bowling efforts, fielding related points are not
          calculated.
        </p>
        <ul className="flex flex-col gap-2 mb-1">
          <li className="bg-light-blue text-sm font-bold px-4 py-3 flex justify-between items-center rounded-xl">
            <h6 className="text-gray-500">Avg first innings score</h6>
            <span className="text-black">
              {parseInt(venueData.avg_first_innings_score)}
            </span>
          </li>
          <li className="bg-light-blue text-sm font-bold px-4 py-3 flex justify-between items-center rounded-xl">
            <h6 className="text-gray-500">Avg wickets lost per innings</h6>
            <span className="text-black">
              {parseInt(venueData.avg_wickets)}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopStats;
