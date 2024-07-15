import React from "react";

const SimpleTeam = ({ setNumberOfTeams, numberOfTeams }) => {
  return (
    <div className="bg-light-blue p-4 rounded-lg mb-5">
      <div className="flex-1 flex items-center relative mb-5">
        <div className="flex-1 border-b border-dashed border-primary" />
        <div className="p-2">
          <h4 className="text-primary font-black text-sm uppercase">
            3. (Number Of Teams)
          </h4>
        </div>
        <div className="flex-1 border-b border-dashed border-primary" />
      </div>
      <div className="text-center overflow-auto">
        <div className="flex max-w-lg items-center mx-auto gap-2 mb-2">
          <span className="text-primary text-sm font-bold">
            {numberOfTeams}
          </span>
          <input
            type="range"
            className="w-100 range-control w-full accent-current text-primary"
            name="profit"
            defaultValue={0}
            min={0}
            max={100}
            onChange={(e) => setNumberOfTeams(e.target.value)}
          />
          <span className="text-primary text-sm font-bold">100</span>
        </div>
        <span className="text-sm font-bold text-gray-500">
          Generate 1 Teams
        </span>
      </div>
    </div>
  );
};

export default SimpleTeam;
