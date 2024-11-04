"use client";
import Image from "next/image";
import React, { useState } from "react";

const getBattingOrderData = (teamData) => {
  return teamData.response.map((player) => ({
    name: `${player.first_name} ${player.last_name}`,
    shortName: player.short_name,
    playingRole: player.playing_role,
    teamName: player.team_name,
    matches: player.matches,
  }));
};

const BattingOrderPowerPlayMain = ({
  teamBattingOrderA,
  teamBattingOrderB,
}) => {
  const [tab, setTab] = useState("tab1");

  const teamAData = getBattingOrderData(teamBattingOrderA);
  const teamBData = getBattingOrderData(teamBattingOrderB);

  const activeTeamData = tab === "tab1" ? teamAData : teamBData;

  const teamAName = teamAData[0]?.teamName || "Team A";
  const teamBName = teamBData[0]?.teamName || "Team B";

  return (
    <>
      <section className="py-6">
        <div className="container max-w-[1048px] mx-auto px-3">
          <div className="grid grid-cols-12 gap-4 2xl:gap-6">
            <div className="col-span-12">
              <div className="">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <p className="text-sm text-gray-500 font-semibold text-center">
                    Historical Batting Order
                  </p>
                  <Image
                    height={20}
                    width={20}
                    src="/static/icons/info.svg"
                    alt=""
                  />
                </div>

                <div className="bg-light-blue py-3 px-4 rounded-lg">
                  <div className="tabs-slider flex gap-3 mb-4 text-sm overflow-auto bg-light-primary justify-center rounded-full py-2 px-2">
                    <div className="tabs-item">
                      <button
                        className={`font-semibold rounded-full py-1 px-8 whitespace-nowrap w-full ${
                          tab === "tab1"
                            ? "bg-primary text-white"
                            : "text-primary bg-white"
                        }`}
                        onClick={() => setTab("tab1")}
                      >
                        {teamAName}
                      </button>
                    </div>
                    <div className="tabs-item">
                      <button
                        className={`font-semibold rounded-full py-1 px-8 whitespace-nowrap w-full ${
                          tab === "tab2"
                            ? "bg-primary text-white"
                            : "text-primary bg-white"
                        }`}
                        onClick={() => setTab("tab2")}
                      >
                        {teamBName}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 2xl:gap-8">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-700"></div>
                      <span className="text-xs font-semibold text-gray-500">
                        Was in dream team
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                      <span className="text-xs font-semibold text-gray-500">
                        Bottom 20%
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                      <span className="text-xs font-semibold text-gray-500">
                        Did not bat (DNB)
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-xs font-semibold text-gray-500">
                        Did not play (DNP)
                      </span>
                    </div>
                  </div>

                  <hr className="my-5 w-3/4 mx-auto" />

                  <div className="overflow-auto">
                    <table className="w-full border-separate border-spacing-y-2 text-sm">
                      <tbody>
                        {activeTeamData.map((player, index) => (
                          <tr className="" key={index}>
                            <td className="py-3 px-3 border-y border-x border-gray-200 bg-white rounded-l-lg">
                              <div className="flex items-center gap-2">
                                <div className="thumb">
                                  <Image
                                    height={20}
                                    width={20}
                                    src="/static/players/player1.png"
                                    alt=""
                                  />
                                </div>
                                <div className="">
                                  <h4 className="text-sm font-bold text-primary mb-0.5">
                                    {player.shortName}
                                  </h4>
                                  <p className="text-xs text-gray-500 font-medium">
                                    {player.teamName || "Unknown Team"}/
                                    {player.playingRole
                                      ? player.playingRole.toUpperCase()
                                      : "Unknown Role"}
                                  </p>
                                </div>
                              </div>
                            </td>
                            {player.matches.map((match, idx) => (
                              <td
                                key={idx}
                                className="text-center py-3 px-3 border-y border-r border-gray-200 bg-gray-50"
                              >
                                <div className="w-full flex justify-center items-center gap-1">
                                  <div className="icon shrink-0">
                                    <Image
                                      height={20}
                                      width={20}
                                      src="/static/icons/bat.svg"
                                      alt=""
                                    />
                                  </div>
                                  <span className="text-sm font-semibold text-primary">
                                    {match.batting_order}
                                  </span>
                                  <div className="w-2 h-2 rounded-full bg-green-700"></div>
                                  {/* <span className="text-xs font-semibold text-gray-500">
                                    Chase
                                  </span> */}
                                </div>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BattingOrderPowerPlayMain;
