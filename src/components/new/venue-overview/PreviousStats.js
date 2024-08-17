import React from "react";

const PreviousStats = ({ venueTrends }) => {
  const lastMatchesCount = 4; // or another logic to determine the count
  const lastWins =
    +venueTrends.wins_without_toss_consideration?.batting_first +
    +venueTrends.wins_without_toss_consideration?.chasing;

  return (
    <>
      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">Balanced Pitch</h4>
          <p className="text-gray-500 text-xs">
            Make even selection of batsman and bowlers 
          </p>
        </div>

        <div className="bg-light-blue p-4 rounded-lg">
          <ul className="flex flex-col gap-2">
            <li className="bg-white text-sm font-bold px-4 py-3 flex justify-between items-center rounded-xl">
              <h6 className="text-gray-500">Total Matches at this Venue</h6>
              <span className="text-black">{venueTrends.total_matches}</span>
            </li>
            <li className="bg-white text-sm font-bold px-4 py-3 flex justify-between items-center rounded-xl">
              <h6 className="text-gray-500">Batting first</h6>
              <span className="text-black">
                {venueTrends.wins_batting_first} win
                in {venueTrends.total_matches} matches
              </span>
            </li>
            <li className="bg-white text-sm font-bold px-4 py-3 flex justify-between items-center rounded-xl">
              <h6 className="text-gray-500">Chasing</h6>
              <span className="text-black">
                {venueTrends?.wins_chasing} win in{" "}
                {venueTrends.total_matches} matches
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PreviousStats;
