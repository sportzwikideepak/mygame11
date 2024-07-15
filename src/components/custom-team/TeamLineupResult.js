import Image from "next/image";
import React from "react";

const TeamLineupResult = ({
  matchId,
  teamBasis,
  platform,
  teamCount,
  wkCount,
  batCount,
  arCount,
  bowCount,
  teamType,
  teams,
}) => {
  // console.log(teams, "4thui");
  return (
    <>
      <section className="py-6">
        <div className="container max-w-[1048px] mx-auto px-3">
          <div className="bg-light-blue py-3 px-4 rounded-lg">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-center mb-4">
                <h6 className="text-primary font-black uppercase text-sm mb-2">
                  Generated {teams?.length} teams successfully
                </h6>
                <p className="text-xs text-gray-500 font-bold">
                  Lineups based on CA Predictions
                </p>
              </div>

              {/* <div className="bg-light-blue rounded-lg p-2 mb-5 max-w-2xl mx-auto">
                <div className="bg-white rounded-lg flex divide-x divide-gray-200 text-center">
                  <div className="p-4 flex-1">
                    <h6 className="text-sm font-black text-primary mb-2">WK</h6>
                    <span className="text-sm text-gray-500 font-bold">
                      {wkCount}
                    </span>
                  </div>

                  <div className="p-4 flex-1">
                    <h6 className="text-sm font-black text-primary mb-2">
                      BAT
                    </h6>
                    <span className="text-sm text-gray-500 font-bold">
                      {batCount}
                    </span>
                  </div>

                  <div className="p-4 flex-1">
                    <h6 className="text-sm font-black text-primary mb-2">AR</h6>
                    <span className="text-sm text-gray-500 font-bold">
                      {arCount}
                    </span>
                  </div>

                  <div className="p-4 flex-1">
                    <h6 className="text-sm font-black text-primary mb-2">
                      BOW
                    </h6>
                    <span className="text-sm text-gray-500 font-bold">
                      {bowCount}
                    </span>
                  </div>
                </div>
              </div> */}

              {teams?.map((team, index) => {
                return (
                  <div
                    className="bg-light-primary rounded-lg max-w-lg mx-auto relative mb-5"
                    key={index}
                  >
                    <div className="text-center py-3">
                      <div className="check absolute top-0 start-0 m-4">
                        <Image
                          height={20}
                          src="/static/icons/checkbox-circle-fill.svg"
                          width={28}
                          alt=""
                        />
                      </div>
                      <h6 className="text-sm text-primary font-bold mb-1">
                        Dream Team
                      </h6>
                      <p className="text-primary text-xs font-bold">
                        <span className="text-brand-red text-sm">
                          {team?.totalPointsUsed}
                        </span>{" "}
                        Dream team PTS
                      </p>
                    </div>
                    <div className="rounded-lg relative p-2 sm:p-6 overflow-hidden">
                      <Image
                        height={20}
                        width={20}
                        src="/static/ground-bg.svg"
                        className="absolute w-full h-full start-0 top-0 object-cover"
                        alt=""
                      />
                      <Image
                        height={20}
                        width={20}
                        src="/static/pitch-center-circle.svg"
                        className="w-7/12 opacity-50 pitch-circle absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2"
                        alt=""
                      />
                      <div className="relative">
                        <div className="text-center">
                          <h6 className="mb-4 font-bold text-white text-sm">
                            WICKET-KEEPERS
                          </h6>
                          <div className="flex gap-2 justify-center mb-12">
                            {team?.team
                              .filter(
                                (player) =>
                                  player?.player?.playing_role === "wk"
                              )
                              .map((player, idx) => (
                                <div
                                  className="player-block text-center relative"
                                  key={idx}
                                >
                                  <div className="bg-white text-brand-red w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold absolute start-0 top-0 -translate-y-1/2 -translate-x-1/2">
                                    C
                                  </div>
                                  <Image
                                    height={20}
                                    className="md:w-20 w-14"
                                    src="/static/avatar.png"
                                    width={82}
                                    alt=""
                                  />
                                  <div className="text-primary font-semibold text-xs w-full bg-white mb-1 py-0.5">
                                    <span className="text-[10px] md:text-xs">
                                      {player?.player?.short_name ||
                                        player?.player?.title}
                                    </span>
                                  </div>
                                  <p className="text-[10px] md:text-xs font-semibold text-white">
                                    {player?.player?.nationality.toUpperCase()}{" "}
                                    | {player?.player?.fantasy_player_rating}
                                  </p>
                                </div>
                              ))}
                          </div>
                          <h6 className="mb-6 font-bold text-white text-sm">
                            BATSMEN
                          </h6>
                          <div className="flex gap-2 justify-around mb-12">
                            {team?.team
                              .filter(
                                (player) =>
                                  player?.player?.playing_role === "bat"
                              )
                              .map((player, idx) => (
                                <div
                                  className="player-block text-center relative"
                                  key={idx}
                                >
                                  <Image
                                    height={20}
                                    className="md:w-20 w-14"
                                    src="/static/avatar.png"
                                    width={82}
                                    alt=""
                                  />
                                  <div className="text-white font-semibold text-xs w-full bg-primary mb-1 py-0.5">
                                    <span className="text-[10px] md:text-xs">
                                      {player?.player?.short_name ||
                                        player?.player?.title}
                                    </span>
                                  </div>
                                  <p className="text-[10px] md:text-xs font-semibold text-white">
                                    {player?.player?.nationality.toUpperCase()}{" "}
                                    | {player?.player?.fantasy_player_rating}
                                  </p>
                                </div>
                              ))}
                          </div>
                          <h6 className="mb-6 font-bold text-white text-sm">
                            ALL-ROUNDERS
                          </h6>
                          <div className="flex gap-2 justify-around mb-12">
                            {team?.team
                              .filter(
                                (player) =>
                                  player?.player?.playing_role === "all"
                              )
                              .map((player, idx) => (
                                <div
                                  className="player-block text-center relative"
                                  key={idx}
                                >
                                  <Image
                                    height={20}
                                    className="md:w-20 w-14"
                                    src="/static/avatar.png"
                                    width={82}
                                    alt=""
                                  />
                                  <div className="text-white font-semibold text-xs w-full bg-primary mb-1 py-0.5">
                                    <span className="text-[10px] md:text-xs">
                                      {player?.player?.short_name ||
                                        player?.player?.title}
                                    </span>
                                  </div>
                                  <p className="text-[10px] md:text-xs font-semibold text-white">
                                    {player?.player?.nationality.toUpperCase()}{" "}
                                    | {player?.player?.fantasy_player_rating}
                                  </p>
                                </div>
                              ))}
                          </div>
                          <h6 className="mb-3 font-bold text-white text-sm">
                            BOWLERS
                          </h6>
                          <div className="flex gap-2 justify-around mb-5">
                            {team?.team
                              .filter(
                                (player) =>
                                  player?.player?.playing_role === "bowl"
                              )
                              .map((player, idx) => (
                                <div
                                  className="player-block text-center relative"
                                  key={idx}
                                >
                                  <Image
                                    height={20}
                                    className="md:w-20 w-14"
                                    src="/static/avatar.png"
                                    width={82}
                                    alt=""
                                  />
                                  <div className="text-white font-semibold text-xs w-full bg-primary mb-1 py-0.5">
                                    <span className="text-[10px] md:text-xs">
                                      {player?.player?.short_name ||
                                        player?.player?.title}
                                    </span>
                                  </div>
                                  <p className="text-[10px] md:text-xs font-semibold text-white">
                                    {player?.player?.nationality.toUpperCase()}{" "}
                                    | {player?.player?.fantasy_player_rating}
                                  </p>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="w-full p-3 fixed bottom-0 start-0">
                <div className="flex flex-wrap justify-center gap-3 2xl:gap-5 max-w-md mx-auto">
                  <button className="text-sm font-black text-white bg-primary rounded-full py-2 px-5 hover:bg-blue-950 active:bg-primary flex-1">
                    Export Selected Teams
                  </button>
                  <button className="text-sm font-black text-white bg-primary rounded-full py-2 px-5 hover:bg-blue-950 active:bg-primary flex-1">
                    Export All Teams
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamLineupResult;
