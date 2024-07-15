import Image from "next/image";
import React from "react";

const TeamStatsMain = ({ data }) => {
  return (
    <>
      <div className="col-span-12 md:col-span-7">
        <div className="flex flex-col gap-4">
          <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
            <div className="grid grid-cols-2 gap-x-5 gap-y-6 mb-2">
              {/* Filters - Keep them as they are */}
              <div className="col-span-1">
                <button className="bg-light-blue rounded-lg py-2 px-4 flex items-center justify-between gap-2 w-full relative">
                  <span className="floating-label text-xs text-gray-500 font-semibold absolute top-0 start-4 -translate-y-1/2">
                    No. of stats
                  </span>
                  <span className="text-primary font-bold text-sm">1</span>
                  <div className="icon shrink-0 w-5 h-5 bg-white rounded-full grid place-content-center">
                    <Image
                      height={20}
                      width={20}
                      src="/static/icons/arrow-down.svg"
                      alt=""
                    />
                  </div>
                </button>
              </div>

              <div className="col-span-1">
                <button className="bg-light-blue rounded-lg py-2 px-4 flex items-center justify-between gap-2 w-full relative">
                  <span className="floating-label text-xs text-gray-500 font-semibold absolute top-0 start-4 -translate-y-1/2">
                    League filter
                  </span>
                  <span className="text-primary font-bold text-sm">All</span>
                  <div className="icon shrink-0 w-5 h-5 bg-white rounded-full grid place-content-center">
                    <Image
                      height={20}
                      width={20}
                      src="/static/icons/arrow-down.svg"
                      alt=""
                    />
                  </div>
                </button>
              </div>

              <div className="col-span-1 bg-light-blue rounded-lg flex">
                <button className="text-xs py-2 px-3 rounded-lg font-semibold flex-1 bg-primary text-white">
                  T20
                </button>
                <button className="text-xs py-2 px-3 rounded-lg font-semibold flex-1 text-primary">
                  ODI
                </button>
                <button className="text-xs py-2 px-3 rounded-lg font-semibold flex-1 text-primary">
                  Test
                </button>
              </div>

              <div className="col-span-1 bg-light-blue rounded-lg flex">
                <button className="text-xs py-2 px-3 rounded-lg font-semibold flex-1 bg-primary text-white">
                  Form
                </button>
                <button className="text-xs py-2 px-3 rounded-lg font-semibold flex-1 text-primary">
                  Opposition
                </button>
                <button className="text-xs py-2 px-3 rounded-lg font-semibold flex-1 text-primary">
                  Venue
                </button>
              </div>

              <div className="relative col-span-2">
                <input
                  type="text"
                  className="bg-light-blue rounded-lg py-3 px-4 w-full text-sm focus:ring-1 focus:ring-primary focus:outline-0"
                  placeholder="Search Matches"
                />
                <Image
                  height={20}
                  width={20}
                  className="absolute top-1/2 -translate-y-1/2 right-4"
                  src="/static/icons/search.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="mb-5">
              <p className="text-sm text-gray-600 font-medium mb-3">
                <span className="font-semibold text-primary">Value</span> : This
                &apos;Value&apos; shows the importance of the player in the
                match. Greater value means better performing player.
              </p>
              <p className="text-sm text-gray-600 font-medium">
                <span className="font-semibold text-primary">No. of stats</span>{" "}
                : Number of matches you want to see the data for. Column
                visibility
              </p>
            </div>

            <div className="overflow-auto">
              <table className="w-full border-collapse text-sm divide-y divide-gray-200 border border-gray-200">
                <thead>
                  <tr className="divide-x divide-gray-200">
                    <th
                      className="text-start text-black py-3 px-3 bg-gray-50 min-w-56"
                      width="500"
                    >
                      Players
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      Fntsy Points
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      Value
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      No. of Stats
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      Runs
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      100s
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      50s
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      6s
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      4s
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      Wickets
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      Bowled
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      LBW
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      Catches
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      Madien ov
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      Run Out C
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      Run Out T
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      Stumpings
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      Avg Eco
                    </th>
                    <th className="text-center text-black py-3 px-3 bg-gray-50 whitespace-nowrap">
                      Avg Sr
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.player_stats.map((player, index) => (
                    <tr key={index} className="divide-x divide-gray-200">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-blue-500 shrink-0"></div>
                          <p className="text-primary font-bold whitespace-nowrap">
                            {player.player_name}
                          </p>
                        </div>
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {player.fantasy_points}
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {/* Placeholder for Value */}-
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {player.matches_played || "-"}
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {player.runs}
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {player.century}
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {player.half_century}
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {player.sixes}
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {player.fours}
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {player.wickets}
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {/* Placeholder for Bowled */}-
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {/* Placeholder for LBW */}-
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {player.catches}
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {player.maiden_overs}
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {/* Placeholder for Run Out C */}-
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {/* Placeholder for Run Out T */}-
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {/* Placeholder for Stumpings */}-
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {/* Placeholder for Avg Eco */}-
                      </td>
                      <td className="text-center py-3 px-3 text-black font-semibold">
                        {/* Placeholder for Avg Sr */}-
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamStatsMain;
