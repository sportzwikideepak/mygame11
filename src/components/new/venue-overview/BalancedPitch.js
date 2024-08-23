import Image from "next/image";
import React from "react";

const BalancedPitch = ({ venueData }) => {
  return (
    <>
      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">Balanced Pitch</h4>
          <p className="text-gray-500 text-xs">
            Make even selection of batsman and bowlers
          </p>
        </div>

        <div className="bg-light-blue p-6 2xl:p-8 rounded-lg">
          <div className="pitch mb-5">
            <Image
              height={300}
              width={200}
              src="/static/pitch.png"
              className="w-full mx-auto"
              alt=""
            />
          </div>
          <ul className="flex flex-col gap-2">
            <li className="bg-white text-sm font-bold px-4 py-3 flex justify-between items-center rounded-xl">
              <h6 className="text-gray-500">Avg first innings score</h6>
              <span className="text-black">
                {parseInt(venueData.avg_first_innings_score)}
              </span>
            </li>
            <li className="bg-white text-sm font-bold px-4 py-3 flex justify-between items-center rounded-xl">
              <h6 className="text-gray-500">Avg wickets lost per innings</h6>
              <span className="text-black">
                {parseInt(venueData.avg_wickets)}
              </span>
            </li>
            {/* <li className="bg-white text-sm font-bold px-4 py-3 flex justify-between items-center rounded-xl">
              <h6 className="text-gray-500">Match IDs</h6>
              <span className="text-black">{venueData.match_ids}</span>
            </li> */}
            <li className="bg-white text-sm font-bold px-4 py-3 flex justify-between items-center rounded-xl">
              <h6 className="text-gray-500">Match Count</h6>
              <span className="text-black">{venueData.match_count}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BalancedPitch;
