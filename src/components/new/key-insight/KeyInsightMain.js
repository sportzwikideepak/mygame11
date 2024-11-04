import Image from "next/image";
import React from "react";

const KeyInsightMain = ({
  topPowerPlayBatter,
  topPowerPlayBowler,
  topPlayerXFactor,
  venueData,
  venueTrends,
  venueTopPlayers,
  battingOrder,
}) => {
  console.log(venueTrends, "4tgrbf3hioiohn4hnio4t");

  const teams = [...new Set(battingOrder.map((player) => player.team))];

  // Function to get the sorted players by team and batting order
  const getTeamPlayers = (team) => {
    return battingOrder
      .filter((player) => player.team === team)
      .sort((a, b) => a.batting_order - b.batting_order);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg">
          {/* <div className="py-3 px-4 flex items-center gap-[10px] border-b border-gray-200">
            <div className="icon">
              <Image
                height={20}
                width={20}
                src="/static/icons/winbank.svg"
                alt=""
              />
            </div>
            <h4 className="text-title-gray font-bold">WIN PROBABILITY</h4>
          </div> */}
          {/* <div className="p-4">
            <div className="bg-light-blue rounded-lg p-4">
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm font-bold text-white px-3 py-1 rounded-lg bg-yellow-400">
                  CSK
                </div>
                <div className="text-sm font-bold text-white px-3 py-1 rounded-lg bg-blue-900">
                  MI
                </div>
              </div>
              <div className="flex justify-between items-center mb-5">
                <span className="text-sm font-bold text-black">40%</span>
                <span className="text-sm font-bold text-black">
                  Win Probability
                </span>
                <span className="text-sm font-bold text-black">60%</span>
              </div>

              <div className="grid grid-cols-2">
                <div className="bg-white rounded-l-full flex justify-end">
                  <div
                    style={{ width: "40%" }}
                    className="bg-yellow-400 py-1 rounded-l-full"
                  ></div>
                </div>
                <div className="bg-white rounded-r-full flex justify-start">
                  <div
                    style={{ width: "40%" }}
                    className="bg-blue-900 py-1 rounded-r-full"
                  ></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* <div className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <div className="py-3 px-4 flex items-center gap-[10px] border-b border-gray-200">
            <div className="icon">
              <Image
                height={20}
                width={20}
                src="/static/icons/background-eraser.svg"
                alt=""
              />
            </div>
            <h4 className="text-title-gray font-bold">GROUND CONDITION</h4>
          </div>
          <div className="p-4">
            <div className="bg-light-blue p-6 2xl:p-8 rounded-lg">
              <h4 className="text-sm text-primary font-bold mb-4">
                Scoring Pattern
              </h4>
              <ul className="flex flex-col gap-2">
                <li className="bg-white text-sm font-bold px-4 py-3 flex justify-between items-center rounded-xl">
                  <h6 className="text-gray-500">Average score</h6>
                  <span className="text-black">
                    {parseInt(venueData?.avg_first_innings_score)}
                  </span>
                </li>
                <li className="bg-white text-sm font-bold px-4 py-3 flex justify-between items-center rounded-xl">
                  <h6 className="text-gray-500">Average Wickets</h6>
                  <span className="text-black">
                    {parseInt(venueData?.avg_wickets)}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* <div className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <div className="py-3 px-4 flex items-center gap-[10px] border-b border-gray-200">
            <div className="icon">
              <Image
                height={20}
                width={20}
                src="/static/icons/coin-thin.svg"
                alt=""
              />
            </div>
            <h4 className="text-title-gray font-bold">TOSS TRENDS</h4>
          </div>
          <div className="p-4">
            <div className="bg-light-blue p-4 rounded-lg">
              <h4 className="text-primary text-sm font-bold mb-4">
                Decision after winning the toss
              </h4>
              <div className="flex flex-col gap-8">
                <div className="">
                  <h6 className="text-primary text-sm font-bold mb-2">
                    Batting 1st Wins
                  </h6>
                  <div className="grid grid-cols-12 gap-8">
                    <div className="progress-item col-span-12 sm:col-span-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-500 text-xs font-semibold block">
                          Choose to bat first
                        </span>
                        <span className="text-black text-xs font-semibold block">
                          {venueTrends.chose_to_bat_first}
                        </span>
                      </div>
                      <div className="bg-white rounded-full flex">
                        <div
                          className="bg-brand-red h-0.5"
                          style={{
                            width: `${
                              (venueTrends.chose_to_bat_first /
                                venueTrends.total_matches) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item col-span-12 sm:col-span-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-500 text-xs font-semibold block">
                          Choose to chase
                        </span>
                        <span className="text-black text-xs font-semibold block">
                          {venueTrends.chose_to_bowl_first}
                        </span>
                      </div>
                      <div className="bg-white rounded-full flex">
                        <div
                          className="bg-brand-red h-0.5"
                          style={{
                            width: `${
                              (venueTrends.chose_to_bowl_first /
                                venueTrends.total_matches) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="progress-item col-span-12 sm:col-span-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-500 text-xs font-semibold block">
                          Win batting first
                        </span>
                        <span className="text-black text-xs font-semibold block">
                          {venueTrends.wins_batting_first_after_winning_toss}
                        </span>
                      </div>
                      <div className="bg-white rounded-full flex">
                        <div
                          className="bg-brand-red h-0.5"
                          style={{
                            width: `${
                              (venueTrends.wins_batting_first_after_winning_toss /
                                venueTrends.total_matches) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="progress-item col-span-12 sm:col-span-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-500 text-xs font-semibold block">
                          Win chasing
                        </span>
                        <span className="text-black text-xs font-semibold block">
                          {venueTrends.wins_bowling_first_after_winning_toss}
                        </span>
                      </div>
                      <div className="bg-white rounded-full flex">
                        <div
                          className="bg-brand-red h-0.5"
                          style={{
                            width: `${
                              (venueTrends.wins_bowling_first_after_winning_toss /
                                venueTrends.total_matches) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="mb-3">
                    <h6 className="text-primary text-sm font-bold">
                      Wins after winning toss
                    </h6>
                    <p className="text-xs text-gray-500">
                      {venueTrends.wins_after_winning_toss} /{" "}
                      {venueTrends.total_matches} matches
                    </p>
                  </div>

                  <div className="grid grid-cols-12 gap-8">
                    <div className="progress-item col-span-12 sm:col-span-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-500 text-xs font-semibold block">
                          Choose to bat first
                        </span>
                        <span className="text-black text-xs font-semibold block">
                          {venueTrends?.wins_without_toss_consideration
                            ?.batting_first || 0}
                        </span>
                      </div>
                      <div className="bg-white rounded-full flex">
                        <div
                          className="bg-brand-red h-0.5"
                          style={{
                            width: `${
                              ((venueTrends?.wins_without_toss_consideration
                                ?.batting_first || 0) /
                                (venueTrends?.total_matches || 1)) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item col-span-12 sm:col-span-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-500 text-xs font-semibold block">
                          Choose to chase
                        </span>
                        <span className="text-black text-xs font-semibold block">
                          {venueTrends?.wins_without_toss_consideration
                            ?.chasing || 0}
                        </span>
                      </div>
                      <div className="bg-white rounded-full flex">
                        <div
                          className="bg-brand-red h-0.5"
                          style={{
                            width: `${
                              ((venueTrends?.wins_without_toss_consideration
                                ?.chasing || 0) /
                                (venueTrends?.total_matches || 1)) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <div className="py-3 px-4 flex items-center gap-[10px] border-b border-gray-200">
            <h4 className="text-title-gray font-bold">PITCH TRENDS</h4>
          </div>
          <div className="p-4">
            <div className="bg-light-blue p-4 rounded-lg">
              <div className="flex flex-col gap-8">
                <div className="">
                  <h6 className="text-primary text-sm font-bold mb-2">
                    Batting vs Bowling
                  </h6>
                  <div className="grid grid-cols-12 gap-8">
                    <div className="progress-item col-span-12 sm:col-span-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-500 text-xs font-semibold block">
                          Batting Fpts
                        </span>
                        <span className="text-black text-xs font-semibold block">
                          70%
                        </span>
                      </div>
                      <div className="bg-white rounded-full flex">
                        <div
                          className="bg-brand-red h-0.5"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item col-span-12 sm:col-span-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-500 text-xs font-semibold block">
                          Bowling Fpts
                        </span>
                        <span className="text-black text-xs font-semibold block">
                          30%
                        </span>
                      </div>
                      <div className="bg-white rounded-full flex">
                        <div
                          className="bg-brand-red h-0.5"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <h6 className="text-primary text-sm font-bold mb-3">
                    Pace vs Spin
                  </h6>

                  <div className="grid grid-cols-12 gap-8">
                    <div className="progress-item col-span-12 sm:col-span-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-500 text-xs font-semibold block">
                          Pace Fpts
                        </span>
                        <span className="text-black text-xs font-semibold block">
                          70%
                        </span>
                      </div>
                      <div className="bg-white rounded-full flex">
                        <div
                          className="bg-brand-red h-0.5"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item col-span-12 sm:col-span-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-500 text-xs font-semibold block">
                          Spin Fpts
                        </span>
                        <span className="text-black text-xs font-semibold block">
                          30%
                        </span>
                      </div>
                      <div className="bg-white rounded-full flex">
                        <div
                          className="bg-brand-red h-0.5"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <div className="py-3 px-4 flex items-center gap-[10px] border-b border-gray-200">
            <div className="icon">
              <Image
                height={20}
                width={20}
                src="/static/icons/arrow-back-right.svg"
                alt=""
              />
            </div>
            <h4 className="text-title-gray font-bold">SUGGESTED PLAYERS</h4>
          </div>
          <div className="p-4 grid grid-cols-12 gap-4">
            {venueTopPlayers?.slice(0, 4)?.map((player, index) => (
              <div
                key={player.player_id}
                className="col-span-12 md:col-span-6 lg:col-span-3 bg-light-blue rounded-lg py-3 px-4 text-center"
              >
                <div className="player-thumb mb-3">
                  <Image
                    height={64}
                    width={64}
                    src={`/static/players/player1.png`}
                    className="rounded-full mx-auto"
                    alt={player.player_name}
                  />
                </div>

                <h6 className="uppercase font-bold text-black text-sm">
                  {player.player_name}
                </h6>
                <span className="text-sm text-gray-500 font-semibold">
                  {player.team_name}/{player.playing_role.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Batting order */}
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <div className="py-3 px-4 flex items-center gap-[10px] border-b border-gray-200">
            <div className="icon">
              <Image
                height={20}
                width={20}
                src="/static/icons/order-light.svg"
                alt=""
              />
            </div>
            <h4 className="text-title-gray font-bold">BATTING ORDER</h4>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-5">
              {teams.map((team, teamIndex) => (
                <div key={team} className="col-span-1">
                  <div className="flex items-center gap-3 justify-between mb-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="flag shrink-0">
                          {/* <Image
                            height={20}
                            width={20}
                            src={`/static/${team.toLowerCase()}.png`}
                            alt={team}
                          /> */}
                        </div>
                        <span className="text-black text-sm font-bold">
                          {team}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-5">
                    {getTeamPlayers(team).map((player, index) => (
                      <li
                        key={player.player_id}
                        className="bg-light-blue rounded-lg flex items-center gap-2 py-3 px-4"
                      >
                        <span className="text-sm text-black font-bold">
                          {player.batting_order}.
                        </span>
                        <div className="thumb shrink-0">
                          <Image
                            height={36}
                            width={36}
                            src={`/static/players/player1.png`}
                            alt={player.short_name}
                          />
                        </div>
                        <span className="text-sm text-black font-bold">
                          {player.short_name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top player batting */}

        <div className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <div className="py-3 px-4 flex items-center gap-[10px] border-b border-gray-200">
            <div className="icon">
              <Image
                height={20}
                width={20}
                src="/static/icons/chase.svg"
                alt=""
              />
            </div>
            <h4 className="text-title-gray font-bold">TOP PLAYER Batting</h4>
          </div>
          <div className="p-4">
            <div className="flex flex-col gap-4">
              {topPowerPlayBatter.map((player, index) => (
                <div
                  key={player.player_id}
                  className="bg-light-blue rounded-lg p-4"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="thumb">
                      <Image
                        height={40}
                        width={40}
                        src={`/static/players/player1.png`}
                        alt={player.short_name}
                      />
                    </div>
                    <div className="">
                      <h4 className="text-sm font-bold text-black mb-0.5">
                        {player.short_name}
                      </h4>
                      <p className="text-xs text-gray-500 font-bold">
                        {player.playing_role.toUpperCase()}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-8">
                    <div className="progress-item col-span-12 sm:col-span-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-500 text-xs font-semibold block">
                          Total Fantasy Points
                        </span>
                        <span className="text-black text-xs font-semibold block">
                          {parseInt(player?.total_fantasy_points)} Pts
                        </span>
                      </div>
                      <div className="bg-white rounded-full flex">
                        <div
                          className="bg-brand-red h-0.5"
                          style={{
                            width: `${
                              (player.total_fantasy_points /
                                Math.max(
                                  ...topPowerPlayBatter?.map(
                                    (p) => p?.total_fantasy_points
                                  )
                                )) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item col-span-12 sm:col-span-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-500 text-xs font-semibold block">
                          Avg Fantasy Points
                        </span>
                        <span className="text-black text-xs font-semibold block">
                          {parseInt(player?.avg_fantasy_points)} Pts
                        </span>
                      </div>
                      <div className="bg-white rounded-full flex">
                        <div
                          className="bg-brand-red h-0.5"
                          style={{
                            width: `${
                              (player.avg_fantasy_points /
                                Math.max(
                                  ...topPowerPlayBatter.map(
                                    (p) => p.avg_fantasy_points
                                  )
                                )) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top bowling order */}

        <div className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <div className="py-3 px-4 flex items-center gap-[10px] border-b border-gray-200">
            <div className="icon">
              <Image
                height={20}
                width={20}
                src="/static/icons/chase.svg"
                alt=""
              />
            </div>
            <h4 className="text-title-gray font-bold">TOP PLAYER Bowling</h4>
          </div>
          <div className="p-4">
            <div className="flex flex-col gap-4">
              {topPowerPlayBowler?.map((player, index) => (
                <div
                  key={player?.player_id}
                  className="bg-light-blue rounded-lg p-4"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="thumb">
                      <Image
                        height={40}
                        width={40}
                        src={`/static/players/player1.png`}
                        alt={player?.short_name}
                      />
                    </div>
                    <div className="">
                      <h4 className="text-sm font-bold text-black mb-0.5">
                        {player?.short_name}
                      </h4>
                      <p className="text-xs text-gray-500 font-bold">
                        {player?.playing_role?.toUpperCase()}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-8">
                    <div className="progress-item col-span-12 sm:col-span-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-500 text-xs font-semibold block">
                          Total Fantasy Points
                        </span>
                        <span className="text-black text-xs font-semibold block">
                          {parseInt(player?.total_fantasy_points)} Pts
                        </span>
                      </div>
                      <div className="bg-white rounded-full flex">
                        <div
                          className="bg-brand-red h-0.5"
                          style={{
                            width: `${
                              (player.total_fantasy_points /
                                Math.max(
                                  ...topPowerPlayBatter?.map(
                                    (p) => p?.total_fantasy_points
                                  )
                                )) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item col-span-12 sm:col-span-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-500 text-xs font-semibold block">
                          Avg Fantasy Points
                        </span>
                        <span className="text-black text-xs font-semibold block">
                          {parseInt(player?.avg_fantasy_points)} Pts
                        </span>
                      </div>
                      <div className="bg-white rounded-full flex">
                        <div
                          className="bg-brand-red h-0.5"
                          style={{
                            width: `${
                              (player?.avg_fantasy_points /
                                Math?.max(
                                  ...topPowerPlayBatter?.map(
                                    (p) => p?.avg_fantasy_points
                                  )
                                )) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <div className="py-3 px-4 flex items-center gap-[10px] border-b border-gray-200">
            <div className="icon">
              <Image
                height={20}
                width={20}
                src="/static/icons/chase.svg"
                alt=""
              />
            </div>
            <h4 className="text-title-gray font-bold">Player X factor</h4>
          </div>
          <div className="p-4">
            <div className="flex flex-col gap-4">
              {topPlayerXFactor?.map((player, index) => {
                return (
                  <div key={index} className="bg-light-blue rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="thumb">
                        <Image
                          height={20}
                          width={20}
                          src="/static/players/player1.png"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h4 className="text-sm font-bold text-black mb-0.5">
                          {player?.short_name}
                        </h4>
                        <p className="text-xs text-gray-500 font-bold">
                          IND/BAT
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-8">
                      <div className="progress-item col-span-12">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-500 text-xs font-semibold block">
                            Avg. Fpts
                          </span>
                          <span className="text-black text-xs font-semibold block">
                            96
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyInsightMain;
