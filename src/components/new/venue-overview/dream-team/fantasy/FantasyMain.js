import React from "react";

const FantasyMain = ({ FantasyOverview, matchId }) => {
  const match = FantasyOverview?.filter((match) => match?.match_id == matchId);

  // Function to calculate the width of the progress bar
  const calculateProgressBarWidth = (points) => {
    const maxPoints = 130; // Assuming 100 is the maximum points possible
    return `${(points / maxPoints) * 100}%`;
  };

  return (
    <>
      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <h4 className="text-primary text-sm font-bold">
            Actual fantasy points
          </h4>
          <p className="text-gray-500 text-xs">
            Actual fantasy points earned by the player in the match
          </p>
        </div>

        <div className="bg-light-blue p-4 rounded-lg flex flex-col gap-5">
          <div>
            <div className="flex flex-col gap-5">
              {match?.[0]?.fantasyPoints?.map((player, index) => {
                return (
                  <div className="progress-item" key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-500 text-xs font-semibold block">
                        {player?.player_short_name} ({player?.playing_role} -{" "}
                        {player?.team_short_name})
                      </span>
                      <span className="text-black text-xs font-semibold block">
                        {player?.points}
                      </span>
                    </div>
                    <div className="bg-white rounded-full flex w-full">
                      <div
                        className="bg-brand-red h-0.5 rounded-full"
                        style={{
                          width: calculateProgressBarWidth(player?.points),
                        }}
                      ></div>
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

export default FantasyMain;
