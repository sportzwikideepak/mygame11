"use client";
import React, { useState } from "react";
import DreamTeamBox from "../overview/DreamTeamBox";
import PlayerStatsBox from "../overview/PlayerStatsBox";
import Image from "next/image";
import PlayerVsPlayer from "../data-analytics/PlayerVsPlayer";

const BattingOrderPowerPlayLower = ({
  currentUrl,
  playerPPMDI,
  match_info,
  powerPlayBatters,
  powerPlayBowlers,
  topDeathOver,
  top_players,
  teamBattingOrderA,
  teamBattingOrderB,
}) => {
  const [tab, setTab] = useState("tab1");

  return (
    <section className="py-6">
      <div className="container max-w-[1048px] mx-auto px-3">
        <div className="flex md:flex-col gap-4 2xl:gap-6">
          <div className="w-full">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-500 font-semibold text-center">
                  Power Plays (Batters)
                </p>
                <Image
                  height={20}
                  width={20}
                  src="/static/icons/info.svg"
                  alt=""
                />
              </div>
              <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
                <div className="flex flex-col gap-6 bg-light-blue py-3 px-4 rounded-lg">
                  {powerPlayBatters.map((player) => (
                    <div
                      key={player.player_id}
                      className="flex items-center justify-between gap-4 w-full relative"
                    >
                      <div className="progress-item flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-500 text-xs font-semibold block">
                            {player.short_name} (BAT - {player.playing_role})
                          </span>
                          <span className="text-black text-xs font-semibold block">
                            {parseInt(player.total_fantasy_points)} pts
                          </span>
                        </div>
                        <div className="bg-white rounded-full flex">
                          <div
                            className="bg-brand-red h-0.5"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-500 font-semibold text-center">
                  Power Play (Bowlers)
                </p>
                <Image
                  height={20}
                  width={20}
                  src="/static/icons/info.svg"
                  alt=""
                />
              </div>
              <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
                <div className="flex flex-col gap-6 bg-light-blue py-3 px-4 rounded-lg">
                  {powerPlayBowlers.map((player) => (
                    <div
                      key={player.player_id}
                      className="flex items-center justify-between gap-4 w-full relative"
                    >
                      <div className="progress-item flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-500 text-xs font-semibold block">
                            {player.short_name} (BOWL - {player.playing_role})
                          </span>
                          <span className="text-black text-xs font-semibold block">
                            {parseInt(player.total_fantasy_points)} pts
                          </span>
                        </div>
                        <div className="bg-white rounded-full flex">
                          <div
                            className="bg-brand-red h-0.5"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <p className="text-sm text-gray-500 font-semibold text-center">
                Top Death Over Bowlers
              </p>
              <Image
                height={20}
                width={20}
                src="/static/icons/info.svg"
                alt=""
              />
            </div>
            <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
              <div className="flex flex-col gap-6 bg-light-blue py-3 px-4 rounded-lg">
                {topDeathOver.map((player) => (
                  <div
                    key={player.player_id}
                    className="flex items-center justify-between gap-4 w-full relative"
                  >
                    <div className="progress-item flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-500 text-xs font-semibold block">
                          {player.short_name} (BOWL - {player.playing_role})
                        </span>
                        <span className="text-black text-xs font-semibold block">
                          {parseInt(player.total_fantasy_points)} pts
                        </span>
                      </div>
                      <div className="bg-white rounded-full flex">
                        <div
                          className="bg-brand-red h-0.5"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded">
              <DreamTeamBox match_info={match_info} currentUrl={currentUrl} />
              <PlayerStatsBox playerPPMDI={playerPPMDI} />
            </div>
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg">
              <div className="py-3 px-4 flex items-center gap-[10px] border-b border-gray-200">
                <div className="icon">
                  <Image
                    height={20}
                    width={20}
                    src="/static/icons/stadium-outline.svg"
                    alt=""
                  />
                </div>
                <h4 className="text-title-gray font-bold">VENUE WEATHER</h4>
                <a
                  className="ms-auto flex items-center gap-2 text-title-gray text-sm font-bold"
                  href=""
                >
                  View All
                  <Image
                    height={20}
                    width={20}
                    src="/static/icons/long-arrow-right.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-200">
                <div className="col-span-1 text-center py-8 px-8">
                  <div className="icon-sun">
                    <Image
                      height={20}
                      width={20}
                      src="/static/icons/sun.svg"
                      className="mx-auto mb-2"
                      alt=""
                    />
                  </div>
                  <h6 className="text-black font-bold text-sm">36.7*c</h6>
                  <span className="text-gray-500 text-sm">Clear sky</span>
                </div>
                <div className="flex flex-col divide-y divide-gray-200 text-center">
                  <div className="flex-1 flex flex-col justify-center items-center p-4">
                    <h6 className="text-black font-bold text-sm">40%</h6>
                    <span className="text-gray-500 text-sm">Humidity</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-center p-4">
                    <h6 className="text-black font-bold text-sm">
                      7.99% meter/sec
                    </h6>
                    <span className="text-gray-500 text-sm">Wind</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PlayerVsPlayer top_players={top_players} />
      </div>
    </section>
  );
};

export default BattingOrderPowerPlayLower;
