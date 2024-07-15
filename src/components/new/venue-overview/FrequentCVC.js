import Image from "next/image";
import React from "react";

const FrequentCVC = ({ frquentCandVc }) => {
  return (
    <>
      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">
            Frequent captain and vice captain appearances on this venue
          </h4>
          <p className="text-gray-500 text-xs">According to last 5 year data</p>
        </div>

        <div className="bg-primary relative rounded-lg p-4 isolate">
          <Image
            height={20}
            width={20}
            src="/static/card-bg.png"
            className="w-full h-full start-0 top-0 absolute object-cover -z-10 pointer-events-none"
            alt=""
          />
          <div className="relative">
            <div className="flex flex-col gap-5 mb-5">
              {frquentCandVc.map((player, index) => (
                <div className="progress-item" key={player.player_id + index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white text-sm font-semibold block">
                      {player.first_name} {player.last_name} (
                      {player.team_short_name})
                    </span>
                    <span className="text-white text-sm font-semibold block">
                      {player.times_captain} C, {player.times_vice_captain} VC
                    </span>
                  </div>
                  <div className="bg-white rounded-full flex">
                    <div
                      className="bg-red-700 h-0.5"
                      style={{ width: `${player.times_captain * 10}%` }}
                    ></div>
                  </div>
                  <div className="bg-white rounded-full flex mt-1">
                    <div
                      className="bg-blue-700 h-0.5"
                      style={{ width: `${player.times_vice_captain * 10}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-white text-xs">C - Captain, VC - Vice Captain</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrequentCVC;
