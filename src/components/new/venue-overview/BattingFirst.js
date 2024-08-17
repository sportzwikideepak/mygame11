import React from "react";

const BattingFirst = ({ venueTrends }) => {
  return (
    <>
      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">
            Batting first is preferred
          </h4>
          <p className="text-gray-500 text-xs">
            Pick more players from the team batting first
          </p>
        </div>

        <div className="bg-light-blue p-4 rounded-lg">
          {/* <h4 className="text-primary text-sm font-bold mb-4">
            Decision after winning the toss
          </h4> */}
          <div className="">
            <div className="mb-3">
              <h6 className="text-primary text-sm font-bold">
                Decision after winning the toss
              </h6>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="progress-item col-span-12">
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
              <div className="progress-item col-span-12">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-500 text-xs font-semibold block">
                    Win while chasing
                  </span>
                  <span className="text-black text-xs font-semibold block">
                    {venueTrends.wins_without_toss_consideration?.chasing}
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
        </div>
      </div>
    </>
  );
};

export default BattingFirst;
