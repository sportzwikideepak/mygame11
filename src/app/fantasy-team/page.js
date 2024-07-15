import OverviewField from "@/components/match_overview/OverviewField";
import React from "react";

const LOCAL_SW_API_BASE_URL = process.env.LOCAL_SW_API_BASE_URL;

const fetchFantasyOverview = async (venue_id, team_id_A, team_id_B) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/venue/${venue_id}/team1/${team_id_A}/team2/${team_id_B}/match-details`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("#8943ythg40h034");
    return [];
  }
};

const page = async () => {
  // console.log(params, "94giho9hgpv0io");
  const FantasyOverview = await fetchFantasyOverview(23, 658, 629);
  // console.log(FantasyOverview, "guigi80hge9og8hu");
  const data = FantasyOverview[0]?.dreamTeam;

  const groupedPlayers = data?.reduce((acc, player) => {
    if (!acc[player?.playing_role]) {
      acc[player?.playing_role] = [];
    }
    acc[player?.playing_role].push(player);
    return acc;
  }, {});

  const captain = data?.find((player) => player?.role === "Captain");
  const viceCaptain = data?.find((player) => player?.role === "Vice Captain");

  return (
    <>
      <div className="container mx-auto p-4 space-y-6">
        {captain && (
          <div className="p-6 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800">Captain</h2>
            <p className="text-lg text-gray-700">
              {captain.player_short_name} - {captain.team_short_name}
            </p>
          </div>
        )}
        {viceCaptain && (
          <div className="p-6 bg-gradient-to-r from-yellow-300 to-yellow-100 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800">Vice Captain</h2>
            <p className="text-lg text-gray-700">
              {viceCaptain.player_short_name} - {viceCaptain.team_short_name}
            </p>
          </div>
        )}
        {Object?.entries(groupedPlayers)?.map(([role, players]) => (
          <div key={role} className="mb-6">
            <h3 className="text-3xl font-semibold mb-4 capitalize text-gray-900">
              {role} Players
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {players.map((player) => (
                <div
                  key={player.player_id}
                  className="p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                >
                  <h4 className="text-xl font-bold text-gray-800">
                    {player.player_short_name}
                  </h4>
                  <p className="text-gray-700">
                    Team: {player.team_short_name}
                  </p>
                  {/* <p className="text-gray-700">
                    Rating: {player.player_rating}
                  </p>
                  <p className="text-gray-700">Points: {player.points}</p> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
