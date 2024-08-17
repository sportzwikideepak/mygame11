import React from "react";

const TossTrends = ({ venueTrends }) => {
  return (
    <>
      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">Toss Trends</h4>
          <p className="text-gray-500 text-xs">As this venue</p>
        </div>

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
                          (parseInt(venueTrends.chose_to_bat_first) /
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
                      Choose to bowl first
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
                          (parseInt(venueTrends.chose_to_bowl_first) /
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
                      {
                        venueTrends
                          ?.wins_batting_first
                      }
                    </span>
                  </div>
                  <div className="bg-white rounded-full flex">
                    <div
                      className="bg-brand-red h-0.5"
                      style={{
                        width: `${
                          (parseInt(
                            venueTrends.wins_without_toss_consideration
                              ?.batting_first
                          ) /
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
                      {venueTrends?.wins_chasing}
                    </span>
                  </div>
                  <div className="bg-white rounded-full flex">
                    <div
                      className="bg-brand-red h-0.5"
                      style={{
                        width: `${
                          (parseInt(
                            venueTrends.wins_without_toss_consideration?.chasing
                          ) /
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
                      Wins batting first after winning toss
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
                          (parseInt(
                            venueTrends.wins_batting_first_after_winning_toss
                          ) /
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
                      Wins bowling first after winning toss
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
                          (parseInt(
                            venueTrends.wins_bowling_first_after_winning_toss
                          ) /
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
                  Wins after losing toss
                </h6>
                <p className="text-xs text-gray-500">
                  {venueTrends.wins_after_losing_toss} /{" "}
                  {venueTrends.total_matches} matches
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TossTrends;
