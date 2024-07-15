import React from "react";

const FantasyPast = ({ appearanceData }) => {
  return (
    <>
      <div className="font-bold text-center mt-2">
        Fantasy team based on previous 5 matches
      </div>
      {appearanceData
        ?.map((player) => ({
          ...player,
          totalRating: player.points.reduce(
            (acc, curr) => parseInt(acc, 10) + parseInt(curr, 10),
            0
          ),
        }))
        .sort((a, b) => b.totalRating - a.totalRating)
        .map((player) => (
          <div
            key={player.playerId}
            className="mx-2 bg-white rounded-lg border border-gray-200 shadow-md my-4"
          >
            <div className="px-2">
              <div className="mb-2 text-lg font-bold text-gray-900">
                Name: {player.playerInfo?.response?.player?.title}
              </div>
              <div className="text-gray-700">Rating: {player.totalRating}</div>
              <div className="text-gray-700">
                Total captain appearance :
                {player.additionalPlayerData?.captainAppearances || 0}
              </div>
              <div className="text-gray-700">
                Total V.captain appearance :
                {player.additionalPlayerData?.viceCaptainAppearances || 0}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default FantasyPast;
